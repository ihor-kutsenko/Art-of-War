import Container from 'components/Container/Container';
import NavigationPage from 'components/NavigationPage/NavigationPage';

import { CONF_BUILDINGS_ROUTE, RESIST_BUILDINGS_ROUTE } from 'routes/routes';

const links = [
  { path: CONF_BUILDINGS_ROUTE, label: 'Confederation' },
  { path: RESIST_BUILDINGS_ROUTE, label: 'Resistance' },
];

const BuildingsPage = () => {
  return (
    <Container>
      <NavigationPage links={links} />
    </Container>
  );
};

export default BuildingsPage;
