import { useState } from 'react';

import SvgIcon from 'components/SvgIcon/SvgIcon';
import UnitWeaponsStats from 'components/UnitWeaponsStats/UnitWeaponsStats';
import styles from './UnitWeapons.module.scss';

const UnitWeapons = ({ weapons, selectedLevelData }) => {
  const [selectedWeapons, setSelectedWeapons] = useState({});

  const handleWeaponClick = weaponIndex => {
    setSelectedWeapons(prevState => ({
      ...prevState,
      [weaponIndex]: !prevState[weaponIndex],
    }));
  };

  return (
    <div className={styles.weaponsContainer}>
      {weapons.map((weapon, index) => {
        const isSelected = selectedWeapons[index];
        const buttonClass = `${styles.button} ${
          isSelected ? styles.activeButton : ''
        }`;
        const iconClass = `${styles.iconNav} ${
          isSelected ? styles.rotatedIcon : ''
        }`;

        return (
          <div key={index} className={styles.additionalInfoItem}>
            <h3
              className={styles.title}
              onClick={() => handleWeaponClick(index)}
            >
              {weapon.type}
              <button className={buttonClass} type="button">
                <SvgIcon className={iconClass} iconId="icon-previous" />
              </button>
            </h3>
            {isSelected && (
              <UnitWeaponsStats
                selectedLevelData={selectedLevelData.weapons[index]}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default UnitWeapons;
