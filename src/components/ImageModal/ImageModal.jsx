import SvgIcon from 'components/SvgIcon/SvgIcon';
import styles from './ImageModal.module.scss';

const ImageModal = ({ images, selectedIndex, onClose, onPrevious, onNext }) => {
  return (
    <div className={styles.modal}>
      <button className={styles.closeButton} type="button" onClick={onClose}>
        <SvgIcon className={styles.iconClose} iconId="icon-close" />
      </button>

      <button
        className={`${styles.navButton} ${styles.prevButton}`}
        type="button"
        onClick={onPrevious}
      >
        <SvgIcon className={styles.iconNav} iconId="icon-previous" />
      </button>

      <img
        src={images[selectedIndex]}
        alt="Selected"
        className={styles.selectedImage}
      />

      <button
        className={`${styles.navButton} ${styles.nextButton}`}
        type="button"
        onClick={onNext}
      >
        <SvgIcon className={styles.iconNav} iconId="icon-next" />
      </button>
    </div>
  );
};

export default ImageModal;
