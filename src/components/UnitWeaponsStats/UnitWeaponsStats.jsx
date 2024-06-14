import armor1 from '../../images/icons/armor1.png';
import armor2 from '../../images/icons/armor2.png';
import armor3 from '../../images/icons/armor3.png';
import doubleArrows from '../../images/icons/double-arrows.png';
import bullets from '../../images/icons/bullets.png';
import target from '../../images/icons/target.png';
import diagonalArrow from '../../images/icons/diagonal-arrow.png';

import styles from './UnitWeaponsStats.module.scss';

const UnitWeaponsStats = ({ selectedLevelData }) => {
  return (
    <div className={styles.container}>
      <div className={styles.statItem}>
        <span className={styles.statLabel}>
          <img src={armor1} alt="armor" className={styles.statIcon} />
          Damage vs armor I:
        </span>
        <span className={styles.statValue}>
          {selectedLevelData.damageArmor1}{' '}
        </span>
      </div>
      <div className={styles.statItem}>
        <span className={styles.statLabel}>
          <img src={armor2} alt="armor" className={styles.statIcon} />
          Damage vs armor II:
        </span>
        <span className={styles.statValue}>
          {selectedLevelData.damageArmor2}
        </span>
      </div>
      <div className={styles.statItem}>
        <span className={styles.statLabel}>
          <img src={armor3} alt="armor" className={styles.statIcon} />
          Damage vs armor III:
        </span>
        <span className={styles.statValue}>
          {selectedLevelData.damageArmor3}
        </span>
      </div>
      <div className={styles.statItem}>
        <span className={styles.statLabel}>
          {' '}
          <img
            src={doubleArrows}
            alt="double Arrows"
            className={styles.statIcon}
          />
          Firing range:
        </span>
        <span className={styles.statValue}>
          {selectedLevelData.firingRange}
        </span>
      </div>
      <div className={styles.statItem}>
        <span className={styles.statLabel}>
          <img src={bullets} alt="bullets" className={styles.statIcon} />
          Rate of fire:
        </span>
        <span className={styles.statValue}>
          {selectedLevelData.rateOfFire}{' '}
        </span>
      </div>
      <div className={styles.statItem}>
        <span className={styles.statLabel}>
          <img src={target} alt="target" className={styles.statIcon} />
          Firing accuracy:
        </span>
        <div>
          <span className={styles.statValue}>
            {selectedLevelData.firingAccuracy}{' '}
          </span>
          <span className={styles.statValue}>
            {selectedLevelData.firingAccuracy2}{' '}
          </span>
        </div>
      </div>
      <div className={styles.statItem}>
        <span className={styles.statLabel}>
          <img
            src={diagonalArrow}
            alt="diagonal Arrow"
            className={styles.statIcon}
          />
          Explosion radius:
        </span>
        <span className={styles.statValue}>
          {selectedLevelData.explosionRadius}
        </span>
      </div>
    </div>
  );
};

export default UnitWeaponsStats;
