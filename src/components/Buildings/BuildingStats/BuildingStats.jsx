import hp from '../../../images/icons/heart.png';
import speed from '../../../images/icons/arrow-right.png';
import view from '../../../images/icons/eye.png';
import cost from '../../../images/icons/3d.png';
import time from '../../../images/icons/time.png';

import styles from '../../UnitStats/UnitStats.module.scss';

const BuildingStats = ({ building, selectedLevelData }) => {
  return (
    <>
      <div className={styles.unitStats}>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>HP:</span>
          <span className={styles.statValue}>
            <img src={hp} alt="hp" className={styles.statIcon} />
            {selectedLevelData.hp}{' '}
          </span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>Armor:</span>
          <span className={styles.statValue}>
            <img
              src={building.iconArmor}
              alt="armor"
              className={styles.statIcon}
            />
            {selectedLevelData.armor}
          </span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>Energy:</span>
          <span className={styles.statValue}>
            <img src={speed} alt="energy" className={styles.statIcon} />
            {selectedLevelData.energy}
          </span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>Size:</span>
          <span className={styles.statValue}>
            <img src={view} alt="size" className={styles.statIcon} />
            {selectedLevelData.size}
          </span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>Cost:</span>
          <span className={styles.statValue}>
            <img src={cost} alt="cost" className={styles.statIcon} />
            {selectedLevelData.cost}{' '}
          </span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>Time:</span>
          <span className={styles.statValue}>
            <img src={time} alt="time" className={styles.statIcon} />
            {selectedLevelData.time}{' '}
          </span>
        </div>
      </div>
    </>
  );
};

export default BuildingStats;
