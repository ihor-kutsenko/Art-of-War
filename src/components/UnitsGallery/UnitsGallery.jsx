import { useState } from 'react';
import UnitModal from 'components/UnitModal/UnitModal';

import styles from './UnitsGallery.module.scss';

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
    <>
      {' '}
      <div className={styles.info}>
        The characteristics of the units and heroes are maxed out for each rank
        as of 01/08/2024. A bit later some changes have occurred both for units
        and heroes and they’re still ongoing till today. After the feature
        changes, the information about it will be collected, processed and
        updated.
      </div>
      <div className={styles.gallery}>
        {units.map((unit, index) => (
          <div
            onClick={() => handleUnitClick(index)}
            key={unit.id}
            className={styles.item}
          >
            <h3 className={styles.title}>{unit.name}</h3>
            <img src={unit.image} alt={unit.name} className={styles.image} />
          </div>
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
    </>
  );
};

export default UnitsGallery;
