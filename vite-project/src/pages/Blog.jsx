import React from 'react';
import './Blog.css';

const blogPosts = [
  {
    title: 'Exploring the Rich Flavors of African Cuisine',
    content: 'African cuisine is diverse and flavorful. In this post, we explore some of the most popular dishes...'
  },
  {
    title: 'The History Behind Our Restaurant',
    content: 'Black Heritage was founded with the aim of bringing authentic African flavors to a broader audience...'
  },
  // Add more blog posts here
];

const Blog = () => {
  return (
    <div className="blog">
      <div className="container">
        <h1>Blog</h1>
        {blogPosts.map((post, index) => (
          <div key={index} className="post">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;

