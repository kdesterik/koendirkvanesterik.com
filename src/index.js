import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import config from './config';
import ReactGA from 'react-ga';

import App from './layouts/App';
import Overview from './layouts/Overview';
import Project from './containers/Project';
import Loader from './containers/Loader';

import './styles/styles.css';


const store = config();
const history = syncHistoryWithStore(
  createBrowserHistory(),
  store
);


ReactGA.initialize( 'UA-106387271-1' );

const Tracker = () => {
  let page = window.location.pathname + window.location.search;
  ReactGA.set({ page: page });
  ReactGA.pageview( page );
  return null;
}


const Scroller = () => {
  window.scrollTo( 0, 0 );
  return null;
};


ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history }>
      <App>
        <Loader/>
        <Route component={ Tracker }/>
        <Route component={ Scroller }/>
        <Route path='/' exact={ true } component={ Overview }/>
        <Route path='/project/:slug/' component={ Project }/>
      </App>
    </Router>
  </Provider>,
  document.getElementById( 'root' )
);


