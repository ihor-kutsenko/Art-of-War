import Container from 'components/Container/Container';
import NavigationPage from 'components/NavigationPage/NavigationPage';
import {
  CONF_HEROES_ROUTE,
  RESIST_HEROES_ROUTE,
  BLUEPRINTS_ROUTE,
} from 'routes/routes';

const links = [
  { path: CONF_HEROES_ROUTE, label: 'Confederation' },
  { path: RESIST_HEROES_ROUTE, label: 'Resistance' },
  { path: BLUEPRINTS_ROUTE, label: 'Blueprints' },
];

const HeroesPage = () => {
  return (
    <Container>
      <NavigationPage links={links} />
    </Container>
  );
};

export default HeroesPage;
