import React from 'react';
import './Contact.css';
import { socialLinks, formEndpoint } from '../data';

const Contact = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = React.useState(''); // '', 'sending', 'success', 'error'
    const [error, setError] = React.useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (error) setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formEndpoint) {
            setError('Contact endpoint not configured yet. Please update data.js');
            return;
        }

        setStatus('sending');
        setError('');

        try {
            const response = await fetch(formEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                const data = await response.json();
                setStatus('error');
                setError(data.errors ? data.errors.map(err => err.message).join(', ') : 'Something went wrong. Please try again.');
            }
        } catch (err) {
            setStatus('error');
            setError('Network error. Please check your connection and try again.');
        }
    };

    return (
        <section id="contact" className="contact">
            <div className="contact-container">
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Let's Talk</h3>
                        <p>
                            I'm open to freelance opportunities and interesting projects.
                            Feel free to reach out if you have a question or just want to say hi!
                        </p>
                        <div className="contact-details">
                            <div className="detail-item">
                                <span className="icon">📧</span>
                                <a href={socialLinks.email}>{socialLinks.email.replace('mailto:', '')}</a>
                            </div>
                            <div className="detail-item">
                                <span className="icon">📍</span>
                                <span>Accra, Ghana</span>
                            </div>
                        </div>
                        <div className="social-links">
                            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="social-btn">GitHub</a>
                            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn">LinkedIn</a>
                            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="social-btn">Facebook</a>
                            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="social-btn">Instagram</a>
                            <a href={socialLinks.x} target="_blank" rel="noopener noreferrer" className="social-btn">X</a>
                        </div>
                    </div>
                    {status === 'success' ? (
                        <div className="success-message">
                            <h3>Thank you!</h3>
                            <p>Your message has been sent successfully.</p>
                            <button onClick={() => setStatus('')} className="btn btn-primary">Send Another</button>
                        </div>
                    ) : (
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    name="message"
                                    placeholder="Message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            {error && <p className="error-message" style={{ color: '#ff4d4d', marginBottom: '1rem', fontSize: '0.9rem' }}>{error}</p>}
                            <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                                {status === 'sending' ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;
