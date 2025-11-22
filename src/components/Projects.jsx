import React from 'react'
import './Projects.css'

function Projects() {
  const projects = [
    {
      title: 'Amazon Forest Deforestation Analysis',
      description: 'Comprehensive data analysis project examining deforestation patterns in the Amazon rainforest using Python and Pandas. Analyzed historical data to identify trends, patterns, and key factors contributing to deforestation.',
      technologies: ['Python', 'Pandas', 'Data Visualization', 'Statistical Analysis'],
      link: 'https://github.com/thalyta-marques/amazon-deforestation-analysis',
      icon: 'fa-tree'
    },
    {
      title: 'AdventureWorks Database Analysis',
      description: 'Business intelligence project analyzing the AdventureWorks database using Power BI. Created interactive dashboards to visualize sales performance, customer behavior, and product trends for data-driven decision making.',
      technologies: ['Power BI', 'SQL', 'Data Modeling', 'Dashboard Design'],
      link: 'https://github.com/thalyta-marques/adventureworks-powerbi',
      icon: 'fa-chart-line'
    },
    {
      title: 'Super Store Sales Analysis',
      description: 'Advanced Excel project analyzing retail sales data for a Super Store. Utilized Pivot Tables, Power Query, and advanced formulas to uncover insights about sales trends, customer segments, and product performance.',
      technologies: ['Excel', 'Pivot Tables', 'Power Query', 'Data Analysis'],
      link: '#',
      icon: 'fa-store'
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="projects-intro">
          Here are some of my recent data analysis projects showcasing my skills in Python, Power BI, SQL, and Excel.
        </p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-icon">
                <i className={`fas ${project.icon}`}></i>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              {project.link && project.link !== '#' && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Project <i className="fas fa-external-link-alt"></i>
                </a>
              )}
              {project.link === '#' && (
                <span className="project-link-disabled">
                  Available on Request
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects