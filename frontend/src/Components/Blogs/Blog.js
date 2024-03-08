import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/globalContext"; // Import the GlobalContext

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const BlogPost = styled.div`
  margin-bottom: 20px; /* Add margin between each blog post */
`;

const Blog = () => {
  const { blogs, getBlogPosts } = useGlobalContext();
  useEffect(() => {
    getBlogPosts(); // Fetch blog posts on component mount
  }, []);

  return (
    <CenteredContainer>
      <div className="container">
        <h1 className="title">Expense Saving Tips</h1>
        <div className="grid">
          {blogs.map((post) => (
            <BlogPost key={post.id} className="post">
              <div className="content">
                <h2 className="post-title">{post.title}</h2>
                <p className="post-content">{post.content}</p>
              </div>
            </BlogPost>
          ))}
        </div>
      </div>
    </CenteredContainer>
  );
};

export default Blog;
