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
            </div>
            
            <div className="cv-section-block">
              <h4><i className="fas fa-briefcase"></i> Professional Experience</h4>
              <div className="cv-item">
                <h5>Senior Data Analyst</h5>
                <p className="cv-company">Company Name | 2021 - Present</p>
                <ul>
                  <li>Led data analysis initiatives resulting in 25% improvement in operational efficiency</li>
                  <li>Developed automated reporting systems reducing manual work by 40%</li>
                  <li>Collaborated with cross-functional teams to implement data-driven strategies</li>
                </ul>
              </div>
              <div className="cv-item">
                <h5>Data Analyst</h5>
                <p className="cv-company">Previous Company | 2019 - 2021</p>
                <ul>
                  <li>Analyzed customer behavior data to optimize marketing campaigns</li>
                  <li>Created interactive dashboards for executive decision-making</li>
                  <li>Performed statistical analysis to identify business opportunities</li>
                </ul>
              </div>
            </div>

            <div className="cv-section-block">
              <h4><i className="fas fa-graduation-cap"></i> Education</h4>
              <div className="cv-item">
                <h5>Master's in Data Science</h5>
                <p className="cv-company">University Name | 2017 - 2019</p>
              </div>
              <div className="cv-item">
                <h5>Bachelor's in Statistics</h5>
                <p className="cv-company">University Name | 2013 - 2017</p>
              </div>
            </div>

            <div className="cv-section-block">
              <h4><i className="fas fa-certificate"></i> Certifications</h4>
              <ul className="cv-certifications">
                <li>Google Data Analytics Professional Certificate</li>
                <li>Microsoft Certified: Data Analyst Associate</li>
                <li>Tableau Desktop Specialist</li>
                <li>Python for Data Science (Coursera)</li>
              </ul>
            </div>

            <div className="cv-section-block">
              <h4><i className="fas fa-tools"></i> Technical Skills</h4>
              <div className="cv-skills-list">
                <span className="cv-skill-tag">Python</span>
                <span className="cv-skill-tag">R</span>
                <span className="cv-skill-tag">SQL</span>
                <span className="cv-skill-tag">Tableau</span>
                <span className="cv-skill-tag">Power BI</span>
                <span className="cv-skill-tag">Excel</span>
                <span className="cv-skill-tag">Machine Learning</span>
                <span className="cv-skill-tag">Statistical Analysis</span>
              </div>
            </div>
          </div>
          
          <div className="cv-download">
            <a href="/assets/Thalyta_Marques_CV.pdf" download className="btn btn-download">
              <i className="fas fa-download"></i> Download CV (PDF)
            </a>
            <p className="cv-download-note">
              Click to download a detailed PDF version of my curriculum vitae
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CV