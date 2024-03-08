import React, { useState, useContext } from "react";
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

const FormContainer = styled.div`
  width: 80%;
  margin-top: 20px;
`;

const TitleInput = styled.input`
  width: 100%;
  height: 50px;
  font-size: 24px;
  padding: 10px;
  margin-bottom: 20px;
`;

const DescriptionTextArea = styled.textarea`
  width: 100%;
  height: 200px;
  font-size: 20px;
  padding: 10px;
  margin-bottom: 20px;
`;

const PostButton = styled.button`
  width: 100%;
  height: 50px;
  font-size: 24px;
  background-color: red;
  color: white;
  border: none;
  cursor: pointer;
`;

const WriteBlog = () => {
  const { addBlogPost } = useGlobalContext(); // Access the addBlogPost function from the global context

  const [newBlog, setNewBlog] = useState({
    title: "",
    content: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBlog((prevBlog) => ({
      ...prevBlog,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newBlog.title && newBlog.content) {
      try {
        await addBlogPost(newBlog); // Call the addBlogPost function from the global context
        setNewBlog({ title: "", content: "" });
      } catch (error) {
        console.error("Error posting blog:", error);
      }
    }
  };

  return (
    <CenteredContainer>
      <h1 className="title">Write a Blog ✍️</h1>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <TitleInput
            type="text"
            name="title"
            placeholder="Title"
            value={newBlog.title}
            onChange={handleInputChange}
          />
          <DescriptionTextArea
            name="content"
            placeholder="Content"
            value={newBlog.content}
            onChange={handleInputChange}
          ></DescriptionTextArea>
          <PostButton type="submit">Post</PostButton>
        </form>
      </FormContainer>
    </CenteredContainer>
  );
};

export default WriteBlog;
