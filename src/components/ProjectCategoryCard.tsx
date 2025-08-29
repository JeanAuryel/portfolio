/**
 * @copyright 2025 jeanauryel.dev
 * @license Apache-2.0
 */

interface TechStack {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    tools?: string[];
}

interface ProjectCategoryCardProps {
    title: string;
    description: string;
    projects: Array<{
        name: string;
        techStack: TechStack;
        type: 'web' | 'desktop' | 'mobile' | 'frontend';
    }>;
    icon: string;
    gradientFrom: string;
    gradientTo: string;
}

const ProjectCategoryCard = ({ 
    title, 
    description, 
    projects, 
    icon, 
    gradientFrom, 
    gradientTo 
}: ProjectCategoryCardProps) => {
    return (
        <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${gradientFrom} ${gradientTo} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
            
            {/* Content */}
            <div className="relative p-6">
                {/* Header */}
                <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradientFrom} ${gradientTo} flex items-center justify-center text-white text-xl font-bold shadow-lg`}>
                        {icon}
                    </div>
                    <div className="ml-4">
                        <h3 className="text-xl font-bold text-[#060d0e] group-hover:text-[#060d0e] transition-colors">
                            {title}
                        </h3>
                        <p className="text-sm text-[#060d0e]/60">
                            {projects.length} projet{projects.length > 1 ? 's' : ''}
                        </p>
                    </div>
                </div>

                {/* Description */}
                <p className="text-[#060d0e]/70 mb-6 leading-relaxed">
                    {description}
                </p>

                {/* Projects List */}
                <div className="space-y-4">
                    {projects.map((project, index) => (
                        <div key={index} className="p-4 rounded-xl bg-[#060d0e]/5 hover:bg-[#060d0e]/10 transition-colors">
                            <div className="flex items-center justify-between mb-3">
                                <h4 className="font-semibold text-[#060d0e]">{project.name}</h4>
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                    project.type === 'web' ? 'bg-blue-100 text-blue-800' :
                                    project.type === 'desktop' ? 'bg-green-100 text-green-800' :
                                    project.type === 'mobile' ? 'bg-purple-100 text-purple-800' :
                                    'bg-orange-100 text-orange-800'
                                }`}>
                                    {project.type}
                                </span>
                            </div>
                            
                            {/* Tech Stack */}
                            <div className="space-y-2">
                                {project.techStack.frontend && (
                                    <div>
                                        <span className="text-xs font-medium text-[#060d0e]/60 mr-2">Frontend:</span>
                                        <div className="inline-flex flex-wrap gap-1">
                                            {project.techStack.frontend.map((tech, idx) => (
                                                <span key={idx} className="px-2 py-1 bg-[#060d0e]/10 rounded text-xs text-[#060d0e]/80">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                {project.techStack.backend && (
                                    <div>
                                        <span className="text-xs font-medium text-[#060d0e]/60 mr-2">Backend:</span>
                                        <div className="inline-flex flex-wrap gap-1">
                                            {project.techStack.backend.map((tech, idx) => (
                                                <span key={idx} className="px-2 py-1 bg-[#060d0e]/10 rounded text-xs text-[#060d0e]/80">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                {project.techStack.database && (
                                    <div>
                                        <span className="text-xs font-medium text-[#060d0e]/60 mr-2">Database:</span>
                                        <div className="inline-flex flex-wrap gap-1">
                                            {project.techStack.database.map((tech, idx) => (
                                                <span key={idx} className="px-2 py-1 bg-[#060d0e]/10 rounded text-xs text-[#060d0e]/80">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Hover Effect Arrow */}
                <div className="mt-6 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-8 h-8 rounded-full bg-[#060d0e]/10 flex items-center justify-center">
                        <svg className="w-4 h-4 text-[#060d0e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCategoryCard;