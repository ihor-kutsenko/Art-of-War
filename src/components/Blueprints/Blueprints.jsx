import styles from './Blueprints.module.scss';

const Blueprints = () => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <td>Hero</td>
          <td colSpan="12" className={styles.title}>
            Amount of blueprints
          </td>
          <td>Total:</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className={styles.hero}>Class hero</td>
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
          <td className={styles.hero}>
            Beholder/ <br />
            Wolverine
          </td>
          <td>1000</td>
          <td>600</td>
          <td>1200</td>
          <td>2100</td>
          <td>3600</td>
          <td>8000</td>
          <td>11000</td>
          <td>?</td>
          <td>41000</td>
          <td>80000</td>
          <td>195000</td>
          <td>311000</td>
          <td>654500</td>
        </tr>
        <tr>
          <td className={styles.hero}>
            Cerberus/ <br />
            Wasp
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
          <td className={styles.hero}>
            Seraphim/ <br />
            Mole
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
          <td className={styles.hero}>
            Solaris/ <br /> Leviathan
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
