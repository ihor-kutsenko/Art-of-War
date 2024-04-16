import { lazy } from 'react';

const WelcomePage = lazy(() => import('../pages/WelcomePage/WelcomePage'));
const UnitsPage = lazy(() => import('../pages/UnitsPage/UnitsPage'));
const HeroesPage = lazy(() => import('../pages/HeroesPage/HeroesPage'));
// medals Page
const MedalsPage = lazy(() => import('../pages/MedalsPage/MedalsPage'));
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
// Maps Page
const MapsPage = lazy(() => import('../pages/MapsPage/MapsPage'));
const AutumnPage = lazy(() =>
  import('../pages/MapsPage/AutumnPage/AutumnPage')
);
const WinterPage = lazy(() =>
  import('../pages/MapsPage/WinterPage/WinterPage')
);
const MidlandPage = lazy(() =>
  import('../pages/MapsPage/MidlandPage/MidlandPage')
);
const JunglePage = lazy(() =>
  import('../pages/MapsPage/JunglePage/JunglePage')
);

export const WELCOME_PAGE_ROUTE = '/';

export const MAPS_ROUTE = '/maps';
export const AUTUMN_ROUTE = '/maps/autumn';
export const WINTER_ROUTE = '/maps/winter';
export const MIDLAND_ROUTE = '/maps/midland';
export const JUNGLE_ROUTE = '/maps/jungle';

export const MEDALS_ROUTE = '/medals';
export const TOURNAMENT_ROUTE = '/medals/tournaments';
export const BLITZ_TOURNAMENT_ROUTE = '/medals/blitz-tournaments';
export const SKIRMISH_ROUTE = '/medals/skirmish';
export const ORDERS_ROUTE = '/medals/orders';

export const LEAGUES_ROUTE = '/medals/leagues';
export const HEROES_ROUTE = '/heroes';
export const UNITS_ROUTE = '/units';

export const mapsRoutes = [
  { path: AUTUMN_ROUTE, element: <AutumnPage /> },
  { path: WINTER_ROUTE, element: <WinterPage /> },
  { path: MIDLAND_ROUTE, element: <MidlandPage /> },
  { path: JUNGLE_ROUTE, element: <JunglePage /> },
];

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
    path: MAPS_ROUTE,
    element: <MapsPage />,
    children: mapsRoutes.map(({ path, element }) => ({
      path: path,
      element: element,
    })),
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
    path: UNITS_ROUTE,
    element: <UnitsPage />,
  },
];
