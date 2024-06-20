import BuildingsGallery from 'components/Buildings/BuildingsGallery/BuildingsGallery';
import { resistanceBuildings } from 'data/buildings/resistanceBuildings';

const ResistBuildingsPage = () => {
  return (
    <>
      <BuildingsGallery buildings={resistanceBuildings} />
    </>
  );
};

export default ResistBuildingsPage;
