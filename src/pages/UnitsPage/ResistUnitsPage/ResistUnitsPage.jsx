import UnitsGallery from 'components/UnitsGallery/UnitsGallery';
import { resistanceUnits } from 'data/units/resistanceUnits';

const ResistUnitsPage = () => {
  return (
    <>
      <UnitsGallery units={resistanceUnits} />
    </>
  );
};

export default ResistUnitsPage;
