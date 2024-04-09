import { useState } from 'react';

import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import styles from './Item.module.scss';

const Item = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  return (
    <div>
      <p>10</p>
      <p>20</p>
      <p>30</p>
      <p>name</p>
      <Button
        text="Learn More"
        type="button"
        className={styles.button}
        onClick={toggleModal}
      />
      {showModal && <Modal onClose={toggleModal} />}
    </div>
  );
};

export default Item;
