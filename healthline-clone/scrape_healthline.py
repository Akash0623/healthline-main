#!/usr/bin/env python3
import requests
from bs4 import BeautifulSoup
import os
import urllib.parse
from pathlib import Path
import time
import re

class HealthlineScraper:
    def __init__(self, base_url="https://www.healthline.com"):
        self.base_url = base_url
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        })
        self.downloaded_assets = set()
        
    def create_directory(self, path):
        """Create directory if it doesn't exist"""
        Path(path).mkdir(parents=True, exist_ok=True)
        
    def download_file(self, url, local_path):
        """Download a file from URL to local path"""
        if url in self.downloaded_assets:
            return True
            
        try:
            response = self.session.get(url, timeout=30)
            response.raise_for_status()
            
            # Create directory if needed
            os.makedirs(os.path.dirname(local_path), exist_ok=True)
            
            with open(local_path, 'wb') as f:
                f.write(response.content)
            
            self.downloaded_assets.add(url)
            print(f"Downloaded: {url} -> {local_path}")
            return True
            
        except Exception as e:
            print(f"Failed to download {url}: {e}")
            return False
    
    def get_absolute_url(self, url, base_url):
        """Convert relative URL to absolute URL"""
        return urllib.parse.urljoin(base_url, url)
    
    def sanitize_filename(self, filename):
        """Sanitize filename for Windows/Unix compatibility"""
        return re.sub(r'[<>:"/\\|?*]', '_', filename)
    
    def download_css_assets(self, css_content, css_dir):
        """Download assets referenced in CSS files"""
        # Find URLs in CSS
        url_pattern = r'url\(["\']?([^"\'()]+)["\']?\)'
        urls = re.findall(url_pattern, css_content)
        
        for url in urls:
            if url.startswith('data:'):
                continue
                
            abs_url = self.get_absolute_url(url, self.base_url)
            
            # Create local path
            filename = os.path.basename(urllib.parse.urlparse(url).path)
            if not filename:
                filename = 'asset'
            
            local_path = os.path.join(css_dir, 'assets', self.sanitize_filename(filename))
            
            if self.download_file(abs_url, local_path):
                # Update CSS content with local path
                css_content = css_content.replace(url, f'assets/{filename}')
        
        return css_content
    
    def scrape_main_page(self):
        """Scrape the main Healthline page"""
        try:
            response = self.session.get(self.base_url)
            response.raise_for_status()
            
            soup = BeautifulSoup(response.content, 'html.parser')
            
            # Create directories
            self.create_directory('assets/css')
            self.create_directory('assets/js')
            self.create_directory('assets/images')
            self.create_directory('assets/fonts')
            
            # Download CSS files
            css_links = soup.find_all('link', rel='stylesheet')
            for link in css_links:
                href = link.get('href')
                if href:
                    css_url = self.get_absolute_url(href, self.base_url)
                    filename = os.path.basename(urllib.parse.urlparse(href).path)
                    if not filename or not filename.endswith('.css'):
                        filename = f'style_{len(os.listdir("assets/css"))}.css'
                    
                    local_css_path = f'assets/css/{self.sanitize_filename(filename)}'
                    
                    if self.download_file(css_url, local_css_path):
                        # Update link in HTML
                        link['href'] = local_css_path
                        
                        # Download assets referenced in CSS
                        try:
                            with open(local_css_path, 'r', encoding='utf-8') as f:
                                css_content = f.read()
                            
                            updated_css = self.download_css_assets(css_content, 'assets/css')
                            
                            with open(local_css_path, 'w', encoding='utf-8') as f:
                                f.write(updated_css)
                        except Exception as e:
                            print(f"Error processing CSS {local_css_path}: {e}")
            
            # Download JavaScript files
            script_tags = soup.find_all('script', src=True)
            for script in script_tags:
                src = script.get('src')
                if src:
                    js_url = self.get_absolute_url(src, self.base_url)
                    filename = os.path.basename(urllib.parse.urlparse(src).path)
                    if not filename or not filename.endswith('.js'):
                        filename = f'script_{len(os.listdir("assets/js"))}.js'
                    
                    local_js_path = f'assets/js/{self.sanitize_filename(filename)}'
                    
                    if self.download_file(js_url, local_js_path):
                        script['src'] = local_js_path
            
            # Download images
            img_tags = soup.find_all('img', src=True)
            for img in img_tags:
                src = img.get('src')
                if src and not src.startswith('data:'):
                    img_url = self.get_absolute_url(src, self.base_url)
                    filename = os.path.basename(urllib.parse.urlparse(src).path)
                    if not filename:
                        filename = f'image_{len(os.listdir("assets/images"))}.jpg'
                    
                    local_img_path = f'assets/images/{self.sanitize_filename(filename)}'
                    
                    if self.download_file(img_url, local_img_path):
                        img['src'] = local_img_path
                        
                # Handle srcset for responsive images
                srcset = img.get('srcset')
                if srcset:
                    new_srcset = []
                    for src_item in srcset.split(','):
                        src_parts = src_item.strip().split(' ')
                        if len(src_parts) >= 1:
                            src_url = src_parts[0]
                            if not src_url.startswith('data:'):
                                img_url = self.get_absolute_url(src_url, self.base_url)
                                filename = os.path.basename(urllib.parse.urlparse(src_url).path)
                                if not filename:
                                    filename = f'image_{len(os.listdir("assets/images"))}.jpg'
                                
                                local_img_path = f'assets/images/{self.sanitize_filename(filename)}'
                                
                                if self.download_file(img_url, local_img_path):
                                    src_parts[0] = local_img_path
                        
                        new_srcset.append(' '.join(src_parts))
                    
                    img['srcset'] = ', '.join(new_srcset)
            
            # Download background images from style attributes
            elements_with_style = soup.find_all(style=True)
            for element in elements_with_style:
                style = element.get('style')
                if 'background-image' in style or 'background:' in style:
                    # Extract URLs from style
                    url_matches = re.findall(r'url\(["\']?([^"\'()]+)["\']?\)', style)
                    for url in url_matches:
                        if not url.startswith('data:'):
                            img_url = self.get_absolute_url(url, self.base_url)
                            filename = os.path.basename(urllib.parse.urlparse(url).path)
                            if not filename:
                                filename = f'bg_image_{len(os.listdir("assets/images"))}.jpg'
                            
                            local_img_path = f'assets/images/{self.sanitize_filename(filename)}'
                            
                            if self.download_file(img_url, local_img_path):
                                element['style'] = style.replace(url, local_img_path)
            
            # Save the modified HTML
            with open('index.html', 'w', encoding='utf-8') as f:
                f.write(str(soup))
            
            print("Successfully cloned Healthline website!")
            print("Main page saved as index.html")
            print("Assets downloaded to assets/ directory")
            
        except Exception as e:
            print(f"Error scraping main page: {e}")

if __name__ == "__main__":
    scraper = HealthlineScraper()
    scraper.scrape_main_page() 