import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fetchData from "../shared/FetchData";

export const Home = () => {
    const [Posts, setPosts] = useState([]);
    const url = "/api/post";

    useEffect(() => {
        fetchData(url).then(data => setPosts(data));
    }, []);

    const removeItem = (url, target) => {
        fetchData(url).then(data => {
            if (data) {
                target.remove();
            }
        });
    };

    return (
        <div>
            <h1>Home Page</h1>
            <ul>
                {Posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/post/${post.id}`}>{post.title}</Link>
                        -
                        <Link to={`/edit/${post.id}`}>Edit</Link>
                        -
                        <Link onClick={(e) => {
                            const target = e.target.closest("li");
                            removeItem(`/api/post/remove/${post.id}`, target);
                        }} to="#">Remove</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
