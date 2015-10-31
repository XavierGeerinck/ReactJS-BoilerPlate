import styles from './HelloWorld.css';
import fontawesome from 'font-awesome/css/font-awesome.css';
import React, { PropTypes } from 'react'

class HelloWorld extends React.Component {
    render () {
        return (
            <div className={styles.CorporateComponent}>
                HELLO WORLD
            </div>
        );
    }
}

export default HelloWorld;
