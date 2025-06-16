import React from 'react';
import { Link } from 'react-router-dom';
import { FaCode, FaUsers, FaCalendarAlt, FaTag } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  // Function to capitalize first letter
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-800">{project.name}</h3>
          <span className="px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-800">
            {capitalizeFirstLetter(project.category)}
          </span>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags && project.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <FaUsers className="text-gray-400" />
            <span>{project.members?.length || 0} members</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCalendarAlt className="text-gray-400" />
            <span>{new Date(project.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
      
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
        <Link 
          to={`/projects/${project.id}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-800"
        >
          <FaCode className="mr-2" />
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard; 