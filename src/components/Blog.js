import React, { useState, useEffect } from 'react';
import "./blog.css";

const Blog = () => {
  const [expandedPost, setExpandedPost] = useState(null);
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:1000/blogs')
      .then(response => response.json())
      .then(data => setBlogPosts(data))
      .catch(error => console.error('Error fetching blog posts:', error));
  }, []);

  const toggleExpand = (id) => {
    setExpandedPost(expandedPost === id ? null : id);
  };

  return (
    <div className="blog">
      <section id="blog" className="blog">
        <h2>Latest Blog Posts</h2>
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-post">
              <img src={post.image} alt={`Blog Post ${post.id}`} />
              <h3>{post.title}</h3>
              <p>{post.summary}</p>

              {/* Conditionally render button and content */}
              {expandedPost !== post.id ? (
                <button onClick={() => toggleExpand(post.id)} className="read-more">
                  Read More
                </button>
              ) : (
                <div>
                  <p className="expanded-content">{post.content}</p>
                  <button onClick={() => toggleExpand(null)} className="read-less">
                    Read Less
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
