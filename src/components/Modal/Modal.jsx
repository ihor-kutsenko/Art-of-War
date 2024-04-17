import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import SvgIcon from 'components/SvgIcon/SvgIcon';
import styles from './Modal.module.scss';
// import ModalCard from 'components/ModalCard/ModalCard';
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

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose }) => {
  const [selectedMedal, setSelectedMedal] = useState(null);
  const imagesByLeague = {
    steel: [steel1, steel2, steel3, steel4],
    bronze: [bronze1, bronze2, bronze3, bronze4],
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
        {/* <ModalCard /> */}
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
