import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import TechNews from '../components/TechNews';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Experience />
                <Skills />
                <Projects />
                <Certifications />
                <TechNews />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
