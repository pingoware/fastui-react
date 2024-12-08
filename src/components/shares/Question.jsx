import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const answers = [
  "We provide end-to-end SaaS development services including product strategy, UI/UX design, front-end and back-end development, cloud deployment, and post-launch support. Our team can handle projects from initial concept to a fully scalable and secure SaaS solution.",
  "We have experience building SaaS platforms for various industries, such as finance, education, recruitment, e-commerce, and more. We tailor our solutions to meet the unique needs of different sectors.",
  "Our tech stack includes modern frameworks and tools such as React, Vue.js for front-end development; Node.js, Python (Django/Flask); and cloud services like AWS, Azure, and Google Cloud for scalable infrastructure.",
  "The timeline depends on the complexity and scope of the project. For simple applications, it might take 3-6 months, while larger, more complex solutions could take 9-12 months or longer. We provide detailed estimates during the initial consultation."
];

function Question({ questions }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="questions bg-[#090909] text-white font-space-grotesk px-8 py-20 lg:py-11">
      <div className="question-block max-w-6xl mx-auto space-y-16">
        <h1 className="lets-take-a text-4xl lg:text-5xl font-semibold">
          Let's take a look at things you have on your mind.
        </h1>
        <div className="f-a-q space-y-8 text-xl lg:text-2xl">
          {questions.map((question, index) => (
            <div key={index} className="question-list border-b border-gray-200 py-4 lg:py-6">
              <div className="flex justify-between items-center">
                <h3 className="flex-1">{question}</h3>
                <FontAwesomeIcon
                  icon={openIndex === index ? faMinus : faPlus}
                  className="text-2xl cursor-pointer"
                  onClick={() => toggleAnswer(index)}
                />
              </div>
              <div
                className={`overflow-hidden transition-all duration-1000 ease-in-out ${
                  openIndex === index ? 'max-h-screen' : 'max-h-0'
                }`}
              >
                {openIndex === index && (
                  <p className="text-gray-300 mt-2 text-base lg:text-lg">
                    {answers[index]}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Question;
