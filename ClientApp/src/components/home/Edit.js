import { Button, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router";
import fetchData from "../shared/FetchData";

const useStyles = makeStyles({
    input: {
        marginTop: 20,
    },
});

export const Edit = ({ match }) => {
    const classes = useStyles();
    const [Id, setId] = useState();
    const [Title, setTitle] = useState("");
    const [Body, setBody] = useState("");
    const history = useHistory();
    const url = "/api/post/edit";

    const sendForm = (e) => {
        e.preventDefault();
        const post = { Id, Title, Body };
        fetchData(url, post).then((data) => {
            if (data) {
                history.push("/");
            }
        });
    };

    useEffect(() => {
        if (match.params.id > 0) {
            const url = `/api/post/${match.params.id}`;
            fetchData(url).then(data => {
                setId(data.id);
                setTitle(data.title);
                setBody(data.body);
            })
        }
    }, [match.params.id])

    return (
        <div>
            <form onSubmit={sendForm} autoComplete="off">
                <TextField
                    className={classes.input}
                    label="Title"
                    variant="outlined"
                    required
                    value={Title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <br />
                <TextField
                    className={classes.input}
                    label="Body"
                    variant="outlined"
                    required
                    value={Body}
                    onChange={(event) => setBody(event.target.value)}
                />
                <br />
                <Button type="submit">Submit</Button>
            </form>
        </div>
    );
};
