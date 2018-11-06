import React from 'react';

const Header = () => {
  return <h1 style={styles.headerStyle}>Dazboard</h1>;
};

const styles = {
  headerStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '32px'
  }
};

export default Header;