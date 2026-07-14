import { useTheme } from '../context/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
            <span className={`theme-icon ${theme === 'dark' ? 'show' : ''}`} aria-hidden="true">☀️</span>
            <span className={`theme-icon ${theme === 'light' ? 'show' : ''}`} aria-hidden="true">🌙</span>
        </button>
    );
};

export default ThemeToggle;
