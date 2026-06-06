# Ahmed Mujtaba — Personal Portfolio

A modern, dark-themed personal portfolio website built with **React + Tailwind CSS**, ready to deploy on **Vercel** or **AWS Amplify**.

## Tech Stack
- React 18 + Vite
- Tailwind CSS v3
- Lucide React (icons)
- Framer Motion (animations)

## Project Structure
```
src/
├── components/
│   ├── Navbar.jsx         # Sticky nav with mobile menu
│   ├── Footer.jsx         # Footer with social links
│   └── ScrollReveal.jsx   # Scroll animation hook & wrapper
├── sections/
│   ├── Hero.jsx           # Landing / home section
│   ├── About.jsx          # Background, education, interests
│   ├── Projects.jsx       # Project cards with tech tags
│   ├── Skills.jsx         # Skills grid + proficiency bars
│   ├── Achievements.jsx   # Awards & achievements
│   └── Contact.jsx        # Contact form + social links
├── data/
│   └── portfolio.js       # ⭐ ALL YOUR CONTENT IS HERE
└── index.css              # Global styles + custom CSS
```

## Quick Start
```bash
npm install
npm run dev
```

## Customization
1. **Edit your info** → open `src/data/portfolio.js` and update everything
2. **Add your photo** → place `photo.jpg` in `/public/` and update `Hero.jsx`
3. **Update resume** → place your PDF in `/public/Ahmed_Mujtaba_Resume.pdf`
4. **Update social links** → edit `personal` object in `portfolio.js`

## Deploy to Vercel (Recommended — Free)
```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Login
vercel login

# 3. Deploy
vercel

# 4. For production
vercel --prod
```
Or: Push to GitHub → go to vercel.com → Import Git Repository → Done!

## Deploy to AWS Amplify
1. Push code to GitHub/GitLab
2. Go to AWS Console → Amplify → New App → Host Web App
3. Connect your repository
4. Build settings are auto-detected (Vite)
5. Click "Save and Deploy"

## Adding Your Photo
Replace the placeholder in `Hero.jsx`:
```jsx
// Find this line and replace with:
<img
  src="/photo.jpg"
  alt="Ahmed Mujtaba"
  className="w-full h-full object-cover"
/>
```

## Adding Project Screenshots
Place images in `/public/projects/` and add `image` field to each project in `portfolio.js`:
```js
{
  id: 1,
  title: "...",
  image: "/projects/ai-tool.png",  // add this
  ...
}
```
Then add `<img src={project.image} />` in `Projects.jsx`.
