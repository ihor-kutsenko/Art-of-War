import { avatarsOther } from 'data/avatars/other';
import Gallery from 'components/Gallery/Gallery';

const OtherAvatarsPage = () => {
  return (
    <>
      <Gallery images={avatarsOther} />
    </>
  );
};

export default OtherAvatarsPage;
