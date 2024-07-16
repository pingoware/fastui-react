import React from 'react'
import './Ourservices.css'
import Marketing from './Marketing'

function Ourservices() {
  return (
    <div className='services1'>
      <div className="services-block">
        <div className="services-content">
          <div className="services-title-parent">
            <div className="services-title">
              <h1 className="our-services1">Our Services</h1>
              <div className="our-mission-is1">
                Our mission is to help start-ups and companies reduce software
                development costs and accelerate their time to market
              </div>
            </div>
            <div className="with-visualize-you1">
              With Visualize, you don't need any prior editing experience. Our
              user-friendly interface and intuitive controls make it simple to
              get started
            </div>
            <button className="talk-button">
              <div className="lets-talk1">Let’s Talk</div>
            </button>
          </div>
          <Marketing />
        </div>
      </div>
    </div>
  )
}

export default Ourservices
