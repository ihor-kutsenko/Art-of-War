import React, { useState } from 'react';
// import Modal from 'components/Modal/Modal';
import styles from './MedalList.module.scss';

const MedalList = ({ onSelect }) => {
  const [activeMedal, setActiveMedal] = useState(null);

  const handleClick = medal => {
    setActiveMedal(medal);
    onSelect(medal);
  };

  const medals = ['Steel', 'Bronze', 'Silver', 'Gold', 'Diamond', 'Star'];

  return (
    <div className={styles.medalList}>
      <ul>
        {medals.map(medal => (
          <li
            key={medal}
            onClick={() => handleClick(medal)}
            className={activeMedal === medal ? styles.active : ''}
          >
            {medal}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedalList;
