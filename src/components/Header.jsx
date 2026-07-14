import { useState } from 'react';
import './Header.css';
import { navLinks } from '../data';
import { useActiveSection, useScrolled } from '../hooks/useScroll';
import ThemeToggle from './ThemeToggle';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const activeSection = useActiveSection(navLinks.map((l) => l.id));
    const scrolled = useScrolled();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleNavClick = () => setIsMenuOpen(false);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="header-container">
                <div className="logo">
                    <a href="#hero" className="logo-text" onClick={handleNavClick}>
                        <span className="logo-name">Shuraim</span>
                        <span className="logo-dot">.</span>
                    </a>
                </div>

                <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <a
                                    href={`#${link.id}`}
                                    className={activeSection === link.id ? 'active' : ''}
                                    onClick={handleNavClick}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="header-actions">
                    <ThemeToggle />
                    <a href="#contact" className="header-cta btn btn-primary" onClick={handleNavClick}>
                        Hire Me
                    </a>
                </div>

                <div className="header-mobile-controls">
                    <ThemeToggle />
                    <button
                        className="menu-toggle"
                        onClick={toggleMenu}
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isMenuOpen}
                    >
                        <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="nav-backdrop" onClick={toggleMenu} aria-hidden="true" />
            )}
        </header>
    );
};

export default Header;
