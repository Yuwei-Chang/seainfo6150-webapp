import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

const Header = () => (
  <header className = {styles.header}>
     <h2>The  INFO6150  News</h2>
     <time dateTime = "2019">Wed. February 20, 2019</time>
  </header>
);

Header.propTypes = {
};

export default Header;