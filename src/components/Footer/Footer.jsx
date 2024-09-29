import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <span className={styles.text}>
          &copy; 2024 | All Rights Reserved |&#160;
        </span>
        <span>
          Developed&nbsp;
          <span>
            by&nbsp;
            <button className={styles.footerBtn} type="button">
              <span className={styles.footerBtnText}>--DOMINATOR--</span>
            </button>
          </span>
        </span>
      </div>
    </>
  );
};

export default Footer;
