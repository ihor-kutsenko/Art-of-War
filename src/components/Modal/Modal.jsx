import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import SvgIcon from 'components/SvgIcon/SvgIcon';
import styles from './Modal.module.scss';

import MedalList from 'components/MedalList/MedalList';
import ImageGrid from 'components/MedalGrid/MedalGrid';
import steel1 from '../../images/tournaments/nautilus/steel1.png';
import steel2 from '../../images/tournaments/nautilus/steel2.png';
import steel3 from '../../images/tournaments/nautilus/steel3.png';
import steel4 from '../../images/tournaments/nautilus/steel4.png';

import bronze1 from '../../images/tournaments/nautilus/bronze1.png';
import bronze2 from '../../images/tournaments/nautilus/bronze2.png';
import bronze3 from '../../images/tournaments/nautilus/bronze3.png';
import bronze4 from '../../images/tournaments/nautilus/bronze4.png';

import silver1 from '../../images/tournaments/nautilus/silver1.png';
import silver2 from '../../images/tournaments/nautilus/silver2.png';
import silver3 from '../../images/tournaments/nautilus/silver3.png';
import silver4 from '../../images/tournaments/nautilus/silver4.png';

import gold1 from '../../images/tournaments/nautilus/gold1.png';
import gold2 from '../../images/tournaments/nautilus/gold2.png';
import gold3 from '../../images/tournaments/nautilus/gold3.png';
import gold4 from '../../images/tournaments/nautilus/gold4.png';

import diamond1 from '../../images/tournaments/nautilus/diamond1.png';
import diamond2 from '../../images/tournaments/nautilus/diamond2.png';
import diamond3 from '../../images/tournaments/nautilus/diamond3.png';
import diamond4 from '../../images/tournaments/nautilus/diamond4.png';

import star1 from '../../images/tournaments/nautilus/star1.png';
import star2 from '../../images/tournaments/nautilus/star2.png';
import star3 from '../../images/tournaments/nautilus/star3.png';
import star4 from '../../images/tournaments/nautilus/star4.png';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose }) => {
  const [selectedMedal, setSelectedMedal] = useState(null);
  const imagesByLeague = {
    steel: [steel1, steel2, steel3, steel4],
    bronze: [bronze1, bronze2, bronze3, bronze4],
    silver: [silver1, silver2, silver3, silver4],
    gold: [gold1, gold2, gold3, gold4],
    diamond: [diamond1, diamond2, diamond3, diamond4],
    star: [star1, star2, star3, star4],
  };
  const selectedMedalLower = selectedMedal ? selectedMedal.toLowerCase() : null;

  useEffect(() => {
    window.addEventListener('keydown', closeModal);
    return () => {
      window.removeEventListener('keydown', closeModal);
    };
  });

  const closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      onClose();
      document.body.style.overflow = 'visible';
    }
  };
  document.body.style.overflow = 'hidden';

  const handleMedalSelect = medal => {
    console.log(`Selected medal: ${medal}`);
    setSelectedMedal(medal);
  };

  return createPortal(
    <div className={styles.overlay} onClick={closeModal}>
      <div className={styles.modal}>
        <button className={styles.button} type="button" onClick={onClose}>
          <SvgIcon className={styles.iconClose} iconId={'icon-close'} />
        </button>

        {selectedMedal && (
          <div>
            <ImageGrid images={imagesByLeague[selectedMedalLower]} />
          </div>
        )}
        <MedalList onSelect={handleMedalSelect} />
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
