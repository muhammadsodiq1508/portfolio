import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog">
      <div className="blog-title">
        <h3>Blogs</h3>
        <h1>Latest Blogs</h1>
        <p>View all →</p>
      </div>
      <div className="blog-text">
        <div className="blog1">
          <p>April 16, 2021 6 mins</p>
          <h1>Design tips for designers, that cover everything you need</h1>
          <h3>Read the article →</h3>
        </div>

        <div className="blog2">
          <p>April 16, 2021 5 mins</p>
          <h1>How to build rapport with your web design clients</h1>
          <h3>Read the article →</h3>
        </div>

        <div className="blog3">
          <p>April 16, 2021 5 mins</p>
          <h1>Top 6 free website mockup tools 2021</h1>
          <h3>Read the article →</h3>
        </div>

        <div className="blog4">
          <p>April 16, 2021 6 mins</p>
          <h1>Logo design trends to avoid in 2021</h1>
          <h3>Read the article →</h3>
        </div>

        <div className="blog5">
          <p>April 16, 2021 6 mins</p>
          <h1>22 best UI design tools</h1>
          <h3>Read the article →</h3>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Blog;
