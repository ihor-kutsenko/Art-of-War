import { useTranslation } from 'react-i18next';

import hp from '../../images/icons/heart.png';
import speed from '../../images/icons/arrow-right.png';
import view from '../../images/icons/eye.png';
import cost from '../../images/icons/3d.png';
import time from '../../images/icons/time.png';
import cp from '../../images/icons/star.png';
import styles from './UnitStats.module.scss';

const UnitStats = ({ unit, selectedLevelData }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.unitStats}>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>{t('units.stats.hp')}:</span>
          <span className={styles.statValue}>
            <img src={hp} alt="hp" className={styles.statIcon} />
            {selectedLevelData.hp}{' '}
          </span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>{t('units.stats.armor')}:</span>
          <span className={styles.statValue}>
            <img src={unit.iconArmor} alt="armor" className={styles.statIcon} />
            {selectedLevelData.armor}
          </span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>{t('units.stats.speed')}:</span>
          <span className={styles.statValue}>
            <img src={speed} alt="speed" className={styles.statIcon} />
            {selectedLevelData.speed}
          </span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>{t('units.stats.view')}:</span>
          <span className={styles.statValue}>
            <img src={view} alt="view" className={styles.statIcon} />
            {selectedLevelData.view}
          </span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>{t('units.stats.cost')}:</span>
          <span className={styles.statValue}>
            <img src={cost} alt="cost" className={styles.statIcon} />
            {selectedLevelData.cost}{' '}
          </span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>{t('units.stats.time')}:</span>
          <span className={styles.statValue}>
            <img src={time} alt="time" className={styles.statIcon} />
            {selectedLevelData.time}{' '}
          </span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>{t('units.stats.cp')}:</span>
          <span className={styles.statValue}>
            <img src={cp} alt="cp" className={styles.statIcon} />
            {selectedLevelData.cp}
          </span>
        </div>
      </div>
    </>
  );
};

export default UnitStats;
