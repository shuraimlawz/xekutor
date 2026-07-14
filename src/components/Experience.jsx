import './Experience.css';
import { experienceData } from '../data';

const Experience = () => {
    return (
        <section id="experience" className="experience">
            <div className="experience-container">
                <div className="section-header reveal">
                    <span className="section-label">My Journey</span>
                    <h2 className="section-title">Experience</h2>
                    <p className="section-subtitle">
                        A timeline of my professional growth and the projects that shaped me.
                    </p>
                </div>

                <div className="timeline">
                    {experienceData.map((item, index) => (
                        <div
                            key={item.id}
                            className={`timeline-item reveal reveal-delay-${(index % 3) + 1}`}
                        >
                            <div className="timeline-marker">
                                <span className="timeline-dot"></span>
                                {index < experienceData.length - 1 && <span className="timeline-line"></span>}
                            </div>

                            <div className="timeline-content">
                                <span className="timeline-period">{item.period}</span>
                                <h3 className="timeline-role">{item.role}</h3>
                                <p className="timeline-company">{item.company}</p>
                                <p className="timeline-description">{item.description}</p>
                                <div className="timeline-tags">
                                    {item.tags.map((tag) => (
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

export default Experience;
