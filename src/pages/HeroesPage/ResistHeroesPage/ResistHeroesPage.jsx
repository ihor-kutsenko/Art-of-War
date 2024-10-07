import UnitsGallery from 'components/UnitsGallery/UnitsGallery';
import { resistanceHeroes } from 'data/heroes/resistHeroes';

const ResistHeroesPage = () => {
  return (
    <div>
      <UnitsGallery units={resistanceHeroes} />
    </div>
  );
};

export default ResistHeroesPage;
