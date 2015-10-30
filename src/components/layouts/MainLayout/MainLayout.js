import React, { PropTypes } from 'react';
import './MainLayout.css';

/**
 * The main layout has the header, content and a footer.
 * It will be bound to the authstore to change the header upon login and logout
 */
class MainLayout extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="MainLayout">
                // Can be a <Header />

                <div className="MainLayout-Content">
                    {this.props.children}
                </div>

                // Can be a <Footer />
            </div>
        );
    }
}

MainLayout.defaultProps = {

};

MainLayout.propTypes = {

};

export default MainLayout;
