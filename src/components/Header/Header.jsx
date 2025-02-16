import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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
  ARTICLES_ROUTE,
  NEWS_ROUTE,
  SUPPORT_ROUTE,
} from 'routes/routes';
import logo from '../../images/logo/aow_logo_04.webp';
import styles from './Header.module.scss';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const isActive = route => {
    return pathname === route || pathname.includes(`${route}/`)
      ? styles.active
      : '';
  };

  return (
    <div className={styles.header}>
      <div className={styles.logo_container}>
        <Link to={WELCOME_PAGE_ROUTE} className={styles.logo}>
          <img src={logo} className={styles.logo_img} alt="logo" />
        </Link>
        <div className={styles.language_switcher}>
          <LanguageSwitcher />
        </div>
      </div>
      <nav className={styles.nav}>
        <Link
          className={`${styles.nav_link} ${isActive(MAPS_ROUTE)}`}
          to={`${MAPS_ROUTE}/${AUTUMN_ROUTE}`}
        >
          {t('header.maps')}
        </Link>

        <Link
          className={`${styles.nav_link} ${isActive(MEDALS_ROUTE)}`}
          to={`${MEDALS_ROUTE}/${TOURNAMENT_ROUTE}`}
        >
          {t('header.medals')}
        </Link>

        <Link
          className={`${styles.nav_link} ${isActive(HEROES_ROUTE)}`}
          to={`${HEROES_ROUTE}/${CONF_HEROES_ROUTE}`}
        >
          {t('header.heroes')}
        </Link>

        <Link
          className={`${styles.nav_link} ${isActive(UNITS_ROUTE)}`}
          to={`${UNITS_ROUTE}/${CONF_UNITS_ROUTE}`}
        >
          {t('header.units')}
        </Link>

        <Link
          className={`${styles.nav_link} ${isActive(BUILDINGS_ROUTE)}`}
          to={`${BUILDINGS_ROUTE}/${CONF_BUILDINGS_ROUTE}`}
        >
          {t('header.buildings')}
        </Link>

        <Link
          className={`${styles.nav_link} ${isActive(AVATARS_ROUTE)}`}
          to={`${AVATARS_ROUTE}/${CONF_AVATARS_ROUTE}`}
        >
          {t('header.avatars')}
        </Link>

        <Link
          className={`${styles.nav_link} ${isActive(EVENTS_ROUTE)}`}
          to={`${EVENTS_ROUTE}`}
        >
          {t('header.events')}
        </Link>

        <Link
          className={`${styles.nav_link} ${isActive(ARTICLES_ROUTE)}`}
          to={`${ARTICLES_ROUTE}`}
        >
          {t('header.articles')}
        </Link>

        <Link
          className={`${styles.nav_link} ${isActive(NEWS_ROUTE)}`}
          to={`${NEWS_ROUTE}`}
        >
          {t('news.news')}
        </Link>

        <Link
          className={`${styles.nav_link} ${isActive(SUPPORT_ROUTE)}`}
          to={`${SUPPORT_ROUTE}`}
        >
          {t('support.support')}
        </Link>
      </nav>
    </div>
  );
};

export default Header;
