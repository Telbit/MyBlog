import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
    const [Posts, setPosts] = useState([]);
    const url = "/api/post";

    useEffect(() => {
        axios.get(url)
            .then(res => {
                if (res.status === 200) {
                    setPosts(res.data)
                }
            })
    }, []);

    const removeItem = (url, target) => {
        axios.delete(url).then(res => {
            if (res.status === 200) {
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
