# Projects Section Update Guide

This guide explains how to update the Projects section with actual project links from LinkedIn.

## Current Projects

The Projects section currently displays three projects based on the CV:

1. **Amazon Forest Deforestation Analysis** (Python/Pandas)
2. **AdventureWorks Database Analysis** (Power BI/SQL)
3. **Super Store Sales Analysis** (Excel)

## How to Update Projects

### File Location
[`src/components/Projects.jsx`](src/components/Projects.jsx)

### Update Project Information

Find the `projects` array (around line 6) and update each project object:

```javascript
const projects = [
  {
    title: 'Your Project Title',
    description: 'Detailed description of what the project does and what you learned',
    technologies: ['Tech1', 'Tech2', 'Tech3', 'Tech4'],
    link: 'https://github.com/your-username/project-repo',
    icon: 'fa-icon-name' // Font Awesome icon
  },
  // Add more projects...
]
```

### Project Object Properties

- **title**: The name of your project
- **description**: A detailed description (2-3 sentences recommended)
- **technologies**: Array of technologies/tools used (displays as tags)
- **link**: 
  - GitHub repository URL
  - Live demo URL
  - LinkedIn project URL
  - Use `'#'` if project is not publicly available
- **icon**: Font Awesome icon class (without 'fas' prefix)
  - Examples: `'fa-chart-line'`, `'fa-database'`, `'fa-python'`, `'fa-tree'`
  - Browse icons at: https://fontawesome.com/icons

### Example: Adding a New Project

```javascript
{
  title: 'Customer Segmentation Analysis',
  description: 'Machine learning project using K-means clustering to segment customers based on purchasing behavior. Implemented in Python with scikit-learn and visualized results using matplotlib and seaborn.',
  technologies: ['Python', 'scikit-learn', 'Pandas', 'Machine Learning'],
  link: 'https://github.com/thalyta-marques/customer-segmentation',
  icon: 'fa-users'
}
```

### Updating from LinkedIn Projects

To add projects from your LinkedIn profile:

1. Go to your LinkedIn projects section
2. For each project, copy:
   - Project title
   - Project description
   - Associated skills/technologies
   - Project URL (if available)
3. Update the `projects` array in [`Projects.jsx`](src/components/Projects.jsx)

### LinkedIn Project URL Format

If the project is listed on LinkedIn but doesn't have an external link:
- You can link to your LinkedIn profile's projects section
- Or use `'#'` and it will show "Available on Request"

Example:
```javascript
link: 'https://www.linkedin.com/in/thalyta-marques-dos-santos-b91591378/details/projects/'
```

## Adding More Projects

To add additional projects, simply add more objects to the `projects` array:

```javascript
const projects = [
  {
    // Project 1
  },
  {
    // Project 2
  },
  {
    // Project 3
  },
  {
    // NEW Project 4
    title: 'New Project',
    description: 'Description here',
    technologies: ['Tech1', 'Tech2'],
    link: 'https://project-url.com',
    icon: 'fa-rocket'
  }
]
```

The grid layout will automatically adjust to display all projects responsively.

## Available Font Awesome Icons for Data Projects

Common icons for data analysis projects:

- `fa-chart-line` - Line charts, trends
- `fa-chart-bar` - Bar charts, comparisons
- `fa-chart-pie` - Pie charts, distributions
- `fa-database` - Database projects
- `fa-python` - Python projects
- `fa-table` - Excel, tabular data
- `fa-brain` - Machine learning, AI
- `fa-project-diagram` - Data pipelines, workflows
- `fa-analytics` - General analytics (Font Awesome Pro)
- `fa-tree` - Environmental data
- `fa-store` - Retail/sales data
- `fa-users` - Customer analytics
- `fa-globe` - Geographic data
- `fa-money-bill` - Financial data

## Testing Your Changes

After updating the projects:

1. Save the file
2. The development server will auto-reload
3. Check the Projects section on the website
4. Verify all links work correctly
5. Test on mobile view

## Tips

- Keep descriptions concise but informative (2-3 sentences)
- Limit technologies to 4-5 most relevant ones
- Use action words in descriptions (Analyzed, Developed, Implemented, etc.)
- Ensure all external links open in new tabs (handled automatically)
- Choose icons that represent the project type or main technology

## Need Help?

- Font Awesome Icons: https://fontawesome.com/icons
- React Documentation: https://react.dev
- If you need to add images to projects, let me know and I can help extend the component