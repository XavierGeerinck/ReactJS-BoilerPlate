import React, { PropTypes } from 'react';
import './Home.css';
import { Link } from 'react-router';
import HelloWorld from '../../elements/HelloWorld';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="HomePage">
                <HelloWorld />
            </div>
        )
    }
}

export default Home;
