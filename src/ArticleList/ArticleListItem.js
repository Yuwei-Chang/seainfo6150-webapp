import React from 'react';
import PropTypes from 'prop-types';
import styles from'./ArticleListItem.module.css';


class ArticleListItem extends React.Component {
  
    constructor(props) {
        super(props);
    }
    
    render() {
      const {title, shortText, author, date, year} = this.props;
      return (
        <div className={styles.item}>
            <head>
                <link href="./ArticleList/ArticleListItem.module.css" rel="stylesheet" type="text/css"/>
            </head>
            <ul id={styles.list}>
              <li id={styles.title}>{title}</li>
              <li id={styles.shortText}>{shortText}</li>
              <p></p>
              <li><address id={styles.author}>By: {author}</address></li>
              <li><time id={styles.date} dateTime="2018">{date}</time></li>
              <br></br>
            </ul>
        </div>
      );
    }
  }
  
  
  ArticleListItem.propTypes = {
    title: PropTypes.string.isRequired,
    shortText: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired
  };
  
  export default ArticleListItem;