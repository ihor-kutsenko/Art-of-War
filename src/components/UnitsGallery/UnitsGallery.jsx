import styles from './UnitsGallery.module.scss';

import { useState } from 'react';
import UnitDetails from 'components/Unit/UnitDetails';

const UnitsGallery = ({ units }) => {
  const [selectedUnit, setSelectedUnit] = useState(null);

  const handleUnitClick = unit => {
    setSelectedUnit(unit);
  };

  return (
    <div className={styles.unitsList}>
      {units.map(unit => (
        <div
          key={unit.id}
          className={styles.unitLink}
          onClick={() => handleUnitClick(unit)}
        >
          {unit.name}
          <img src={unit.image} alt="" />
        </div>
      ))}
      {selectedUnit && (
        <UnitDetails
          unit={selectedUnit}
          onClose={() => setSelectedUnit(null)}
        />
      )}
    </div>
  );
};

export default UnitsGallery;
