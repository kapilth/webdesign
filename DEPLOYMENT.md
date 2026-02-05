# Quick Deployment Guide for 3 Separate Demos

## 🎯 Goal
Deploy all 3 designs as separate websites for client demos.

---

## Method 1: Using Vercel (Recommended - FREE)

### Step 1: Prepare 3 Separate Projects

```bash
# Create 3 copies of your project
cp -r french-creek-manor design1-dark-immersive
cp -r french-creek-manor design2-clean-modern
cp -r french-creek-manor design3-dynamic-carousel
```

### Step 2: Set Each Design

**In design1-dark-immersive folder:**
```bash
cd design1-dark-immersive
cp src/app/App-Design1.tsx src/app/App.tsx
```

**In design2-clean-modern folder:**
```bash
cd design2-clean-modern
cp src/app/App-Design2.tsx src/app/App.tsx
```

**In design3-dynamic-carousel folder:**
```bash
cd design3-dynamic-carousel
cp src/app/App-Design3.tsx src/app/App.tsx
```

### Step 3: Deploy to Vercel

1. **Install Vercel CLI** (one time only):
   ```bash
   npm install -g vercel
   ```

2. **Deploy each project:**
   ```bash
   cd design1-dark-immersive
   vercel --prod
   
   cd ../design2-clean-modern
   vercel --prod
   
   cd ../design3-dynamic-carousel
   vercel --prod
   ```

3. **You'll get 3 URLs like:**
   - `https://design1-dark-immersive.vercel.app`
   - `https://design2-clean-modern.vercel.app`
   - `https://design3-dynamic-carousel.vercel.app`

---

## Method 2: Using Netlify (Also FREE)

### Via Netlify Drop (Easiest)

1. **Build each version:**
   ```bash
   # In each design folder
   npm install
   npm run build
   ```

2. **Drag & Drop:**
   - Go to https://app.netlify.com/drop
   - Drag the `dist/` folder from each project
   - Get 3 instant URLs

### Via Netlify CLI

```bash
npm install -g netlify-cli

# Deploy Design 1
cd design1-dark-immersive
npm run build
netlify deploy --prod

# Deploy Design 2
cd ../design2-clean-modern
npm run build
netlify deploy --prod

# Deploy Design 3
cd ../design3-dynamic-carousel
npm run build
netlify deploy --prod
```

---

## Method 3: GitHub Pages (FREE)

### Step 1: Create 3 GitHub Repositories

1. Go to GitHub and create 3 new repositories:
   - `frenchcreek-design1`
   - `frenchcreek-design2`
   - `frenchcreek-design3`

### Step 2: Push Each Design

```bash
# Design 1
cd design1-dark-immersive
git init
git add .
git commit -m "Design 1"
git remote add origin https://github.com/YOUR_USERNAME/frenchcreek-design1.git
git push -u origin main

# Repeat for Design 2 and 3
```

### Step 3: Enable GitHub Pages

1. Go to each repository settings
2. Navigate to "Pages"
3. Select "GitHub Actions" as source
4. Add this workflow file to each repo:

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## Method 4: Single Project with Subdirectories

If you want one deployment with 3 URLs:

### Modify vite.config.ts for each build:

**Design 1 Build:**
```typescript
export default defineConfig({
  base: '/design1/',
  // ... rest of config
})
```

**Design 2 Build:**
```typescript
export default defineConfig({
  base: '/design2/',
  // ... rest of config
})
```

Then deploy all builds to one server:
```
public/
  design1/
  design2/
  design3/
```

URLs will be:
- `yoursite.com/design1/`
- `yoursite.com/design2/`
- `yoursite.com/design3/`

---

## 📱 Demo URLs to Share with Client

Once deployed, create a simple landing page or document:

```
French Creek Manor - Website Redesign Proposals

Design 1 - Dark & Immersive
🔗 https://your-design1-url.vercel.app

Design 2 - Clean & Modern  
🔗 https://your-design2-url.vercel.app

Design 3 - Dynamic Carousel
🔗 https://your-design3-url.vercel.app
```

---

## 💡 Pro Tips

1. **Use Custom Domains** (Optional):
   - `design1.frenchcreekmanor.com`
   - `design2.frenchcreekmanor.com`
   - `design3.frenchcreekmanor.com`

2. **Add Analytics** to see which design gets more engagement

3. **Mobile Testing**: Test all designs on mobile devices before presenting

4. **Screenshot Each Design** for quick reference in your proposal

---

## ⚡ Quick Demo Setup (5 minutes)

The fastest way to show all 3 demos:

```bash
# 1. Use the script to switch designs
./switch-design.sh   # or switch-design.bat on Windows

# 2. Start dev server
npm run dev

# 3. Open in browser, take screenshot or record video

# 4. Switch to next design, repeat
```

Then share the videos/screenshots, or use live demos with Vercel/Netlify.

---

## 🎬 Recording Demos

If you can't deploy, record videos:

1. **Use Loom** (free): https://loom.com
2. **Use QuickTime** (Mac)
3. **Use OBS Studio** (Windows/Mac/Linux - free)

Record each design in full-screen mode for maximum impact.

---

## Questions?

Common issues:
- **Build errors?** Run `npm install` first
- **Port already in use?** Kill the process or use `npm run dev -- --port 3000`
- **Styles not loading?** Clear browser cache

---

Good luck with your demos! 🚀
