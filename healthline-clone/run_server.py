#!/usr/bin/env python3
"""
Simple HTTP server to run the cloned Healthline website locally
"""
import http.server
import socketserver
import webbrowser
import os
import sys
from pathlib import Path

def run_server(port=8000):
    """Run a simple HTTP server"""
    
    # Change to the directory containing index.html
    web_dir = Path(__file__).parent
    os.chdir(web_dir)
    
    # Create handler
    Handler = http.server.SimpleHTTPRequestHandler
    
    try:
        with socketserver.TCPServer(("", port), Handler) as httpd:
            print(f"🚀 Healthline clone server started!")
            print(f"📍 Server running at: http://localhost:{port}")
            print(f"📁 Serving files from: {web_dir.absolute()}")
            print("📋 Files available:")
            print("   - index.html (Main Healthline page)")
            print("   - assets/css/ (Stylesheets)")
            print("   - assets/js/ (JavaScript files)")
            print("   - assets/images/ (Images and graphics)")
            print("   - assets/fonts/ (Font files)")
            print("\n🌐 Opening browser...")
            
            # Open browser automatically
            webbrowser.open(f'http://localhost:{port}')
            
            print("\n⚡ Press Ctrl+C to stop the server")
            httpd.serve_forever()
            
    except KeyboardInterrupt:
        print("\n🛑 Server stopped by user")
        sys.exit(0)
    except OSError as e:
        if "Address already in use" in str(e):
            print(f"❌ Port {port} is already in use. Trying port {port + 1}...")
            run_server(port + 1)
        else:
            print(f"❌ Error starting server: {e}")
            sys.exit(1)

if __name__ == "__main__":
    # Check if index.html exists
    if not Path("index.html").exists():
        print("❌ index.html not found!")
        print("Make sure you're running this script from the healthline-clone directory.")
        sys.exit(1)
    
    # Get port from command line or use default
    port = 8000
    if len(sys.argv) > 1:
        try:
            port = int(sys.argv[1])
        except ValueError:
            print("❌ Invalid port number. Using default port 8000.")
    
    run_server(port) 