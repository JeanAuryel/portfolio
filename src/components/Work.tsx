/**
 * @copyright 2025 jeanauryel.dev
 * @license Apache-2.0
 */

import ProjectCard from "./ProjectCard";
import { useLanguage } from "../contexts/LanguageContext";
import { getProjectsByCategory } from "../data/projects";


const Work = () => {
    const { t } = useLanguage();

    const categories = ['fullstack', 'desktop', 'mobile', 'frontend'];

    return (
<section 
    id="work"
    className="section"
>
    <div className="container">

        <h2 className="headline-2 mb-8 text-center">
            {t('work.title')}
        </h2>

        {categories.map((category) => {
            const categoryProjects = getProjectsByCategory(category);
            if (categoryProjects.length === 0) return null;

            return (
                <div key={category} className="mb-12">
                    <h3 className="headline-3 mb-6 text-center">
                        {t(`work.categories.${category}.title`)}
                    </h3>
                    
                    <p className="text-center text-[#060d0e]/70 mb-8 max-w-2xl mx-auto">
                        {t(`work.categories.${category}.description`)}
                    </p>
                    
                    <div className="grid grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] gap-4 mb-8">
                        {categoryProjects.map((project) => (
                            <ProjectCard 
                                key={project.id}
                                imgSrc={project.imgSrc || '/images/default-project.jpg'}
                                title={project.name}
                                tags={[...Object.values(project.techStack).flat()].slice(0, 4)}
                                projectLink={project.demoLink || project.githubLink}
                                description={project.description}
                                techStack={project.techStack}
                                project={project}
                            />
                        ))}
                    </div>
                </div>
            );
        })}

    </div>
</section>
    )
}


export default Work;