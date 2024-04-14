import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
// import { useState, useEffect } from 'react';
import {
  TOURNAMENT_ROUTE,
  BLITZ_TOURNAMENT_ROUTE,
  SKIRMISH_ROUTE,
  ORDERS_ROUTE,
  LEAGUES_ROUTE,
} from 'routes/routes';

const MedalsPage = () => {
  return (
    <div>
      <ul style={{ display: 'flex', gap: '8px' }}>
        <li>
          <Link to={TOURNAMENT_ROUTE}>Tournaments</Link>
        </li>
        <li>
          <Link to={BLITZ_TOURNAMENT_ROUTE}>Blitz-Tournaments</Link>
        </li>
        <li>
          <Link to={SKIRMISH_ROUTE}>Skirmish</Link>
        </li>
        <li>
          <Link to={ORDERS_ROUTE}>Orders</Link>
        </li>
        <li>
          <Link to={LEAGUES_ROUTE}>Leagues</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default MedalsPage;
