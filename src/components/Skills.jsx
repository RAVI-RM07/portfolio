import { Code, Database, Layout, PenTool, Server, Smartphone } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend',
            icon: Layout,
            skills: ['React', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5', 'CSS3', 'Framer Motion'],
            color: 'blue'
        },
        {
            title: 'Backend (Learning)',
            icon: Server,
            skills: ['Node.js', 'Express', 'Python', 'REST APIs'],
            color: 'indigo'
        },
        {
            title: 'Database (Learning)',
            icon: Database,
            skills: ['MongoDB', 'PostgreSQL', 'Firebase'],
            color: 'purple'
        },
        {
            title: 'Tools & DevOps (Learning)',
            icon: PenTool,
            skills: ['Git', 'GitHub', 'VS Code', 'Figma'],
            color: 'teal'
        }
    ];

    return (
        <section id="skills" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Skills & Technologies</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        A collection of tools and technologies I use to build digital products.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category) => (
                        <div key={category.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 bg-${category.color}-50 text-${category.color}-600`}>
                                <category.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 rounded-full bg-gray-50 text-gray-600 text-sm font-medium border border-gray-100"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
