import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import SvgIcon from 'components/SvgIcon/SvgIcon';
import styles from './Modal.module.scss';
import ModalCard from 'components/ModalCard/ModalCard';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose }) => {
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

  return createPortal(
    <div className={styles.overlay} onClick={closeModal}>
      <div className={styles.modal}>
        <button className={styles.button} type="button" onClick={onClose}>
          <SvgIcon className={styles.iconClose} iconId={'icon-close'} />
        </button>
        <ModalCard />
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
