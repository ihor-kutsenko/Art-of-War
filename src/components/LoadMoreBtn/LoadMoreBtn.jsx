import { useTranslation } from 'react-i18next';

import Button from 'components/Button/Button';

import styles from './LoadMoreBtn.module.scss';

const LoadMoreBtn = ({ handleLoadMore }) => {
  const { t } = useTranslation();

  return (
    <Button
      className={styles.loadMore_btn}
      text={t('main.loadMore')}
      onClick={handleLoadMore}
    ></Button>
  );
};

export default LoadMoreBtn;
