import './Skills.css';
import { skillsData } from '../data';

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <div className="skills-container">
                <div className="section-header centered reveal">
                    <span className="section-label">What I Know</span>
                    <h2 className="section-title">Skills & Technologies</h2>
                    <p className="section-subtitle">
                        Technologies I use to bring ideas to life — from pixel-perfect UIs to robust backends.
                    </p>
                </div>

                <div className="skills-grid">
                    {skillsData.map((group, groupIndex) => (
                        <div
                            key={group.category}
                            className={`skill-card reveal reveal-delay-${(groupIndex % 4) + 1}`}
                        >
                            <h3 className="skill-category">{group.category}</h3>
                            <ul className="skill-list">
                                {group.skills.map((skill) => (
                                    <li key={skill.name} className="skill-item">
                                        <div className="skill-header">
                                            <span className="skill-name">{skill.name}</span>
                                            <span className="skill-level">{skill.level}%</span>
                                        </div>
                                        <div className="skill-bar">
                                            <div
                                                className="skill-fill"
                                                style={{ '--level': `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
