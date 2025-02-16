import { useState } from 'react';
import styles from './Footer.module.scss';
// import Modal from 'components/Modal/Modal';
import FooterModal from 'components/FooterModal/FooterModal';

const Footer = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <div className={styles.footer}>
        <span className={styles.text}>
          &copy; 2024-2025 | All Rights Reserved |&#160;
        </span>
        <span>
          Developed&nbsp;
          <span>
            by&nbsp;
            <button
              className={styles.footerBtn}
              type="button"
              onClick={openModal}
            >
              <span className={styles.footerBtnText}>--DOMINATOR--</span>
            </button>
          </span>
        </span>
      </div>
      {isModalOpen && <FooterModal onClose={closeModal} />}
    </>
  );
};

export default Footer;
