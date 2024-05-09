import Avatars from 'components/Avatars/Avatars';
import { avatarsConfederations } from 'data/avatars/confederation';

const ConfAvatarsPage = () => {
  return (
    <>
      <Avatars avatars={avatarsConfederations} />
    </>
  );
};

export default ConfAvatarsPage;
