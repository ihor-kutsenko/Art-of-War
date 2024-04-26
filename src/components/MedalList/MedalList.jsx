import styles from './MedalList.module.scss';

const MedalList = ({ onSelect, activeMedal }) => {
  const handleClick = medal => {
    onSelect(medal);
  };

  const medals = ['Steel', 'Bronze', 'Silver', 'Gold', 'Diamond', 'Star'];

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {medals.map(medal => (
          <li
            key={medal}
            onClick={() => handleClick(medal)}
            className={`${styles.link} ${
              activeMedal === medal ? styles.active : ''
            }`}
          >
            {medal}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedalList;
