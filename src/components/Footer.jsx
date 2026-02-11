import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
            <p>Built by Shuraim Issaka.</p>
        </footer>
    );
};

export default Footer;
