import hp from '../../images/icons/heart.png';
import speed from '../../images/icons/arrow-right.png';
import view from '../../images/icons/eye.png';
import cost from '../../images/icons/3d.png';
import time from '../../images/icons/time.png';
import cp from '../../images/icons/star.png';
import styles from './UnitStats.module.scss';

const UnitStats = ({ unit, selectedLevelData }) => {
  return (
    <>
      <div className={styles.unitStats}>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>HP:</span>
          <span className={styles.statValue}>
            <img src={hp} alt="armor" className={styles.statIcon} />
            {selectedLevelData.hp}{' '}
          </span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>Armor:</span>
          <span className={styles.statValue}>
            <img src={unit.iconArmor} alt="armor" className={styles.statIcon} />
            {selectedLevelData.armor}
          </span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>Speed:</span>
          <span className={styles.statValue}>
            <img src={speed} alt="armor" className={styles.statIcon} />
            {selectedLevelData.speed}
          </span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>View:</span>
          <span className={styles.statValue}>
            <img src={view} alt="armor" className={styles.statIcon} />
            {selectedLevelData.view}
          </span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>Cost:</span>
          <span className={styles.statValue}>
            <img src={cost} alt="armor" className={styles.statIcon} />
            {selectedLevelData.cost}{' '}
          </span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>Time:</span>
          <span className={styles.statValue}>
            <img src={time} alt="armor" className={styles.statIcon} />
            {selectedLevelData.time}{' '}
          </span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>CP:</span>
          <span className={styles.statValue}>
            <img src={cp} alt="armor" className={styles.statIcon} />
            {selectedLevelData.cp}
          </span>
        </div>
      </div>
    </>
  );
};

export default UnitStats;
