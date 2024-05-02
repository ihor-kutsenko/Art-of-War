import styles from './ItemList.module.scss';

const ItemList = ({ children }) => {
  return <div className={styles.list}>{children}</div>;
};

export default ItemList;
