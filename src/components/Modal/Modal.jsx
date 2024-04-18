import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import MedalList from 'components/MedalList/MedalList';
import MedalGrid from 'components/MedalGrid/MedalGrid';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import styles from './Modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, medals }) => {
  const [selectedMedal, setSelectedMedal] = useState(null);

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

        <MedalList onSelect={handleMedalSelect} />
        {selectedMedal && (
          <div>
            <MedalGrid images={medals[selectedMedalLower]} />
          </div>
        )}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
