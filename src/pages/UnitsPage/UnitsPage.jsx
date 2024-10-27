import { useTranslation } from 'react-i18next';

import Container from 'components/Container/Container';
import NavigationPage from 'components/NavigationPage/NavigationPage';

import { CONF_UNITS_ROUTE, RESIST_UNITS_ROUTE } from 'routes/routes';

const UnitsPage = () => {
  const { t } = useTranslation();

  const links = [
    { path: CONF_UNITS_ROUTE, label: t('main.confederation') },
    { path: RESIST_UNITS_ROUTE, label: t('main.resistance') },
  ];

  return (
    <Container>
      <NavigationPage links={links} />
    </Container>
  );
};

export default UnitsPage;
