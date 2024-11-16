import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './ArticlesItem.module.scss';
import Button from 'components/Button/Button';

const ArticlesItem = ({ id, title, date, content }) => {
  const { t } = useTranslation();

  const [showFullContent, setShowFullContent] = useState(false);
  const toggleContent = () => setShowFullContent(!showFullContent);

  const previewContent = t(content).slice(0, 100) + '...';

  return (
    <>
      <div className={styles.item} key={id}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t(title)}</h2>
          <p className={styles.date}>{date}</p>
        </div>
        <p className={styles.content}>
          {showFullContent ? t(content) : previewContent}
        </p>
        <Button onClick={toggleContent} className={styles.readMoreButton}>
          {showFullContent ? t('articles.showLess') : t('articles.readMore')}
        </Button>
      </div>
    </>
  );
};

export default ArticlesItem;
