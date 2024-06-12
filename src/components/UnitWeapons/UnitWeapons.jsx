import SvgIcon from 'components/SvgIcon/SvgIcon';
import styles from './UnitWeapons.module.scss';
import { useState } from 'react';
import UnitWeaponsStats from 'components/UnitWeaponsStats/UnitWeaponsStats';

const UnitWeapons = ({ weapons }) => {
  const [selectedWeapons, setSelectedWeapons] = useState({});

  const handleWeaponClick = weapon => {
    setSelectedWeapons(prevState => ({
      ...prevState,
      [weapon.type]: !prevState[weapon.type],
    }));
  };

  return (
    <div className={styles.weaponsContainer}>
      {weapons.map((weapon, index) => {
        const isSelected = selectedWeapons[weapon.type];
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
              onClick={() => handleWeaponClick(weapon)}
            >
              {weapon.type}
              <button className={buttonClass} type="button">
                <SvgIcon className={iconClass} iconId="icon-previous" />
              </button>
            </h3>
            {isSelected && <UnitWeaponsStats weapon={weapon} />}
          </div>
        );
      })}
    </div>
  );
};

export default UnitWeapons;
