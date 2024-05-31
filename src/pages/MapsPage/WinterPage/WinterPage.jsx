import Gallery from 'components/Gallery/Gallery';
import { winterMaps } from 'data/maps/winter';

const WinterPage = () => {
  return (
    <>
      <Gallery images={winterMaps} />
    </>
  );
};

export default WinterPage;
