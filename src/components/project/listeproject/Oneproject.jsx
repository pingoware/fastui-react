import React from 'react'
import './Oneproject.css'

function Oneproject() {
  return (
    <div>
      <div className="project-row ">
      <div className="project-row1" >
        <div className="project-row2">
          <div className="july-23-2023">July 23, 2023</div>
        </div>
      </div>
      <div className="project-row3">
        <div className="project-row4">
          <h1 className="funder" >
            
          </h1>
          <div className="building-funders-comprehensiv">
            Building Funder’s Comprehensive Business Calculator to democratize
            financial analysis for startups
          </div>
        </div>
        <button className="project-row5">
          <div className="view-project">View Project</div>
          <div className="project-row6">
            <img
              className="arrow-up-right-icon"
              alt=""
              src="/arrowupright.svg"
            />
          </div>
        </button>
      </div>
      <div className="project-row7">
        <div className="project-row8">
          <button className="project-row9">
            <div className="design">Design</div>
          </button>
          <button className="project-row10">
            <div className="development">Development</div>
          </button>
          <button className="project-row11">
            <div className="maintenance">Maintenance</div>
          </button>
        </div>
        <div className="project-row12">
          <div className="project-row13">
            <img className="jira-icon" loading="lazy" alt="" src="/jira.svg" />
          </div>
          <div className="project-row14">
            <div className="project-row15">
              <img className="webflow-icon" alt="" src="/webflow.svg" />
            </div>
          </div>
          <div className="project-row16">
            <img
              className="firebolt-icon"
              loading="lazy"
              alt=""
              src="/firebolt.svg"
            />
          </div>
          <button className="project-row17">
            <img className="figma-icon" alt="" src="/figma.svg" />
            <div className="figma">Figma</div>
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Oneproject
