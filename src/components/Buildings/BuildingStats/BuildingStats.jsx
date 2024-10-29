import { useTranslation } from 'react-i18next';

import hp from '../../../images/icons/heart.png';
import armor3 from '../../../images/icons/armor3.png';
import energy from '../../../images/icons/green-energy.png';
import size from '../../../images/icons/arrow-four.png';
import cost from '../../../images/icons/3d.png';
import time from '../../../images/icons/time.png';

import styles from '../../UnitStats/UnitStats.module.scss';

const BuildingStats = ({ stats }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.unitStats}>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>{t('buildings.stats.hp')}:</span>
          <span className={styles.statValue}>
            <img src={hp} alt="hp" className={styles.statIcon} />
            {stats.hp}{' '}
          </span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>
            {t('buildings.stats.armor')}:
          </span>
          <span className={styles.statValue}>
            <img src={armor3} alt="armor" className={styles.statIcon} />
            {stats.armor}
          </span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>
            {t('buildings.stats.energy')}:
          </span>
          <span className={styles.statValue}>
            <img src={energy} alt="energy" className={styles.statIcon} />
            {stats.energy}
          </span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>{t('buildings.stats.size')}:</span>
          <span className={styles.statValue}>
            <img src={size} alt="size" className={styles.statIcon} />
            {stats.size}
          </span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>{t('buildings.stats.cost')}:</span>
          <span className={styles.statValue}>
            <img src={cost} alt="cost" className={styles.statIcon} />
            {stats.cost}{' '}
          </span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>{t('buildings.stats.time')}:</span>
          <span className={styles.statValue}>
            <img src={time} alt="time" className={styles.statIcon} />
            {stats.time}{' '}
          </span>
        </div>
      </div>
    </>
  );
};

export default BuildingStats;
