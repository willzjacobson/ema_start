import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import TableCell from './TableCell';
import * as sourceActions from '../actions/source';

class Table extends Component {
  handleFetchSourceData = (service, slot) => {
    // this.props.sourceActions.fetchSource(service, slot);
    console.log('fetchSource');
  };

  render() {
    const s = this.props.source;
    const rows = [];
    const firstRow = [];
    firstRow.push(<th>service</th>);
    const tableHeads = [ReactHtmlParser('<th>service</th>')];
    let firstRound = true;
    for (let service in s) {
      const cells = [];
      if (typeof s[service] !== 'object') continue;
      for (let slot in s[service]) {
        cells.push(
          <TableCell
            key={slot}
            service={service}
            handleFetchSourceData={this.handleFetchSourceData}
            slot={slot}
            sourceData={s[service][slot]}
          />
        );
        if (firstRound) tableHeads.push(<th key={slot}>{slot}</th>);
      }
      rows.push(
        <tr key={service}>
          <td>{service}</td>
          {cells}
        </tr>
      );
      firstRound = false;
    }
    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr style={styles.titleStyle}>{tableHeads}</tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}

const styles = {
  titleStyle: {
    // backgroundColor: '#DCDCDC',
    // textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '16px',
  },
};

function mapStateToProps(state) {
  return {
    source: state.source,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    sourceActions: bindActionCreators(sourceActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);
