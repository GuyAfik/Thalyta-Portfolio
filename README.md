# Thalyta Marques Dos Santos - Data Analyst Portfolio

A modern, responsive portfolio website built with React and Vite, showcasing the professional profile, skills, and experience of Data Analyst Thalyta Marques Dos Santos.

## Features

- ✨ Modern and clean design
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎨 Smooth animations and transitions
- 📄 CV presentation with download functionality
- 💼 Core skills showcase
- 📧 Multiple contact options (Email, WhatsApp, LinkedIn)
- ⚡ Fast performance with Vite

## Sections

1. **Hero Section** - Introduction and call-to-action
2. **About** - Professional summary
3. **Core Skills** - Technical competencies with icons
4. **CV** - Detailed curriculum vitae with download option
5. **Contact** - Contact information and social links

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Thalyta-Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Update Contact Information

Edit the contact information in `src/components/Contact.jsx`:

```javascript
const contactInfo = {
  email: 'your.email@example.com',
  phone: '+55 (11) 98765-4321',
  whatsapp: '5511987654321',
  linkedin: 'https://www.linkedin.com/in/your-profile',
  location: 'Your City, Country'
}
```

### Add Your CV PDF

1. Create or export your CV as a PDF
2. Name it `Thalyta_Marques_CV.pdf`
3. Place it in the `public/assets/` directory

### Update Content

- **About Section**: Edit `src/components/About.jsx`
- **Skills**: Modify the skills array in `src/components/Skills.jsx`
- **CV Content**: Update the experience, education, and certifications in `src/components/CV.jsx`
- **Hero Section**: Customize the introduction in `src/components/Hero.jsx`

### Styling

All component styles are in their respective CSS files in `src/components/`. Global styles and CSS variables are in `src/index.css`.

## Color Scheme

The website uses a purple gradient theme. To change colors, edit the CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #1e40af;
  --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  /* ... other variables */
}
```

## Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with modern features
- **Font Awesome** - Icons

## Deployment

This site can be deployed to various platforms:

- **GitHub Pages**: Use `gh-pages` package
- **Netlify**: Connect your repository and deploy
- **Vercel**: Import your repository
- **Any static hosting**: Upload the `dist` folder after building

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

For questions or suggestions about this portfolio template, please reach out through the contact methods listed on the website.