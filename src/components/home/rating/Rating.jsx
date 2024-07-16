import React from 'react'
import './Rating.css'

function Rating() {
  return (
    <div>
      <div className={`project-content `}>
      <div className="project-header">
        <b className="project-date">14</b>
        <div className="completed-projects">Completed projects</div>
      </div>
      <div className="calculator-name">
        <b className="b">5.0</b>
        <div className="average-rating">Average rating</div>
      </div>
    </div>
    </div>
  )
}

export default Rating
