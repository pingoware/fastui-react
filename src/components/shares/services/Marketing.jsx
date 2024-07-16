import React from 'react'
import './Marketing.css'

function Marketing() {
  return (
    <div className='fitur'>
       <div className="feature-list">
        <div className="feature-row">
          <img
            className="feature-icon"
            loading="lazy"
            alt=""
            src="/frame@2x.png"
          />
          <div className="feature-description">
            <h2 className="marketing">Marketing</h2>
            <div className="we-bring-products">
              We bring products to life using latest technologies while focusing
              on a perfect visual output through clean and maintainable code.
            </div>
          </div>
        </div>
      </div>
      <div className="feature-list1">
        <div className="frame-parent2">
          <img
            className="frame-icon"
            loading="lazy"
            alt=""
            src="/frame-1@2x.png"
          />
          <div className="design-parent">
            <h2 className="design3">Design</h2>
            <div className="we-bring-products1">
              We bring products to life using latest technologies while focusing
              on a perfect visual output through clean and maintainable code.
            </div>
          </div>
        </div>
      </div>
      <div className="feature-list2">
        <div className="frame-parent3">
          <img
            className="frame-icon1"
            loading="lazy"
            alt=""
            src="/frame-2@2x.png"
          />
          <div className="development-parent">
            <h2 className="development3">Development</h2>
            <div className="we-bring-products2">
              We bring products to life using latest technologies while focusing
              on a perfect visual output through clean and maintainable code.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Marketing
