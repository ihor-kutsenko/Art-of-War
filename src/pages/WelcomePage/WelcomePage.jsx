import YoutubeTrailer from 'components/YoutubeTrailer/YoutubeTrailer';
import { useTranslation } from 'react-i18next';

import Container from 'components/Container/Container';

import styles from './WelcomePage.module.scss';

const WelcomePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Container>
        <div className={styles.container}>
          <div className={styles.background}>
            <div className={styles.textOverlay}>
              <p>{t('home.description')} </p>
            </div>
          </div>
          <div className={styles.trailerWrapper}>
            <YoutubeTrailer videoId="4AfmuU7vW08" />
          </div>{' '}
          <div className={styles.counter}>
            {' '}
            <a href="https://info.flagcounter.com/bGPE">
              <img
                src="https://s01.flagcounter.com/countxl/bGPE/bg_808080/txt_000000/border_CCCCCC/columns_8/maxflags_200/viewers_0/labels_0/pageviews_1/flags_0/percent_0/"
                alt="Flag Counter"
                border="0"
              />
            </a>
          </div>
        </div>
      </Container>
    </>
  );
};

export default WelcomePage;
