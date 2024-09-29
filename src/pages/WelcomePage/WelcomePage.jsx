import YoutubeTrailer from 'components/YoutubeTrailer/YoutubeTrailer';

import Container from 'components/Container/Container';

import styles from './WelcomePage.module.scss';

const WelcomePage = () => {
  return (
    <>
      <Container>
        <div className={styles.container}>
          <div className={styles.background}>
            <div className={styles.textOverlay}>
              <p>
                This site is dedicated to the game Art Of War 3: Global Conflict
                - real-time strategy with direct control in battle. Here you
                will find information about maps, tournaments, blitz
                tournaments, medals, avatars, maximum leveling of units,
                buildings and heroes for each rank.
              </p>
            </div>
          </div>
          <div className={styles.trailerWrapper}>
            <YoutubeTrailer videoId="4AfmuU7vW08" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default WelcomePage;
