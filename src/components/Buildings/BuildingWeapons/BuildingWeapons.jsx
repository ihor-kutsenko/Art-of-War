import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import SvgIcon from 'components/SvgIcon/SvgIcon';
import BuildingWeaponsStats from '../BuildingWeaponsStats/BuildingWeaponsStats';
import styles from '../../UnitWeapons/UnitWeapons.module.scss';

const BuildingWeapons = ({ weapons }) => {
  const { t } = useTranslation();

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
              {t(weapon.title)}
              <button className={buttonClass} type="button">
                <SvgIcon className={iconClass} iconId="icon-previous" />
              </button>
            </h3>
            {isSelected && (
              <BuildingWeaponsStats selectedLevelData={weapons[index]} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default BuildingWeapons;
