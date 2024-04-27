import styles from './Orders.module.scss';
import { medalOrders } from 'data/orders';

const Orders = () => {
  return (
    <>
      {medalOrders.map((order, index) => (
        <div key={index} className={styles.item}>
          <div className={styles.container}>
            <h3 className={styles.title}>{order.name}</h3>
            <img src={order.image} alt={order.name} className={styles.img} />
          </div>
        </div>
      ))}
      ;
    </>
  );
};

export default Orders;
