import { GraduationCap, Rocket, Code2 } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium">
                            <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
                            About Me
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                            Passionate about building practical software solutions.
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            I am seeking opportunities to apply hands-on project and internship experience to create scalable,
                            user-focused applications while continuously improving technical and professional skills.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            My expertise lies in Web Development, Artificial Intelligence, and problem-solving.
                            I thrive on turning complex problems into elegant, real-world solutions.
                        </p>

                        <div className="pt-6">
                            <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                                <GraduationCap className="h-5 w-5 mr-2 text-blue-600" /> Education
                            </h3>
                            <div className="space-y-4">
                                <div className="pl-4 border-l-2 border-blue-100">
                                    <h4 className="font-bold text-gray-900">Bachelor of Engineering – CSE</h4>
                                    <p className="text-blue-600 text-sm font-medium">Kongunadu College of Engineering and Technology</p>
                                    <p className="text-gray-500 text-sm">2023 – 2027 | CGPA: 7.2</p>
                                </div>
                                <div className="pl-4 border-l-2 border-gray-100">
                                    <h4 className="font-bold text-gray-900">HSC (Higher Secondary)</h4>
                                    <p className="text-gray-600 text-sm">Kalaimagal Matriculation Higher Secondary School</p>
                                    <p className="text-gray-500 text-sm">2022 – 2023 | 78%</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 text-blue-600 shadow-sm">
                                <Code2 className="h-6 w-6" />
                            </div>
                            <h4 className="text-lg font-bold text-gray-900 mb-2">Web Development</h4>
                            <p className="text-gray-600 text-sm">
                                Crafting responsive and interactive websites using React and Modern CSS.
                            </p>
                        </div>

                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 text-indigo-600 shadow-sm">
                                <Rocket className="h-6 w-6" />
                            </div>
                            <h4 className="text-lg font-bold text-gray-900 mb-2">AI & Machine Learning</h4>
                            <p className="text-gray-600 text-sm">
                                Building intelligent models using Python, TensorFlow, and Deep Learning.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
