import { avatarsConfederations } from 'data/avatars/confederation';
import Gallery from 'components/Gallery/Gallery';

const ConfAvatarsPage = () => {
  return (
    <>
      <Gallery images={avatarsConfederations} />
    </>
  );
};

export default ConfAvatarsPage;
