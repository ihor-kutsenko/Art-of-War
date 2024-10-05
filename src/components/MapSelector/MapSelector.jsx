import { useState } from 'react';

import styles from './MapSelector.module.scss';

const MapSelector = ({ maps, onSelectMap }) => {
  const [selectedMap, setSelectedMap] = useState('');

  const handleMapChange = e => {
    const mapTitle = e.target.value;
    setSelectedMap(mapTitle);
    onSelectMap(mapTitle);
  };

  const handleResetSelection = () => {
    setSelectedMap('');
    onSelectMap('');
  };

  return (
    <div className={styles.selectWrapper}>
      <select value={selectedMap} onChange={handleMapChange}>
        <option value="">Select map</option>
        {maps.map((map, index) => (
          <option key={index} value={map.title}>
            {map.title}
          </option>
        ))}
      </select>
      {selectedMap && (
        <button onClick={handleResetSelection}>Clear filter</button>
      )}
    </div>
  );
};

export default MapSelector;
