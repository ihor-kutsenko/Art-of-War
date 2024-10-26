import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import ImageModal from 'components/ImageModal/ImageModal';
import styles from './Gallery.module.scss';

const Gallery = ({ images }) => {
  const { t } = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openImage = index => {
    setSelectedIndex(index);
  };

  const closeImage = () => {
    setSelectedIndex(null);
  };

  const goToNext = () => {
    setSelectedIndex(prevIndex =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setSelectedIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const getImageSrc = image => {
    return typeof image === 'string' ? image : image.image;
  };

  return (
    <div className={styles.gallery}>
      {images.map((image, index) => (
        <img
          key={index}
          src={getImageSrc(image)}
          alt={typeof image === 'string' ? 'avatar' : t(image.title)}
          onClick={() => openImage(index)}
          className={styles.image}
        />
      ))}
      {selectedIndex !== null && (
        <ImageModal
          images={images}
          selectedIndex={selectedIndex}
          onClose={closeImage}
          onPrevious={goToPrevious}
          onNext={goToNext}
        />
      )}
    </div>
  );
};

export default Gallery;
