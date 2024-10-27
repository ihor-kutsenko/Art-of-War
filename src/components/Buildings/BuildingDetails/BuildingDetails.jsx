import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import BuildingStats from '../BuildingStats/BuildingStats';
import BuildingWeapons from '../BuildingWeapons/BuildingWeapons';
import BuildingProduceList from '../BuildingProduceList/BuildingProduceList';
import styles from '../../Unit/UnitDetails.module.scss';

const BuildingsDetails = ({ building }) => {
  const { t } = useTranslation();

  const [selectedLevel, setSelectedLevel] = useState(7);
  const [selectedSubLevel, setSelectedSubLevel] = useState(1);

  useEffect(() => {
    setSelectedSubLevel(1);
  }, [building]);

  useEffect(() => {
    const selectedLevelData = building.levels.find(
      level => level.level === selectedLevel
    );
    if (selectedLevelData && selectedLevelData.subLevels.length === 0) {
      setSelectedSubLevel(1);
    }
  }, [selectedLevel, building.levels]);

  const handleLevelChange = event => {
    setSelectedLevel(parseInt(event.target.value, 10));
    setSelectedSubLevel(1);
  };

  const handleSubLevelChange = event => {
    setSelectedSubLevel(parseInt(event.target.value, 10));
  };

  const selectedLevelData = building.levels.find(
    level => level.level === selectedLevel
  );
  const selectedSubLevelData =
    selectedLevelData?.subLevels.find(
      subLevel => subLevel.subLevel === selectedSubLevel
    ) || selectedLevelData;

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <h2 className={styles.unitName}>{t(building.name)}</h2>
        <img
          src={building.image}
          alt={t(building.name)}
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

        {selectedLevelData && selectedLevelData.subLevels.length > 1 && (
          <>
            <label htmlFor="subLevelSelect" className={styles.levelSelectLabel}>
              Select the building Level:{' '}
            </label>
            <select
              id="subLevelSelect"
              value={selectedSubLevel}
              onChange={handleSubLevelChange}
              className={styles.levelSelect}
            >
              {selectedLevelData.subLevels.map(subLevel => (
                <option key={subLevel.subLevel} value={subLevel.subLevel}>
                  {subLevel.subLevel}
                </option>
              ))}
            </select>
          </>
        )}

        {selectedSubLevelData && (
          <div>
            <BuildingStats stats={selectedSubLevelData} />
            {selectedSubLevelData.weapons && (
              <BuildingWeapons weapons={selectedSubLevelData.weapons} />
            )}

            {selectedSubLevelData.produces && (
              <BuildingProduceList produces={selectedSubLevelData.produces} />
            )}
          </div>
        )}

        <div className={styles.unitDescriptionMobile}>
          <p>{building.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BuildingsDetails;
