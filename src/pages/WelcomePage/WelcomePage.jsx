import main from '../../images/main.jpg';
import styles from './WelcomePage.module.scss';

const WelcomePage = () => {
  return (
    <div className={styles.title}>
      <img src={main} alt="art of war" />
    </div>
  );
};

export default WelcomePage;
