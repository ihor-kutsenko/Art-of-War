import React, { useState } from 'react';

import styles from './UnitDetails.module.scss';

const UnitDetails = ({ unit, onClose }) => {
  const [selectedLevel, setSelectedLevel] = useState(1);

  const handleLevelChange = event => {
    setSelectedLevel(parseInt(event.target.value, 10));
  };

  const selectedLevelData = unit.levels.find(
    level => level.level === selectedLevel
  );

  return (
    <div className={styles.container}>
      <div>
        <h2>{unit.name}</h2>
        <p>{unit.description}</p>
        {unit.additionalInfo && <p>{unit.additionalInfo}</p>}
        <img
          src={unit.image}
          alt={unit.name}
          className={styles.selectedImage}
        />
        <label htmlFor="levelSelect">Select Level: </label>
        <select
          id="levelSelect"
          value={selectedLevel}
          onChange={handleLevelChange}
        >
          {unit.levels.map(level => (
            <option key={level.level} value={level.level}>
              Level {level.level}
            </option>
          ))}
        </select>

        {selectedLevelData && (
          <div className={styles.levelData}>
            <p>Value 1: {selectedLevelData.value1}</p>
            <p>Value 2: {selectedLevelData.value2}</p>
            <p>Value 3: {selectedLevelData.value3}</p>
            <p>Value 4: {selectedLevelData.value4}</p>
            <p>Value 5: {selectedLevelData.value5}</p>
            <p>Value 6: {selectedLevelData.value6}</p>
          </div>
        )}

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default UnitDetails;
