import { useState } from 'react';
import SvgIcon from 'components/SvgIcon/SvgIcon';

import styles from './Avatars.module.scss';

const Avatars = ({ avatars }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = avatar => {
    setSelectedImage(avatar);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className={styles.gallery}>
      {avatars.map((avatar, index) => (
        <img
          key={index}
          src={avatar}
          alt="avatar"
          onClick={() => openImage(avatar)}
          className={styles.image}
        />
      ))}
      {selectedImage && (
        <div className={styles.modal} onClick={closeImage}>
          <button className={styles.button} type="button" onClick={closeImage}>
            <SvgIcon className={styles.iconClose} iconId={'icon-close'} />
          </button>
          <img
            src={selectedImage}
            alt="Selected"
            className={styles.selectedImage}
          />
        </div>
      )}
    </div>
  );
};

export default Avatars;
