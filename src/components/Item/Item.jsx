import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import MedalList from 'components/MedalList/MedalList';
import MedalGrid from 'components/MedalGrid/MedalGrid';
import styles from './Item.module.scss';

const Item = ({ title, imageUrl, medals, info, disabled }) => {
  const { t } = useTranslation();

  const [showModal, setShowModal] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [selectedMedal, setSelectedMedal] = useState(null);
  const [activeMedal, setActiveMedal] = useState(null);

  useEffect(() => {
    setSelectedMedal('Steel');
    setActiveMedal('Steel');
  }, []);

  const selectedMedalLower = selectedMedal ? selectedMedal.toLowerCase() : null;

  const toggleModal = () => setShowModal(!showModal);
  const toggleInfo = () => setShowInfo(!showInfo);

  const handleMedalSelect = medal => {
    setSelectedMedal(medal);
    setActiveMedal(medal);
  };

  return (
    <div className={styles.item}>
      <h2 className={styles.title}>{t(title)}</h2>
      <img src={imageUrl} alt="Item" className={styles.image} />
      <div className={styles.actions}>
        <Button
          text={t('main.medals')}
          type="button"
          className={styles.button}
          onClick={toggleModal}
          disabled={disabled}
        />
        <Button
          text={t('main.info')}
          type="button"
          className={styles.button}
          onClick={toggleInfo}
        />
      </div>

      {showInfo && <p className={styles.infoText}>{t(info)}</p>}

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className={styles.modal_container}>
            <MedalList onSelect={handleMedalSelect} activeMedal={activeMedal} />
            {selectedMedal && (
              <div>
                <MedalGrid images={medals[selectedMedalLower]} />
              </div>
            )}
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Item;
