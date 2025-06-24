# Healthline Next.js Clone

A complete Next.js clone of the Healthline.com website with markdown-based content management system, optimized for Cloudflare Pages deployment.

## 🚀 Features

- **Exact Visual Clone**: Pixel-perfect replica of Healthline.com design
- **Markdown Content Management**: Easy content editing with markdown files
- **Admin-Friendly**: Add/edit content by simply adding markdown files
- **Cloudflare Pages Ready**: Optimized for static deployment
- **Responsive Design**: Mobile-first responsive layout
- **TypeScript**: Full TypeScript support for better development
- **Tailwind CSS**: Utility-first CSS framework

## 📁 Project Structure

```
healthline-nextjs/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Homepage
│   │   └── layout.tsx            # Root layout
│   ├── components/
│   │   ├── Header.tsx            # Site header
│   │   ├── HeroSection.tsx       # Hero section component
│   │   ├── ArticleListSection.tsx # Article list component
│   │   └── Footer.tsx            # Site footer
│   └── lib/
│       └── content.ts            # Content management functions
├── content/
│   ├── config/
│   │   └── site.md               # Site configuration
│   ├── sections/
│   │   ├── hero.md               # Hero section content
│   │   └── this-just-in.md       # Article list content
│   └── articles/                 # Individual articles (optional)
├── public/
│   └── assets/                   # Images, CSS, JS from original site
└── README.md
```

## 🛠 Setup & Installation

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Local Development

1. **Clone and install dependencies:**
   ```bash
   git clone <repo-url>
   cd healthline-nextjs
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000`

### Production Build

```bash
npm run build
```

## 📝 Content Management

### Adding/Editing Site Configuration

Edit `content/config/site.md` to update:
- Site title and description
- Navigation menu items
- Social links
- Footer content
- Newsletter settings

### Adding New Sections to Homepage

1. Create a new markdown file in `content/sections/`
2. Use this frontmatter structure:

```markdown
---
title: "Section Title"
type: "article-list" | "hero-main" | "custom"
order: 1
articles:
  - title: "Article Title"
    description: "Article description"
    image: "/assets/images/image.png"
    url: "/article-url"
    order: 1
---

# Section Content

This content will be processed as markdown.
```

### Adding New Articles

1. Create a new markdown file in `content/articles/`
2. Use this frontmatter structure:

```markdown
---
title: "Article Title"
description: "Article description"
image: "/assets/images/featured-image.jpg"
author: "Author Name"
publishedAt: "2025-01-01"
category: "Health News"
tags: ["health", "wellness"]
---

# Article Content

Your article content in markdown format.
```

### Managing Images

1. Add images to `public/assets/images/`
2. Reference them in markdown as `/assets/images/filename.jpg`
3. Images are automatically optimized for production

## 🌐 Deployment

### Cloudflare Pages

1. **Connect Repository:**
   - Go to Cloudflare Pages dashboard
   - Connect your GitHub repository

2. **Build Settings:**
   - Build command: `npm run build`
   - Build output directory: `out`
   - Node.js version: `18.x`

3. **Environment Variables:**
   None required for basic functionality

### Other Platforms

The site is exported as static files and can be deployed to:
- Vercel
- Netlify  
- GitHub Pages
- Any static hosting service

## 📋 Content Guidelines

### Section Types

- **`hero-main`**: Large featured section with background image
- **`article-list`**: Grid of articles with thumbnails
- **`custom`**: Custom sections (requires component development)

### Image Requirements

- **Hero images**: 1464×1346px (2:1 ratio recommended)
- **Article thumbnails**: 732×549px (4:3 ratio)
- **File formats**: JPG, PNG, WebP
- **Optimization**: Images are automatically optimized

### Content Best Practices

1. **Keep titles concise** (under 60 characters)
2. **Write compelling descriptions** (under 160 characters)
3. **Use high-quality images** with proper alt text
4. **Maintain consistent ordering** with the `order` field
5. **Test content** in development before deploying

## 🔧 Development

### Adding New Components

1. Create component in `src/components/`
2. Add to the section mapping in `src/app/page.tsx`
3. Update content management types in `src/lib/content.ts`

### Customizing Styles

- Edit Tailwind classes in components
- Add custom CSS in `src/app/globals.css`
- Update Tailwind config in `tailwind.config.js`

### Content Management Functions

Available functions in `src/lib/content.ts`:
- `getSiteConfig()`: Get site configuration
- `getAllSections()`: Get all homepage sections
- `getContentByType(type)`: Get content filtered by type
- `getArticles()`: Get all articles
- `getArticleBySlug(slug)`: Get specific article

## 🚨 Troubleshooting

### Build Issues

1. **TypeScript errors**: Run `npm run lint` to check for issues
2. **Missing images**: Ensure all referenced images exist in `public/assets/`
3. **Content errors**: Validate YAML frontmatter syntax

### Deployment Issues

1. **Build fails on Cloudflare**: Check Node.js version (use 18.x)
2. **Images not loading**: Verify image paths start with `/assets/`
3. **Content not updating**: Clear build cache and redeploy

## 📄 License

This project is created for educational purposes. The original Healthline design belongs to Healthline Media LLC.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

## Admin Quick Start

To add new content:

1. **New article section**: Add to `content/sections/`
2. **Update navigation**: Edit `content/config/site.md`
3. **Add images**: Upload to `public/assets/images/`
4. **Deploy**: Push to your connected repository

The site will automatically rebuild and deploy your changes! 