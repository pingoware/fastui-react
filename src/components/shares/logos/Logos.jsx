import React from 'react'
import './Logos.css'

function Logos() {
  return (
        <>
    
    <div className='featured '>
      <div className="featured-logos">
        <div className="projects-featured-on-parent">
          <div className="projects-featured-on">Projects featured on</div>
          <div className="rectangle-div" />
        </div>
      </div>
      <div className="logos">
        <div className="logo-row">
          <img
            className="logo-horizontal-1-icon"
            loading="lazy"
            alt=""
            src="/logo-horizontal-1@2x.png"
          />
        </div>
        <div className="second-logo">
          <img
            className="the-world-bank-logo-png2-1-icon"
            loading="lazy"
            alt=""
            src="/the-world-bank-logo-png2-1@2x.png"
            />
        </div>
        <div className="fourth-logo">
          <img
            className="image-4-icon"
            loading="lazy"
            alt=""
            src="/image-4@2x.png"
            />
        </div>
        <div className="sixth-logo">
          <img className="group-icon" loading="lazy" alt="" src="/group.svg" />
        </div>
        <img
          className="logo-spacerenovator-hp-1-icon"
          loading="lazy"
          alt=""
          src="/logo-spacerenovator-hp-1@2x.png"
        />
      </div>
    </div>
          </>
  )
}

export default Logos
