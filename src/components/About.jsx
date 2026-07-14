import { useState } from 'react';
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
                <div className="about-image reveal">
                    <div className="img-carousel">
                        <div className="img-placeholder">
                            <img
                                src={aboutData.profileImages[currentImageIndex]}
                                alt={`${aboutData.name} profile`}
                                className="profile-img"
                            />
                        </div>

                        {aboutData.profileImages.length > 1 && (
                            <>
                                <div className="carousel-controls">
                                    <button onClick={prevImage} className="carousel-btn prev" aria-label="Previous photo">&#10094;</button>
                                    <button onClick={nextImage} className="carousel-btn next" aria-label="Next photo">&#10095;</button>
                                </div>
                                <div className="carousel-dots">
                                    {aboutData.profileImages.map((_, i) => (
                                        <button
                                            key={i}
                                            className={`dot ${i === currentImageIndex ? 'active' : ''}`}
                                            onClick={() => setCurrentImageIndex(i)}
                                            aria-label={`Photo ${i + 1}`}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </div>

                <div className="about-content reveal reveal-delay-2">
                    <span className="section-label">About Me</span>
                    <h2 className="section-title">Who I Am</h2>

                    <div className="personal-info">
                        <h3 className="full-name">{aboutData.name}</h3>
                        <p className="nicknames">{aboutData.nicknames}</p>
                        <p className="title-badge">{aboutData.title}</p>
                    </div>

                    {aboutData.description.map((paragraph, index) => (
                        <p key={index} className="about-text">{paragraph}</p>
                    ))}

                    <div className="about-actions">
                        <a href={aboutData.resumeUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                            Download Resume
                        </a>
                        <a href="#contact" className="btn btn-outline">Get In Touch</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
