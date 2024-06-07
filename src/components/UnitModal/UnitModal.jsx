import React from 'react';
import SvgIcon from 'components/SvgIcon/SvgIcon';

import styles from './UnitModal.module.scss';
import UnitDetails from 'components/Unit/UnitDetails';

const UnitModal = ({ units, selectedIndex, onClose, onPrevious, onNext }) => {
  const unit = units[selectedIndex];

  return (
    <div className={styles.modal}>
      <button className={styles.closeButton} type="button" onClick={onClose}>
        <SvgIcon className={styles.iconClose} iconId="icon-close" />
      </button>
      <button
        className={`${styles.navButton} ${styles.prevButton}`}
        type="button"
        onClick={onPrevious}
      >
        <SvgIcon className={styles.iconNav} iconId="icon-previous" />
      </button>

      <UnitDetails unit={unit} />

      <button
        className={`${styles.navButton} ${styles.nextButton}`}
        type="button"
        onClick={onNext}
      >
        <SvgIcon className={styles.iconNav} iconId="icon-next" />
      </button>
    </div>
  );
};

export default UnitModal;
