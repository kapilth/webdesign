# 🚀 QUICK START - 3 Separate Demos

## Fastest Way to Demo All 3 Designs

### Option 1: Switch Locally (1 minute per design)

**Windows Users:**
```bash
# Double-click: switch-design.bat
# Choose design 1, 2, or 3
# Then run: npm run dev
```

**Mac/Linux Users:**
```bash
chmod +x switch-design.sh
./switch-design.sh
# Choose design 1, 2, or 3
# Then run: npm run dev
```

### Option 2: Deploy 3 Separate Sites (5 minutes total)

**Using Vercel (Easiest):**

1. **Install Vercel CLI once:**
   ```bash
   npm install -g vercel
   ```

2. **Create 3 project folders:**
   ```bash
   # Copy this project 3 times
   cp -r . ../design1-demo
   cp -r . ../design2-demo
   cp -r . ../design3-demo
   ```

3. **Set up each design:**
   ```bash
   # Design 1
   cd ../design1-demo
   cp src/app/App-Design1.tsx src/app/App.tsx
   vercel --prod
   
   # Design 2
   cd ../design2-demo
   cp src/app/App-Design2.tsx src/app/App.tsx
   vercel --prod
   
   # Design 3
   cd ../design3-demo
   cp src/app/App-Design3.tsx src/app/App.tsx
   vercel --prod
   ```

4. **Done!** You'll get 3 URLs to share with your client.

---

## What You Have

✅ **3 Complete Website Designs** ready to demo
✅ **Fully responsive** - works on all devices
✅ **Production-ready** code
✅ **Easy to customize** with your own images and content

### Design 1 - Dark & Immersive
- Black background with dramatic full-screen hero
- Smooth scroll animations
- Gold/amber accents
- Best for: Modern, bold, luxury feel

### Design 2 - Clean & Modern  
- White background with split-screen layout
- Minimal and elegant
- Amber accents with lots of breathing room
- Best for: Contemporary, sophisticated, upscale feel

### Design 3 - Dynamic Carousel
- Interactive full-screen image carousel
- Multiple venue spaces showcased
- Engaging transitions
- Best for: Visual storytelling, multiple venues

---

## Files You Need

All design components are in:
- `/src/app/components/design-one.tsx`
- `/src/app/components/design-two.tsx`
- `/src/app/components/design-three.tsx`

Standalone versions:
- `/src/app/App-Design1.tsx`
- `/src/app/App-Design2.tsx`
- `/src/app/App-Design3.tsx`

---

## Next Steps

1. **Review each design** by switching between them
2. **Customize images** with actual French Creek Manor photos
3. **Update content** (phone numbers, addresses, etc.)
4. **Deploy** using one of the methods in DEPLOYMENT.md
5. **Share** the URLs with your client

---

## Need Help?

- Full documentation: `README.md`
- Deployment guide: `DEPLOYMENT.md`
- Switch designs: Run `switch-design.sh` or `switch-design.bat`

---

**Ready to go!** 🎉

The simplest path: Use the switch script, run `npm run dev`, and open 3 browser tabs for side-by-side comparison.
