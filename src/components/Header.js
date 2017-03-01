import React, { PropTypes } from 'react';

const Header = ({ text }) => {
  return (
    <header
      className='side-bar-header'>
      <img
        className='side-bar-icon'
        role="presentation"
        src={require('../assets/icons/icon.svg')} />
      <h4
        className='side-bar-admin'>
        {text}
      </h4>
    </header>
  );
}

Header.propTypes = {
  text: PropTypes.string
}

export default Header;
