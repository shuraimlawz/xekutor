import { useState } from 'react';
import './Blog.css';
import { blogData } from '../data';

const Blog = () => {
    const [expandedId, setExpandedId] = useState(null);

    const togglePost = (id) => {
        setExpandedId((prev) => (prev === id ? null : id));
    };

    return (
        <section id="blog" className="blog">
            <div className="blog-container">
                <div className="section-header centered reveal">
                    <span className="section-label">Writing</span>
                    <h2 className="section-title">Blog & Notes</h2>
                    <p className="section-subtitle">
                        Thoughts on building products, learning in public, and lessons from real projects.
                    </p>
                </div>

                <div className="blog-grid">
                    {blogData.map((post, index) => {
                        const isExpanded = expandedId === post.id;

                        return (
                            <article
                                key={post.id}
                                className={`blog-card reveal reveal-delay-${(index % 3) + 1} ${isExpanded ? 'expanded' : ''}`}
                            >
                                <div className="blog-card-header">
                                    <span className="blog-category">{post.category}</span>
                                    <div className="blog-meta">
                                        <time dateTime={post.date}>{post.date}</time>
                                        <span className="blog-read-time">{post.readTime}</span>
                                    </div>
                                </div>

                                <h3 className="blog-title">{post.title}</h3>
                                <p className="blog-excerpt">{post.excerpt}</p>

                                <div className="blog-tags">
                                    {post.tags.map((tag) => (
                                        <span key={tag}>{tag}</span>
                                    ))}
                                </div>

                                {isExpanded && (
                                    <div className="blog-content">
                                        {post.content.split('\n\n').map((paragraph, i) => (
                                            <p key={i}>{paragraph}</p>
                                        ))}
                                    </div>
                                )}

                                <button
                                    className="blog-read-btn"
                                    onClick={() => togglePost(post.id)}
                                    aria-expanded={isExpanded}
                                >
                                    {isExpanded ? 'Show Less ↑' : 'Read More →'}
                                </button>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Blog;
