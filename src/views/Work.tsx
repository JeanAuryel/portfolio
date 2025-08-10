/**
 * @copyright 2025 jeanauryel.dev
 * @license Apache-2.0
 */

import { ButtonPrimary } from "../components/Button";
import { useLanguage } from "../contexts/LanguageContext";
import translations from "../translations";


const Work = () => {
    const { t, language } = useLanguage();
    
    const projects = [
      {
        id: 1,
        imgSrc: '/images/project-1.jpg',
        title: t('work.detailedProjects.musify.title'),
        description: t('work.detailedProjects.musify.description'),
        longDescription: t('work.detailedProjects.musify.longDescription'),
        tags: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Socket.io', 'JWT'],
        projectLink: 'https://musify-5al0.onrender.com/',
        githubLink: 'https://github.com/jeanauryel/musify',
        features: translations[language].work.detailedProjects.musify.features,
        techStack: {
          frontend: ['React', 'TypeScript', 'Tailwind CSS', 'Context API'],
          backend: ['Node.js', 'Express.js', 'MongoDB', 'JWT'],
          tools: ['Git', 'Docker', 'Render', 'Figma']
        }
      },
      {
        id: 2,
        imgSrc: '/images/project-2.jpg',
        title: t('work.detailedProjects.pixstock.title'),
        description: t('work.detailedProjects.pixstock.description'),
        longDescription: t('work.detailedProjects.pixstock.longDescription'),
        tags: ['React', 'API Integration', 'Responsive Design', 'SPA'],
        projectLink: 'https://pixstock-official.vercel.app/',
        githubLink: 'https://github.com/jeanauryel/pixstock',
        features: translations[language].work.detailedProjects.pixstock.features,
        techStack: {
          frontend: ['React', 'JavaScript', 'CSS3', 'Unsplash API'],
          backend: ['API Integration'],
          tools: ['Vite', 'Vercel', 'Git']
        }
      },
      {
        id: 3,
        imgSrc: '/images/project-3.jpg',
        title: t('work.detailedProjects.recipehub.title'),
        description: t('work.detailedProjects.recipehub.description'),
        longDescription: t('work.detailedProjects.recipehub.longDescription'),
        tags: ['React', 'Recipe API', 'Local Storage', 'PWA'],
        projectLink: '',
        githubLink: 'https://github.com/jeanauryel/recipehub',
        features: translations[language].work.detailedProjects.recipehub.features,
        techStack: {
          frontend: ['React', 'JavaScript', 'Material-UI'],
          backend: ['Recipe API', 'Local Storage'],
          tools: ['Webpack', 'Git', 'PWA Tools']
        }
      }
    ];
    
    return (
        <div className="section">
            <div className="container">
                {/* Hero Section */}
                <section className="py-20 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="headline-1 mb-6">{t('work.detailedTitle')}</h1>
                        <p className="text-xl text-[#060d0e]/70 mb-8">
                            {t('work.detailedSubtitle')}
                        </p>
                        <div className="flex justify-center gap-4 mb-8">
                            <span className="px-4 py-2 bg-[#060d0e]/10 rounded-full text-sm">{t('work.projectsCompleted')}</span>
                            <span className="px-4 py-2 bg-[#060d0e]/10 rounded-full text-sm">{t('work.yearsExperience')}</span>
                        </div>
                    </div>
                </section>

                {/* Featured Projects */}
                <section className="space-y-20">
                    {projects.map((project, index) => (
                        <div key={project.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                            {/* Project Image */}
                            <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                                <div className="relative group">
                                    <img 
                                        src={project.imgSrc} 
                                        alt={project.title}
                                        className="rounded-2xl shadow-lg w-full transition-transform group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="flex gap-2">
                                            {project.projectLink && (
                                                <ButtonPrimary 
                                                    href={project.projectLink}
                                                    target="_blank"
                                                    label={t('work.liveDemo')}
                                                    icon="launch"
                                                    classes="btn-sm"
                                                />
                                            )}
                                            <ButtonPrimary 
                                                href={project.githubLink}
                                                target="_blank"
                                                label={t('work.github')}
                                                icon="code"
                                                classes="btn-outline btn-sm"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Project Details */}
                            <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                                <div className="space-y-6">
                                    <div>
                                        <h2 className="headline-2 mb-4">{project.title}</h2>
                                        <p className="text-[#060d0e]/70 mb-4">{project.longDescription}</p>
                                    </div>

                                    {/* Features */}
                                    <div>
                                        <h3 className="font-semibold mb-3">{t('work.keyFeatures')}</h3>
                                        <ul className="grid grid-cols-2 gap-2">
                                            {project.features.map((feature: string, idx: number) => (
                                                <li key={idx} className="flex items-center text-sm text-[#060d0e]/70">
                                                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Tech Stack */}
                                    <div>
                                        <h3 className="font-semibold mb-3">{t('work.technologyStack')}</h3>
                                        <div className="space-y-2">
                                            <div>
                                                <span className="text-sm font-medium text-[#060d0e]/80">{t('work.frontend')}:</span>
                                                <div className="flex flex-wrap gap-2 mt-1">
                                                    {project.techStack.frontend.map((tech, idx) => (
                                                        <span key={idx} className="px-2 py-1 bg-[#060d0e]/10 rounded text-xs">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div>
                                                <span className="text-sm font-medium text-[#060d0e]/80">{t('work.backend')}:</span>
                                                <div className="flex flex-wrap gap-2 mt-1">
                                                    {project.techStack.backend.map((tech, idx) => (
                                                        <span key={idx} className="px-2 py-1 bg-[#060d0e]/10 rounded text-xs">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-4 pt-4">
                                        {project.projectLink && (
                                            <ButtonPrimary 
                                                href={project.projectLink}
                                                target="_blank"
                                                label={t('work.liveDemo')}
                                                icon="launch"
                                            />
                                        )}
                                        <ButtonPrimary 
                                            href={project.githubLink}
                                            target="_blank"
                                            label={t('work.viewCode')}
                                            icon="code"
                                            classes="btn-outline"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>

                {/* Skills Section */}
                <section className="py-20 bg-[#060d0e]/5 rounded-2xl mt-20">
                    <div className="text-center mb-12">
                        <h2 className="headline-2 mb-4">{t('work.developmentProcess')}</h2>
                        <p className="text-[#060d0e]/70">{t('work.developmentProcessDesc')}</p>
                    </div>
                    
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#060d0e]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <img src="/images/planification.svg" alt="Planning" className="w-8 h-8" />
                            </div>
                            <h3 className="font-semibold mb-2">{t('work.planning')}</h3>
                            <p className="text-sm text-[#060d0e]/70">{t('work.planningDesc')}</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#060d0e]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <img src="/images/design.svg" alt="Design" className="w-8 h-8" />
                            </div>
                            <h3 className="font-semibold mb-2">{t('work.design')}</h3>
                            <p className="text-sm text-[#060d0e]/70">{t('work.designDesc')}</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#060d0e]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <img src="/images/web-devlopment.svg" alt="Development" className="w-8 h-8" />
                            </div>
                            <h3 className="font-semibold mb-2">{t('work.development')}</h3>
                            <p className="text-sm text-[#060d0e]/70">{t('work.developmentDesc')}</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#060d0e]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <img src="/images/deployment.svg" alt="Deployment" className="w-8 h-8" />
                            </div>
                            <h3 className="font-semibold mb-2">{t('work.deploy')}</h3>
                            <p className="text-sm text-[#060d0e]/70">{t('work.deployDesc')}</p>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-20 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="headline-2 mb-4">{t('work.readyToStart')}</h2>
                        <p className="text-[#060d0e]/70 mb-8">
                            {t('work.readyToStartDesc')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <ButtonPrimary 
                                href="/contact"
                                label={t('work.startProject')}
                                icon="rocket_launch"
                            />
                            <ButtonPrimary 
                                href="/about"
                                label={t('work.learnMoreAboutMe')}
                                icon="person"
                                classes="btn-outline"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Work;