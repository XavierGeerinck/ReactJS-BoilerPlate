import React from 'react/addons';
import { Router, Route, IndexRoute  } from 'react-router';
import App from './components/App';
import HomePage from './components/pages/Home';

const createBrowserHistory = require('history/lib/createBrowserHistory');

let history = createBrowserHistory();

var routes = (
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={HomePage} />
        </Route>
    </Router>
);

export default routes;
