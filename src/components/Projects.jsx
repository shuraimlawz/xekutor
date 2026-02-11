import React from 'react';
import './Projects.css';
import { projectsData } from '../data';

const Projects = () => {
    // projects data is now imported from ../data.js

    return (
        <section id="projects" className="projects">
            <div className="projects-container">
                <h2 className="section-title">Featured Projects</h2>
                <div className="projects-grid">
                    {projectsData.map((project) => (
                        <div key={project.id} className="project-card">
                            <div
                                className="project-image-container"
                                onMouseEnter={(e) => {
                                    const video = e.currentTarget.querySelector('video');
                                    if (video) video.play().catch(err => console.log('Video play error:', err));
                                }}
                                onMouseLeave={(e) => {
                                    const video = e.currentTarget.querySelector('video');
                                    if (video) {
                                        video.pause();
                                        video.currentTime = 0;
                                    }
                                }}
                            >
                                {project.image.startsWith('/') || project.image.startsWith('http') ? (
                                    project.image.match(/\.(mp4|webm|ogg|mov)$/i) ? (
                                        <video
                                            src={project.image}
                                            className="project-img"
                                            muted
                                            loop
                                            playsInline
                                        />
                                    ) : (
                                        <img src={project.image} alt={project.title} className="project-img" />
                                    )
                                ) : (
                                    <div className={`project-image-placeholder ${project.image}`}></div>
                                )}
                                <div className="overlay">
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-icon">Live</a>
                                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="btn-icon">Code</a>
                                </div>
                            </div>
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map(tag => (
                                        <span key={tag}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
