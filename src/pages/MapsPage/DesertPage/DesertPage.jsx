import Gallery from 'components/Gallery/Gallery';
import { desertMaps } from 'data/maps/desert';

const DesertPage = () => {
  return (
    <>
      <Gallery images={desertMaps} />
    </>
  );
};

export default DesertPage;
