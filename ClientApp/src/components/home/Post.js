import { Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import fetchData from "../shared/FetchData";

export const Post = ({ match }) => {
    const [Post, setPost] = useState({});
    const url = `/api/post/${match.params.id}`;

    useEffect(() => {
        fetchData(url).then(data => setPost(data));
    }, [url]);

    return (
        <div>
            <h2>{Post.title}</h2>
            <Typography>{Post.body}</Typography>
            <Typography>{Post.created}</Typography>
        </div>
    );
};
