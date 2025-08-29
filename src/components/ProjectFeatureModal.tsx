/**
 * @copyright 2025 jeanauryel.dev
 * @license Apache-2.0
 */

import { useState } from "react";

interface ProjectFeatureModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: {
        name: string;
        featureImages?: string[];
        features: string[];
        githubLink?: string;
    };
}

const ProjectFeatureModal = ({ isOpen, onClose, project }: ProjectFeatureModalProps) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!isOpen || !project.featureImages) return null;

    const nextImage = () => {
        setCurrentImageIndex((prev) => 
            prev === project.featureImages!.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => 
            prev === 0 ? project.featureImages!.length - 1 : prev - 1
        );
    };

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-zoom-in">
                
                {/* Header */}
                <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                    <h2 className="text-2xl font-semibold text-gray-900">{project.name}</h2>
                    <button 
                        onClick={onClose}
                        className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
                    >
                        <span className="material-symbols-rounded text-gray-600">close</span>
                    </button>
                </div>

                {/* Image Carousel */}
                <div className="relative">
                    <div className="aspect-video bg-gray-100 overflow-hidden">
                        <img 
                            src={project.featureImages[currentImageIndex]}
                            alt={`${project.name} - Fonctionnalité ${currentImageIndex + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Navigation arrows */}
                    {project.featureImages.length > 1 && (
                        <>
                            <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
                            >
                                <span className="material-symbols-rounded text-gray-800">chevron_left</span>
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
                            >
                                <span className="material-symbols-rounded text-gray-800">chevron_right</span>
                            </button>
                        </>
                    )}

                    {/* Image indicators */}
                    {project.featureImages.length > 1 && (
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                            {project.featureImages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentImageIndex(index)}
                                    className={`w-3 h-3 rounded-full transition-all ${
                                        index === currentImageIndex 
                                            ? 'bg-white' 
                                            : 'bg-white/50 hover:bg-white/80'
                                    }`}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Features and GitHub link */}
                <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Fonctionnalités principales</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                        {project.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                                <span className="text-gray-700">{feature}</span>
                            </div>
                        ))}
                    </div>

                    {project.githubLink && (
                        <div className="flex justify-center">
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors"
                            >
                                <span className="material-symbols-rounded text-xl">code</span>
                                Voir le code source
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectFeatureModal;