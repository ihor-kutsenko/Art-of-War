import { useEffect } from 'react';
import styles from './FooterModal.module.scss';
import SvgIcon from 'components/SvgIcon/SvgIcon';

const FooterModal = ({ onClose }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>
          <SvgIcon className={styles.iconClose} iconId="icon-close" />
        </button>
        <img
          src="https://res.cloudinary.com/dsy8hantq/image/upload/v1728206192/Dominator_u07f7m.webp"
          alt="Dominator"
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default FooterModal;
