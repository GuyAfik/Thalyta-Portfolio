import React from 'react'
import './Contact.css'

function Contact() {
  // Thalyta's actual contact information
  const contactInfo = {
    email: 'thalytasa@gmail.com',
    phone: '058-6665191',
    whatsapp: '9720586665191', // Format: 972 (Israel) + 058-6665191 without leading 0
    linkedin: 'https://www.linkedin.com/in/thalyta-marques-dos-santos-b91591378/',
    location: 'Israel'
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <p className="contact-intro">
            I'm always interested in new opportunities and collaborations. 
            Feel free to reach out through any of the following channels:
          </p>
          
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h4>Email</h4>
                <p>{contactInfo.email}</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <div>
                <h4>Phone</h4>
                <p>{contactInfo.phone}</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h4>Location</h4>
                <p>{contactInfo.location}</p>
              </div>
            </div>
          </div>

          <div className="contact-buttons">
            <a 
              href={`mailto:${contactInfo.email}`} 
              className="contact-btn gmail"
              aria-label="Send email"
            >
              <i className="fas fa-envelope"></i>
              <span>Email Me</span>
            </a>
            <a 
              href={`https://wa.me/${contactInfo.whatsapp}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-btn whatsapp"
              aria-label="Contact via WhatsApp"
            >
              <i className="fab fa-whatsapp"></i>
              <span>WhatsApp</span>
            </a>
            <a 
              href={contactInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-btn linkedin"
              aria-label="Connect on LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact