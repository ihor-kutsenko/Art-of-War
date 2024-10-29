import { useTranslation } from 'react-i18next';

import styles from './BuildingProduceList.module.scss';

const BuildingProduceList = ({ produces }) => {
  const { t } = useTranslation();

  return (
    <div>
      <>
        <span className={styles.produceTitle}>
          {t('buildings.stats.produces')}:
        </span>
        <div className={styles.produceItem}>
          {produces.map((produce, index) => (
            <div className={styles.produceText} key={index}>
              <img
                src={produce.icon}
                alt={produce.type}
                className={styles.produceImage}
              />
              <span>{t(produce.amount)}</span>
              <span>{t(produce.type)}</span>
            </div>
          ))}
        </div>
      </>
    </div>
  );
};

export default BuildingProduceList;
