import { useState } from 'react';

import Gallery from 'components/Gallery/Gallery';
import MapSelector from 'components/MapSelector/MapSelector';

import { winterMaps } from 'data/maps/winter';

const WinterPage = () => {
  const [filteredMaps, setFilteredMaps] = useState(winterMaps);

  const handleSelectMap = mapTitle => {
    if (mapTitle) {
      const selectedMap = winterMaps.filter(map => map.title === mapTitle);
      setFilteredMaps(selectedMap);
    } else {
      setFilteredMaps(winterMaps);
    }
  };

  return (
    <>
      <MapSelector maps={winterMaps} onSelectMap={handleSelectMap} />
      <Gallery images={filteredMaps} />
    </>
  );
};

export default WinterPage;
