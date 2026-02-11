import Footer from './components/Footer';
import Contact from './components/Contact';
import Projects from './components/Projects';
import About from './components/About';
import Hero from './components/Hero';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
