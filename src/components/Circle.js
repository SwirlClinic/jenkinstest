/**
 * Created by Eric on 8/7/2017.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as c3 from 'c3';
import 'c3/c3.min.css';

class Circle extends Component {
    componentDidMount() {
        let chart = c3.generate({
            bindto: "#chart",
            data: {
                columns: this.props.data,
                type: 'donut'
            }
        });
    }


    render() {

        return (
            <div id='chart' >
            </div>
        )
    }
}

Circle.propTypes = {
    data: PropTypes.array // [ ['label', data] ]
}

export default Circle;