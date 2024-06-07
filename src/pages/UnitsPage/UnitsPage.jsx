import Container from 'components/Container/Container';
import NavigationPage from 'components/NavigationPage/NavigationPage';

import { CONF_UNITS_ROUTE, RESIST_UNITS_ROUTE } from 'routes/routes';

const links = [
  { path: CONF_UNITS_ROUTE, label: 'Confederation' },
  { path: RESIST_UNITS_ROUTE, label: 'Resistance' },
];

const UnitsPage = () => {
  return (
    <Container>
      <NavigationPage links={links} />
    </Container>
  );
};

export default UnitsPage;
