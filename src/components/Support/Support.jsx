import { useTranslation } from 'react-i18next';
import styles from './Support.module.scss';

const Support = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.supportContainer}>
      <h1>{t('support.title')}</h1>

      <p className={styles.marginBottom}>{t('support.description')}</p>

      <h3 className={styles.marginBottom}>{t('support.why_donate')}</h3>
      <ul className={styles.marginBottom}>
        <li>{t('support.donate_2')}</li>
        <li>{t('support.donate_3')}</li>
      </ul>

      <p className={styles.marginBottom}>{t('support.cta')}</p>
      <p className={styles.marginBottom}>{t('support.cta2')}</p>
      {/*  YouTube */}
      <div className={styles.youtubeContainer}>
        <h3 className={styles.youtubeTitle}>{t('support.youtube_info')}</h3>
        <a
          href="https://www.youtube.com/@--DOMINATOR--"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.youtubeButton}
        >
          {t('support.youtube_button')}
        </a>
      </div>
      <h2 className={styles.marginBottom}>{t('support.thanks')}</h2>

      {/*  Donatik */}
      <div className={styles.marginBottom}>
        <p className={styles.bold}>{t('support.donatik_info')}</p>
        <a
          href="https://dominator.donatik.io/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.donateButton}
        >
          {t('support.donatik_button')}
        </a>
      </div>

      {/*  Donationalerts */}
      <div className={styles.donateOption}>
        <p className={styles.bold}>{t('support.donationalerts_info')}</p>
        <a
          href="https://www.donationalerts.com/r/rammbest"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.donateButton}
        >
          {t('support.donationalerts_button')}
        </a>
      </div>

      {/*  Support total */}
      {/* <div className={styles.widgetContainer}>
        <iframe
          src="https://widget.donatik.io/e10e6286-76a0-478c-8104-3f17c9f213c7"
          className={styles.iframeWidget}
          title="Donatik Widget"
        ></iframe>
      </div> */}

      {/* Top donators */}
      <div className={styles.topContainer}>
        <iframe
          src="https://widget.donatik.io/29cff589-6749-4ac3-aaa5-915899a6657a"
          className={styles.iframeTop}
          title="Top Donors"
        ></iframe>
      </div>

      {/* Last donators */}
      <div className={styles.topContainer}>
        <iframe
          src="https://widget.donatik.io/f07cae0e-1e48-45d2-a4bf-f65875ca9d40"
          className={styles.iframeTop}
          title="last donators"
        ></iframe>
      </div>
    </div>
  );
};

export default Support;
