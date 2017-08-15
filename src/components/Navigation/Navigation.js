/**
 * Created by Eric on 8/7/2017.
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default class Navigation extends Component {

    render() {

        let items = (<nav className="mdl-navigation">
                        <Link className="mdl-navigation__link" to="/">Home</Link>
                        <Link className="mdl-navigation__link" to="/login">Login</Link>
                    </nav>);

        return (
            <div className="custom-layout mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <header className="mdl-layout__header mdl-layout__header--transparent mdl-layout__header--scroll customnav">
                    <img className="mdl-layout-icon"></img>
                    <div className="mdl-layout__header-row">
                        <span className="mdl-layout__title">lmao</span>
                        <div className="mdl-layout-spacer"></div>
                        {items}
                    </div>
                </header>
                <div className="mdl-layout__drawer">
                    <span className="mdl-layout__title">lmao</span>
                    {items}
                </div>
                <main className="mdl-layout__content">
                    {this.props.children}
                </main>
            </div>





        )
    }
}