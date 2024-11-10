import React from "react";
import { useParams } from "react-router-dom";
import { getPost } from "blogPosts/blogs.js";

export default () => {
  const { id } = useParams();
  const { title, imageUrl, content } = getPost(id);
  console.log(title);

  return (
    <div style={styles.container}>
      {/* Image Section */}
      {imageUrl && (
        <div style={styles.imageContainer}>
          <img src={imageUrl} alt="Blog Post" style={styles.image} />
        </div>
      )}

      {/* Content Section */}
      <div style={styles.contentContainer}>
        <h1 style={styles.title}>{title}</h1>
        <p style={styles.content}>{content}</p>
      </div>
    </div>
  );
};

// Basic styles for the page
const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  imageContainer: {
    width: "100%",
    marginBottom: "20px",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
  },
  contentContainer: {
    textAlign: "left",
  },
  title: {
    fontSize: "2em",
    marginBottom: "10px",
  },
  content: {
    fontSize: "1em",
    lineHeight: "1.6",
  },
};
