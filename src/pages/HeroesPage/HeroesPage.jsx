import { useTranslation } from 'react-i18next';

import Container from 'components/Container/Container';
import NavigationPage from 'components/NavigationPage/NavigationPage';
import {
  CONF_HEROES_ROUTE,
  RESIST_HEROES_ROUTE,
  BLUEPRINTS_ROUTE,
} from 'routes/routes';

const HeroesPage = () => {
  const { t } = useTranslation();

  const links = [
    { path: CONF_HEROES_ROUTE, label: t('main.confederation') },
    { path: RESIST_HEROES_ROUTE, label: t('main.resistance') },
    { path: BLUEPRINTS_ROUTE, label: t('heroes.blueprints.blueprints') },
  ];

  return (
    <Container>
      <NavigationPage links={links} />
    </Container>
  );
};

export default HeroesPage;
