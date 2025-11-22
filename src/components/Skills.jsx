import React from 'react'
import './Skills.css'

function Skills() {
  const skills = [
    {
      icon: 'fa-chart-line',
      title: 'Data Analysis',
      description: 'Statistical analysis, data mining, and pattern recognition using Python, R, and SQL'
    },
    {
      icon: 'fa-chart-bar',
      title: 'Data Visualization',
      description: 'Creating compelling dashboards and reports with Tableau, Power BI, and matplotlib'
    },
    {
      icon: 'fa-database',
      title: 'Database Management',
      description: 'SQL, PostgreSQL, MySQL, and NoSQL databases for efficient data storage and retrieval'
    },
    {
      icon: 'fa-brain',
      title: 'Machine Learning',
      description: 'Predictive modeling, classification, and regression using scikit-learn and TensorFlow'
    },
    {
      icon: 'fa-code',
      title: 'Programming',
      description: 'Python, R, SQL, and Excel for data manipulation and automation'
    },
    {
      icon: 'fa-lightbulb',
      title: 'Business Intelligence',
      description: 'Translating data insights into actionable business strategies and recommendations'
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
                <i className={`fas ${skill.icon}`}></i>
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