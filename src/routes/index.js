/**
 * Created by Eric on 8/6/2017.
 */
import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

import Home from './Home';
import Login from './Login';
import AppHolder from './AppHolder';




const Routes = () => (

    <BrowserRouter>
        <AppHolder>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
            </Switch>
        </AppHolder>
    </BrowserRouter>

);

export default Routes;