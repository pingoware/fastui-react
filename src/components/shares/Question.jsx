import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function Question({ questions }) {
  return (
    <div className="questions bg-[#090909] text-white font-space-grotesk px-8 py-20 lg:py-11">
      <div className="question-block max-w-6xl mx-auto space-y-16">
        <h1 className="lets-take-a text-4xl lg:text-5xl font-semibold">
          Let's take a look at things you have on your mind.
        </h1>
        <div className="f-a-q space-y-8 text-xl lg:text-2xl">
          {questions.map((question, index) => (
            <div
              key={index}
              className="question-list flex justify-between items-center border-b border-gray-200 py-4 lg:py-6"
            >
              <h3 className="flex-1">{question}</h3>
              <FontAwesomeIcon icon={faPlus} className="text-2xl" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Question;
