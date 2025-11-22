import React from 'react'
import './CV.css'

function CV() {
  return (
    <section id="cv" className="cv-section">
      <div className="container">
        <h2 className="section-title">Curriculum Vitae</h2>
        <div className="cv-content">
          <div className="cv-preview">
            <div className="cv-header">
              <h3>Thalyta Marques Dos Santos</h3>
              <p className="cv-subtitle">Data Analyst</p>
              <div className="cv-contact-info">
                <span><i className="fas fa-phone"></i> 058-6665191</span>
                <span><i className="fas fa-envelope"></i> thalytasa@gmail.com</span>
              </div>
            </div>
            
            <div className="cv-section-block">
              <h4><i className="fas fa-user"></i> Profile</h4>
              <p className="cv-profile-text">
                Proactive and detail-oriented Data Analyst, having recently completed the intensive Data Analyst program at John Bryce. 
                Proficient in SQL, Python (Pandas), Excel, and Power BI for data extraction, transformation, and visualization. 
                Seeking to leverage my analytical skills to turn complex data into actionable insights and contribute to a data-driven team.
              </p>
            </div>

            <div className="cv-section-block">
              <h4><i className="fas fa-project-diagram"></i> Projects</h4>
              <ul className="cv-projects-list">
                <li>Data analysis on Amazon forest deforestation with Python and Pandas</li>
                <li>Data analysis for AdventureWorks DB (Power BI)</li>
                <li>Data analysis with Excel for Super Store (Excel - download locally)</li>
              </ul>
            </div>

            <div className="cv-section-block">
              <h4><i className="fas fa-graduation-cap"></i> Education</h4>
              <div className="cv-item">
                <h5>John Bryce Data Analyst Course</h5>
                <p className="cv-company">March 2024 – August 2024</p>
                <p className="cv-achievement"><strong>Graduated with Excellence (Final GPA: 100)</strong></p>
                <ul>
                  <li><strong>Data Analysis & Querying:</strong> Advanced SQL for complex queries, data extraction, and manipulation</li>
                  <li><strong>Python for Data Analytics:</strong> Proficient in using Pandas for data cleaning, transformation, and analysis</li>
                  <li><strong>Business Intelligence & Visualization:</strong> Designed and built interactive dashboards and reports using Power BI</li>
                  <li><strong>Advanced Excel:</strong> Utilized Pivot Tables, Power Query, and advanced formulas for in-depth analysis</li>
                </ul>
              </div>
            </div>

            <div className="cv-section-block">
              <h4><i className="fas fa-tools"></i> Technical Skills</h4>
              <div className="cv-skills-grid">
                <div className="cv-skill-category">
                  <h5>BI & Visualization</h5>
                  <p>Power BI, MS Excel</p>
                </div>
                <div className="cv-skill-category">
                  <h5>Databases</h5>
                  <p>SQL</p>
                </div>
                <div className="cv-skill-category">
                  <h5>Programming Languages</h5>
                  <p>Python (Pandas)</p>
                </div>
                <div className="cv-skill-category">
                  <h5>Version Control</h5>
                  <p>Git, GitHub</p>
                </div>
                <div className="cv-skill-category">
                  <h5>Operating Systems</h5>
                  <p>Windows, Linux, macOS</p>
                </div>
              </div>
            </div>

            <div className="cv-section-block">
              <h4><i className="fas fa-language"></i> Languages</h4>
              <div className="cv-languages">
                <div className="cv-language-item">
                  <span className="language-name">Portuguese</span>
                  <span className="language-level">Native language</span>
                </div>
                <div className="cv-language-item">
                  <span className="language-name">Hebrew</span>
                  <span className="language-level">Full proficiency</span>
                </div>
                <div className="cv-language-item">
                  <span className="language-name">English</span>
                  <span className="language-level">Full proficiency</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="cv-download">
            <a href="/assets/Thalyta_Marques_CV.pdf" download className="btn btn-download">
              <i className="fas fa-download"></i> Download Full CV (PDF)
            </a>
            <p className="cv-download-note">
              Click to download the complete PDF version of the curriculum vitae
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CV