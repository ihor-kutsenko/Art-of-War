import styles from './BuildingProduceList.module.scss';

const BuildingProduceList = ({ produces }) => {
  return (
    <div>
      <>
        <span className={styles.produceTitle}>Produced</span>
        <div className={styles.produceItem}>
          {produces.map((produce, index) => (
            <div className={styles.produceText} key={index}>
              <img
                src={produce.icon}
                alt={produce.type}
                className={styles.produceImage}
              />
              <span>{produce.amount}</span>
              <span>{produce.type}</span>
            </div>
          ))}
        </div>
      </>
    </div>
  );
};

export default BuildingProduceList;
