import React from 'react';
import PropTypes from 'prop-types';
import ArticleTableRow from './ArticleTableRow';

const ArticleTable = ({ articles }) => (
  
  <table border="2" align="center">
  <caption><h1>Table</h1></caption>
 
  <tr>
    <th colspan="2"><h3>Checkbox Status</h3></th>
    <th><h3>Author</h3></th>
    <th><h3>Date</h3></th>
    <th><h3>Short text</h3></th>
  </tr>
  
  {
    // this iterates through the articles JSON and
    // calls your ArticleTableRow component for each article
    Object.values(articles).map(article => {
      return <ArticleTableRow
        key={article.slug}
        title={article.title}
        date={article.pubDate}
        author={article.author}
        shortText={article.shortText}
      />
    })
  }
  </table>
  
);

ArticleTable.propTypes = {
  articles: PropTypes.object.isRequired
}

export default ArticleTable;
