#!/bin/bash

# French Creek Manor - Design Switcher Script
# This script helps you quickly switch between design versions

echo "🎨 French Creek Manor - Design Selector"
echo "======================================="
echo ""
echo "Which design would you like to demo?"
echo ""
echo "1) Design 1 - Dark & Immersive"
echo "2) Design 2 - Clean & Modern"
echo "3) Design 3 - Dynamic Carousel"
echo "4) All Designs Selector (Default)"
echo ""
read -p "Enter your choice (1-4): " choice

case $choice in
  1)
    echo "✅ Switching to Design 1..."
    cp src/app/App-Design1.tsx src/app/App.tsx
    echo "✨ Design 1 is now active!"
    ;;
  2)
    echo "✅ Switching to Design 2..."
    cp src/app/App-Design2.tsx src/app/App.tsx
    echo "✨ Design 2 is now active!"
    ;;
  3)
    echo "✅ Switching to Design 3..."
    cp src/app/App-Design3.tsx src/app/App.tsx
    echo "✨ Design 3 is now active!"
    ;;
  4)
    echo "✅ Switching to Design Selector..."
    git checkout src/app/App.tsx 2>/dev/null || echo "Note: Restore App.tsx manually if needed"
    echo "✨ Design Selector is now active!"
    ;;
  *)
    echo "❌ Invalid choice. Please run the script again."
    exit 1
    ;;
esac

echo ""
echo "🚀 Run 'npm run dev' to start the development server"
echo ""
