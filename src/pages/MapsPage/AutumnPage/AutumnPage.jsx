import Gallery from 'components/Gallery/Gallery';
import { autumnMaps } from 'data/maps/autumn';

const AutumnPage = () => {
  return (
    <>
      <Gallery images={autumnMaps} />
    </>
  );
};

export default AutumnPage;
