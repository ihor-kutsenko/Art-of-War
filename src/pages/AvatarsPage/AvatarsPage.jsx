import Container from 'components/Container/Container';
import NavigationPage from 'components/NavigationPage/NavigationPage';

import {
  CONF_AVATARS_ROUTE,
  RESIST_AVATARS_ROUTE,
  OTHER_AVATARS_ROUTE,
} from 'routes/routes';

const links = [
  { path: CONF_AVATARS_ROUTE, label: 'Confederation' },
  { path: RESIST_AVATARS_ROUTE, label: 'Resistance' },
  { path: OTHER_AVATARS_ROUTE, label: 'Other' },
];

const AvatarsPage = () => {
  return (
    <Container>
      <NavigationPage links={links} />
    </Container>
  );
};

export default AvatarsPage;
