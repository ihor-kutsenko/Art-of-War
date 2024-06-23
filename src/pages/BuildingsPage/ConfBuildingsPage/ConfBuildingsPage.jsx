import { confederationBuildings } from 'data/buildings/confederationBuildings';
import BuildingsGallery from 'components/Buildings/BuildingsGallery/BuildingsGallery';

const ConfBuildingsPage = () => {
  return (
    <>
      <BuildingsGallery buildings={confederationBuildings} />
    </>
  );
};

export default ConfBuildingsPage;
