import { useEffect, useState } from 'react';

import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import styles from './Item.module.scss';
import MedalList from 'components/MedalList/MedalList';
import MedalGrid from 'components/MedalGrid/MedalGrid';

const Item = ({ title, imageUrl, buttonText, medals }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMedal, setSelectedMedal] = useState(null);
  const [activeMedal, setActiveMedal] = useState(null);

  useEffect(() => {
    setSelectedMedal('Steel');
    setActiveMedal('Steel');
  }, []);

  const selectedMedalLower = selectedMedal ? selectedMedal.toLowerCase() : null;

  const toggleModal = () => setShowModal(!showModal);

  const handleMedalSelect = medal => {
    setSelectedMedal(medal);
    setActiveMedal(medal);
  };

  return (
    <div className={styles.item}>
      <h2 className={styles.title}>{title}</h2>
      <img src={imageUrl} alt="Item" className={styles.image} />
      <Button
        text={buttonText}
        type="button"
        className={styles.button}
        onClick={toggleModal}
      />
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
