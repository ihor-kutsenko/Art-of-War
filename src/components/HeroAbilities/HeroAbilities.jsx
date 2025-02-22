import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import SvgIcon from 'components/SvgIcon/SvgIcon';
import styles from './HeroAbilities.module.scss';

const HeroAbilities = ({ abilities, title, name, abilityKey }) => {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(prev => !prev);
  };

  const buttonClass = `${styles.button} ${
    isExpanded ? styles.activeButton : ''
  }`;
  const iconClass = `${styles.iconNav} ${isExpanded ? styles.rotatedIcon : ''}`;

  const highlightVariables = (text, values) => {
    if (!text) return '';

    const keys = Object.values(values).map(val => String(val));
    const regex = new RegExp(`(${keys.join('|')})`, 'g');

    return text.split(regex).map((part, index) =>
      keys.includes(part) ? (
        <span key={index} className={styles.highlight}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className={styles.abilitiesContainer}>
      <div className={styles.additionalInfoItem}>
        <h3 className={styles.title} onClick={toggleExpand}>
          {title}
          <button className={buttonClass} type="button">
            <SvgIcon className={iconClass} iconId="icon-previous" />
          </button>
        </h3>

        {isExpanded && (
          <div>
            <h2 className={styles.name}>{name}</h2>
            <ul className={styles.container}>
              {abilities.map((ability, index) => {
                const translatedText = t(
                  `${abilityKey}.${ability.key}`,
                  ability.values
                );

                return (
                  <li key={index} className={styles.statItem}>
                    {highlightVariables(translatedText, ability.values)}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroAbilities;
