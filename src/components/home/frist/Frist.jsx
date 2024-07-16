import React from 'react'
import './Frist.css'
import Header from '../../shares/header/Header'
import Get from '../gettoknow/Get'
import Rating from '../rating/Rating'

function Frist() {
  return (
    <section className="v3-parent">
    <div className="v3">
      <div className="mesh-grad-parent">
          <img className="mesh-grad-icon" alt="" src="/meshgrad@2x.png" />
          <img className="grain-texture-icon" alt="" src="/graintexture@2x.png"/>
      </div>
       <div className="home-link">
          <Header />
          <div className="story-title-wrapper">
            <div className="story-title">
              <h1 className="lets-craft-your">
              Let's craft your<br/>brand's unique<br/>story together.
              </h1>
              <div className="project-image">
                <div className="our-thing-is">
                Our thing is creating cool experiences for<br/>startups and tech
                  companies. We make sure<br/>users and business needs are
                  simpatico.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project-information">
          <Rating />
          <div className="list-design">
            <button className="list-development">
              <div className="our-stories">Our stories</div>
              <div className="play-wrapper">
                <img className="play-icon" alt="" src="/play.svg" />
              </div>
            </button>
          </div>
        </div>
      </div>
      <Get />
    </section>
  )
}

export default Frist
