import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './ArticlesItem.module.scss';
import Button from 'components/Button/Button';
import YoutubeTrailer from 'components/YoutubeTrailer/YoutubeTrailer';

const ArticlesItem = ({ id, title, date, content, videoId }) => {
  const { t } = useTranslation();

  const [showFullContent, setShowFullContent] = useState(false);
  const toggleContent = () => setShowFullContent(!showFullContent);

  const translatedContent = t(content, { returnObjects: true });

  // const previewContent = t(content).slice(0, 100) + '...';
  const previewContent = translatedContent[0] + '...';

  return (
    <>
      <div className={styles.item} key={id}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t(title)}</h2>
          <p className={styles.date}>{date}</p>
        </div>

        <div className={styles.content}>
          {showFullContent ? (
            translatedContent.map((paragraph, index) => (
              <p key={index} className={styles.paragraph}>
                {paragraph}
              </p>
            ))
          ) : (
            <p className={styles.paragraph}>{previewContent}</p>
          )}

          {showFullContent && videoId && (
            <div className={styles.trailerWrapper}>
              <YoutubeTrailer videoId={videoId} />
            </div>
          )}
        </div>

        <Button onClick={toggleContent} className={styles.readMoreButton}>
          {showFullContent ? t('articles.showLess') : t('articles.readMore')}
        </Button>
      </div>
    </>
  );
};

export default ArticlesItem;
