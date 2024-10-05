import { useState } from 'react';

import Gallery from 'components/Gallery/Gallery';
import MapSelector from 'components/MapSelector/MapSelector';
import { jungleMaps } from 'data/maps/jungle';

const JunglePage = () => {
  const [filteredMaps, setFilteredMaps] = useState(jungleMaps);

  const handleSelectMap = mapTitle => {
    if (mapTitle) {
      const selectedMap = jungleMaps.filter(map => map.title === mapTitle);
      setFilteredMaps(selectedMap);
    } else {
      setFilteredMaps(jungleMaps);
    }
  };

  return (
    <>
      <MapSelector maps={jungleMaps} onSelectMap={handleSelectMap} />
      <Gallery images={filteredMaps} />
    </>
  );
};

export default JunglePage;
