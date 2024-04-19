import { Link, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Container from 'components/Container/Container';
import styles from './NavigationPage.module.scss';

const NavigationPage = ({ links }) => {
  const { pathname } = useLocation();
  const [activeLink, setActiveLink] = useState(pathname);

  const handleLinkClick = path => {
    setActiveLink(path);
  };

  return (
    <Container>
      <nav className={styles.navigation}>
        {links.map(({ path, label }) => (
          <Link
            key={path}
            className={`${styles.link} ${
              activeLink === path ? styles.active : ''
            }`}
            to={path}
            onClick={() => handleLinkClick(path)}
          >
            {label}
          </Link>
        ))}
      </nav>
      <Outlet />
    </Container>
  );
};

export default NavigationPage;
