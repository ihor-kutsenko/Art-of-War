import { lazy } from 'react';

const WelcomePage = lazy(() => import('../pages/WelcomePage/WelcomePage'));
const UnitsPage = lazy(() => import('../pages/UnitsPage/UnitsPage'));
const MedalsPage = lazy(() => import('../pages/MedalsPage/MedalsPage'));
const HeroesPage = lazy(() => import('../pages/HeroesPage/HeroesPage'));
const MapsPage = lazy(() => import('../pages/MapsPage/MapsPage'));

export const WELCOME_PAGE_ROUTE = '/';
export const UNITS_ROUTE = '/units';
export const MEDALS_ROUTE = '/medals';
export const HEROES_ROUTE = '/heroes';
export const MAPS_ROUTE = '/maps';

export const appRoutes = [
  {
    path: WELCOME_PAGE_ROUTE,
    element: <WelcomePage />,
  },
  {
    path: UNITS_ROUTE,
    element: <UnitsPage />,
  },
  {
    path: MEDALS_ROUTE,
    element: <MedalsPage />,
  },
  {
    path: HEROES_ROUTE,
    element: <HeroesPage />,
  },
  {
    path: MAPS_ROUTE,
    element: <MapsPage />,
  },
];
