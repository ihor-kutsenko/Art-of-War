import { NavLink } from 'react-router-dom';
import {
  WELCOME_PAGE_ROUTE,
  HEROES_ROUTE,
  MAPS_ROUTE,
  MEDALS_ROUTE,
  UNITS_ROUTE,
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
        <NavLink to={MAPS_ROUTE}>Maps</NavLink>
        <NavLink to={MEDALS_ROUTE}>Medals</NavLink>
        <NavLink to={HEROES_ROUTE}>Heroes</NavLink>
        <NavLink to={UNITS_ROUTE}>Units</NavLink>
      </nav>
    </div>
  );
};

export default Header;
