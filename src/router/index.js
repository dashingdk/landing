import React, { Component } from 'react';

import Layout from '../containers/Layout';
import Home from '../containers/Home';
import NotFound from '../containers/NotFound';

import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

export default class Router extends Component {
  render() {
    // NOTE: routerProps need to be removed once the gh-pages site url is changed to
    // http://dashing.dk
    const routerProps = {};
    if (process.env.NODE_ENV === 'production') {
      routerProps.basename = '/dashing-landing';
    }
    return (
      <BrowserRouter {...routerProps}>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    )
  }
}
