import { useState } from 'react';

import ArticlesList from './ArticlesList/ArticlesList';
import ArticlesItem from './ArticlesItem/ArticlesItem';
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn';

import { articles } from '../../data/articles/articles.js';

const Articles = () => {
  const [visibleItems, setVisibleItems] = useState(5);

  const handleLoadMore = () => {
    setVisibleItems(prevState => prevState + 5);
  };

  const currentItems = articles.slice(0, visibleItems);

  return (
    <>
      <ArticlesList>
        {currentItems.map(article => (
          <ArticlesItem
            key={article.id}
            title={article.title}
            date={article.date}
            content={article.content}
            videoId={article.videoId}
          />
        ))}

        {visibleItems < articles.length && (
          <LoadMoreBtn handleLoadMore={handleLoadMore} />
        )}
      </ArticlesList>
    </>
  );
};

export default Articles;
