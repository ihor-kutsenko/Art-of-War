import UnitsGallery from 'components/UnitsGallery/UnitsGallery';
import { confederationHeroes } from 'data/heroes/confHeroes';

const ConfHeroesPage = () => {
  return (
    <div>
      <UnitsGallery units={confederationHeroes} />
    </div>
  );
};

export default ConfHeroesPage;
