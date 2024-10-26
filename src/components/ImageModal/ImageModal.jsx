import { useTranslation } from 'react-i18next';

import SvgIcon from 'components/SvgIcon/SvgIcon';
import styles from './ImageModal.module.scss';

const ImageModal = ({ images, selectedIndex, onClose, onPrevious, onNext }) => {
  const { t } = useTranslation();
  const getImageSrc = image => {
    return typeof image === 'string' ? image : image.image;
  };

  const getImageTitle = image => {
    return typeof image === 'string' ? '' : t(image.title);
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

      {getImageTitle(images[selectedIndex]) && (
        <h2 className={styles.imageTitle}>
          {getImageTitle(images[selectedIndex])}
        </h2>
      )}

      <img
        src={getImageSrc(images[selectedIndex])}
        alt={getImageTitle(images[selectedIndex])}
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
