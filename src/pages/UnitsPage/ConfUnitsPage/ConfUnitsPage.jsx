import UnitsGallery from 'components/UnitsGallery/UnitsGallery';
import { confederationUnits } from 'data/units/confederationUnits';

const ConfUnitsPage = () => {
  return (
    <>
      <UnitsGallery units={confederationUnits} />
    </>
  );
};

export default ConfUnitsPage;
