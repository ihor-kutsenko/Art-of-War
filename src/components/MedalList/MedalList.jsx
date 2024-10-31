import styles from './MedalList.module.scss';
import { useTranslation } from 'react-i18next';

const MedalList = ({ onSelect, activeMedal }) => {
  const { t } = useTranslation();

  const handleClick = medalKey => {
    onSelect(medalKey);
  };

  const medals = [
    { key: 'steel', name: 'Steel' },
    { key: 'bronze', name: 'Bronze' },
    { key: 'silver', name: 'Silver' },
    { key: 'gold', name: 'Gold' },
    { key: 'diamond', name: 'Diamond' },
    { key: 'star', name: 'Star' },
  ];

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {medals.map(({ key, name }) => (
          <li
            key={key}
            onClick={() => handleClick(key)}
            className={`${styles.link} ${
              activeMedal === key ? styles.active : ''
            }`}
          >
            {t(`medals.${key}`)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedalList;
