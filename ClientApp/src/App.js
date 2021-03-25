import React from 'react';
import { Route, Switch } from 'react-router';

export const App = () => {
    return (
        <Switch>
            <Route path={'/'}>
                Hello World!
            </Route>
        </Switch>
    );
}