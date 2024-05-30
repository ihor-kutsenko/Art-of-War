import Gallery from 'components/Gallery/Gallery';
import { avatarsOther } from 'data/avatars/other';

const OtherAvatarsPage = () => {
  return (
    <>
      <Gallery images={avatarsOther} />
    </>
  );
};

export default OtherAvatarsPage;
