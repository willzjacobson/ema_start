import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from './Header';
import Table from './Table';

import * as sourceActions from '../actions/source';

class App extends Component {

  render() {
    return (
      <div className="container">
        <Header />
        <Table />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    sourceActions: bindActionCreators(sourceActions, dispatch),
  };
}

export default connect(
  null,
  mapDispatchToProps
)(App);
