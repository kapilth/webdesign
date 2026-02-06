# GitHub Pages Deployment Steps

This project is configured to deploy automatically to GitHub Pages using GitHub Actions.

## 1. Ensure GitHub Pages is using Actions

1. Open the repository settings:
   - https://github.com/kapilth/webdesign/settings/pages
2. Under **Build and deployment  Source**, select **GitHub Actions**.
3. Save the settings if prompted.

## 2. Trigger a deployment

Any push to the `main` branch will trigger the workflow defined in `.github/workflows/deploy.yml`.

You can trigger a deployment by:

- Committing a change and pushing to `main`, or
- Manually running the **Deploy to GitHub Pages** workflow from the **Actions** tab.

## 3. Wait for the workflow to succeed

1. Go to the **Actions** tab: https://github.com/kapilth/webdesign/actions
2. Open the latest **Deploy to GitHub Pages** run.
3. Wait until all jobs are green (succeeded).

## 4. Access the live site

Once deployment completes successfully, your site is available at:

- https://kapilth.github.io/webdesign/

If you see a 404:

- Wait 19 minutes and refresh (Ctrl+F5 or use an incognito window).
- Double-check that **Settings  Pages** is still set to **GitHub Actions**.

## 5. Alternative: gh-pages branch workflow

There is an optional workflow `.github/workflows/deploy-alternative.yml` that you can run manually from the **Actions** tab. It:

- Builds the project
- Creates a `.nojekyll` file in the `dist` folder
- Pushes the built files to a `gh-pages` branch

If you use this alternative workflow, set **Settings  Pages  Source** to **Deploy from a branch** and select the `gh-pages` branch with the `/` root folder.
