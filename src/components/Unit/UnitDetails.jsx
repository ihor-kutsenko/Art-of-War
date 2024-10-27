import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import UnitStats from 'components/UnitStats/UnitStats';
import UnitWeapons from 'components/UnitWeapons/UnitWeapons';
import HeroBadge from 'components/HeroBadge/HeroBadge';
import styles from './UnitDetails.module.scss';

const UnitDetails = ({ unit }) => {
  const { t } = useTranslation();

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
        <h2 className={styles.unitName}>{t(unit.name)}</h2>
        <p>{t(unit.type)}</p>

        {selectedLevelData.class && (
          <HeroBadge classNumber={selectedLevelData.class} />
        )}

        <img
          src={unit.image}
          alt={t(unit.name)}
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
        {unit.weapons && (
          <UnitWeapons
            selectedLevelData={selectedLevelData}
            weapons={unit.weapons}
          />
        )}

        <div className={styles.unitDescriptionMobile}>
          <p>{unit.description}</p>
        </div>
      </div>
    </div>
  );
};

export default UnitDetails;
