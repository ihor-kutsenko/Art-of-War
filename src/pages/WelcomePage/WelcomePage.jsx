import YoutubeTrailer from 'components/YoutubeTrailer/YoutubeTrailer';

import main from '../../images/main.webp';
import styles from './WelcomePage.module.scss';

const WelcomePage = () => {
  return (
    <div className={styles.title}>
      <p>
        This site is dedicated to the game Art Of War 3: Global Conflict -
        real-time strategy with direct control in battle. Here you will find
        information about maps, tournaments, blitz tournaments, medals, avatars,
        maximum leveling of units, buildings and heroes for each rank.
      </p>
      <img src={main} alt="art of war" />
      <YoutubeTrailer videoId="4AfmuU7vW08" />
    </div>
  );
};

export default WelcomePage;
