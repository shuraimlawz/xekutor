import { useState, useMemo } from 'react';
import './Projects.css';
import { projectsData } from '../data';

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const allTags = useMemo(() => {
        const tags = new Set();
        projectsData.forEach((p) => p.tags.forEach((t) => tags.add(t)));
        return ['All', ...Array.from(tags).sort()];
    }, []);

    const filteredProjects = useMemo(() => {
        if (activeFilter === 'All') return projectsData;
        return projectsData.filter((p) => p.tags.includes(activeFilter));
    }, [activeFilter]);

    return (
        <section id="projects" className="projects">
            <div className="projects-container">
                <div className="section-header centered reveal">
                    <span className="section-label">My Work</span>
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-subtitle">
                        A selection of projects I've built — from booking platforms to full-stack apps.
                    </p>
                </div>

                <div className="project-filters reveal">
                    {allTags.map((tag) => (
                        <button
                            key={tag}
                            className={`filter-btn ${activeFilter === tag ? 'active' : ''}`}
                            onClick={() => setActiveFilter(tag)}
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                <div className="projects-grid">
                    {filteredProjects.map((project, index) => (
                        <article
                            key={project.id}
                            className={`project-card reveal reveal-delay-${(index % 3) + 1}`}
                        >
                            <div
                                className="project-image-container"
                                onMouseEnter={(e) => {
                                    const video = e.currentTarget.querySelector('video');
                                    if (video) video.play().catch(() => {});
                                }}
                                onMouseLeave={(e) => {
                                    const video = e.currentTarget.querySelector('video');
                                    if (video) {
                                        video.pause();
                                        video.currentTime = 0;
                                    }
                                }}
                            >
                                {project.featured && <span className="featured-badge">Featured</span>}

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
                                        <img src={project.image} alt={project.title} className="project-img" loading="lazy" />
                                    )
                                ) : (
                                    <div className={`project-image-placeholder ${project.image}`}></div>
                                )}

                                <div className="overlay">
                                    {project.liveUrl !== '#' && (
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-icon">
                                            Live Demo
                                        </a>
                                    )}
                                    {project.codeUrl !== '#' && (
                                        <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="btn-icon">
                                            Source
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag) => (
                                        <span key={tag}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <p className="no-projects">No projects match this filter.</p>
                )}
            </div>
        </section>
    );
};

export default Projects;
