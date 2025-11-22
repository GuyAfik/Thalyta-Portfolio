import React from 'react'
import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <p>
            I am a passionate Data Analyst with expertise in transforming complex datasets 
            into meaningful insights that drive business decisions. With a strong foundation 
            in statistical analysis, data visualization, and business intelligence, I help 
            organizations unlock the value hidden in their data.
          </p>
          <p>
            My approach combines technical proficiency with strategic thinking, ensuring 
            that data-driven recommendations align with business objectives and deliver 
            measurable results.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About