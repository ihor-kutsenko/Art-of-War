import { Link, useLocation } from 'react-router-dom';
import {
  WELCOME_PAGE_ROUTE,
  MAPS_ROUTE,
  MEDALS_ROUTE,
  HEROES_ROUTE,
  UNITS_ROUTE,
  AVATARS_ROUTE,
  TOURNAMENT_ROUTE,
  CONF_AVATARS_ROUTE,
  AUTUMN_ROUTE,
  CONF_HEROES_ROUTE,
  CONF_UNITS_ROUTE,
  BUILDINGS_ROUTE,
  CONF_BUILDINGS_ROUTE,
  EVENTS_ROUTE,
} from 'routes/routes';
import logo from '../../images/logo/aow_logo_04.webp';
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
          className={`${styles.nav_link} ${isActive(MAPS_ROUTE)}`}
          to={`${MAPS_ROUTE}/${AUTUMN_ROUTE}`}
        >
          Maps
        </Link>

        <Link
          className={`${styles.nav_link} ${isActive(MEDALS_ROUTE)}`}
          to={`${MEDALS_ROUTE}/${TOURNAMENT_ROUTE}`}
        >
          Medals
        </Link>

        <Link
          className={`${styles.nav_link} ${isActive(HEROES_ROUTE)}`}
          to={`${HEROES_ROUTE}/${CONF_HEROES_ROUTE}`}
        >
          Heroes
        </Link>

        <Link
          className={`${styles.nav_link} ${isActive(UNITS_ROUTE)}`}
          to={`${UNITS_ROUTE}/${CONF_UNITS_ROUTE}`}
        >
          Units
        </Link>

        <Link
          className={`${styles.nav_link} ${isActive(BUILDINGS_ROUTE)}`}
          to={`${BUILDINGS_ROUTE}/${CONF_BUILDINGS_ROUTE}`}
        >
          Buildings
        </Link>

        <Link
          className={`${styles.nav_link} ${isActive(AVATARS_ROUTE)}`}
          to={`${AVATARS_ROUTE}/${CONF_AVATARS_ROUTE}`}
        >
          Avatars
        </Link>

        <Link
          className={`${styles.nav_link} ${isActive(EVENTS_ROUTE)}`}
          to={`${EVENTS_ROUTE}`}
        >
          Events
        </Link>
      </nav>
    </div>
  );
};

export default Header;
