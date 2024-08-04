import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ProjectsSection = ({ projects }) => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300, // Ajuster le montant de défilement si nécessaire
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative px-20 py-2">
     <div className="flex items-center justify-between mb-6 pl-5">
        <h2 className="text-white text-4xl font-bold">Other Projects</h2>
        <Link to="/project-page">
        <button className="ml-4 px-4 py-2 text-white border border-white rounded-full hover:bg-gray-400 transition-colors duration-300">
          View All Projects
        </button></Link>
        </div>
      <div className="flex overflow-x-auto space-x-9 scrollbar-hide p-4" ref={scrollContainerRef}>
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex-shrink-0 w-[500px] text-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-2xl"
            />
            <div className="p-4">
              <div className="flex items-center justify-between mt-2">
                <h3 className="text-2xl font-bold max-w-xs truncate">{project.title}</h3>
                <Link to={`/project/${project.id}`} >
                <button className=" px-4 py-2 bg-white text-black rounded-full hover:bg-gray-400 transition-colors duration-300">
                  View Project <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="2xs" />
                </button></Link>
              </div>
              <p className="text-gray-300 text-sm max-w-xs truncate">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center space-x-4 mt-4">
        <button
          className="text-white text-2xl border border-gray-500 px-8 py-1 rounded-full hover:bg-gray-900"
          onClick={scrollLeft}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button
          className="text-white text-2xl border border-gray-500 px-8 py-1 bg-transparent rounded-full hover:bg-gray-900"
          onClick={scrollRight}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default ProjectsSection;
