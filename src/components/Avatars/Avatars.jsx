import { useState } from 'react';

import ImageModal from 'components/ImageModal/ImageModal';
import styles from './Avatars.module.scss';

const Avatars = ({ avatars }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openImage = index => {
    setSelectedIndex(index);
  };

  const closeImage = () => {
    setSelectedIndex(null);
  };

  const goToNext = () => {
    setSelectedIndex(prevIndex =>
      prevIndex === avatars.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setSelectedIndex(prevIndex =>
      prevIndex === 0 ? avatars.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.gallery}>
      {avatars.map((avatar, index) => (
        <img
          key={index}
          src={avatar}
          alt="avatar"
          onClick={() => openImage(index)}
          className={styles.image}
        />
      ))}
      {selectedIndex !== null && (
        <ImageModal
          images={avatars}
          selectedIndex={selectedIndex}
          onClose={closeImage}
          onPrevious={goToPrevious}
          onNext={goToNext}
        />
      )}
    </div>
  );
};

export default Avatars;
