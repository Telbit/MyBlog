import React from 'react';
import { Route, Switch } from 'react-router';
import { Edit } from './components/home/Edit';
import { Home } from './components/home/Home';
import { Post } from './components/home/Post';
import { NavMenu } from './components/shared/NavMenu';

export const App = () => {
    return (
        <div>
            <NavMenu></NavMenu>
            <Switch>
                <Route path={'/'} exact component={Home}></Route>
                <Route path={'/post'} component={Post}></Route>
                <Route path={'/edit'} component={Edit}></Route>
            </Switch>
        </div>
    );
}