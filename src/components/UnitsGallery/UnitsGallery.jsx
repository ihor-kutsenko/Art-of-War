import { useState } from 'react';

import styles from './UnitsGallery.module.scss';
import ImageModal from 'components/ImageModal/ImageModal';

const UnitsGallery = ({ units }) => {
  const [selectedUnit, setSelectedUnit] = useState(null);

  const openImage = index => {
    setSelectedUnit(index);
  };

  const closeImage = () => {
    setSelectedUnit(null);
  };

  const goToNext = () => {
    setSelectedUnit(prevIndex =>
      prevIndex === units.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setSelectedUnit(prevIndex =>
      prevIndex === 0 ? units.length - 1 : prevIndex - 1
    );
  };

  const getImageSrc = unit => {
    return unit.image;
  };

  return (
    <div className={styles.gallery}>
      {units.map((unit, index) => (
        <>
          <h2>{unit.name}</h2>
          <img
            key={index}
            src={getImageSrc(unit)}
            alt={units.name}
            onClick={() => openImage(index)}
            className={styles.image}
          />
        </>
      ))}
      {selectedUnit !== null && (
        <ImageModal
          images={units}
          selectedIndex={selectedUnit}
          onClose={closeImage}
          onPrevious={goToPrevious}
          onNext={goToNext}
        />
      )}
    </div>
  );
};

export default UnitsGallery;
