import assault from '../../images/units/confederation/assault.png';
import heavyAssault from '../../images/units/confederation/heavy-assault.png';

export const confederationUnits = [
  {
    id: 1,
    title: 'Assault',
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
  },
  {
    id: 2,
    title: 'Heavy Assault',
    image: heavyAssault,
    description: 'Description for Unit 2',
    levels: [
      {
        level: 1,
        value1: 12,
        value2: 22,
        value3: 32,
        value4: 42,
        value5: 52,
        value6: 62,
      },
      {
        level: 2,
        value1: 18,
        value2: 28,
        value3: 38,
        value4: 48,
        value5: 58,
        value6: 68,
      },
      // More levels
    ],
    additionalInfo: null,
  },
  // More units
];
