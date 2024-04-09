import { lazy } from 'react';

const WelcomePage = lazy(() => import('../pages/WelcomePage/WelcomePage'));
const SignUpPage = lazy(() => import('../pages/SignUpPage/SignUpPage'));
const SignInPage = lazy(() => import('../pages/SignInPage/SignInPage'));
const CatalogPage = lazy(() => import('../pages/CatalogPage/CatalogPage'));
const FavoritesPage = lazy(() =>
  import('../pages/FavoritesPage/FavoritesPage')
);

export const WELCOME_PAGE_ROUTE = '/';
export const SIGN_UP_ROUTE = '/sign-up';
export const SIGN_IN_ROUTE = '/sign-in';
export const CATALOG_ROUTE = '/catalog';
export const FAVORITES_ROUTE = '/favorites';

export const appRoutes = [
  {
    path: WELCOME_PAGE_ROUTE,
    element: <WelcomePage />,
  },
  {
    path: SIGN_UP_ROUTE,
    element: <SignUpPage />,
  },
  {
    path: SIGN_IN_ROUTE,
    element: <SignInPage />,
  },
  {
    path: CATALOG_ROUTE,
    element: <CatalogPage />,
  },
  {
    path: FAVORITES_ROUTE,
    element: <FavoritesPage />,
  },
];
