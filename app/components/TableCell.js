import React, { Component } from 'react';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: '25%',
    bottom: '25%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

class TableCell extends Component {
  state = { modalIsOpen: false };
  componentDidMount() {
    const { service, handleFetchSourceData, slot } = this.props;
    handleFetchSourceData(service, slot);
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  setButtonStyle = data => {
    let buttonStyle = {
      backgroundColor: '#D58A2A',
      border: 'none',
      color: 'white',
      width: '100px',
      height: '30px',
      textAlign: 'center',
      textDecoration: 'none',
      display: 'inline-block',
      fontSize: '14px',
      borderRadius: '5px',
    };

    // Set different colors based on branches
    if (data && data.properties) {
      if (
        data.properties.branch === 'master' ||
        data.properties.branch === 'qa' ||
        data.properties.branch === 'qa2' ||
        data.properties.branch === 'integration'
      ) {
        buttonStyle.backgroundColor = '#4CAF50';
      } else if (data.properties.repoUrl === 'VSTSRM') {
        buttonStyle.backgroundColor = '#3340C1';
      }
    }

    return buttonStyle;
  };

  render() {
    const { service, sourceData, error } = this.props;
    let display;
    if (error) {
      return (
        <td>
          <p>error</p>
        </td>
      );
    }
    if (sourceData === null || !sourceData || !sourceData.properties) {
      return <td>...</td>;
    }
    if (!sourceData.properties.branch) {
      display = sourceData.properties.repoUrl;
    } else {
      display = sourceData.properties.branch;
    }
    return (
      <td style={styles.cellStyle}>
        <button
          style={this.setButtonStyle(sourceData)}
          onClick={this.openModal}
        >
          {display}
        </button>
      </td>
    );
  }
}

const styles = {
  cellStyle: {
    // height: '6px',
    paddingTop: '1px',
    paddingBottom: '1px',
  },
};

export default TableCell;
