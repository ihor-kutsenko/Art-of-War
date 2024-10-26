import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Gallery from 'components/Gallery/Gallery';
import MapSelector from 'components/MapSelector/MapSelector';
import { desertMaps } from 'data/maps/desert';

const DesertPage = () => {
  const { t } = useTranslation();

  const [filteredMaps, setFilteredMaps] = useState(desertMaps);

  const handleSelectMap = mapTitle => {
    if (mapTitle) {
      const selectedMap = desertMaps.filter(map => t(map.title) === mapTitle);
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
