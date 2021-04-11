import { Button, makeStyles, TextField } from '@material-ui/core';
import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
    input: {
        marginTop: 20,
    },
});

export const Login = () => {
    const [Name, setName] = useState("");
    const [Password, setPassword] = useState("");
    const history = useHistory();
    const classes = useStyles();
    const url = "/api/auth/login";

    const sendForm = (event) => {
        event.preventDefault();
        const post = { Name, Password };
        axios.post(url, post).then((res) => {
            if (res.status === 200) {
                history.push("/");
            }
        });
    };

    return (
        <div>
            <form onSubmit={sendForm} autoComplete="on">
                <TextField
                    className={classes.input}
                    label="Username"
                    variant="outlined"
                    required
                    value={Name}
                    onChange={(event) => setName(event.target.value)}
                />
                <br />
                <TextField
                    className={classes.input}
                    label="Password"
                    variant="outlined"
                    required
                    value={Password}
                    type="password"
                    onChange={(event) => setPassword(event.target.value)}
                />
                <br />
                <Button type="submit">Submit</Button>
            </form>
        </div>
    )
}
