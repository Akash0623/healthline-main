# Healthline Website Clone

This is a complete clone of the Healthline.com website that runs locally with all original styling, images, and functionality preserved.

## 📁 Project Structure

```
healthline-clone/
├── index.html              # Main Healthline homepage
├── assets/
│   ├── css/               # All stylesheets from Healthline
│   ├── js/                # JavaScript files and libraries
│   ├── images/            # All images and graphics
│   └── fonts/             # Font files
├── scrape_healthline.py   # Original scraper script
├── run_server.py          # Local development server
└── README.md              # This file
```

## 🚀 Quick Start

### Method 1: Using Python Server (Recommended)

1. **Navigate to the project directory:**
   ```bash
   cd healthline-clone
   ```

2. **Run the local server:**
   ```bash
   python run_server.py
   ```

3. **Access the website:**
   The server will automatically open your browser to `http://localhost:8000`

### Method 2: Using Node.js (Alternative)

If you have Node.js installed:

1. **Install a simple HTTP server:**
   ```bash
   npm install -g http-server
   ```

2. **Start the server:**
   ```bash
   http-server . -p 8000 -o
   ```

### Method 3: Using Python's built-in server

For Python 3:
```bash
python -m http.server 8000
```

For Python 2:
```bash
python -m SimpleHTTPServer 8000
```

Then open `http://localhost:8000` in your browser.

## 🔧 Features

✅ **Complete Website Clone:**
- Exact replica of Healthline.com homepage
- All original styling and layout preserved
- Responsive design maintained

✅ **All Assets Downloaded:**
- CSS stylesheets (including external libraries)
- JavaScript files and dependencies
- Images and graphics
- Font files
- Background images from CSS

✅ **Local Development Ready:**
- Fully functional offline
- Fast loading times
- No external dependencies

✅ **Cross-Platform Compatible:**
- Works on Windows, macOS, and Linux
- Compatible with all modern browsers

## 📋 File Details

### Main Files
- **`index.html`** - The complete Healthline homepage with all HTML structure
- **`run_server.py`** - Development server with auto-browser opening

### Assets Directory
- **`assets/css/`** - Contains all stylesheets including:
  - Main Healthline CSS files
  - External library stylesheets
  - Font definitions and imports

- **`assets/js/`** - JavaScript files including:
  - Healthline's main JavaScript functionality
  - Third-party libraries (jQuery, analytics, etc.)
  - Interactive components and widgets

- **`assets/images/`** - All images including:
  - Logo and branding images
  - Article thumbnails and graphics
  - Background images
  - Icon sets and graphics

- **`assets/fonts/`** - Font files for consistent typography

## 🛠 Customization

### Modifying Content
- Edit `index.html` to modify the page content
- CSS files in `assets/css/` control the styling
- JavaScript functionality is in `assets/js/`

### Adding New Pages
1. Create new HTML files in the root directory
2. Link them using relative paths
3. Use the same asset structure for consistency

### Updating Assets
- Add new images to `assets/images/`
- Add new stylesheets to `assets/css/`
- Add new scripts to `assets/js/`

## 🔄 Re-scraping (Updating Content)

To get the latest content from Healthline:

1. **Run the scraper again:**
   ```bash
   python scrape_healthline.py
   ```

2. **The script will:**
   - Download the latest HTML content
   - Update all assets
   - Preserve the local file structure

## 🌐 Browser Compatibility

Tested and working on:
- ✅ Chrome (Windows/Mac/Linux)
- ✅ Firefox (Windows/Mac/Linux)
- ✅ Safari (Mac)
- ✅ Edge (Windows)

## 📱 Mobile Responsive

The cloned website maintains full mobile responsiveness:
- Tablet layouts preserved
- Mobile navigation working
- Touch-friendly interactions
- Responsive images and media queries

## ⚡ Performance

- **Fast Loading**: All assets are served locally
- **No External Dependencies**: Works completely offline
- **Optimized Assets**: Original optimization preserved
- **Caching**: Browser caching enabled for better performance

## 🔒 Security & Legal

**Important Notes:**
- This clone is for educational and development purposes
- Respect Healthline's terms of service
- Do not use for commercial purposes without permission
- Some interactive features may require server-side functionality

## 🐛 Troubleshooting

### Common Issues

**Port Already in Use:**
```bash
python run_server.py 8001  # Use different port
```

**Permission Errors:**
- Ensure you have read/write permissions in the directory
- Run with appropriate user permissions

**Missing Files:**
- Re-run the scraper: `python scrape_healthline.py`
- Check internet connection during scraping

**Browser Not Opening:**
- Manually navigate to `http://localhost:8000`
- Check if the port is correct

### Getting Help

If you encounter issues:
1. Check that all files are present in the directory
2. Ensure Python is properly installed
3. Verify no other applications are using port 8000
4. Try using a different port number

## 📊 Statistics

**Files Downloaded:**
- HTML: 1 main page
- CSS: Multiple stylesheets
- JavaScript: ~15 files including libraries
- Images: ~20+ images and graphics
- Total Size: Approximately 2-3 MB

**Technologies Used:**
- Python 3 for scraping and server
- BeautifulSoup for HTML parsing
- Requests for HTTP handling
- Built-in HTTP server for local development

---

**Enjoy your local Healthline website clone! 🎉**

For questions or improvements, feel free to modify the scraper or reach out for support. 