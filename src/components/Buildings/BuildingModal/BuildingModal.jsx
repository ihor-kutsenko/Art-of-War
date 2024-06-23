import SvgIcon from 'components/SvgIcon/SvgIcon';
import BuildingDetails from '../BuildingDetails/BuildingDetails';
import styles from '../../UnitModal/UnitModal.module.scss';

const BuildingModal = ({
  buildings,
  selectedIndex,
  onClose,
  onPrevious,
  onNext,
}) => {
  const building = buildings[selectedIndex];

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

      <BuildingDetails building={building} />

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

export default BuildingModal;
