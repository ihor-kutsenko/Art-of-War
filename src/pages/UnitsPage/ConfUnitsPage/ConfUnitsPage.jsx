import Gallery from 'components/Gallery/Gallery';
import UnitsGallery from 'components/UnitsGallery/UnitsGallery';
import { confederationUnits } from 'data/units/confederationUnits';

const ConfUnitsPage = () => {
  return (
    <>
      {/* <UnitsGallery units={confederationUnits} /> */}
      <Gallery images={confederationUnits} />
    </>
  );
};

export default ConfUnitsPage;
