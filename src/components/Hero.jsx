import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="hero-content">
                <h1 className="hero-title">
                    Building <span className="highlight">Digital Experiences</span>
                    <br /> That Matter.
                </h1>
                <p className="hero-subtitle">
                    Creative Developer specializing in modern web technologies and UI/UX design.
                </p>
                <div className="hero-cta">
                    <a href="#projects" className="btn btn-primary">View Projects</a>
                    <a href="#contact" className="btn btn-outline">Contact Me</a>
                </div>
            </div>
            <div className="hero-background">
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
            </div>
        </section>
    );
};

export default Hero;
