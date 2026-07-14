import { useState, useEffect } from 'react';
import './Hero.css';
import { heroData, statsData } from '../data';

const Hero = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = heroData.roles[roleIndex];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < currentRole.length) {
                    setDisplayText(currentRole.slice(0, displayText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(currentRole.slice(0, displayText.length - 1));
                } else {
                    setIsDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % heroData.roles.length);
                }
            }
        }, isDeleting ? 40 : 80);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, roleIndex]);

    return (
        <section id="hero" className="hero">
            <div className="hero-content">
                {heroData.available && (
                    <div className="hero-badge reveal">
                        <span className="badge-dot"></span>
                        Available for work
                    </div>
                )}

                <p className="hero-greeting reveal reveal-delay-1">{heroData.greeting}</p>

                <h1 className="hero-name reveal reveal-delay-1">
                    {heroData.name}
                </h1>

                <p className="hero-aliases reveal reveal-delay-2">
                    aka {heroData.aliases.join(' · ')}
                </p>

                <h2 className="hero-role reveal reveal-delay-2">
                    I'm a <span className="typing-text">{displayText}</span>
                    <span className="cursor">|</span>
                </h2>

                <p className="hero-subtitle reveal reveal-delay-3">
                    {heroData.tagline}
                </p>

                <div className="hero-cta reveal reveal-delay-3">
                    <a href="#projects" className="btn btn-primary">View Projects</a>
                    <a href="#contact" className="btn btn-outline">Contact Me</a>
                    <a href="#about" className="btn btn-ghost">About Me ↓</a>
                </div>

                <div className="hero-stats reveal reveal-delay-4">
                    {statsData.map((stat) => (
                        <div key={stat.label} className="stat-item">
                            <span className="stat-value">{stat.value}</span>
                            <span className="stat-label">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="hero-background">
                <div className="grid-overlay"></div>
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
                <div className="blob blob-3"></div>
            </div>

            <a href="#about" className="scroll-indicator" aria-label="Scroll to about section">
                <span className="scroll-mouse">
                    <span className="scroll-wheel"></span>
                </span>
            </a>
        </section>
    );
};

export default Hero;
