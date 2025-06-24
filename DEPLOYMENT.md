# Deployment Guide - Cloudflare Pages

This guide will help you deploy your Healthline Next.js clone to Cloudflare Pages.

## 🚀 Quick Deployment

### Step 1: Push to GitHub

1. **Initialize Git repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Healthline Next.js clone"
   ```

2. **Create GitHub repository and push:**
   ```bash
   git remote add origin https://github.com/yourusername/healthline-nextjs.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy to Cloudflare Pages

1. **Login to Cloudflare Dashboard:**
   - Go to [dash.cloudflare.com](https://dash.cloudflare.com)
   - Navigate to "Pages" in the sidebar

2. **Create New Project:**
   - Click "Create a project"
   - Select "Connect to Git"
   - Choose your GitHub repository

3. **Configure Build Settings:**
   ```
   Framework preset: Next.js (Static HTML Export)
   Build command: npm run build
   Build output directory: out
   Root directory: /
   ```

4. **Environment Variables:**
   - No environment variables required for basic functionality

5. **Deploy:**
   - Click "Save and Deploy"
   - Wait for the build to complete (~2-3 minutes)

## 📋 Build Configuration

The project is already configured for static export with these settings:

### `next.config.js`
```javascript
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}
```

### `package.json` Scripts
```json
{
  "scripts": {
    "build": "next build",
    "export": "next build && next export"
  }
}
```

## 🔧 Custom Domain (Optional)

1. **Add Custom Domain:**
   - In Cloudflare Pages dashboard
   - Go to your project > "Custom domains"
   - Click "Set up a custom domain"

2. **Configure DNS:**
   - Add CNAME record pointing to your `<project>.pages.dev` domain
   - Wait for DNS propagation (up to 24 hours)

## 📝 Content Updates

### Method 1: Direct Git Push
```bash
# Edit content files
# Commit and push changes
git add .
git commit -m "Update content"
git push
```

### Method 2: GitHub Web Interface
1. Navigate to your repository on GitHub
2. Edit files directly in the browser
3. Commit changes
4. Cloudflare Pages will automatically rebuild

## 🚨 Troubleshooting

### Build Fails

**Issue:** Build command fails
```
Error: Cannot find module 'next'
```

**Solution:** Ensure dependencies are properly defined in `package.json`

### Images Not Loading

**Issue:** Images return 404 errors

**Solutions:**
1. Verify images are in `public/assets/images/`
2. Check image paths start with `/assets/`
3. Ensure image files are committed to repository

### TypeScript Errors

**Issue:** Build fails with TypeScript errors

**Solutions:**
1. Run `npm run lint` locally first
2. Fix any TypeScript errors before pushing
3. Consider adding `// @ts-ignore` for third-party issues

### Content Not Updating

**Issue:** Changes to markdown files don't appear

**Solutions:**
1. Clear Cloudflare Pages build cache
2. Trigger manual rebuild
3. Check markdown frontmatter syntax

## 📊 Performance Optimization

### Automatic Optimizations
- Static file generation
- CDN distribution via Cloudflare
- Image compression
- CSS minification
- JavaScript bundling

### Manual Optimizations
1. **Optimize Images:**
   - Use WebP format when possible
   - Compress images before uploading
   - Use appropriate dimensions

2. **Content Delivery:**
   - Enable Cloudflare caching rules
   - Configure browser cache headers
   - Use Cloudflare Image Resizing

## 🔄 Continuous Deployment

### Automatic Deployment
- Every push to `main` branch triggers automatic deployment
- Build status visible in Cloudflare Pages dashboard
- Failed builds send email notifications

### Branch Deployments
- Preview deployments for pull requests
- Test changes before merging to main
- Each branch gets its own preview URL

## 📈 Analytics & Monitoring

### Cloudflare Analytics
- Page views and unique visitors
- Geographic distribution
- Performance metrics
- Real user monitoring (RUM)

### Custom Analytics
Add analytics code to `src/app/layout.tsx`:

```tsx
// Google Analytics example
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"
  strategy="afterInteractive"
/>
```

## 🛡️ Security

### HTTPS
- Automatic HTTPS with Cloudflare SSL
- HTTP to HTTPS redirects
- SSL certificate auto-renewal

### Security Headers
Configure in Cloudflare dashboard:
- HSTS headers
- Content Security Policy
- X-Frame-Options

## 💰 Cost Considerations

### Cloudflare Pages Pricing
- **Free tier:** 1 build every 1 minute, 500 builds/month
- **Paid tier:** Unlimited builds, faster build times
- **Bandwidth:** Free for Pages projects

### Optimization Tips
- Use build caching effectively
- Minimize unnecessary rebuilds
- Optimize asset sizes

---

## ✅ Post-Deployment Checklist

- [ ] Site loads correctly at custom domain
- [ ] All images display properly
- [ ] Navigation menu works
- [ ] Mobile responsiveness verified
- [ ] Content management tested
- [ ] Analytics configured (if needed)
- [ ] SEO meta tags verified
- [ ] Performance tested

## 🆘 Support

If you encounter issues:

1. **Check Cloudflare Pages documentation:** [developers.cloudflare.com/pages](https://developers.cloudflare.com/pages)
2. **Review build logs** in Cloudflare dashboard
3. **Test locally** with `npm run build` before deploying
4. **Community support** on Cloudflare Discord/Forums

---

Your Healthline clone is now live and ready for content management! 🎉 