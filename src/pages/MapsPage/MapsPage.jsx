import { useTranslation } from 'react-i18next';
import Container from 'components/Container/Container';
import NavigationPage from 'components/NavigationPage/NavigationPage';
import {
  AUTUMN_ROUTE,
  WINTER_ROUTE,
  MIDLAND_ROUTE,
  JUNGLE_ROUTE,
  DESERT_ROUTE,
} from 'routes/routes';

const MapsPage = () => {
  const { t } = useTranslation();

  const links = [
    { path: AUTUMN_ROUTE, label: t('maps.type1') },
    { path: WINTER_ROUTE, label: t('maps.type2') },
    { path: DESERT_ROUTE, label: t('maps.type3') },
    { path: JUNGLE_ROUTE, label: t('maps.type4') },
    { path: MIDLAND_ROUTE, label: t('maps.type5') },
  ];
  return (
    <Container>
      <NavigationPage links={links} />
    </Container>
  );
};

export default MapsPage;
