import React from 'react';
import PropTypes from 'prop-types';
import ArticleListItem from './ArticleListItem';
import styles from './ArticleList.module.css';
import Header from './Header.js';
import Footer from './Footer.js';

const ArticleList = ({ articles }) => (
    <section className={styles.background}>
    <div id={styles.background1}>
    <Header />
        <div className={styles.background2}>
        <div className={styles.grid_box}>
       
        
    {
        // this iterates through the articles JSON and
        // calls your ArticleListItem component for each article
        Object.values(articles).map(article => {
          return <ArticleListItem
            key={article.slug}
            title={article.title}
            date={article.pubDate}
            year={article.pubYear}
            author={article.author}
            shortText={article.shortText}
            url={article.image._url}
          /> 
        })
    }
    </div>
      </div>
      <Footer />
      </div>
      
    
    </section>  
  );

  ArticleList.propTypes = {
    articles: PropTypes.object.isRequired
  }
  
  export default ArticleList;