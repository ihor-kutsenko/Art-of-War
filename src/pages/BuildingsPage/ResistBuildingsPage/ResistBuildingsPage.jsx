import { resistanceBuildings } from 'data/buildings/resistanceBuildings';
import BuildingsGallery from 'components/Buildings/BuildingsGallery/BuildingsGallery';

const ResistBuildingsPage = () => {
  return (
    <>
      <BuildingsGallery buildings={resistanceBuildings} />
    </>
  );
};

export default ResistBuildingsPage;
