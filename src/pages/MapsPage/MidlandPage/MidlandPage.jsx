import Gallery from 'components/Gallery/Gallery';
import { midlandMaps } from 'data/maps/midland';

const MidlandPage = () => {
  return (
    <>
      <Gallery images={midlandMaps} />
    </>
  );
};

export default MidlandPage;
