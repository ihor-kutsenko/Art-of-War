import { avatarsResistance } from 'data/avatars/resistance';
import Gallery from 'components/Gallery/Gallery';

const ResistAvatarsPage = () => {
  return (
    <>
      <Gallery images={avatarsResistance} />
    </>
  );
};

export default ResistAvatarsPage;
