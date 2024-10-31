import { useTranslation } from 'react-i18next';

import styles from './Contracts.module.scss';

const Contracts = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Syndicate Event Table */}
      <h2 className={styles.eventTitle}>{t('events.syndicate')} 2024</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td className={`${styles.title} ${styles.contract}`}>
              {t('events.contract')}
            </td>
            <td className={`${styles.title} ${styles.amount}`}>
              {t('events.amount')}
            </td>
            <td className={`${styles.title} ${styles.gold}`}>
              {t('events.gold')}
            </td>
            <td className={`${styles.title} ${styles.token}`}>
              {t('events.token')}
            </td>
            <td className={`${styles.title} ${styles.blueSkills}`}>
              {t('events.blueSkills')}
            </td>
            <td className={`${styles.title} ${styles.rareSkills}`}>
              {t('events.rareSkills')}
            </td>
            <td className={`${styles.title} ${styles.epicSkills}`}>
              {t('events.epicSkills')}
            </td>
            <td className={`${styles.title} ${styles.blueHero}`}>
              {' '}
              {t('events.blueHero')}
            </td>
            <td className={`${styles.title} ${styles.rareHero}`}>
              {' '}
              {t('events.rareHero')}
            </td>
            <td className={`${styles.title} ${styles.epicHero}`}>
              {' '}
              {t('events.epicHero')}
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>125</td>
            <td>125</td>
            <td>250</td>
            <td>40</td>
            <td></td>
            <td></td>
            <td>150</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>2</td>
            <td>250</td>
            <td>250</td>
            <td>500</td>
            <td>85</td>
            <td></td>
            <td></td>
            <td>400</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>3</td>
            <td>500</td>
            <td>500</td>
            <td>1000</td>
            <td></td>
            <td>40</td>
            <td></td>
            <td></td>
            <td>80</td>
            <td></td>
          </tr>
          <tr>
            <td>4</td>
            <td>1000</td>
            <td>1000</td>
            <td>2000</td>
            <td></td>
            <td></td>
            <td>25</td>
            <td></td>
            <td></td>
            <td>50</td>
          </tr>
          <tr>
            <td>5</td>
            <td>2000</td>
            <td>2000</td>
            <td>4000</td>
            <td></td>
            <td></td>
            <td></td>
            <td>2000</td>
            <td>180</td>
            <td></td>
          </tr>
          <tr>
            <td>6</td>
            <td>3500</td>
            <td>4000</td>
            <td>8000</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>320</td>
            <td>100</td>
          </tr>
          <tr>
            <td>7</td>
            <td>6000</td>
            <td>6000</td>
            <td>10000</td>
            <td></td>
            <td></td>
            <td>50</td>
            <td></td>
            <td></td>
            <td>150</td>
          </tr>
          {/* Total row */}
          <tr className={styles.totalRow}>
            <td> {t('events.total')}</td>
            <td>13375</td>
            <td>13875</td>
            <td>25750</td>
            <td>125</td>
            <td>40</td>
            <td>75</td>
            <td>2550</td>
            <td>580</td>
            <td>300</td>
          </tr>
        </tbody>
      </table>

      {/* Halloween Event Table */}
      <h2 className={styles.eventTitle}>{t('events.halloween')} 2024</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td className={`${styles.title} ${styles.contract}`}>
              {t('events.contract')}
            </td>
            <td className={`${styles.title} ${styles.amount}`}>
              {t('events.amount')}
            </td>
            <td className={`${styles.title} ${styles.gold}`}>
              {t('events.gold')}
            </td>
            <td className={`${styles.title} ${styles.token}`}>
              {t('events.token')}
            </td>
            <td className={`${styles.title} ${styles.blueSkills}`}>
              {t('events.blueSkills')}
            </td>
            <td className={`${styles.title} ${styles.rareSkills}`}>
              {t('events.rareSkills')}
            </td>
            <td className={`${styles.title} ${styles.epicSkills}`}>
              {t('events.epicSkills')}
            </td>
            <td className={`${styles.title} ${styles.blueHero}`}>
              {' '}
              {t('events.blueHero')}
            </td>
            <td className={`${styles.title} ${styles.rareHero}`}>
              {' '}
              {t('events.rareHero')}
            </td>
            <td className={`${styles.title} ${styles.epicHero}`}>
              {' '}
              {t('events.epicHero')}
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>125</td>
            <td>400</td>
            <td>200</td>
            <td>50</td>
            <td></td>
            <td></td>
            <td></td>
            <td>60</td>
            <td></td>
          </tr>
          <tr>
            <td>2</td>
            <td>250</td>
            <td>800</td>
            <td>400</td>
            <td></td>
            <td>30</td>
            <td></td>
            <td>300</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>3</td>
            <td>500</td>
            <td>1200</td>
            <td>600</td>
            <td>100</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>20</td>
          </tr>
          <tr>
            <td>4</td>
            <td>1000</td>
            <td>3500</td>
            <td>1500</td>
            <td></td>
            <td></td>
            <td>25</td>
            <td></td>
            <td>300</td>
            <td></td>
          </tr>
          <tr>
            <td>5</td>
            <td>2000</td>
            <td>5500</td>
            <td>2500</td>
            <td></td>
            <td>100</td>
            <td></td>
            <td>1500</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>6</td>
            <td>3500</td>
            <td>8000</td>
            <td>3500</td>
            <td>500</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>80</td>
          </tr>
          <tr>
            <td>7</td>
            <td>6000</td>
            <td>15000</td>
            <td>5000</td>
            <td></td>
            <td></td>
            <td>50</td>
            <td></td>
            <td>700</td>
            <td></td>
          </tr>
          {/* Total row */}
          <tr className={styles.totalRow}>
            <td>{t('events.total')}</td>
            <td>13375</td>
            <td>34400</td>
            <td>13700</td>
            <td>650</td>
            <td>130</td>
            <td>75</td>
            <td>1800</td>
            <td>1060</td>
            <td>100</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Contracts;
