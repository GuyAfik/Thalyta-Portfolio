import React from 'react'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()
  
  const contactInfo = {
    email: 'thalytasa@gmail.com',
    linkedin: 'https://www.linkedin.com/in/thalyta-marques-dos-santos-b91591378/',
    github: 'https://github.com/Thalyta99'
  }

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} Thalyta Marques Dos Santos. All rights reserved.</p>
        <div className="social-links">
          <a 
            href={contactInfo.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a 
            href={contactInfo.github} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a 
            href={`mailto:${contactInfo.email}`}
            aria-label="Email"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer