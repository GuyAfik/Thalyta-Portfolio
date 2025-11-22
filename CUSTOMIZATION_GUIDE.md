# Customization Guide for Thalyta's Portfolio

This guide will help you customize the portfolio website with your actual information.

## 1. Contact Information

### Update Email, Phone, and Social Links

**File: `src/components/Contact.jsx`**

Find and update the `contactInfo` object (around line 6):

```javascript
const contactInfo = {
  email: 'your.actual.email@example.com',
  phone: '+55 (11) 12345-6789',
  whatsapp: '5511123456789', // Format: country code + number (no spaces or symbols)
  linkedin: 'https://www.linkedin.com/in/your-actual-profile',
  location: 'Your City, Your Country'
}
```

**File: `src/components/Footer.jsx`**

Update the footer links (around line 7):

```javascript
const contactInfo = {
  email: 'your.actual.email@example.com',
  linkedin: 'https://www.linkedin.com/in/your-actual-profile',
  github: 'https://github.com/your-username'
}
```

## 2. Personal Information

### Update Name and Title

**File: `src/components/Header.jsx`**

Change the logo name (line 29):
```javascript
<h1 className="logo">Your Name</h1>
```

**File: `src/components/Hero.jsx`**

Update your name and description (lines 17-21):
```javascript
<h2 className="hero-title">Your Job Title</h2>
<h1 className="hero-name">Your Full Name</h1>
<p className="hero-description">
  Your professional description here...
</p>
```

## 3. About Section

**File: `src/components/About.jsx`**

Replace the paragraphs (lines 10-20) with your own professional summary.

## 4. Skills

**File: `src/components/Skills.jsx`**

Update the skills array (lines 5-40) with your actual skills:

```javascript
const skills = [
  {
    icon: 'fa-chart-line', // Font Awesome icon class
    title: 'Your Skill',
    description: 'Description of your skill'
  },
  // Add more skills...
]
```

Available Font Awesome icons: https://fontawesome.com/icons

## 5. CV Content

**File: `src/components/CV.jsx`**

### Professional Experience (lines 18-35)

Update with your actual work experience:

```javascript
<div className="cv-item">
  <h5>Your Job Title</h5>
  <p className="cv-company">Company Name | Start Date - End Date</p>
  <ul>
    <li>Your achievement or responsibility</li>
    <li>Another achievement</li>
  </ul>
</div>
```

### Education (lines 37-48)

Update with your degrees:

```javascript
<div className="cv-item">
  <h5>Your Degree</h5>
  <p className="cv-company">University Name | Year - Year</p>
</div>
```

### Certifications (lines 50-58)

Add your certifications:

```javascript
<ul className="cv-certifications">
  <li>Your Certification Name</li>
  <li>Another Certification</li>
</ul>
```

### Technical Skills Tags (lines 60-72)

Update the skill tags:

```javascript
<span className="cv-skill-tag">Your Skill</span>
```

## 6. Add Your CV PDF

1. Create a PDF version of your CV
2. Name it exactly: `Thalyta_Marques_CV.pdf` (or update the filename in CV.jsx line 77)
3. Place it in: `public/assets/`

## 7. Colors and Styling

**File: `src/index.css`**

Change the color scheme by updating CSS variables (lines 7-18):

```css
:root {
  --primary-color: #2563eb;        /* Main blue color */
  --secondary-color: #1e40af;      /* Darker blue */
  --accent-color: #3b82f6;         /* Lighter blue */
  --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  /* ... other colors */
}
```

### Popular Color Schemes:

**Professional Blue (Current)**
```css
--gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

**Warm Orange**
```css
--gradient-primary: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
```

**Green Tech**
```css
--gradient-primary: linear-gradient(135deg, #0ba360 0%, #3cba92 100%);
```

**Modern Purple**
```css
--gradient-primary: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
```

## 8. Images (Optional)

To add a profile photo:

1. Add your photo to `public/assets/` (e.g., `profile.jpg`)
2. Update `src/components/Hero.jsx` or `src/components/About.jsx`
3. Add an `<img>` tag:

```javascript
<img src="/assets/profile.jpg" alt="Your Name" className="profile-photo" />
```

4. Add CSS styling in the respective CSS file

## 9. Meta Tags and SEO

**File: `index.html`**

Update the meta description (line 5):

```html
<meta name="description" content="Your actual description for search engines">
<title>Your Name | Your Job Title</title>
```

## 10. Testing Your Changes

After making changes:

1. Save all files
2. The development server will auto-reload
3. Check your browser at `http://localhost:5173`
4. Test on mobile by resizing your browser window

## 11. Common Issues

### WhatsApp Link Not Working
- Make sure the number format is: country code + number (no spaces, no +)
- Example: `5511987654321` for Brazil

### CV Download Not Working
- Ensure the PDF file is in `public/assets/`
- Check the filename matches exactly in `CV.jsx`

### Icons Not Showing
- Check Font Awesome CDN link in `index.html`
- Verify icon class names at fontawesome.com

## 12. Deployment Checklist

Before deploying:

- [ ] Update all contact information
- [ ] Add your actual CV PDF
- [ ] Update About section with your story
- [ ] Customize skills to match your expertise
- [ ] Update CV content with real experience
- [ ] Test all links (email, WhatsApp, LinkedIn)
- [ ] Test on mobile devices
- [ ] Check all sections display correctly
- [ ] Update meta tags for SEO

## Need Help?

- React Documentation: https://react.dev
- Vite Documentation: https://vitejs.dev
- Font Awesome Icons: https://fontawesome.com
- CSS Gradients: https://cssgradient.io

Happy customizing! 🚀