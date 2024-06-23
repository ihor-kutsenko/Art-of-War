import { orders } from 'data/orders';
import styles from './Orders.module.scss';

const Orders = () => {
  return (
    <div className={styles.container}>
      {orders.map((order, index) => (
        <div key={index} className={styles.item}>
          <h3 className={styles.title}>{order.name}</h3>
          <img src={order.image} alt={order.name} className={styles.img} />
        </div>
      ))}
    </div>
  );
};

export default Orders;
