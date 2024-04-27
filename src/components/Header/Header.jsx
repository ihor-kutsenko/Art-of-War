import { Link, useLocation } from 'react-router-dom';
import {
  WELCOME_PAGE_ROUTE,
  HEROES_ROUTE,
  MAPS_ROUTE,
  MEDALS_ROUTE,
  UNITS_ROUTE,
  TOURNAMENT_ROUTE,
} from 'routes/routes';
import logo from '../../images/logo/aow_logo_04.png';
import styles from './Header.module.scss';

const Header = () => {
  const { pathname } = useLocation();
  const isActive = route => {
    return pathname === route || pathname.includes(`${route}/`)
      ? styles.active
      : '';
  };

  return (
    <div className={styles.header}>
      <Link to={WELCOME_PAGE_ROUTE} className={styles.logo}>
        {' '}
        <img src={logo} className={styles.logo_img} alt="logo" />
      </Link>
      <nav className={styles.nav}>
        <Link
          className={`${styles.nav_link} ${isActive(WELCOME_PAGE_ROUTE)}`}
          to={WELCOME_PAGE_ROUTE}
        >
          Home
        </Link>
        <Link
          className={`${styles.nav_link} ${isActive(MAPS_ROUTE)}`}
          to={MAPS_ROUTE}
        >
          Maps
        </Link>
        <Link
          className={`${styles.nav_link} ${isActive(MEDALS_ROUTE)}`}
          to={TOURNAMENT_ROUTE}
        >
          Medals
        </Link>
        <Link
          className={`${styles.nav_link} ${isActive(HEROES_ROUTE)}`}
          to={HEROES_ROUTE}
        >
          Heroes
        </Link>
        <Link
          className={`${styles.nav_link} ${isActive(UNITS_ROUTE)}`}
          to={UNITS_ROUTE}
        >
          Units
        </Link>
      </nav>
    </div>
  );
};

export default Header;
