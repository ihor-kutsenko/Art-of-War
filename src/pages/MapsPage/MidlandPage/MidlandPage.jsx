import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Gallery from 'components/Gallery/Gallery';
import MapSelector from 'components/MapSelector/MapSelector';

import { midlandMaps } from 'data/maps/midland';

const MidlandPage = () => {
  const { t } = useTranslation();

  const [filteredMaps, setFilteredMaps] = useState(midlandMaps);

  const handleSelectMap = mapTitle => {
    if (mapTitle) {
      const selectedMap = midlandMaps.filter(map => t(map.title) === mapTitle);
      setFilteredMaps(selectedMap);
    } else {
      setFilteredMaps(midlandMaps);
    }
  };

  return (
    <>
      <MapSelector maps={midlandMaps} onSelectMap={handleSelectMap} />
      <Gallery images={filteredMaps} />
    </>
  );
};

export default MidlandPage;
