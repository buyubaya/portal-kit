import 'babel-polyfill';
import { trigger } from 'redial';

import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router/lib/Router';
import { Route } from 'react-router';
import match from 'react-router/lib/match';
import browserHistory from 'react-router/lib/browserHistory';
// import { Provider } from 'react-redux';
import constant from '../src/constant'

// import { configureStore } from './store';
// const routes = require('./route');
// import router from './route';
import ContextProvider from './contextProvider'

// const store = configureStore(initialState);
// const { dispatch } = store;

const { pathname, search, hash } = window.location;
const location = `${pathname}${search}${hash}`;
const container = document.getElementById('root');

// StyleSheet.rehydrate(window.renderedClassNames);
const context = {
  insertCss: (...styles) => {
    const removeCss = styles.map(x => x._insertCss());
    return () => { removeCss.forEach(f => f()); };
  },
};

let render = () => {
  const createRoutes = require('./route');
  const routes       = createRoutes();
  // console.log(router)
  match({ routes, location }, () => {
    // Create an enhanced history that syncs navigation events with the store
    // const history = syncHistoryWithStore(browserHistory, {}, state=>state.routing);
    // const history = syncHistoryWithStore(browserHistory, store);

    //   match({ routes, location }, (error, redirectLocation, renderProps) => {
    // Tell the Router to use our enhanced history 
    // <Router routes={routes} history={history} key={Math.random()} />
      // <Router routes={routes} history={browserHistory} key={Math.random()} />,
    console.log(routes) 
    let app = (<ContextProvider context={context} >
      <Router routes={routes} history={browserHistory} key={Math.random()} />
    </ContextProvider>) ;

    ReactDOM.render(
      app,
      container
    );
  });
  browserHistory.listen(location => {
    // Match routes based on location object:
    match({ routes, location }, (error, redirectLocation, renderProps) => {

      if (!renderProps) {
        return;
      }

      // Get array of route handler components:
      const { components } = renderProps || {};
      // Define locals to be provided to all lifecycle hooks:
      const locals = {
        path: renderProps.location.pathname,
        query: renderProps.location.query,
        params: renderProps.params,

        //   dispatch,
      };
      // Don't fetch data for initial route, server has already done the work:
      if (window.INITIAL_STATE) {
        // Delete initial data so that subsequent data fetches can occur:
        delete window.INITIAL_STATE;
      } else {
        // Fetch mandatory data dependencies for 2nd route change onwards:
        trigger('fetch', components, locals);
      }

      // Fetch deferred, client-only data dependencies:
      trigger('defer', components, locals);
    });
  });
};

if (module.hot) {
  module.hot.accept('./route', () => {
    setTimeout(render);
  });
}

render();
