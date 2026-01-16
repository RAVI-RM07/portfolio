import { Award, ExternalLink } from 'lucide-react';
import { certifications } from '../data/certifications';

const Certifications = () => {
    return (
        <section id="certifications" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Certifications</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Professional certifications and workshops I've completed.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert) => (
                        <div key={cert.id} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                            <div className="w-12 h-12 bg-yellow-50 text-yellow-600 rounded-lg flex items-center justify-center mb-4">
                                <Award className="h-6 w-6" />
                            </div>

                            <h3 className="text-lg font-bold text-gray-900 mb-1">{cert.title}</h3>
                            <p className="text-blue-600 font-medium text-sm mb-4">{cert.issuer}</p>

                            <p className="text-gray-500 text-sm mb-6">
                                <span className="font-semibold text-gray-700">Skills:</span> {cert.skills}
                            </p>

                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors"
                            >
                                View Credential <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
