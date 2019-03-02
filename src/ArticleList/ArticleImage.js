import React from 'react';
import PropTypes from 'prop-types';
import styles from'./ArticleImage.module.css';

    const ArticleImage = ({url, title}) => (
        <div className={styles.imagebox}>
            <link href="./ArticleList/ArticleImage.module.css" rel="stylesheet" type="text/css" />
            <img className={styles.img} src={url} alt={title} />
        </div>
      );
    
  
  
  ArticleImage.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  };
  
  export default ArticleImage;