import React, { useState } from 'react';
import './About.css';
import { aboutData } from '../data';

const About = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % aboutData.profileImages.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + aboutData.profileImages.length) % aboutData.profileImages.length);
    };

    return (
        <section id="about" className="about">
            <div className="about-container">
                <div className="about-image">
                    <div className="img-carousel">
                        <div className="img-placeholder">
                            {/* If real image exists, show it. Otherwise show placeholder text. 
                  For now we simulate 'images' with the placeholder style but index logic is ready.
              */}
                            {aboutData.profileImages[currentImageIndex] !== "default-avatar" ? (
                                <img src={aboutData.profileImages[currentImageIndex]} alt="Profile" className="profile-img" />
                            ) : (
                                <span>Profile Image {aboutData.profileImages.length > 1 ? currentImageIndex + 1 : ''}</span>
                            )}
                        </div>

                        {aboutData.profileImages.length > 1 && (
                            <div className="carousel-controls">
                                <button onClick={prevImage} className="carousel-btn prev">&#10094;</button>
                                <button onClick={nextImage} className="carousel-btn next">&#10095;</button>
                            </div>
                        )}
                    </div>
                </div>
                <div className="about-content">
                    <h2 className="section-title">About Me</h2>

                    <div className="personal-info">
                        <h3 className="full-name">{aboutData.name}</h3>
                        <p className="nicknames">{aboutData.nicknames}</p>
                    </div>

                    {aboutData.description.map((paragraph, index) => (
                        <p key={index} className="about-text">{paragraph}</p>
                    ))}

                    <div className="skills">
                        <h3>Tech Stack</h3>
                        <div className="skill-tags">
                            <span>React</span>
                            <span>Node.js</span>
                            <span>TypeScript</span>
                            <span>Python</span>
                            <span>PostgreSQL</span>
                            <span>Docker</span>
                            <span>AWS</span>
                            <span>Git</span>
                        </div>
                    </div>

                    <a href={aboutData.resumeUrl} className="btn btn-primary" download target="_blank" rel="noopener noreferrer">Download Resume</a>
                </div>
            </div>
        </section>
    );
};

export default About;
