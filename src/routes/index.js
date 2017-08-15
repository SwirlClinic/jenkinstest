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
import Layout from './Layout';




const Routes = () => (

    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
            </Switch>
        </Layout>
    </BrowserRouter>

);

export default Routes;