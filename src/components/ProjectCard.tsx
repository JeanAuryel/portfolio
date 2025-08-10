/**
 * @copyright 2025 jeanauryel.dev
 * @license Apache-2.0
 */

import PropTypes from "prop-types";

/**
 * ProjectCard Component
 * @param {Object} props
 * @param {string} props.imgSrc - Source URL of the project image
 * @param {string} props.title - Title of the project
 * @param {string[]} props.tags - Array of tag strings
 * @param {string|null} props.projectLink - URL link to the project (optional)
 * @param {string} props.classes - Additional CSS classes (optional)
 */
const ProjectCard = ({
  imgSrc,
  title,
  tags,
  projectLink = null,
  classes = ""
}: { imgSrc: string; title: string; tags: string[]; projectLink: string | null; classes?: string; }) => {
  return (
    <div className={`relative bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group ${classes}`}>
      
      <figure className="relative overflow-hidden">
        <img 
          src={imgSrc} 
          alt={title} 
          loading="lazy" 
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </figure>

      <div className="p-6">
        
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
            {title}
          </h3>

          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
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

      {projectLink && (
        <a 
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-10"
          aria-label={`Voir le projet ${title}`}
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
};

export default ProjectCard;