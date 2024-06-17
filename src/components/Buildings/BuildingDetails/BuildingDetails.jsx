import { useState } from 'react';
import styles from '../../Unit/UnitDetails.module.scss';
import BuildingStats from '../BuildingStats/BuildingStats';
import UnitWeapons from 'components/UnitWeapons/UnitWeapons';

const BuildingsDetails = ({ building }) => {
  const [selectedLevel, setSelectedLevel] = useState(1);

  const handleLevelChange = event => {
    setSelectedLevel(parseInt(event.target.value, 10));
  };

  const selectedLevelData = building.levels.find(
    level => level.level === selectedLevel
  );

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <h2 className={styles.unitName}>{building.name}</h2>
        <img
          src={building.image}
          alt={building.name}
          className={styles.selectedImage}
        />
        <div className={styles.unitDescription}>
          <p>{building.description}</p>
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
          {building.levels.map(level => (
            <option key={level.level} value={level.level}>
              Level {level.level}
            </option>
          ))}
        </select>

        {selectedLevelData && (
          <BuildingStats
            selectedLevelData={selectedLevelData}
            building={building}
          />
        )}
        {building.weapons && (
          <UnitWeapons
            selectedLevelData={selectedLevelData}
            weapons={building.weapons}
          />
        )}

        <div className={styles.unitDescriptionMobile}>
          <p>{building.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BuildingsDetails;
