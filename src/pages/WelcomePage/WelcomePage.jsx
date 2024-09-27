import YoutubeTrailer from 'components/YoutubeTrailer/YoutubeTrailer';

import main from '../../images/main.webp';
import styles from './WelcomePage.module.scss';

const WelcomePage = () => {
  return (
    <div className={styles.title}>
      <img src={main} alt="art of war" />
      <YoutubeTrailer videoId="4AfmuU7vW08" />
    </div>
  );
};

export default WelcomePage;
