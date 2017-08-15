import React, { Component } from 'react';
import Navigation from '../../components/Navigation/Navigation';

const Layout = props => ({
    render() {
        return(
            <div>
                <Navigation>
                    {this.props.children}
                </Navigation>
            </div>
        );
    }
});


export default Layout;
