# Deploying the portfolio: GitHub to Vercel

This guide takes the project from the zip on your computer to a live URL, then shows how to check it properly. Each step explains why it matters.

---

## Part 1. One time setup on your computer

### 1.1 Install Node.js (version 20 or newer)
Download the LTS installer from https://nodejs.org and run it.

**Why:** Next.js runs on Node. You need it to preview the site and to run the same build Vercel will run.

Check it worked (open a new terminal):
```bash
node -v    # should print v20.x or higher
npm -v
```

### 1.2 Install Git
Windows: https://git-scm.com/download/win (accept the defaults). Mac: run `git --version` and accept the prompt to install the developer tools.

**Why:** Git records versions of your code and is how the code gets to GitHub.

Tell Git who you are (once per computer). Use the email on your GitHub account so commits are linked to your profile:
```bash
git config --global user.name "Aaron Alonzo"
git config --global user.email "aarongabrielalonzo@gmail.com"
```

### 1.3 Create or sign in to GitHub
https://github.com. If you plan to show the repo to recruiters, use a professional username.

---

## Part 2. Run the site locally first

### 2.1 Unzip and open the folder
Unzip `aaron-portfolio.zip`, then open a terminal in the `aaron-portfolio` folder (VS Code: File, Open Folder, then Terminal, New Terminal).

### 2.2 Install packages
```bash
npm install
```
**Why:** this downloads Next.js, React and Tailwind into `node_modules`, using the exact versions locked in `package-lock.json`, so your machine matches Vercel.

### 2.3 Start the dev server
```bash
npm run dev
```
Open http://localhost:3000. Edits to `lib/data.ts` appear instantly. Press `Ctrl + C` to stop.

### 2.4 Run a production build
```bash
npm run build
```
**Why:** this is the exact command Vercel runs. If it ends with "Generating static pages (16/16)" and no red errors, the deploy will succeed. Fixing errors here is much faster than reading Vercel logs.

Optional: `npm start` serves the production build at http://localhost:3000 so you can see exactly what visitors will see.

---

## Part 3. Put the code on GitHub

### 3.1 Create an empty repository
1. On GitHub click **+** (top right), then **New repository**.
2. Name: `aaron-portfolio`.
3. Visibility: **Public** (recruiters can view the code) or Private (Vercel works with both).
4. Do **not** tick "Add a README", ".gitignore" or "license". The project already has them, and an empty repo avoids a merge conflict on the first push.
5. Click **Create repository** and keep the page open; it shows your repo URL.

### 3.2 Commit and push from your terminal
In the `aaron-portfolio` folder:
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/aaron-portfolio.git
git push -u origin main
```
What each line does:
- `git init` turns the folder into a Git repository.
- `git add .` stages every file. `.gitignore` already excludes `node_modules` and `.next`, which are rebuilt on every install and would bloat the repo.
- `git commit` saves a snapshot with a message.
- `git branch -M main` names the branch `main`, which Vercel treats as production.
- `git remote add origin` tells Git where GitHub lives.
- `git push -u origin main` uploads the code and remembers the link for future pushes.

**Sign in prompt:** GitHub no longer accepts your account password in the terminal. Choose "Sign in with your browser" when Git Credential Manager pops up (Windows), or run `gh auth login` if you use the GitHub CLI. Alternatively create a Personal Access Token (GitHub, Settings, Developer settings, Tokens) and paste it as the password.

**Shortcut if you use the GitHub CLI:** `gh repo create aaron-portfolio --public --source=. --push` replaces 3.1 and 3.2 after `git commit`.

Refresh the GitHub page: you should see `app`, `components`, `lib`, `public`, `package.json` and this guide.

---

## Part 4. Deploy on Vercel

### 4.1 Sign up with GitHub
Go to https://vercel.com/signup, choose **Continue with GitHub**, and pick the **Hobby** (free) plan for a personal site.

**Why GitHub sign in:** it lets Vercel see your repositories and redeploy automatically on every push.

### 4.2 Import the project
1. On the Vercel dashboard click **Add New**, then **Project**.
2. Find `aaron-portfolio` and click **Import**. If it is missing, click "Adjust GitHub App Permissions" and grant access to that repo.

### 4.3 Check the settings
Vercel detects Next.js. Leave these as they are:
- Framework Preset: **Next.js**
- Root Directory: `./`
- Build Command: `next build` (default)
- Output Directory: default
- Install Command: default (`npm install`)

Optional environment variable (only if you already own a domain): `NEXT_PUBLIC_SITE_URL` = `https://yourdomain.com`. It is used in the sitemap and link previews. Without it, the site uses its Vercel URL automatically.

### 4.4 Deploy
Click **Deploy**. The build takes about one to two minutes. You will see confetti and a preview thumbnail when it finishes. Your site is live at a URL like `https://aaron-portfolio.vercel.app`.

**If the build fails:** open the deployment, click **Build Logs**, scroll to the first red line, and compare with what `npm run build` showed locally. The most common cause is a typo in `lib/data.ts` (a missing comma or quote).

---

## Part 5. Check the live site

Work through this list once after the first deploy, and again after big changes.

### 5.1 Deployment status
In Vercel, open the project. The latest deployment should say **Ready** with a green dot, on the **Production** environment, from the `main` branch.

### 5.2 Every page loads
Visit and click through:
- `/` (homepage), then each nav link: Work, Experience, Skills, Contact
- Every project card, which opens `/work/<project>`
- "Next project" at the bottom of each case study
- "All work" back link
- Resume button opens the PDF
- Live site and Figma links open in a new tab
- A broken URL such as `/abc` shows the custom 404 page

### 5.3 Mobile
1. In Chrome press `F12`, then the phone icon (`Ctrl + Shift + M`), and test iPhone SE, iPhone 14 Pro and Galaxy S20 sizes.
2. Check: no sideways scrolling, menu button opens and closes, text is readable, buttons are easy to tap.
3. Open the URL on your real phone too. Real devices catch things emulators miss.

### 5.4 Console errors
`F12`, **Console** tab, reload the page. There should be no red errors.

### 5.5 Performance and SEO (Lighthouse)
1. Open the site in an **Incognito** window (extensions skew results).
2. `F12`, **Lighthouse** tab, choose Mobile, tick Performance, Accessibility, Best Practices and SEO, click **Analyze page load**.
3. Aim for 90+ in each. Repeat for one case study page.
4. You can also run https://pagespeed.web.dev with your URL to see real world Core Web Vitals.

### 5.6 SEO files
These should all load:
- `/sitemap.xml` lists the homepage and all 8 case studies with your live domain
- `/robots.txt` allows crawling and points to the sitemap
- `/opengraph-image` shows your share preview image

### 5.7 Link preview (how it looks when shared)
Paste your URL into:
- LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/
- https://www.opengraph.xyz

You should see your name, role and the dark preview card. If LinkedIn shows an old preview, click Inspect again to refresh its cache.

### 5.8 Optional: Google Search Console
https://search.google.com/search-console, add your domain, verify it, then submit `https://yourdomain.com/sitemap.xml` so Google indexes the case studies.

### 5.9 Optional: Vercel Analytics
In the Vercel project, open the **Analytics** tab and enable Web Analytics to see visits, including recruiter visits after you send the link.

---

## Part 6. Custom domain (optional)

1. Buy a domain (for example from Namecheap, Cloudflare or GoDaddy).
2. Vercel project, **Settings**, **Domains**, type the domain, click **Add**.
3. Vercel shows the exact DNS records to create (usually an A record for the root domain and a CNAME for `www`). Add them at your registrar.
4. Wait until Vercel shows **Valid Configuration**. HTTPS is issued automatically.
5. Set `NEXT_PUBLIC_SITE_URL` to the new domain under **Settings**, **Environment Variables**, then **Deployments**, latest, **Redeploy**.

---

## Part 7. Updating the site later

```bash
# edit lib/data.ts or replace images in public/projects
npm run build            # confirm it still builds
git add .
git commit -m "Update case studies"
git push
```
Vercel redeploys automatically within about a minute.

**Safer changes with preview links:** push to a branch instead of `main`:
```bash
git checkout -b update-projects
git push -u origin update-projects
```
Vercel builds a separate preview URL for that branch. Check it, then merge into `main` on GitHub to publish.

**Undo a bad deploy:** Vercel, **Deployments**, find the last good one, click the three dots, **Promote to Production** (or Instant Rollback). The previous version is live again in seconds.
