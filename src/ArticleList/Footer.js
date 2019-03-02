import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className = {styles.footer}>
     <span>&copy;</span>
     <time dateTime = "2019">2019, </time>
     <address>Yuwei Chang</address>
  </footer>
);

Footer.propTypes = {
};

export default Footer;