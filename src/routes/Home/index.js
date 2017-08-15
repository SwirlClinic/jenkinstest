import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Circle from '../../components/Circle';

class Home extends Component {


    render() {

        return(

            <div className="mdl-grid">
                <div className="post mdl-card mdl-shadow--2dp mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet">
                    <div className="mdl-card__title">
                        <h2 className="mdl-card__title-text">Title</h2>

                    </div>

                    <div className="mdl-card__supporting-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam imperdiet eget neque non
                        euismod. Sed aliquam odio lacus, quis sodales massa gravida nec. Phasellus odio nisl,
                        gravida a pellentesque et, mattis nec eros. Sed volutpat feugiat orci, eu dignissim orci
                        placerat in. Vivamus justo nibh, lacinia eget sapien quis, convallis pulvinar sem.
                        Phasellus vitae imperdiet elit. Duis vel mauris nec sapien ultricies porttitor. Suspendisse
                        pulvinar tempus velit eget bibendum. Integer bibendum, metus eu luctus bibendum, mauris nisl
                        bibendum justo, eget ullamcorper metus urna nec lectus. Quisque iaculis mi ligula, viverra
                        rutrum enim ultricies id.

                        <Circle data={[['test',50], ['boom',100]]} />
                    </div>
                    <div className="mdl-card__menu">
                        <Link className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect" to="/">
                            <i className="material-icons">share</i>
                        </Link>
                    </div>

                    <div className="mdl-card__actions mdl-card--border">
                        <button href="" className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                            Link
                        </button>
                    </div>

                </div>

                <div className="post mdl-card mdl-shadow--2dp mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet">
                    <div className="mdl-card__title">
                        <h2 className="mdl-card__title-text">Title</h2>

                    </div>

                    <div className="mdl-card__supporting-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam imperdiet eget neque non
                        euismod. Sed aliquam odio lacus, quis sodales massa gravida nec. Phasellus odio nisl,
                        gravida a pellentesque et, mattis nec eros. Sed volutpat feugiat orci, eu dignissim orci
                        placerat in. Vivamus justo nibh, lacinia eget sapien quis, convallis pulvinar sem.
                        Phasellus vitae imperdiet elit. Duis vel mauris nec sapien ultricies porttitor. Suspendisse
                        pulvinar tempus velit eget bibendum. Integer bibendum, metus eu luctus bibendum, mauris nisl
                        bibendum justo, eget ullamcorper metus urna nec lectus. Quisque iaculis mi ligula, viverra
                        rutrum enim ultricies id.
                    </div>
                    <div className="mdl-card__menu">

                            <Link className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect" to="/">
                                <i className="material-icons">share</i>
                            </Link>

                    </div>

                    <div className="mdl-card__actions mdl-card--border">
                        <button href="" className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                            Link
                        </button>
                    </div>

                </div>


            </div>

        )
    };
}

export default Home;
