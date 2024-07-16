import React from 'react'
import './Question.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
function Question() {
  return (
    <div className='questions'>
       <div className="question-block">
        <h1 className="lets-take-a">
          Let's take a look at things you have on your mind.
        </h1>
        <div className="f-a-q">
          <div className="question-list">
            <h3 className="do-you-possess">
              Do you possess the knowledge to help me with my project?
            </h3>
            <FontAwesomeIcon icon={faPlus} />
          </div>
          <div className="question-list1">
            <h3 className="do-you-also">
              Do you also provide a creative concept for videos and images?
            </h3>
            <FontAwesomeIcon icon={faPlus} />
          </div>
          <div className="question-list2">
            <h3 className="how-can-i">How can I get a proposal?</h3>
            <FontAwesomeIcon icon={faPlus} />
          </div>
          <div className="question-list3">
            <h3 className="do-you-provide">
              Do you provide only design for my project, or development as well?
            </h3>
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Question
