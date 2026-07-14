import Footer from './components/Footer';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import About from './components/About';
import Hero from './components/Hero';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import { useScrollReveal } from './hooks/useScroll';
import './App.css';

function App() {
    useScrollReveal();

    return (
        <div className="app">
            <Header />
            <main>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Blog />
                <Contact />
            </main>
            <Footer />
            <ScrollToTop />
        </div>
    );
}

export default App;
