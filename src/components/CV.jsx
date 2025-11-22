import React from 'react'
import './CV.css'
import cvData from '../data/cvData.json'

function CV() {
  return (
    <section id="cv" className="cv-section">
      <div className="container">
        <h2 className="section-title">Curriculum Vitae</h2>
        <div className="cv-content">
          <div className="cv-preview">
            <div className="cv-header">
              <h3>{cvData.personalInfo.name}</h3>
              <p className="cv-subtitle">{cvData.personalInfo.title}</p>
              <div className="cv-contact-info">
                <span><i className="fas fa-phone"></i> {cvData.personalInfo.phone}</span>
                <span><i className="fas fa-envelope"></i> {cvData.personalInfo.email}</span>
              </div>
            </div>
            
            <div className="cv-section-block">
              <h4><i className="fas fa-user"></i> Profile</h4>
              <p className="cv-profile-text">
                {cvData.profile}
              </p>
            </div>

            <div className="cv-section-block">
              <h4><i className="fas fa-project-diagram"></i> Projects</h4>
              <ul className="cv-projects-list">
                {cvData.projects.map((project, index) => (
                  <li key={index}>{project}</li>
                ))}
              </ul>
            </div>

            <div className="cv-section-block">
              <h4><i className="fas fa-graduation-cap"></i> Education</h4>
              {cvData.education.map((edu, index) => (
                <div key={index} className="cv-item">
                  <h5>{edu.institution}</h5>
                  <p className="cv-company">{edu.period}</p>
                  <p className="cv-achievement"><strong>{edu.achievement}</strong></p>
                  <ul>
                    {edu.highlights.map((highlight, hIndex) => (
                      <li key={hIndex}>
                        <strong>{highlight.title}:</strong> {highlight.description}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="cv-section-block">
              <h4><i className="fas fa-tools"></i> Technical Skills</h4>
              <div className="cv-skills-grid">
                {cvData.technicalSkills.map((skill, index) => (
                  <div key={index} className="cv-skill-category">
                    <h5>{skill.category}</h5>
                    <p>{skill.skills}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="cv-section-block">
              <h4><i className="fas fa-language"></i> Languages</h4>
              <div className="cv-languages">
                {cvData.languages.map((language, index) => (
                  <div key={index} className="cv-language-item">
                    <span className="language-name">{language.name}</span>
                    <span className="language-level">{language.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="cv-download">
            <a href={cvData.cvPdfPath} download className="btn btn-download">
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