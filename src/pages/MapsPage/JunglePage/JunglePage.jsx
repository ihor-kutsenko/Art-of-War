import Gallery from 'components/Gallery/Gallery';
import { jungleMaps } from 'data/maps/jungle';

const JunglePage = () => {
  return (
    <>
      <Gallery images={jungleMaps} />
    </>
  );
};

export default JunglePage;
