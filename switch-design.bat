@echo off
REM French Creek Manor - Design Switcher Script (Windows)
REM This script helps you quickly switch between design versions

echo.
echo ========================================
echo French Creek Manor - Design Selector
echo ========================================
echo.
echo Which design would you like to demo?
echo.
echo 1) Design 1 - Dark ^& Immersive
echo 2) Design 2 - Clean ^& Modern
echo 3) Design 3 - Dynamic Carousel
echo 4) All Designs Selector (Default)
echo.

set /p choice="Enter your choice (1-4): "

if "%choice%"=="1" (
    echo.
    echo Switching to Design 1...
    copy /Y src\app\App-Design1.tsx src\app\App.tsx
    echo Design 1 is now active!
) else if "%choice%"=="2" (
    echo.
    echo Switching to Design 2...
    copy /Y src\app\App-Design2.tsx src\app\App.tsx
    echo Design 2 is now active!
) else if "%choice%"=="3" (
    echo.
    echo Switching to Design 3...
    copy /Y src\app\App-Design3.tsx src\app\App.tsx
    echo Design 3 is now active!
) else if "%choice%"=="4" (
    echo.
    echo Switching to Design Selector...
    echo Note: Restore App.tsx manually if needed
    echo Design Selector should be active!
) else (
    echo.
    echo Invalid choice. Please run the script again.
    exit /b 1
)

echo.
echo Run 'npm run dev' to start the development server
echo.
pause
