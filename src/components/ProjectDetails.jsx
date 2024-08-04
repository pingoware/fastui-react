import React from 'react';
import { useParams } from 'react-router-dom';

function ProjectDetails() {
  const { id } = useParams();

  // Remplacez cette logique par la récupération des détails du projet via une API ou un contexte global
  const project = {
    title: "Funder",
    image: "/image-15-1@2x.png",
    description: "Building Funder’s Comprehensive Business Calculator to democratize financial analysis for startups",
    technologies: ["Jira", "Webflow", "Firebolt", "Figma"],
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <img src={project.image} alt="Project Image" className="rounded-md w-full object-cover" />
      <p className="text-lg mb-4">{project.description}</p>
      <div className="flex gap-2">
        {project.technologies.map((tech, index) => (
          <div key={index} className="w-12 h-12 flex items-center justify-center shadow-md rounded-full bg-gray-800 border border-white/50">
            <img alt={tech} src={`/${tech.toLowerCase()}.svg`} className="w-7 h-7" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectDetails;
