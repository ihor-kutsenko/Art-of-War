import Container from 'components/Container/Container';
import NavigationPage from 'components/NavigationPage/NavigationPage';
import {
  AUTUMN_ROUTE,
  WINTER_ROUTE,
  MIDLAND_ROUTE,
  JUNGLE_ROUTE,
  DESERT_ROUTE,
} from 'routes/routes';

const links = [
  { path: AUTUMN_ROUTE, label: 'Autumn' },
  { path: WINTER_ROUTE, label: 'Winter' },
  { path: DESERT_ROUTE, label: 'Desert' },
  { path: JUNGLE_ROUTE, label: 'Jungle' },
  { path: MIDLAND_ROUTE, label: 'Midland' },
];

const MapsPage = () => {
  return (
    <Container>
      <NavigationPage links={links} />
    </Container>
  );
};

export default MapsPage;
