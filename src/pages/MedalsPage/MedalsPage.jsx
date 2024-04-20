import Container from 'components/Container/Container';
import Item from 'components/Item/Item';
import NavigationPage from 'components/NavigationPage/NavigationPage';

import {
  TOURNAMENT_ROUTE,
  BLITZ_TOURNAMENT_ROUTE,
  SKIRMISH_ROUTE,
  ORDERS_ROUTE,
  LEAGUES_ROUTE,
} from 'routes/routes';

const links = [
  { path: TOURNAMENT_ROUTE, label: 'Tournaments' },
  { path: BLITZ_TOURNAMENT_ROUTE, label: 'Blitz-Tournaments' },
  { path: SKIRMISH_ROUTE, label: 'Skirmish' },
  { path: ORDERS_ROUTE, label: 'Orders' },
  { path: LEAGUES_ROUTE, label: 'Leagues' },
];

const MedalsPage = () => {
  return (
    <Container>
      <NavigationPage links={links} />
    </Container>
  );
};

export default MedalsPage;
