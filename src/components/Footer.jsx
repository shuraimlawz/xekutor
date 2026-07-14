import './Footer.css';
import { socialLinks, navLinks } from '../data';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-cta">
                <div>
                    <p className="section-label">Let’s build together</p>
                    <h3>Have an idea that deserves a great digital experience?</h3>
                    <p>I’m available for freelance projects, product launches, and ambitious collaborations.</p>
                </div>
                <div className="footer-cta-actions">
                    <a className="btn btn-primary" href={socialLinks.email}>Start a conversation</a>
                    <a className="btn btn-outline" href="#projects">View selected work</a>
                </div>
            </div>

            <div className="footer-container">
                <div className="footer-brand">
                    <a href="#hero" className="footer-logo">
                        Shuraim<span className="footer-dot">.</span>
                    </a>
                    <p className="footer-tagline">
                        Full Stack Developer crafting polished products from Accra, Ghana.
                    </p>
                    <div className="footer-meta">
                        <span>Based in Accra</span>
                        <span>Open for opportunities</span>
                    </div>
                </div>

                <div className="footer-links">
                    <h4>Navigation</h4>
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <a href={`#${link.id}`}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="footer-social">
                    <h4>Connect</h4>
                    <div className="social-icons">
                        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <span>GH</span>
                            <small>GitHub</small>
                        </a>
                        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <span>in</span>
                            <small>LinkedIn</small>
                        </a>
                        <a href={socialLinks.x} target="_blank" rel="noopener noreferrer" aria-label="X">
                            <span>X</span>
                            <small>X</small>
                        </a>
                        <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <span>IG</span>
                            <small>Instagram</small>
                        </a>
                        <a href={socialLinks.email} aria-label="Email">
                            <span>@</span>
                            <small>Email</small>
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Shuraim Issaka. All rights reserved.</p>
                <p className="footer-built">Built with React & Vite</p>
            </div>
        </footer>
    );
};

export default Footer;
