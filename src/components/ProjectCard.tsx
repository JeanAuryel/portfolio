/**
 * @copyright 2025 jeanauryel.dev
 * @license Apache-2.0
 */

import PropTypes from "prop-types";
import { useState } from "react";
import ProjectFeatureModal from "./ProjectFeatureModal";

/**
 * ProjectCard Component
 * @param {Object} props
 * @param {string} props.imgSrc - Source URL of the project image
 * @param {string} props.title - Title of the project
 * @param {string[]} props.tags - Array of tag strings
 * @param {string|null} props.projectLink - URL link to the project (optional)
 * @param {string} props.classes - Additional CSS classes (optional)
 * @param {string} props.description - Project description for the back side
 * @param {Object} props.techStack - Technical stack object
 * @param {Object} props.project - Full project object for feature modal
 */
const ProjectCard = ({
  imgSrc,
  title,
  tags,
  projectLink = null,
  classes = "",
  description = "",
  techStack = {},
  project = null
}: { 
  imgSrc: string; 
  title: string; 
  tags: string[]; 
  projectLink: string | null; 
  classes?: string;
  description?: string;
  techStack?: any;
  project?: any;
}) => {
  const [isFeatureModalOpen, setIsFeatureModalOpen] = useState(false);

  const handleCardClick = () => {
    if (project && project.featureImages && project.featureImages.length > 0) {
      setIsFeatureModalOpen(true);
    } else if (projectLink) {
      window.open(projectLink, '_blank', 'noopener,noreferrer');
    }
  };
  return (
    <div className={`relative w-full h-80 perspective-1000 group ${classes}`}>
      <div className="flip-card-inner w-full h-full relative transition-transform duration-700 preserve-3d group-hover:rotate-y-180">
        
        {/* Face avant */}
        <div className="absolute w-full h-full bg-white rounded-lg shadow-md overflow-hidden backface-hidden">
          <figure className="relative overflow-hidden h-48">
            <img 
              src={imgSrc} 
              alt={title} 
              loading="lazy" 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </figure>

          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
              {title}
            </h3>

            <div className="flex flex-wrap gap-2 mb-4">
              {tags.slice(0, 3).map((tag, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex justify-end">
              <span 
                className="material-symbols-rounded text-gray-600 group-hover:text-blue-600 transition-colors duration-300"
                aria-hidden="true"
              >
                arrow_outward
              </span>
            </div>
          </div>
        </div>

        {/* Face arrière */}
        <div className="absolute w-full h-full bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg shadow-md overflow-hidden backface-hidden rotate-y-180 p-6">
          <div className="h-full flex flex-col justify-between">
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {title}
              </h3>
              
              <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                {description}
              </p>

              <div className="space-y-3">
                {Object.entries(techStack).map(([category, technologies]) => 
                  Array.isArray(technologies) && technologies.length > 0 && (
                    <div key={category}>
                      <h4 className="text-xs font-semibold text-gray-800 uppercase tracking-wide mb-1">
                        {category}
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {technologies.slice(0, 3).map((tech, index) => (
                          <span 
                            key={index}
                            className="px-2 py-1 text-xs bg-white/70 text-gray-800 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="flex justify-center mt-4">
              <span className="text-sm text-gray-600 font-medium">
                {project && project.featureImages && project.featureImages.length > 0 
                  ? "Cliquer pour voir les fonctionnalités"
                  : "Cliquer pour voir le projet"
                }
              </span>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={handleCardClick}
        className="absolute inset-0 z-10 cursor-pointer"
        aria-label={project && project.featureImages && project.featureImages.length > 0 
          ? `Voir les fonctionnalités de ${title}`
          : `Voir le projet ${title}`
        }
      />

      {project && (
        <ProjectFeatureModal
          isOpen={isFeatureModalOpen}
          onClose={() => setIsFeatureModalOpen(false)}
          project={project}
        />
      )}
    </div>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  projectLink: PropTypes.string, // Optional - can be null or undefined
  classes: PropTypes.string,
  description: PropTypes.string,
  techStack: PropTypes.object,
  project: PropTypes.object,
};

export default ProjectCard;