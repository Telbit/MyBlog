import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fetchData from "../shared/FetchData";

export const Home = () => {
  const [Posts, setPosts] = useState([]);
  const url = "/api/post";

  useEffect(() => {
    fetchData(url, setPosts);
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        {Posts.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
