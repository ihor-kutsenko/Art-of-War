import { lazy } from 'react';

const WelcomePage = lazy(() => import('../pages/WelcomePage/WelcomePage'));
const UnitsPage = lazy(() => import('../pages/UnitsPage/UnitsPage'));
const MedalsPage = lazy(() => import('../pages/MedalsPage/MedalsPage'));
const HeroesPage = lazy(() => import('../pages/HeroesPage/HeroesPage'));
const MapsPage = lazy(() => import('../pages/MapsPage/MapsPage'));
const TournamentPage = lazy(() =>
  import('../pages/MedalsPage/TournamentPage/TournamentPage')
);
const BlitzTournamentPage = lazy(() =>
  import('../pages/MedalsPage/BlitzTournamentPage/BlitzTournamentPage')
);
const SkirmishPage = lazy(() =>
  import('../pages/MedalsPage/SkirmishPage/SkirmishPage')
);
const OrdersPage = lazy(() =>
  import('../pages/MedalsPage/OrdersPage/OrdersPage')
);
const LeaguesPage = lazy(() =>
  import('../pages/MedalsPage/LeaguesPage/LeaguesPage')
);

export const WELCOME_PAGE_ROUTE = '/';
export const UNITS_ROUTE = '/units';
export const MEDALS_ROUTE = '/medals';
export const TOURNAMENT_ROUTE = '/medals/tournaments';
export const BLITZ_TOURNAMENT_ROUTE = '/medals/blitz-tournaments';
export const SKIRMISH_ROUTE = '/medals/skirmish';
export const ORDERS_ROUTE = '/medals/orders';
export const LEAGUES_ROUTE = '/medals/leagues';
export const HEROES_ROUTE = '/heroes';
export const MAPS_ROUTE = '/maps';

export const medalsRoutes = [
  { path: TOURNAMENT_ROUTE, element: <TournamentPage /> },
  { path: BLITZ_TOURNAMENT_ROUTE, element: <BlitzTournamentPage /> },
  { path: SKIRMISH_ROUTE, element: <SkirmishPage /> },
  { path: ORDERS_ROUTE, element: <OrdersPage /> },
  { path: LEAGUES_ROUTE, element: <LeaguesPage /> },
];

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
    children: medalsRoutes.map(({ path, element }) => ({
      path: path,
      element: element,
    })),
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
