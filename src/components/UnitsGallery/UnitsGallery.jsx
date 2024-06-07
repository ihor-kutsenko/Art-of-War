import { useState } from 'react';

import styles from './UnitsGallery.module.scss';

import UnitModal from 'components/UnitModal/UnitModal';

const UnitsGallery = ({ units }) => {
  const [selectedUnit, setSelectedUnit] = useState(null);

  const handleUnitClick = index => {
    setSelectedUnit(index);
  };

  const closeModal = () => {
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

  return (
    <div className={styles.gallery}>
      {units.map((unit, index) => (
        <>
          <h2>{unit.name}</h2>
          <img
            key={unit.id}
            src={unit.image}
            alt={unit.name}
            onClick={() => handleUnitClick(index)}
            className={styles.image}
          />
        </>
      ))}
      {selectedUnit !== null && (
        <UnitModal
          units={units}
          selectedIndex={selectedUnit}
          onClose={closeModal}
          onPrevious={goToPrevious}
          onNext={goToNext}
        />
      )}
    </div>
  );
};

export default UnitsGallery;
