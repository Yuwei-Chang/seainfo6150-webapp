import React from 'react';
import PropTypes from 'prop-types';
import styles from'./ArticleListItem.module.css';


class ArticleListItem extends React.Component {
    
    render() {
      const {title, shortText, author, date, year} = this.props;
      return (
        <section className={styles.item}>
            <head>
                <link href="./ArticleList/ArticleListItem.module.css" rel="stylesheet" type="text/css"/>
            </head>
            <div id={styles.list}>
              <h3 id={styles.title}>{title}</h3>
              <p id={styles.shortText}>{shortText}</p>
              <address id={styles.author}>By: {author}</address>
              <time id={styles.date} datetime={year}>{date}</time>
              <br />
            </div>
        </section>
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