import { useTranslation } from 'react-i18next';
import Container from 'components/Container/Container';
import NavigationPage from 'components/NavigationPage/NavigationPage';

import {
  TOURNAMENT_ROUTE,
  BLITZ_TOURNAMENT_ROUTE,
  SKIRMISH_ROUTE,
  ORDERS_ROUTE,
  LEAGUES_ROUTE,
} from 'routes/routes';

const MedalsPage = () => {
  const { t } = useTranslation();

  const links = [
    { path: TOURNAMENT_ROUTE, label: t('medals.tournaments') },
    { path: BLITZ_TOURNAMENT_ROUTE, label: t('medals.blitzTournaments') },
    { path: SKIRMISH_ROUTE, label: t('medals.skirmish') },
    { path: ORDERS_ROUTE, label: t('medals.orders') },
    { path: LEAGUES_ROUTE, label: t('medals.leagues') },
  ];

  return (
    <Container>
      <NavigationPage links={links} />
    </Container>
  );
};

export default MedalsPage;
