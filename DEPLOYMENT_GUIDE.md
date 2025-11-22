# GitHub Pages Deployment Guide

This guide explains how to deploy the Thalyta Portfolio website to GitHub Pages.

## Prerequisites

- Git repository set up and connected to GitHub
- Node.js and npm installed
- All changes committed to git

## Deployment Steps

### 1. Build and Deploy

Run the deployment command:

```bash
npm run deploy
```

This command will:
1. Build the production version of the site (`npm run build`)
2. Deploy the `dist` folder to the `gh-pages` branch
3. Push to GitHub

### 2. Enable GitHub Pages

After the first deployment:

1. Go to your GitHub repository: https://github.com/GuyAfik/Thalyta-Portfolio
2. Click on **Settings**
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Click **Save**

### 3. Access Your Site

After a few minutes, your site will be live at:

**https://guyafik.github.io/Thalyta-Portfolio/**

## Updating the Site

Whenever you make changes to the portfolio:

1. Make your changes to the code
2. Test locally with `npm run dev`
3. Commit your changes:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```
4. Deploy the updates:
   ```bash
   npm run deploy
   ```

The site will automatically update within a few minutes.

## Configuration Files

### package.json
- `homepage`: Set to your GitHub Pages URL
- `predeploy`: Builds the site before deployment
- `deploy`: Deploys to gh-pages branch

### vite.config.js
- `base`: Set to `/Thalyta-Portfolio/` to match the repository name

## Troubleshooting

### Site shows 404 error
- Make sure GitHub Pages is enabled in repository settings
- Verify the `gh-pages` branch exists
- Check that the base path in `vite.config.js` matches your repository name

### Assets not loading
- Ensure `base` in `vite.config.js` is set correctly
- All asset paths should be relative (starting with `/`)

### Changes not appearing
- Clear your browser cache
- Wait a few minutes for GitHub Pages to update
- Check the Actions tab in GitHub for deployment status

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `public` folder with your domain name
2. Configure DNS settings with your domain provider
3. Enable custom domain in GitHub Pages settings

## Commands Reference

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run deploy` - Deploy to GitHub Pages

## Notes

- The `gh-pages` branch is automatically created and managed
- Don't manually edit the `gh-pages` branch
- Always deploy from the main branch
- The deployment process takes 2-5 minutes

## Support

If you encounter issues:
1. Check the GitHub Actions tab for deployment logs
2. Verify all configuration files are correct
3. Ensure you have push permissions to the repository