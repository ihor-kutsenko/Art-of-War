import Gallery from 'components/Gallery/Gallery';
import { avatarsConfederations } from 'data/avatars/confederation';

const ConfAvatarsPage = () => {
  return (
    <>
      <Gallery images={avatarsConfederations} />
    </>
  );
};

export default ConfAvatarsPage;
