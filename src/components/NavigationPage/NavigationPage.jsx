import { Link, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Suspense, useState } from 'react';

import Container from 'components/Container/Container';
import Loader from 'components/Loader/Loader';
import styles from './NavigationPage.module.scss';

const NavigationPage = ({ links }) => {
  const { pathname } = useLocation();
  const [, setActiveLink] = useState(pathname);

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
              pathname.includes(path) ? styles.active : ''
            }`}
            to={path}
            onClick={() => handleLinkClick(path)}
          >
            {label}
          </Link>
        ))}
      </nav>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default NavigationPage;
