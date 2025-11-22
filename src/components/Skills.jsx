import React from 'react'
import './Skills.css'

function Skills() {
  const skills = [
    {
      icon: 'fa-chart-bar',
      title: 'Power BI',
      description: 'Designed and built interactive dashboards and reports for business intelligence and data visualization'
    },
    {
      icon: 'fa-file-excel',
      title: 'MS Excel',
      description: 'Advanced Excel skills including Pivot Tables, Power Query, and complex formulas for in-depth data analysis'
    },
    {
      icon: 'fa-database',
      title: 'SQL',
      description: 'Advanced SQL for complex queries, data extraction, manipulation, and database management'
    },
    {
      icon: 'fa-python',
      title: 'Python (Pandas)',
      description: 'Proficient in using Pandas for data cleaning, transformation, and comprehensive data analysis'
    },
    {
      icon: 'fa-code-branch',
      title: 'Version Control',
      description: 'Git and GitHub for version control, collaboration, and project management'
    },
    {
      icon: 'fa-desktop',
      title: 'Operating Systems',
      description: 'Experienced with Windows, Linux, and macOS environments for versatile development'
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Core Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">
                <i className={`fab ${skill.icon}`}></i>
              </div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills