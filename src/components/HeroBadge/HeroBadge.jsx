import { useTranslation } from 'react-i18next';

import image from '../../images/hero/class2.webp';

import styles from './HeroBadge.module.scss';

const HeroBadge = ({ classNumber }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.badgeContainer}>
      <span className={styles.classLabel}>{t('main.class')}</span>
      <div className={styles.badge}>
        <img src={image} alt="Hero badge" className={styles.badgeImage} />
        <span className={styles.classNumber}>{classNumber}</span>
      </div>
    </div>
  );
};

export default HeroBadge;
