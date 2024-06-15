import { lazy } from 'react';

const WelcomePage = lazy(() => import('../pages/WelcomePage/WelcomePage'));
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
const DesertPage = lazy(() =>
  import('../pages/MapsPage/DesertPage/DesertPage')
);
const MidlandPage = lazy(() =>
  import('../pages/MapsPage/MidlandPage/MidlandPage')
);
const JunglePage = lazy(() =>
  import('../pages/MapsPage/JunglePage/JunglePage')
);
// Heroes Page
const HeroesPage = lazy(() => import('../pages/HeroesPage/HeroesPage'));
const ConfHeroesPage = lazy(() =>
  import('../pages/HeroesPage/ConfHeroesPage/ConfHeroesPage')
);
const ResistHeroesPage = lazy(() =>
  import('../pages/HeroesPage/ResistHeroesPage/ResistHeroesPage')
);
const BlueprintsPage = lazy(() =>
  import('../pages/HeroesPage/BlueprintsPage/BlueprintsPage')
);
// Units page
const UnitsPage = lazy(() => import('../pages/UnitsPage/UnitsPage'));
const ConfUnitsPage = lazy(() =>
  import('../pages/UnitsPage/ConfUnitsPage/ConfUnitsPage')
);
const ResistUnitsPage = lazy(() =>
  import('../pages/UnitsPage/ResistUnitsPage/ResistUnitsPage')
);

// Buildings page
const BuildingsPage = lazy(() =>
  import('../pages/BuildingsPage/BuildingsPage')
);
const ConfBuildingsPage = lazy(() =>
  import('../pages/BuildingsPage/ConfBuildingsPage/ConfBuildingsPage')
);
const ResistBuildingsPage = lazy(() =>
  import('../pages/BuildingsPage/ResistBuildingsPage/ResistBuildingsPage')
);

// Avatars page
const AvatarsPage = lazy(() => import('../pages/AvatarsPage/AvatarsPage'));
const ConfAvatarsPage = lazy(() =>
  import('../pages/AvatarsPage/ConfAvatarsPage/ConfAvatarsPage')
);
const ResistAvatarsPage = lazy(() =>
  import('../pages/AvatarsPage/ResistAvatarsPage/ResistAvatarsPage')
);
const OtherAvatarsPage = lazy(() =>
  import('../pages/AvatarsPage/OtherAvatarsPage/OtherAvatarsPage')
);

// Routes
export const WELCOME_PAGE_ROUTE = '/';

export const MAPS_ROUTE = '/maps';
export const AUTUMN_ROUTE = 'autumn';
export const DESERT_ROUTE = 'desert';
export const WINTER_ROUTE = 'winter';
export const MIDLAND_ROUTE = 'midland';
export const JUNGLE_ROUTE = 'jungle';

export const MEDALS_ROUTE = '/medals';
export const TOURNAMENT_ROUTE = 'tournaments';
export const BLITZ_TOURNAMENT_ROUTE = 'blitz-tournaments';
export const SKIRMISH_ROUTE = 'skirmish';
export const ORDERS_ROUTE = 'orders';
export const LEAGUES_ROUTE = 'leagues';

export const HEROES_ROUTE = '/heroes';
export const CONF_HEROES_ROUTE = 'conf-heroes';
export const RESIST_HEROES_ROUTE = 'resist-heroes';
export const BLUEPRINTS_ROUTE = 'blueprints';

export const UNITS_ROUTE = '/units';
export const CONF_UNITS_ROUTE = 'confederation';
export const RESIST_UNITS_ROUTE = 'resistance';

export const BUILDINGS_ROUTE = '/buildings';
export const CONF_BUILDINGS_ROUTE = 'confederation';
export const RESIST_BUILDINGS_ROUTE = 'resistance';

export const AVATARS_ROUTE = '/avatars';
export const CONF_AVATARS_ROUTE = 'confederation';
export const RESIST_AVATARS_ROUTE = 'resistance';
export const OTHER_AVATARS_ROUTE = 'other';

export const mapsRoutes = [
  { path: AUTUMN_ROUTE, element: <AutumnPage /> },
  { path: WINTER_ROUTE, element: <WinterPage /> },
  { path: DESERT_ROUTE, element: <DesertPage /> },
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

export const heroesRoutes = [
  { path: CONF_HEROES_ROUTE, element: <ConfHeroesPage /> },
  { path: RESIST_HEROES_ROUTE, element: <ResistHeroesPage /> },
  { path: BLUEPRINTS_ROUTE, element: <BlueprintsPage /> },
];

export const unitsRoutes = [
  { path: CONF_UNITS_ROUTE, element: <ConfUnitsPage /> },
  { path: RESIST_UNITS_ROUTE, element: <ResistUnitsPage /> },
];

export const buildingsRoutes = [
  { path: CONF_BUILDINGS_ROUTE, element: <ConfBuildingsPage /> },
  { path: RESIST_BUILDINGS_ROUTE, element: <ResistBuildingsPage /> },
];

export const avatarsRoutes = [
  { path: CONF_AVATARS_ROUTE, element: <ConfAvatarsPage /> },
  { path: RESIST_AVATARS_ROUTE, element: <ResistAvatarsPage /> },
  { path: OTHER_AVATARS_ROUTE, element: <OtherAvatarsPage /> },
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
    children: heroesRoutes.map(({ path, element }) => ({
      path: path,
      element: element,
    })),
  },
  {
    path: UNITS_ROUTE,
    element: <UnitsPage />,
    children: unitsRoutes.map(({ path, element }) => ({
      path: path,
      element: element,
    })),
  },
  {
    path: BUILDINGS_ROUTE,
    element: <BuildingsPage />,
    children: buildingsRoutes.map(({ path, element }) => ({
      path: path,
      element: element,
    })),
  },
  {
    path: AVATARS_ROUTE,
    element: <AvatarsPage />,
    children: avatarsRoutes.map(({ path, element }) => ({
      path: path,
      element: element,
    })),
  },
];
