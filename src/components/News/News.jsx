import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import ArticlesList from 'components/Articles/ArticlesList/ArticlesList.jsx';
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn.jsx';
import { news } from '../../data/news/news.js';

import styles from './News.module.scss';
const News = () => {
  const { t } = useTranslation();

  const [visibleNews, setVisibleNews] = useState(15);

  const handleLoadMore = () => {
    setVisibleNews(prevState => prevState + 10);
  };

  const sortedNews = [...news].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const currentItems = sortedNews.slice(0, visibleNews);
  return (
    <>
      <ArticlesList>
        {currentItems.map(news => (
          <div className={styles.item} key={news.id}>
            <p className={styles.date}>{news.date}</p>
            <p className={styles.content}>{t(news.content)}</p>
          </div>
        ))}

        {visibleNews < news.length && (
          <LoadMoreBtn handleLoadMore={handleLoadMore} />
        )}
      </ArticlesList>
    </>
  );
};

export default News;
