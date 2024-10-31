import { useTranslation } from 'react-i18next';

import { leagues } from 'data/leagues';
import styles from '../Orders/Orders.module.scss';

const Leagues = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      {leagues.map((order, index) => (
        <div key={index} className={styles.item}>
          <h3 className={styles.title}>{t(order.name)}</h3>
          <img src={order.image} alt={order.name} className={styles.img} />
        </div>
      ))}
    </div>
  );
};

export default Leagues;
