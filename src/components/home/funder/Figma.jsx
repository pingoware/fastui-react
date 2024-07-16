import React from 'react'
import './Figma.css'

function Figma(props) {
  return (
    <div className='figma-item'>
      <button className="item-figma">
        <img alt="" src={`/${props.ele.Figma}.svg`} />
        <div className="figma">{props.ele.Figma}</div>
      </button>
      <div className="webflow-item">
        <img alt="" src="/jira.svg" />
      </div>
      <div className="firebolt-item">
        <div className="item-firebolt">
          <img
            alt=""
            src="/webflow.svg"
          />
        </div>
      </div>
      <div className="action-icon">
        <img
          alt=""
          src="/firebolt.svg"
        />
      </div>
    </div>
  )
}

export default Figma
