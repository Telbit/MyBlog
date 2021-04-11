import React from "react";
import { Route, Switch } from "react-router";
import { Login } from "./components/Auth/Login";
import { Edit } from "./components/home/Edit";
import { Home } from "./components/home/Home";
import { Post } from "./components/home/Post";
import { NavMenu } from "./components/shared/NavMenu";

export const App = () => {
    return (
        <div>
            <NavMenu></NavMenu>
            <Switch>
                <Route path={"/"} exact component={Home}></Route>
                <Route path={"/post/:id"} component={Post}></Route>
                <Route path={"/create"} exact component={Edit}></Route>
                <Route path={"/edit/:id"} component={Edit}></Route>
                <Route path={"/login"} component={Login}></Route>
            </Switch>
        </div>
    );
};
