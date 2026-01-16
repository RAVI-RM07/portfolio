import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projects';

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Featured Projects</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Check out some of the projects I've built.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                        >
                            {/* Card Header / Icon Placeholder */}
                            <div className="h-48 bg-gray-50 flex items-center justify-center border-b border-gray-100 group-hover:bg-blue-50 transition-colors">
                                <project.icon className="h-16 w-16 text-gray-300 group-hover:text-blue-500 transition-colors" />
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-6 flex-1">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2.5 py-0.5 rounded-full bg-gray-50 text-gray-600 text-xs font-medium border border-gray-100"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                    <a
                                        href={project.github}
                                        className="flex items-center text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
                                    >
                                        <Github className="h-4 w-4 mr-2" />
                                        Code
                                    </a>
                                    <a
                                        href={project.demo}
                                        className="flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
                                    >
                                        Live Demo
                                        <ExternalLink className="h-4 w-4 ml-2" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
