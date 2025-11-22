import React from 'react'
import './Hero.css'

function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h2 className="hero-title">Data Analyst</h2>
          <h1 className="hero-name">Thalyta Marques Dos Santos</h1>
          <p className="hero-description">
            Transforming data into actionable insights through advanced analytics, 
            visualization, and strategic thinking.
          </p>
          <div className="hero-buttons">
            <button
              onClick={() => scrollToSection('projects')}
              className="btn btn-primary"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection('cv')}
              className="btn btn-secondary"
            >
              View CV
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn btn-secondary"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero