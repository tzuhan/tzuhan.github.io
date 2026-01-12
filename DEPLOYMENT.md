# Deployment Guide for GitHub Pages

This guide will help you deploy your modernized Next.js portfolio to GitHub Pages.

## Prerequisites

- Your GitHub repository (tzuhan.github.io)
- Node.js 20+ installed

## Quick Deployment

Since your Next.js project is now in the root directory, deployment is simple:

### Step 1: Build the Project

```bash
npm run build
```

This will create an `out` directory with all static files.

### Step 2: Deploy the `out` Directory

You have two options:

#### Option A: GitHub Actions (Recommended - Automated)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy Next.js to GitHub Pages

on:
  push:
    branches:
      - master
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

Then:
```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Actions workflow"
git push origin master
```

Go to your repository Settings → Pages and set "Source" to "GitHub Actions".

#### Option B: Manual Deployment

If you want to manually deploy to a `gh-pages` branch:

```bash
# Build the project
npm run build

# Install gh-pages package (one time)
npm install -g gh-pages

# Deploy the out directory
gh-pages -d out -b gh-pages
```

Then go to Settings → Pages and set:
- Source: Deploy from a branch
- Branch: gh-pages / (root)

## Verifying Deployment

Visit https://tzuhan.github.io to see your site. The routes are:
- English: https://tzuhan.github.io/en
- Chinese: https://tzuhan.github.io/zh
- Japanese: https://tzuhan.github.io/ja

## Local Development

```bash
# Development mode with hot reload
npm run dev

# Build and test production locally
npm run build
npx serve out
```

Visit http://localhost:3000/en in your browser.

## Troubleshooting

### Build Fails

Make sure you have all dependencies:
```bash
npm install
```

### Styles Not Loading After Deploy

Verify `next.config.ts` has:
```typescript
output: 'export',
images: {
  unoptimized: true,
}
```

### GitHub Pages Shows 404

- Make sure `.nojekyll` file exists in the `out` directory
- Verify "Source" is correctly configured in Settings → Pages
- Check that the workflow ran successfully in the Actions tab

### Routes Don't Work

This is normal for static export. Users must visit the full path:
- ✅ https://tzuhan.github.io/en
- ❌ https://tzuhan.github.io (will redirect based on middleware)
