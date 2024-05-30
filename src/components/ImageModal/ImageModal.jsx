import SvgIcon from 'components/SvgIcon/SvgIcon';
import styles from './ImageModal.module.scss';

const ImageModal = ({ images, selectedIndex, onClose, onPrevious, onNext }) => {
  const getImageSrc = image => {
    return typeof image === 'string' ? image : image.image;
  };

  const getImageTitle = image => {
    return typeof image === 'string' ? '' : image.title;
  };

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
        src={getImageSrc(images[selectedIndex])}
        alt={getImageTitle(images[selectedIndex])}
        className={styles.selectedImage}
      />
      {getImageTitle(images[selectedIndex]) && (
        <div className={styles.imageTitle}>
          {getImageTitle(images[selectedIndex])}
        </div>
      )}

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
