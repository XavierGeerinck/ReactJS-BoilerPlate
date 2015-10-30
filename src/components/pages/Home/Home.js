import React, { PropTypes } from 'react';
import './Home.css';
import { Link } from 'react-router';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="HomePage">
                HELLO WORLD
            </div>
        )
    }
}

export default Home;
