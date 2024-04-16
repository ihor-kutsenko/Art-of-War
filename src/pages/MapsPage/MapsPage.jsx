import Container from 'components/Container/Container';
import NavigationPage from 'components/NavigationPage/NavigationPage';
import {
  AUTUMN_ROUTE,
  WINTER_ROUTE,
  MIDLAND_ROUTE,
  JUNGLE_ROUTE,
} from 'routes/routes';

const links = [
  { path: AUTUMN_ROUTE, label: 'Autumn' },
  { path: WINTER_ROUTE, label: 'Winter' },
  { path: MIDLAND_ROUTE, label: 'Midland' },
  { path: JUNGLE_ROUTE, label: 'Jungle' },
];

const MapsPage = () => {
  return (
    <Container>
      <NavigationPage links={links} />
    </Container>
  );
};

export default MapsPage;
