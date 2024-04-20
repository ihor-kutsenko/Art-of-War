import styles from './PaginationContainer.module.scss';

const PaginationContainer = ({ children }) => {
  return <div className={styles.pagination_container}>{children}</div>;
};

export default PaginationContainer;
