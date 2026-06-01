# G4M37Z - Kenyan Gaming Content Creator Website

Welcome to the official website of **G4M37Z**, a passionate Kenyan gaming content creator specializing in eFootball, gaming tutorials, and esports entertainment.

## 🎮 Features

- **3D Interactive Logo** - Animated 3D cube logo using Three.js
- **EPIC Games-Inspired Design** - Modern, sleek interface with smooth animations
- **Responsive Layout** - Works perfectly on desktop, tablet, and mobile
- **Light/Dark Theme** - Toggle between light and dark modes
- **Smooth Animations** - Parallax effects, hover states, and scroll animations
- **Multi-Platform Links** - Connect across YouTube, TikTok, Twitch, Instagram, Twitter, and more
- **Contact Form** - Direct messaging with form validation
- **Hero Section** - Eye-catching landing with call-to-action buttons

## 🚀 Quick Start

### Local Development

```bash
# Clone the repository
git clone https://github.com/G4M37Z/g4m37z.git
cd g4m37z

# Option 1: Using Python (if installed)
python -m http.server 8000

# Option 2: Using Node.js
npx http-server

# Option 3: Using PHP (if installed)
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 📦 Installation

### Using npm
```bash
npm install
npm start
```

### Using yarn
```bash
yarn install
yarn start
```

## 🌐 Automatic Deployment to Vercel

This project is configured for **automatic deployment** every time you push to the `main` branch.

### Setup Instructions

1. **Connect GitHub to Vercel**
   - Go to [https://vercel.com](https://vercel.com)
   - Sign up or log in with GitHub
   - Click "Add New..." → "Project"
   - Import your `G4M37Z/g4m37z` repository

2. **Configure Project Settings**
   ```
   Framework: Static Site (HTML/CSS/JS)
   Build Command: (Leave empty - static site)
   Output Directory: (Leave empty)
   Install Command: (Leave empty)
   ```

3. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy your site
   - Your site will be live at: `https://g4m37z.vercel.app`

### Automatic Updates

Once connected, **every push to the `main` branch** will:
- ✅ Automatically trigger a new deployment
- ✅ Build your site (instant for static sites)
- ✅ Deploy to production
- ✅ Update live within 30-60 seconds

**You don't need to do anything!** Just push your changes to GitHub:

```bash
# Make changes to your files
git add .
git commit -m "Update website"
git push origin main

# Your site is automatically updated! 🎉
```

### Preview Deployments

Create a **pull request** to get a preview deployment:
- Each PR gets a unique preview URL
- Share with others to review changes
- Merge to deploy to production

## 📁 Project Structure

```
g4m37z/
├── index.html          # Main HTML file
├── styles.css          # Styling with EPIC Games aesthetic
├── script.js           # Core functionality & interactivity
├── 3d-logo.js          # 3D cube logo (Three.js)
├── package.json        # npm configuration
├── vercel.json         # Vercel deployment config
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## 🎨 Design Features

### Color Scheme
- **Primary**: `#ff006e` (Hot Pink)
- **Secondary**: `#8338ec` (Purple)
- **Accent**: `#3a86ff` (Blue)
- **Dark Background**: `#0a0e27`

### Sections
1. **Navigation** - Sticky header with theme toggle
2. **Hero** - Large title section with CTA buttons
3. **About** - Personal introduction with feature cards
4. **Content** - Platform showcase grid
5. **Socials** - Social media connection cards
6. **Games** - Featured games section
7. **Contact** - Contact form with info cards
8. **Footer** - Links and social connections

## 🔧 Customization

### Change Colors
Edit `:root` variables in `styles.css`:
```css
:root {
    --primary: #ff006e;
    --secondary: #8338ec;
    --accent: #3a86ff;
    /* ... other colors ... */
}
```

### Add New Content
1. Edit `index.html` to add sections
2. Style in `styles.css`
3. Add interactivity in `script.js`
4. Push to GitHub → Auto-deploy!

### Update 3D Logo
Edit `3d-logo.js` to customize the Three.js cube:
- Change colors, size, rotation speed
- Modify lighting
- Add new geometries

## 📱 Responsive Breakpoints

- **Desktop**: 1024px+
- **Tablet**: 768px - 1024px
- **Mobile**: Below 768px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- High contrast color ratios
- Focus states on interactive elements

## 📊 Performance

- **Static Site** - No server needed
- **Fast Loading** - Optimized assets
- **Smooth Animations** - GPU-accelerated CSS
- **Mobile Optimized** - Responsive design
- **SEO Friendly** - Proper meta tags

## 🔒 Security

- No sensitive data stored locally
- No backend API calls
- All links are external
- Regular dependency updates

## 🤝 Contributing

Want to help improve the site? 

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

- **YouTube**: [@G4M37Z](https://www.youtube.com/@G4M37Z)
- **TikTok**: [@g4m37z_ke](https://www.tiktok.com/@g4m37z_ke)
- **Linktree**: [lin.bio/g4m37z](https://linktr.ee/Lin_yulu)

## 🎯 Roadmap

- [ ] Blog section with articles
- [ ] Video gallery
- [ ] Live stream integration
- [ ] Community forum
- [ ] Advanced 3D models
- [ ] PWA support
- [ ] Multi-language support

## 🙏 Credits

- **Design Inspiration**: EPIC Games
- **3D Graphics**: Three.js
- **Icons**: Font Awesome
- **Font**: Segoe UI, Tahoma

---

**Made with ❤️ by G4M37Z | Last Updated: 2026**
