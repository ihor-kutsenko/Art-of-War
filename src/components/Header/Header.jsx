import { NavLink } from 'react-router-dom';
import {
  WELCOME_PAGE_ROUTE,
  HEROES_ROUTE,
  MAPS_ROUTE,
  MEDALS_ROUTE,
  UNITS_ROUTE,
} from 'routes/routes';
import logo from '../../images/logo/aow_logo_04.png';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <NavLink to={WELCOME_PAGE_ROUTE} className={styles.logo}>
        {' '}
        <img src={logo} className={styles.logo_img} alt="logo" />
      </NavLink>
      <nav>
        <NavLink to={WELCOME_PAGE_ROUTE} className={styles.link}>
          Home
        </NavLink>
        <NavLink to={MAPS_ROUTE} className={styles.link}>
          Maps
        </NavLink>
        <NavLink to={MEDALS_ROUTE} className={styles.link}>
          Medals
        </NavLink>
        <NavLink to={HEROES_ROUTE} className={styles.link}>
          Heroes
        </NavLink>
        <NavLink to={UNITS_ROUTE} className={styles.link}>
          Units
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
