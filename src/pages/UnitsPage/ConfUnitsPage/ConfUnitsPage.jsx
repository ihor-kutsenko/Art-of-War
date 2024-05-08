import Avatars from 'components/Avatars/Avatars';
import { avatarsResistance } from 'data/avatars/resistance';

const ConfUnitsPage = () => {
  return (
    <div>
      ConfederationPage
      <Avatars avatars={avatarsResistance} />
    </div>
  );
};

export default ConfUnitsPage;
