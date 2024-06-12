import React, { useState } from 'react';

import UnitStats from 'components/UnitStats/UnitStats';
import UnitWeapons from 'components/UnitWeapons/UnitWeapons';
import styles from './UnitDetails.module.scss';

const UnitDetails = ({ unit }) => {
  const [selectedLevel, setSelectedLevel] = useState(7);

  const handleLevelChange = event => {
    setSelectedLevel(parseInt(event.target.value, 10));
  };

  const selectedLevelData = unit.levels.find(
    level => level.level === selectedLevel
  );

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <h2 className={styles.unitName}>{unit.name}</h2>
        <img
          src={unit.image}
          alt={unit.name}
          className={styles.selectedImage}
        />
        <div className={styles.unitDescription}>
          <p>{unit.description}</p>
        </div>
      </div>

      <div className={styles.rightSection}>
        <label htmlFor="levelSelect" className={styles.levelSelectLabel}>
          Select Level:{' '}
        </label>
        <select
          id="levelSelect"
          value={selectedLevel}
          onChange={handleLevelChange}
          className={styles.levelSelect}
        >
          {unit.levels.map(level => (
            <option key={level.level} value={level.level}>
              Level {level.level}
            </option>
          ))}
        </select>

        {selectedLevelData && (
          <UnitStats selectedLevelData={selectedLevelData} unit={unit} />
        )}
        {selectedLevelData && (
          <UnitWeapons weapons={selectedLevelData.weapons} />
        )}
      </div>
    </div>
  );
};

export default UnitDetails;
