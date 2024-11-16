import styles from './ArticlesList.module.scss';

const ArticlesList = ({ children }) => {
  return <div className={styles.list}>{children}</div>;
};

export default ArticlesList;
