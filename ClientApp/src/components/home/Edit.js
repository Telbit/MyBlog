import { Button, TextField } from '@material-ui/core';
import axios from 'axios';
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
    input: {
        marginTop: 20
    },
});

export const Edit = () => {
    const classes = useStyles();
    const [Title, setTitle] = useState('');
    const [Body, setBody] = useState('');
    const history = useHistory();

    const sendForm = (e) => {
        e.preventDefault();
        const post = {Title, Body};
        axios.post("/api/post/edit", post)
            .then(res => {
                if (res.status === 200) {
                    // window.location.href = "/";
                    history.push("/")
                }
            });
    }

    return (
        <div>
            <form onSubmit={sendForm} noValidate autoComplete="off">
                <TextField className={classes.input} label="Title" variant="outlined"
                    required
                    value={Title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <br/>
                <TextField className={classes.input} label="Body" variant="outlined"
                    required
                    value={Body}
                    onChange={(event) => setBody(event.target.value)}
                />
                <br/>
                <Button type="submit">Submit</Button>
            </form>
        </div>
    )
}
