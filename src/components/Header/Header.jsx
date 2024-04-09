import { NavLink } from 'react-router-dom';
import {
  WELCOME_PAGE_ROUTE,
  CATALOG_ROUTE,
  FAVORITES_ROUTE,
  SIGN_IN_ROUTE,
  SIGN_UP_ROUTE,
} from 'routes/routes';

const Header = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '15px',
        marginBottom: '20px',
      }}
    >
      <NavLink to={WELCOME_PAGE_ROUTE}> Logo</NavLink>
      <nav
        style={{
          display: 'flex',

          gap: '15px',
        }}
      >
        <NavLink to={WELCOME_PAGE_ROUTE}>Home</NavLink>
        <NavLink to={CATALOG_ROUTE}>Catalog</NavLink>
        <NavLink to={FAVORITES_ROUTE}>Favorites</NavLink>
        <NavLink to={SIGN_IN_ROUTE}>Sign In page</NavLink>
        <NavLink to={SIGN_UP_ROUTE}>Sign Up page</NavLink>
      </nav>
    </div>
  );
};

export default Header;
