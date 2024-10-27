import { useTranslation } from 'react-i18next';

import Container from 'components/Container/Container';
import NavigationPage from 'components/NavigationPage/NavigationPage';

import { CONF_BUILDINGS_ROUTE, RESIST_BUILDINGS_ROUTE } from 'routes/routes';

const BuildingsPage = () => {
  const { t } = useTranslation();

  const links = [
    { path: CONF_BUILDINGS_ROUTE, label: t('main.confederation') },
    { path: RESIST_BUILDINGS_ROUTE, label: t('main.resistance') },
  ];

  return (
    <Container>
      <NavigationPage links={links} />
    </Container>
  );
};

export default BuildingsPage;
