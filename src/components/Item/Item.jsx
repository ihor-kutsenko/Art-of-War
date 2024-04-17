import { useState } from 'react';

import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
// import MedalList from 'components/MedalList/MedalList';
import styles from './Item.module.scss';

const Item = ({ title, imageUrl, buttonText }) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  // const handleMedalSelect = medal => {
  //   console.log(`Selected medal: ${medal}`);
  //   toggleModal();
  // };

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
        <Modal onClose={toggleModal}>
          {/* <MedalList onSelect={handleMedalSelect} /> */}
        </Modal>
      )}
    </div>
  );
};

export default Item;
