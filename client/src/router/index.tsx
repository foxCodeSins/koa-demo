import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from '../containers/Login/index'
import User from '../containers/User'
import Register from '../containers/Register'

export default function ProjectRouter() {
    return (
        <BrowserRouter>
            <Switch>
            <Route exact path="/">
                <Login />
            </Route>
            <Route path="/register">
                <Register />
            </Route>
            <Route path="/user">
                <User />
            </Route>
            </Switch>
      </BrowserRouter>
    )
}