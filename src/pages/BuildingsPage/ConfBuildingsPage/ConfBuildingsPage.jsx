import BuildingsGallery from 'components/Buildings/BuildingsGallery/BuildingsGallery';
import { confederationBuildings } from 'data/buildings/confederationBuildings';

const ConfBuildingsPage = () => {
  return (
    <>
      <BuildingsGallery buildings={confederationBuildings} />
    </>
  );
};

export default ConfBuildingsPage;
