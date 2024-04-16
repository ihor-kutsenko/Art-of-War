import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Container from 'components/Container/Container';
import styles from './NavigationPage.module.scss';

const NavigationPage = ({ links }) => {
  return (
    <Container>
      <nav className={styles.navigation}>
        {links.map(({ path, label }) => (
          <NavLink
            key={path}
            className={styles.link}
            to={path}
            activeclassname={styles.active}
          >
            {label}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </Container>
  );
};

export default NavigationPage;
