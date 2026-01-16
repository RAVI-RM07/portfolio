import { ArrowRight, Github, Mail } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6">
                        <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
                        Open to new opportunities
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
                        Building digital products with{' '}
                        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            purpose and precision.
                        </span>
                    </h1>

                    <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed">
                        I'm <span className="font-semibold text-gray-900">Ravichandran</span>,
                        an aspiring Frontend / Full Stack Developer dedicated to crafting
                        clean, accessible, and user-centric web experiences.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="#projects"
                            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
                        >
                            View Projects
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>

                        <div className="flex gap-4 w-full sm:w-auto justify-center">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm"
                            >
                                <Github className="mr-2 h-5 w-5" />
                                GitHub
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm"
                            >
                                <Mail className="mr-2 h-5 w-5" />
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative background elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[20%] left-[20%] w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <div className="absolute top-[10%] right-[20%] w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-30"></div>
            </div>
        </section>
    );
};

export default Hero;
