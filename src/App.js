import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import {Route, Switch} from 'react-router-dom';
import Want from './containers/Want/Want';
import All from './containers/All/All';
import Near from './containers/Near/Near';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path='/' exact component={Want} />
          <Route path='/all' component={All} />
          <Route path='/near' component={Near}/>
        </Switch>
      </Layout>
    )
  }
}

export default App;
