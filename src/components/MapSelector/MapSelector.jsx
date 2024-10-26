import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './MapSelector.module.scss';

const MapSelector = ({ maps, onSelectMap }) => {
  const { t } = useTranslation();
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
        <option value="">{t('maps.selectMap')}</option>
        {maps.map((map, index) => (
          <option key={index} value={t(map.title)}>
            {t(map.title)}
          </option>
        ))}
      </select>
      {selectedMap && (
        <button onClick={handleResetSelection}>{t('maps.clearFilter')}</button>
      )}
    </div>
  );
};

export default MapSelector;
