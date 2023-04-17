import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Post from "./Post";

function App() {
  // const [posts , setPosts] = useState([
  const [posts] = useState([
    {
      id: 1,
      title: "My First Post",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor tristique mi eu tristique. Proin commodo, nunc quis lobortis bibendum, urna dolor fringilla lacus, in egestas libero felis ac nisl.",
      author: "John Doe",
      date: "April 1, 2023",
    },
    {
      id: 2,
      title: "My Second Post",
      body: "Duis sodales mauris at arcu consequat rutrum. Sed vitae est ac ante congue suscipit quis non sapien. Fusce non tempor quam, eget iaculis nibh. Nullam ac odio vitae turpis tristique lacinia vel a leo.",
      author: "Jane Smith",
      date: "April 3, 2023",
    },
    {
      id: 3,
      title: "My Third Post",
      body: "Pellentesque eget lorem a diam feugiat tristique. Donec dapibus quam vel nisl iaculis, a lacinia velit congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam eget enim pharetra, malesuada tellus ac, maximus purus.",
      author: "Tom Brown",
      date: "April 5, 2023",
    },
    {
      id: 4,
      title: "My Fourth Post",
      body: "Vivamus vestibulum tellus sed velit bibendum, sit amet placerat felis tristique. Donec id diam feugiat, congue purus eget, rutrum massa. Praesent vel ante sit amet tortor finibus feugiat. Etiam id molestie dolor.",
      author: "Mary Johnson",
      date: "April 7, 2023",
    },
    {
      id: 5,
      title: "My Fifth Post",
      body: "Aliquam erat volutpat. Suspendisse imperdiet nisi ut consectetur rhoncus. Curabitur maximus, nisl quis bibendum gravida, elit nulla vestibulum nibh, in luctus mauris tortor vel risus. Nulla sagittis ultrices risus, vel malesuada quam dapibus ut.",
      author: "David Lee",
      date: "April 9, 2023",
    },
  ]);

  return (
    <div>
      <Navbar />
      <h1 className="title">
        <center> Welcome to my Blog!</center>{" "}
      </h1>
      {posts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          body={post.body}
          author={post.author}
          date={post.date}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
