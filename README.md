# French Creek Manor - Website Redesign Concepts

This project contains 3 different design concepts for the French Creek Manor event venue website.

## 🎨 Design Versions

### Design 1 - Dark & Immersive
Bold, dramatic black aesthetic with full-screen hero imagery and smooth animations. Perfect for creating an immediate emotional impact.

### Design 2 - Clean & Modern
Sophisticated split-screen layout with minimal design and elegant transitions. Fresh and contemporary feel.

### Design 3 - Dynamic Carousel
Interactive full-screen slideshow that rotates through different venue spaces with stunning transitions.

---

## 🚀 How to Demo Each Design Separately

### Method 1: Quick Switch (Recommended)

To switch between designs, simply rename the App file:

**For Design 1:**
```bash
cp src/app/App-Design1.tsx src/app/App.tsx
```

**For Design 2:**
```bash
cp src/app/App-Design2.tsx src/app/App.tsx
```

**For Design 3:**
```bash
cp src/app/App-Design3.tsx src/app/App.tsx
```

Then run:
```bash
npm run dev
```

### Method 2: Manual File Edit

Open `src/app/App.tsx` and replace the entire content with one of these:

**For Design 1:**
```tsx
import { DesignOne } from "./components/design-one";

export default function App() {
  return <DesignOne />;
}
```

**For Design 2:**
```tsx
import { DesignTwo } from "./components/design-two";

export default function App() {
  return <DesignTwo />;
}
```

**For Design 3:**
```tsx
import { DesignThree } from "./components/design-three";

export default function App() {
  return <DesignThree />;
}
```

---

## 📦 Setup Instructions

### Initial Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```
   or
   ```bash
   pnpm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   Navigate to `http://localhost:5173` (or the URL shown in your terminal)

### Build for Production

```bash
npm run build
```

The build files will be in the `dist/` folder, ready to deploy.

---

## 🌐 Deploying Each Version

### Option 1: Deploy 3 Separate Sites

1. **Clone this project 3 times** into separate folders:
   ```bash
   cp -r project-folder design1-demo
   cp -r project-folder design2-demo
   cp -r project-folder design3-demo
   ```

2. **In each folder, set the appropriate design:**
   - In `design1-demo/`: Copy App-Design1.tsx to App.tsx
   - In `design2-demo/`: Copy App-Design2.tsx to App.tsx
   - In `design3-demo/`: Copy App-Design3.tsx to App.tsx

3. **Build and deploy each folder separately** to:
   - Vercel
   - Netlify
   - GitHub Pages
   - Or any hosting service

### Option 2: Deploy to Subdirectories

Deploy all three with different base URLs:
- `yoursite.com/design1/`
- `yoursite.com/design2/`
- `yoursite.com/design3/`

---

## 📁 Project Structure

```
src/
├── app/
│   ├── App.tsx                    # Main selector (default)
│   ├── App-Design1.tsx            # Design 1 entry point
│   ├── App-Design2.tsx            # Design 2 entry point
│   ├── App-Design3.tsx            # Design 3 entry point
│   └── components/
│       ├── design-one.tsx         # Dark & Immersive design
│       ├── design-two.tsx         # Clean & Modern design
│       ├── design-three.tsx       # Dynamic Carousel design
│       └── ui/                    # Reusable UI components
└── styles/                        # Global styles
```

---

## 🎯 Key Features

- **Fully Responsive** - Works on mobile, tablet, and desktop
- **Smooth Animations** - Using Motion (Framer Motion)
- **Modern Stack** - React, TypeScript, Tailwind CSS v4
- **High-Quality Images** - Professional venue photography
- **Interactive Elements** - Hover effects, transitions, and carousels
- **Production Ready** - Optimized and performant

---

## 🛠 Technologies Used

- React 18
- TypeScript
- Tailwind CSS v4
- Motion (Framer Motion)
- Vite
- Lucide React (Icons)

---

## 📸 Replacing Images

To use your own venue photos:

1. Replace the Unsplash URLs in each design component
2. Update the image sources in:
   - `/src/app/components/design-one.tsx`
   - `/src/app/components/design-two.tsx`
   - `/src/app/components/design-three.tsx`

---

## 💡 Tips for Presenting Demos

1. **Prepare 3 browser tabs** or windows, each with a different design
2. **Use full-screen mode** (F11) for maximum impact
3. **Highlight unique features** of each design:
   - Design 1: Dramatic scrolling, bold typography
   - Design 2: Clean layout, split-screen hero
   - Design 3: Interactive carousel, venue rotation

---

## 📝 Customization

### Updating Content

Edit the text, colors, and content directly in the design component files:
- `src/app/components/design-one.tsx`
- `src/app/components/design-two.tsx`
- `src/app/components/design-three.tsx`

### Changing Colors

Each design has its own color scheme. Search for color classes like:
- `bg-amber-600` (primary color)
- `text-gray-900` (text color)
- Replace with your brand colors

---

## 🤝 Support

For questions or issues, please contact the development team.

---

## 📄 License

© 2026 French Creek Manor. All rights reserved.
