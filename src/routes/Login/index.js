/**
 * Created by Eric on 8/7/2017.
 */
import React, { Component } from 'react';
import './style.css';


class Login extends Component {

    componentDidMount() {
        
        //Fix text fields not floating
        let nodeList = document.querySelectorAll('.mdl-textfield');
        window.componentHandler.upgradeElements(nodeList);

    }

    login() {
        alert('hi there!');
    }

    render() {



        return(

            <div className="mdl-grid centerize">
                <div className="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--middle mdl-cell--6-col mdl-cell--6-col-tablet" style={{width:350}}>
                    <div className="mdl-card__title">
                        <h2 className="mdl-card__title-text">Sign In</h2>
                    </div>

                    <div className="mdl-card__supporting-text">
                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <input className="mdl-textfield__input" type="text" id="user"></input>
                            <label className="mdl-textfield__label" htmlFor="user">Username</label>
                        </div>
                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <input className="mdl-textfield__input" type="password" id="pw"></input>
                            <label className="mdl-textfield__label" htmlFor="pw">Password</label>
                        </div>
                    </div>

                    <div className="mdl-card__actions">
                        <button onClick={this.login} className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--accent">
                            Login
                        </button>


                        <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--accent">
                            Register
                        </button>
                    </div>

                </div>
            </div>

        )
    };
}

export default Login;
