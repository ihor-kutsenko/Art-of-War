import { CirclesWithBar } from 'react-loader-spinner';
import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.backdrop}>
      <CirclesWithBar
        height="100"
        width="100"
        color="#ffa800"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        outerCircleColor="#1850ab"
        innerCircleColor="#474747"
        barColor=""
        ariaLabel="circles-with-bar-loading"
      />
    </div>
  );
};
export default Loader;
