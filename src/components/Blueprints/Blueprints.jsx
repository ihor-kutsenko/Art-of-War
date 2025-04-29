import { useTranslation } from 'react-i18next';

import styles from './Blueprints.module.scss';

const Blueprints = () => {
  const { t } = useTranslation();

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <td className={`${styles.title} ${styles.totalRow}`}>
            {t('heroes.blueprints.hero')}
          </td>
          <td colSpan="12" className={`${styles.title} ${styles.totalRow}`}>
            {t('heroes.blueprints.amount')}
          </td>
          <td className={`${styles.title} ${styles.totalRow}`}>
            {t('heroes.blueprints.total')}:
          </td>
        </tr>
      </thead>
      <tbody>
        <tr className={styles.class}>
          <td className={styles.hero}>{t('heroes.blueprints.classHero')}</td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
          <td>9</td>
          <td>10</td>
          <td>11</td>
          <td>12</td>
          <td></td>
        </tr>
        <tr>
          <td className={`${styles.hero} ${styles.t1}`}>
            {t('heroes.cerberus.name')} / <br />
            {t('heroes.wasp.name')}
          </td>
          <td>250</td>
          <td>550</td>
          <td>1000</td>
          <td>1750</td>
          <td>3000</td>
          <td>5000</td>
          <td>8000</td>
          <td>12000</td>
          <td>17000</td>
          <td>23500</td>
          <td>33000</td>
          <td>48500</td>
          <td>153550</td>
        </tr>
        <tr>
          <td className={`${styles.hero} ${styles.t1}`}>
            {t('heroes.beholder.name')} / <br />
            {t('heroes.wolverine.name')}
          </td>
          <td>1000</td>
          <td>600</td>
          <td>1200</td>
          <td>2100</td>
          <td>3600</td>
          <td>6000</td>
          <td>11000</td>
          <td>21000</td>
          <td>41000</td>
          <td>80000</td>
          <td>157000</td>
          <td></td>
          <td>324500</td>
        </tr>
        <tr>
          <td className={`${styles.hero} ${styles.t2}`}>
            {t('heroes.seraphim.name')} / <br />
            {t('heroes.mole.name')}
          </td>
          <td>70</td>
          <td>160</td>
          <td>300</td>
          <td>520</td>
          <td>860</td>
          <td>1400</td>
          <td>2300</td>
          <td>3400</td>
          <td>4700</td>
          <td>6400</td>
          <td>8900</td>
          <td>12800</td>
          <td>41810</td>
        </tr>
        <tr>
          <td className={`${styles.hero} ${styles.t2}`}>
            {t('heroes.psion.name')} / <br />
            {t('heroes.salamander.name')}
          </td>
          <td>280</td>
          <td>175</td>
          <td>360</td>
          <td>625</td>
          <td>1000</td>
          <td>1700</td>
          <td>3200</td>
          <td>6000</td>
          <td>11000</td>
          <td>19000</td>
          <td>30000</td>
          <td></td>
          <td>72340</td>
        </tr>
        <tr>
          <td className={`${styles.hero} ${styles.t3}`}>
            {t('heroes.solaris.name')} / <br /> {t('heroes.leviathan.name')}
          </td>
          <td>25</td>
          <td>60</td>
          <td>110</td>
          <td>180</td>
          <td>300</td>
          <td>500</td>
          <td>800</td>
          <td>1200</td>
          <td>1650</td>
          <td>2200</td>
          <td>3100</td>
          <td>4900</td>
          <td>15025</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Blueprints;
