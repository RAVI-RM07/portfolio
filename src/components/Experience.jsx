import { Briefcase, ExternalLink } from 'lucide-react';
import { experience } from '../data/experience';

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Experience</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        My professional journey including internships and hackathons.
                    </p>
                </div>

                <div className="relative border-l-2 border-blue-200 ml-4 md:ml-10 space-y-12">
                    {experience.map((item) => (
                        <div key={item.id} className="relative pl-8 md:pl-12 group">
                            {/* Timeline Dot */}
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-blue-600 group-hover:scale-125 transition-transform duration-300"></div>

                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-2">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">{item.role}</h3>
                                    <h4 className="text-lg font-semibold text-blue-600">{item.company}</h4>
                                </div>
                                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium whitespace-nowrap">
                                    {item.date}
                                </div>
                            </div>

                            <p className="text-gray-600 mb-4 max-w-3xl">
                                {item.description}
                            </p>

                            {item.link && (
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                                >
                                    View Certificate/Proof <ExternalLink className="ml-1 h-3 w-3" />
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
