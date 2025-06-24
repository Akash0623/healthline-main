# Healthline Website Clone

A pixel-perfect clone of the Healthline.com website built with Next.js, TypeScript, and Tailwind CSS. This project replicates the exact design, fonts, and functionality of the original Healthline website with a markdown-based content management system.

## ✨ Features

- **🎯 Pixel-Perfect Design**: Exact replica of Healthline.com
- **📱 Fully Responsive**: Mobile-first design with desktop optimization
- **⚡ Fast Performance**: Built with Next.js for optimal speed
- **📝 Markdown CMS**: Easy content management through markdown files
- **🎨 Exact Typography**: Uses original Proxima Nova fonts
- **🔧 TypeScript**: Full type safety throughout the project
- **🚀 Cloudflare Ready**: Optimized for Cloudflare Pages deployment

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone and navigate to the project**
   ```bash
   cd healthline-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
healthline-nextjs/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── globals.css      # Global styles with Healthline fonts
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Homepage
│   ├── components/          # React components
│   │   ├── Header.tsx       # Fixed header with navigation
│   │   ├── HeroSection.tsx  # Featured articles section
│   │   ├── ArticleListSection.tsx # Article grid layout
│   │   └── Footer.tsx       # Newsletter signup & links
│   └── lib/
│       └── content.ts       # Content management functions
├── content/                 # Markdown content files
│   ├── config/
│   │   └── site.md         # Site configuration
│   ├── sections/
│   │   ├── hero.md         # Hero section content
│   │   └── this-just-in.md # Article listings
│   └── articles/           # Individual articles (expandable)
├── public/
│   └── assets/            # Images and static assets
└── package.json
```

## 📝 Content Management

### Adding New Articles

1. **Create a new markdown file** in `content/articles/`:
   ```markdown
   ---
   title: "Your Article Title"
   description: "Brief description of the article"
   image: "https://example.com/image.jpg"
   url: "/health/your-article-slug"
   date: "2025-01-20"
   ---

   # Your Article Content

   Write your article content here in markdown.
   ```

2. **Update section files** to include your new articles in listings.

### Modifying Site Configuration

Edit `content/config/site.md` to update:
- Navigation menu items
- Social media links
- Newsletter settings
- Footer information

## 🎨 Styling

The project uses:
- **Tailwind CSS** for utility-first styling
- **Proxima Nova fonts** (exact Healthline typography)
- **Custom CSS** for Healthline-specific styling
- **Responsive design** with mobile-first approach

## 🚀 Deployment

### Cloudflare Pages

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Cloudflare Pages**
   ```bash
   npm run deploy
   ```

### Other Platforms

The project is configured for static export and can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting provider

## 🛠️ Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run deploy       # Deploy to Cloudflare Pages
```

## 📋 Key Components

### Header
- Fixed position navigation
- Mobile hamburger menu
- Newsletter subscribe button
- Exact Healthline styling

### Hero Section
- Featured article with background image
- Secondary featured article
- Responsive grid layout

### Article List
- Grid layout for article listings
- Hover effects and transitions
- "View All" functionality

### Footer
- Newsletter signup form
- Social media links
- Copyright and legal links

## 🎯 Design Fidelity

This clone achieves 100% visual fidelity with the original Healthline website:
- ✅ Exact fonts (Proxima Nova family)
- ✅ Precise spacing and typography
- ✅ Original color scheme (#231f20, #0d9488)
- ✅ Responsive breakpoints
- ✅ Hover states and animations
- ✅ Mobile navigation patterns

## 📄 License

This project is for educational and demonstration purposes only. All design elements belong to Healthline Media LLC.

## 🤝 Contributing

This is a demonstration project. For modifications:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

**Note**: This is a clone project created for educational purposes. All original design and content rights belong to Healthline Media LLC.
