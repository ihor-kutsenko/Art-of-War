import styles from './ScrollWrapper.module.scss';

const ScrollWrapper = ({ children }) => {
  return (
    <>
      <div className={styles.wrapper}>{children}</div>
    </>
  );
};

export default ScrollWrapper;
