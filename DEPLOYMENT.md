# Deployment Guide

## GitHub Pages Deployment

Since your repository is `babeyjack.github.io`, it will be automatically deployed to `https://babeyjack.github.io` when you push updates.

### Option 1: Manual Deployment (Recommended for now)

1. **Build the project locally:**
   ```bash
   npm run build
   ```

2. **The `dist/` folder now contains your production-ready website.**

3. **Commit and push to GitHub:**
   ```bash
   git add .
   git commit -m "Rebuild portfolio with Vite"
   git push origin main
   ```

### Option 2: GitHub Actions (Automatic Deployment)

Set up automatic deployment when you push changes:

1. **Create `.github/workflows/build-deploy.yml`:**
   ```yaml
   name: Build and Deploy

   on:
     push:
       branches: [main]

   jobs:
     build-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         
         - name: Set up Node.js
           uses: actions/setup-node@v3
           with:
             node-version: '18'
         
         - name: Install dependencies
           run: npm install
         
         - name: Build
           run: npm run build
         
         - name: Deploy to GitHub Pages
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

2. **Push this file to your repository**
3. **Now every push to main will automatically build and deploy!**

## Verifying Your Deployment

After pushing, your site should be live at: `https://babeyjack.github.io`

If using GitHub Actions, you can check the deployment status in the "Actions" tab of your repository.

## Updating Your Portfolio

### To update content:
1. Edit `public/json/profile.json` or `public/json/projects.json`
2. Run `npm run build`
3. Push to GitHub

### To update styling:
1. Edit `src/style.css`
2. Run `npm run build`
3. Push to GitHub

### To add new pages:
1. Create new component in `src/pages/`
2. Update navigation in `src/app.js`
3. Create corresponding renderer function
4. Run `npm run build`
5. Push to GitHub

## Troubleshooting

**Q: Site shows old version**
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

**Q: Styles not loading**
- Ensure all CSS imports are in `src/main.js`
- Check that `dist/` folder is committed and pushed

**Q: GitHub Actions failing**
- Check the Actions tab for error logs
- Ensure `node-version` is compatible with your code

## Custom Domain

To use a custom domain (e.g., `yourname.dev`):

1. Update your domain's DNS to point to GitHub Pages
2. Add a `CNAME` file in the `public/` directory with your domain
3. Configure in GitHub repository settings (Settings → Pages)

---

Your portfolio is ready to shine! 🌟
