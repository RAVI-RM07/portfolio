import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/#about' },
        { name: 'Skills', path: '/#skills' },
        { name: 'Projects', path: '/#projects' },
        { name: 'Tech News', path: '/#news' },
        { name: 'Contact', path: '/#contact' },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <div className="p-2 bg-blue-600 rounded-lg">
                            <Code2 className="h-6 w-6 text-white" />
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            Ravichandran .P
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.path}
                                className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200 text-sm"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="px-5 py-2.5 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors shadow-lg shadow-gray-900/20 text-sm"
                        >
                            Let's Talk
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100">
                    <div className="px-4 pt-2 pb-6 space-y-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.path}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-3 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="pt-4">
                            <a
                                href="#contact"
                                onClick={() => setIsOpen(false)}
                                className="block w-full text-center px-5 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
                            >
                                Let's Talk
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
