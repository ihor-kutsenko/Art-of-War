import assault from '../../images/units/confederation/assault.png';

import armor1 from '../../images/icons/armor1.png';
// import armor2 from '../../images/icons/armor2.png';
// import armor3 from '../../images/icons/armor3.png';

export const confederationBuildings = [
  // headquarters
  {
    id: 1,
    name: 'Headquarters',
    image: assault,
    iconArmor: armor1,
    description: 'Description for Building',
    weapons: null,
    levels: [
      // 1
      {
        level: 1,
        hp: 0,
        armor: 0,
        energy: 0,
        size: 0,
        cost: 0,
        time: 0,
        weapons: null,
        produces: [
          { type: 'Gold', amount: 10, icon: assault },
          { type: 'Wood', amount: 20, icon: assault },
          { type: 'Food', amount: 30, icon: assault },
        ],
      },
      // 2
      {
        level: 2,
        hp: 0,
        armor: 0,
        energy: 0,
        size: 0,
        cost: 0,
        time: 0,
        weapons: null,
        produces: [
          { type: 'Gold', amount: 10, icon: assault },
          { type: 'Wood', amount: 20, icon: assault },
          { type: 'Food', amount: 30, icon: assault },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Rocket',
    image: assault,
    iconArmor: armor1,
    description: 'Description for Building',
    weapons: [{ type: 'Air Bomb' }],
    levels: [
      // 1
      {
        level: 1,
        hp: 0,
        armor: 0,
        energy: 0,
        size: 0,
        cost: 0,
        time: 0,
        produces: null,
        weapons: [
          {
            damageArmor1: 0,
            damageArmor2: 0,
            damageArmor3: 0,
            firingRange: 0,
            rateOfFire: 0,
            firingAccuracy: 0,
            firingAccuracy2: 0,
            explosionRadius: 0,
          },
        ],
      },
      // 2
      {
        level: 2,
        hp: 0,
        armor: 0,
        energy: 0,
        size: 0,
        cost: 0,
        time: 0,
        produces: null,
        weapons: [
          {
            damageArmor1: 0,
            damageArmor2: 0,
            damageArmor3: 0,
            firingRange: 0,
            rateOfFire: 0,
            firingAccuracy: 0,
            firingAccuracy2: 0,
            explosionRadius: 0,
          },
        ],
      },
    ],
  },
];
