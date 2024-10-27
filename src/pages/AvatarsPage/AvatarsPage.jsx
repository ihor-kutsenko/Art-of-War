import { useTranslation } from 'react-i18next';

import Container from 'components/Container/Container';
import NavigationPage from 'components/NavigationPage/NavigationPage';

import {
  CONF_AVATARS_ROUTE,
  RESIST_AVATARS_ROUTE,
  OTHER_AVATARS_ROUTE,
} from 'routes/routes';

const AvatarsPage = () => {
  const { t } = useTranslation();

  const links = [
    { path: CONF_AVATARS_ROUTE, label: t('main.confederation') },
    { path: RESIST_AVATARS_ROUTE, label: t('main.resistance') },
    { path: OTHER_AVATARS_ROUTE, label: t('main.other') },
  ];

  return (
    <Container>
      <NavigationPage links={links} />
    </Container>
  );
};

export default AvatarsPage;
