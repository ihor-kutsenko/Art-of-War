import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import UnitStats from 'components/UnitStats/UnitStats';
import UnitWeapons from 'components/UnitWeapons/UnitWeapons';
import HeroBadge from 'components/HeroBadge/HeroBadge';
import styles from './UnitDetails.module.scss';
import HeroAbilities from 'components/HeroAbilities/HeroAbilities';
import UnitSpecialStats from 'components/UnitSpecialStats/UnitSpecialStats';

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
          {t('main.selectLevel')}
        </label>
        <select
          id="levelSelect"
          value={selectedLevel}
          onChange={handleLevelChange}
          className={styles.levelSelect}
        >
          {unit.levels.map(level => (
            <option key={level.level} value={level.level}>
              {t('main.rank')} {level.level}
            </option>
          ))}
        </select>

        {selectedLevelData && (
          <>
            <UnitStats selectedLevelData={selectedLevelData} unit={unit} />
          </>
        )}

        {unit.abilitiesKey && (
          <>
            <HeroAbilities
              abilities={selectedLevelData.active}
              title={
                <span className={styles.titleActive}>
                  {t('main.active_abilities')}
                </span>
              }
              name={t(unit.activeKey)}
              abilityKey={unit.abilitiesKey}
            />
            <HeroAbilities
              abilities={selectedLevelData.passive}
              title={
                <span className={styles.titlePassive}>
                  {t('main.passive_abilities')}
                </span>
              }
              name={t(unit.passiveKey)}
              abilityKey={unit.abilitiesKey}
            />
          </>
        )}

        {unit.weapons && (
          <>
            <UnitWeapons
              selectedLevelData={selectedLevelData}
              weapons={unit.weapons}
            />
          </>
        )}

        {selectedLevelData.specialStats && (
          <UnitSpecialStats
            stats={selectedLevelData.specialStats}
            statKey={unit.specialStatsKey}
            title={t('units.confUnits.energyShield.info')}
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
