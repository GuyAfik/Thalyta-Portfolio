# CV Update Guide

This guide explains how to update your CV content on the portfolio website dynamically.

## Overview

The CV section is now powered by a JSON data file, making it easy to update your CV without touching any code. All CV content is stored in a single file: `src/data/cvData.json`

## How to Update Your CV

### Step 1: Edit the JSON Data File

Open the file `src/data/cvData.json` and update the relevant sections:

```json
{
  "personalInfo": {
    "name": "Your Full Name",
    "title": "Your Job Title",
    "phone": "Your Phone Number",
    "email": "your.email@example.com"
  },
  "profile": "Your professional summary/profile text here...",
  "projects": [
    "Project 1 description",
    "Project 2 description",
    "Project 3 description"
  ],
  "education": [
    {
      "institution": "School/Course Name",
      "period": "Start Date – End Date",
      "achievement": "Any special achievement or GPA",
      "highlights": [
        {
          "title": "Skill Area 1",
          "description": "What you learned or accomplished"
        },
        {
          "title": "Skill Area 2",
          "description": "What you learned or accomplished"
        }
      ]
    }
  ],
  "technicalSkills": [
    {
      "category": "Category Name (e.g., Programming)",
      "skills": "Skill 1, Skill 2, Skill 3"
    }
  ],
  "languages": [
    {
      "name": "Language Name",
      "level": "Proficiency Level"
    }
  ],
  "cvPdfPath": "/Thalyta-Portfolio/assets/Thalyta_Marques_CV.pdf"
}
```

### Step 2: Update the PDF File (if needed)

If you have a new CV PDF:

1. Replace the file at `public/assets/Thalyta_Marques_CV.pdf` with your new PDF
2. Keep the same filename, or update the `cvPdfPath` in `cvData.json` if you use a different name

### Step 3: Test Locally

Run the development server to preview your changes:

```bash
npm run dev
```

Open your browser to `http://localhost:5173` and check the CV section.

### Step 4: Deploy to GitHub Pages

Once you're satisfied with the changes:

```bash
npm run deploy
```

This will build and deploy your updated portfolio to GitHub Pages.

## JSON Structure Explained

### Personal Info
- **name**: Your full name as it appears on your CV
- **title**: Your professional title (e.g., "Data Analyst", "Software Engineer")
- **phone**: Your contact phone number
- **email**: Your contact email address

### Profile
A brief professional summary describing your experience, skills, and career goals.

### Projects
An array of strings, each describing a project you've worked on. Keep them concise.

### Education
An array of education entries. Each entry contains:
- **institution**: Name of the school, course, or program
- **period**: Time period (e.g., "March 2024 – August 2024")
- **achievement**: Any notable achievement (e.g., "Graduated with Excellence")
- **highlights**: Array of skill areas learned, each with:
  - **title**: The skill area name
  - **description**: What you learned or accomplished

### Technical Skills
An array of skill categories. Each category contains:
- **category**: The category name (e.g., "Programming Languages", "Databases")
- **skills**: Comma-separated list of skills in that category

### Languages
An array of languages you speak. Each entry contains:
- **name**: Language name
- **level**: Your proficiency level (e.g., "Native", "Fluent", "Intermediate")

### CV PDF Path
The path to your CV PDF file. If deploying to GitHub Pages, use the format:
`/Thalyta-Portfolio/assets/filename.pdf`

## Tips

1. **Keep it concise**: The CV section is meant to be a summary. Keep descriptions brief and impactful.

2. **Use proper JSON syntax**: 
   - Strings must be in double quotes
   - No trailing commas after the last item in arrays or objects
   - Use escape characters for special characters (e.g., `\"` for quotes inside strings)

3. **Test before deploying**: Always run `npm run dev` to test your changes locally before deploying.

4. **Backup your data**: Keep a copy of your `cvData.json` file before making major changes.

5. **Validate JSON**: Use a JSON validator (like jsonlint.com) if you're unsure about your JSON syntax.

## Example: Adding a New Education Entry

```json
"education": [
  {
    "institution": "John Bryce Data Analyst Course",
    "period": "March 2024 – August 2024",
    "achievement": "Graduated with Excellence (Final GPA: 100)",
    "highlights": [
      {
        "title": "Data Analysis & Querying",
        "description": "Advanced SQL for complex queries"
      }
    ]
  },
  {
    "institution": "New Course Name",
    "period": "January 2025 – June 2025",
    "achievement": "Certificate of Completion",
    "highlights": [
      {
        "title": "New Skill",
        "description": "Description of what you learned"
      }
    ]
  }
]
```

## Troubleshooting

**Problem**: Website shows blank CV section
- **Solution**: Check your JSON syntax. Use a JSON validator to find errors.

**Problem**: PDF download doesn't work
- **Solution**: Verify the `cvPdfPath` matches your actual file location in `public/assets/`

**Problem**: Changes don't appear on the deployed site
- **Solution**: Make sure you ran `npm run deploy` after making changes. Clear your browser cache.

## Need Help?

If you encounter issues:
1. Check the browser console for error messages (F12 → Console tab)
2. Verify your JSON syntax using an online validator
3. Make sure all file paths are correct
4. Test locally before deploying