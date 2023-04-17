import React from "react";
import './Post.css';

function Post(props) {
const { title, body, author, date } = props;
  return (
    <div className="post">
      <h2 className="post-title">{title}</h2>
      <p className="post-body">{body}</p>
      <div className="post-info">
        <p className="post-author">By {author}</p>
        <p className="post-date">{date}</p>
      </div>
    </div>
  );
};

export default Post;
