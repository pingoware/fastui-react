import React from 'react'
import './Ourporfolio.css'
import Header from '../../shares/header/Header'

function Ourporfolio() {
  return (
    <>
    <div className='v'>
      <div className="rectangle-parent">
        <img className="rectangle-icon" alt="" src="/rectangle@2x.png" />
        <img className="grain-texture-icon" alt="" src="/graintexture@2x.png" />
      </div>
      <div className="home-link">
      <Header />
      </div>
      <div className="description-wrapper">
        <div className="description">
          <h1 className="our-portfolio-project">Our portfolio project</h1>
          <div className="our-thing-is-creating-cool-exp-wrapper">
            <div className="our-thing-is">
              Our thing is creating cool experiences for startups and tech
              companies. We make sure users and business needs are simpatico.
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Ourporfolio
