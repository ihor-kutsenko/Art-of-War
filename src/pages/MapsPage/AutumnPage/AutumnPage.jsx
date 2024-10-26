import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Gallery from 'components/Gallery/Gallery';
import MapSelector from 'components/MapSelector/MapSelector';
import { autumnMaps } from 'data/maps/autumn';

const AutumnPage = () => {
  const { t } = useTranslation();
  const [filteredMaps, setFilteredMaps] = useState(autumnMaps);

  const handleSelectMap = mapTitle => {
    if (mapTitle) {
      const selectedMap = autumnMaps.filter(map => t(map.title) === mapTitle);
      setFilteredMaps(selectedMap);
    } else {
      setFilteredMaps(autumnMaps);
    }
  };

  return (
    <>
      <MapSelector maps={autumnMaps} onSelectMap={handleSelectMap} />
      <Gallery images={filteredMaps} />
    </>
  );
};

export default AutumnPage;
