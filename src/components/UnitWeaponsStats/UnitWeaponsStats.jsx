import { useTranslation } from 'react-i18next';

import armor1 from '../../images/icons/armor1.png';
import armor2 from '../../images/icons/armor2.png';
import armor3 from '../../images/icons/armor3.png';
import doubleArrows from '../../images/icons/double-arrows.png';
import bullets from '../../images/icons/bullets.png';
import target from '../../images/icons/target.png';
import diagonalArrow from '../../images/icons/diagonal-arrow.png';
import cost from '../../images/icons/3d.png';
import time from '../../images/icons/time.png';

import styles from './UnitWeaponsStats.module.scss';

const UnitWeaponsStats = ({ selectedLevelData }) => {
  const { t } = useTranslation();

  const isMine =
    selectedLevelData.costPerMine >= 0 || selectedLevelData.timeToLayMine >= 0;

  return (
    <div className={styles.container}>
      <div className={styles.statItem}>
        <span className={styles.statLabel}>
          <img src={armor1} alt="armor" className={styles.statIcon} />
          {t('weaponsStats.damageArmor1')}:
        </span>
        <span className={styles.statValue}>
          {selectedLevelData.damageArmor1}{' '}
        </span>
      </div>
      <div className={styles.statItem}>
        <span className={styles.statLabel}>
          <img src={armor2} alt="armor" className={styles.statIcon} />
          {t('weaponsStats.damageArmor2')}:
        </span>
        <span className={styles.statValue}>
          {selectedLevelData.damageArmor2}
        </span>
      </div>
      <div className={styles.statItem}>
        <span className={styles.statLabel}>
          <img src={armor3} alt="armor" className={styles.statIcon} />
          {t('weaponsStats.damageArmor3')}:
        </span>
        <span className={styles.statValue}>
          {selectedLevelData.damageArmor3}
        </span>
      </div>

      {isMine ? (
        <>
          <div className={styles.statItem}>
            <span className={styles.statLabel}>
              <img src={cost} alt="Cost" className={styles.statIcon} />
              {t('weaponsStats.cost')}:
            </span>
            <span className={styles.statValue}>
              {selectedLevelData.costPerMine}
            </span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statLabel}>
              <img src={time} alt="Setting Time" className={styles.statIcon} />
              {t('weaponsStats.settingTime')}:
            </span>
            <span className={styles.statValue}>
              {selectedLevelData.timeToLayMine}
            </span>
          </div>
        </>
      ) : (
        <>
          <div className={styles.statItem}>
            <span className={styles.statLabel}>
              {' '}
              <img
                src={doubleArrows}
                alt="double Arrows"
                className={styles.statIcon}
              />
              {t('weaponsStats.firingRange')}:
            </span>
            <span className={styles.statValue}>
              {selectedLevelData.firingRange}
            </span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statLabel}>
              <img src={bullets} alt="bullets" className={styles.statIcon} />
              {t('weaponsStats.rateOfFire')}:
            </span>
            <span className={styles.statValue}>
              {selectedLevelData.rateOfFire}{' '}
            </span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statLabel}>
              <img src={target} alt="target" className={styles.statIcon} />
              {t('weaponsStats.firingAccuracy')}:
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
        </>
      )}

      <div className={styles.statItem}>
        <span className={styles.statLabel}>
          <img
            src={diagonalArrow}
            alt="diagonal Arrow"
            className={styles.statIcon}
          />
          {t('weaponsStats.explosionRadius')}:
        </span>
        <span className={styles.statValue}>
          {selectedLevelData.explosionRadius}
        </span>
      </div>
    </div>
  );
};

export default UnitWeaponsStats;
