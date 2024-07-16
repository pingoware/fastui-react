import React from 'react'
import './Funder.css'

import Figma from './Figma';




function Funder(props) {

    //console.log(Time)
  return (
    <div >
     <section className="header ">
      <img className="image-15-icon" alt="" src={props.image} />
      <div className="july-23-2023-wrapper">
        <div className="july-23-2023">{props.time}</div>
      </div>
      <div className="client-name">
        <h1 className="funder">{props.title}</h1>
      </div>
      <div className="project-title">
        <div className="building-funders-comprehensiv">
          {props.body}
        </div>
      </div>
      <div className="project-details">
        <div className="project-categories">
          <div className="design-category">
            <button className="category-items">
              <div className="design">Design</div>
            </button>
            <button className="item-development">
              <div className="development">Development</div>
            </button>
            <button className="maintenance-wrapper">
              <div className="maintenance">Maintenance</div>
            </button>
          </div>
          <div className="tools-category">
            <div className="tools-items" />
          </div>
         <Figma ele={props.ele}/>
        </div>
        <button className="page-content">
          <div className="view-project">View Project</div>
          <div className="arrow-up-right-wrapper">
            <img
              className="arrow-up-right-icon"
              alt=""
              src="/arrowupright.svg"
            />
          </div>
        </button>
      </div>
    </section>
    </div>
  )
}

export default Funder