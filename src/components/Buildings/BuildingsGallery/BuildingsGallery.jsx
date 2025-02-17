import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import BuildingModal from '../BuildingModal/BuildingModal';
import styles from '../../UnitsGallery/UnitsGallery.module.scss';

const BuildingsGallery = ({ buildings }) => {
  const { t } = useTranslation();

  const [selectedBuilding, setSelectedBuilding] = useState(null);

  const handleBuildingClick = index => {
    setSelectedBuilding(index);
  };

  const closeModal = () => {
    setSelectedBuilding(null);
  };

  const goToNext = () => {
    setSelectedBuilding(prevIndex =>
      prevIndex === buildings.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setSelectedBuilding(prevIndex =>
      prevIndex === 0 ? buildings.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.gallery}>
      {buildings.map((building, index) => (
        <div
          onClick={() => handleBuildingClick(index)}
          key={building.id}
          className={styles.item}
        >
          <h3 className={styles.title}>{t(building.name)}</h3>
          <img
            src={building.image}
            alt={t(building.name)}
            className={styles.image}
          />
        </div>
      ))}
      {selectedBuilding !== null && (
        <BuildingModal
          buildings={buildings}
          selectedIndex={selectedBuilding}
          onClose={closeModal}
          onPrevious={goToPrevious}
          onNext={goToNext}
        />
      )}
    </div>
  );
};

export default BuildingsGallery;
