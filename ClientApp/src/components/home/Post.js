import { Typography } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

export const Post = ({ match }) => {
    const [Post, setPost] = useState({});
    const history = useHistory();
    const url = `/api/post/${match.params.id}`;

    useEffect(() => {
        axios.get(url).then(res => {
            if (res.status === 200) {
                setPost(res.data);
            } else {
                history.push("/")
            }
        });
    }, [history, url]);

    return (
        <div>
            <h2>{Post.title}</h2>
            <Typography>{Post.body}</Typography>
            <Typography>{Post.created}</Typography>
        </div>
    );
};
