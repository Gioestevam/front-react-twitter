import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from './app/pages/login/login';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            {/* <PrivateRoute path="/logged" component={() => <h1>Home</h1>} /> */}
            <Route path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
    </BrowserRouter>
);

export default Routes;