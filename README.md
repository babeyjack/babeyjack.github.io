# Jack's Portfolio - Vite + Bootstrap

A modern, responsive portfolio website showcasing my CV, qualifications, and programming projects. Built with Vite for fast development and production builds, and Bootstrap for professional styling.

## 🚀 Features

- **Fast Development**: Vite provides instant server start and lightning-fast HMR (Hot Module Replacement)
- **Responsive Design**: Bootstrap ensures the site looks great on all devices
- **Multiple Pages**: Home, Profile (CV & Qualifications), and Projects showcase
- **Dynamic Data Loading**: Content loaded from JSON files for easy maintenance
- **Production Optimized**: Minified and optimized builds ready for deployment
- **Modern JavaScript**: ES modules and functional components

## 📁 Project Structure

```
├── src/
│   ├── main.js                 # Entry point
│   ├── app.js                  # Main app logic
│   ├── style.css               # Global styles
│   ├── components/
│   │   ├── navbar.js           # Navigation component
│   │   └── hero.js             # Hero section
│   ├── pages/
│   │   ├── profile.js          # CV & Qualifications page
│   │   └── projects.js         # Projects showcase page
│   └── utils/
│       └── dataLoader.js       # JSON data loader utility
├── public/
│   └── json/
│       ├── profile.json        # Qualifications data
│       └── projects.json       # Projects data
├── json/                        # Original JSON files
├── css/                         # Original CSS (legacy)
├── js/                          # Original JS (legacy)
├── img/                         # Images directory
├── index.html                   # HTML entry point
├── vite.config.js              # Vite configuration
├── package.json                # Dependencies
└── dist/                        # Production build output
```

## 🛠 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation

1. Install dependencies:
```bash
npm install
```

## 🏃 Development

Start the development server:
```bash
npm run dev
```

This will start a local server at `http://localhost:5173/` with hot module replacement enabled.

## 🔨 Production Build

Create an optimized production build:
```bash
npm run build
```

The build output will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📊 Data Management

Your portfolio content is stored in JSON files for easy updates:

### `public/json/profile.json`
Contains your qualifications and achievements organized by category:
- Education
- Certifications
- Training
- Achievements

### `public/json/projects.json`
Contains your programming projects with:
- Project name and description
- Technologies used
- Links to repositories
- Update dates and versions

**To update your portfolio**, simply edit these JSON files. The changes will be reflected immediately in development mode and after rebuilding for production.

## 🎨 Customization

### Colors & Styling
Edit [src/style.css](src/style.css) to customize:
- Color scheme (CSS variables at the top)
- Font styling
- Component styling
- Responsive breakpoints

### Navigation
Edit the navigation items in [src/app.js](src/app.js):
```javascript
const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Profile', id: 'profile' },
    { label: 'Projects', id: 'projects' }
]
```

### Hero Section
Customize the hero section in [src/components/hero.js](src/components/hero.js) to change welcome text, buttons, and styling.

## 🚀 Deployment

The `dist/` folder contains your production-ready website and can be deployed to:

### GitHub Pages
1. Build the project: `npm run build`
2. Push the `dist/` folder to your `gh-pages` branch
3. Or configure GitHub Actions to auto-build

### Other Platforms
- **Netlify**: Connect your repository and set build command to `npm run build`, deploy directory to `dist/`
- **Vercel**: Similar setup to Netlify
- **Traditional Hosting**: Upload the `dist/` folder via FTP/SFTP

## 📦 Dependencies

- **Vite** - Next generation frontend tooling
- **Bootstrap** - Responsive CSS framework

## 🔧 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build locally |

## 📝 License

See [LICENSE](LICENSE) file for details.

## ✨ Next Steps

1. ✅ Development setup complete
2. ✅ Build system configured
3. Update `public/json/profile.json` and `public/json/projects.json` with your latest information
4. Customize colors and styling in `src/style.css`
5. Deploy to your hosting platform

---

**Happy coding! 🚀**
