import { useState } from 'react';
import image1 from '../../images/avatars/sopr_28.png';
import image2 from '../../images/avatars/sopr_29.png';
import image3 from '../../images/avatars/sopr_30.png';
import styles from './Avatars.module.scss';
import Modal from 'components/Modal/Modal';

const Avatars = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const images = [image1, image2, image3];

  const openImage = image => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className={styles.gallery}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="avatar"
          onClick={() => openImage(image)}
          className={styles.image}
        />
      ))}
      {selectedImage && (
        <div className={styles.modal} onClick={closeImage}>
          <Modal>
            <img
              src={selectedImage}
              alt="Selected"
              className={styles.selectedImage}
            />
          </Modal>
        </div>
      )}
    </div>
  );
};

export default Avatars;
