import { useState } from 'react';
import assault from '../../../images/units/confederation/assault.png';
const ResistUnitsPage = () => {
  const unit = {
    id: 1,
    name: 'Assault',
    image: assault,
    description: 'Description for Unit 1',
    levels: [
      {
        level: 1,
        value1: 10,
        value2: 20,
        value3: 30,
        value4: 40,
        value5: 50,
        value6: 60,
      },
      {
        level: 2,
        value1: 15,
        value2: 25,
        value3: 35,
        value4: 45,
        value5: 55,
        value6: 65,
      },
      // More levels
    ],
    additionalInfo: 'Additional info for Unit 1',
  };

  const [selectedLevel, setSelectedLevel] = useState(1);

  if (!unit) {
    return <div>Unit not found</div>;
  }

  const handleLevelChange = event => {
    setSelectedLevel(parseInt(event.target.value, 10));
  };

  const selectedLevelData = unit.levels.find(
    level => level.level === selectedLevel
  );
  return (
    <div>
      <div>
        <h2>{unit.name}</h2>
        <p>{unit.description}</p>
        {unit.additionalInfo && <p>{unit.additionalInfo}</p>}

        <label htmlFor="levelSelect">Select Level: </label>
        <select
          id="levelSelect"
          value={selectedLevel}
          onChange={handleLevelChange}
        >
          {unit.levels.map(level => (
            <option key={level.level} value={level.level}>
              Level {level.level}
            </option>
          ))}
        </select>

        {selectedLevelData && (
          <div>
            <p>Value 1: {selectedLevelData.value1}</p>
            <p>Value 2: {selectedLevelData.value2}</p>
            <p>Value 3: {selectedLevelData.value3}</p>
            <p>Value 4: {selectedLevelData.value4}</p>
            <p>Value 5: {selectedLevelData.value5}</p>
            <p>Value 6: {selectedLevelData.value6}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResistUnitsPage;
