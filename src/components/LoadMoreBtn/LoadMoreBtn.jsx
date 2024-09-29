import Button from 'components/Button/Button';

import styles from './LoadMoreBtn.module.scss';

const LoadMoreBtn = ({ handleLoadMore }) => {
  return (
    <Button
      className={styles.loadMore_btn}
      text="Load More"
      onClick={handleLoadMore}
    ></Button>
  );
};

export default LoadMoreBtn;
