import Gallery from 'components/Gallery/Gallery';
import MapSelector from 'components/MapSelector/MapSelector';
import { desertMaps } from 'data/maps/desert';
import { useState } from 'react';

const DesertPage = () => {
  const [filteredMaps, setFilteredMaps] = useState(desertMaps);

  const handleSelectMap = mapTitle => {
    if (mapTitle) {
      const selectedMap = desertMaps.filter(map => map.title === mapTitle);
      setFilteredMaps(selectedMap);
    } else {
      setFilteredMaps(desertMaps);
    }
  };
  return (
    <>
      <MapSelector maps={desertMaps} onSelectMap={handleSelectMap} />
      <Gallery images={filteredMaps} />
    </>
  );
};

export default DesertPage;
