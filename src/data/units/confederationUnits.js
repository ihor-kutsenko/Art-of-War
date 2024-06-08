import assault from '../../images/units/confederation/assault.png';
import heavyAssault from '../../images/units/confederation/heavy-assault.png';

// icons
import armor1 from '../../images/icons/armor1.png';

export const confederationUnits = [
  {
    id: 1,
    name: 'Assault',
    image: assault,
    iconArmor: armor1,
    description: 'Description for Unit 1',
    levels: [
      {
        level: 1,
        hp: 10,
        armor: 20,
        speed: 30,
        view: 40,
        cost: 50,
        time: 60,
        cp: 1,
      },
      {
        level: 2,
        hp: 20,
        armor: 30,
        speed: 35,
        view: 40,
        cost: 50,
        time: 60,
        cp: 1,
      },
      // More levels
    ],
    additionalInfo: 'Additional info for Unit 1',
  },
  {
    id: 2,
    name: 'Heavy Assault',
    image: heavyAssault,
    iconArmor: armor1,
    description: 'Description for Unit 2',
    levels: [
      {
        level: 1,
        hp: 10,
        armor: 20,
        speed: 30,
        view: 40,
        cost: 50,
        time: 60,
        cp: 1,
      },
      {
        level: 2,
        hp: 20,
        armor: 30,
        speed: 35,
        view: 40,
        cost: 50,
        time: 60,
        cp: 1,
      },
      // More levels
    ],
    additionalInfo: null,
  },
  // More units
];
