import cerberus from '../../images/hero/cerberus.webp';

import seraphim from '../../images/hero/seraphim1.webp';
import solaris from '../../images/hero/solaris.webp';
// icons
// import armor1 from '../../images/icons/armor1.png';
import armor2 from '../../images/icons/armor2.png';
import armor3 from '../../images/icons/armor3.png';

export const confederationHeroes = [
  // Cerberus
  {
    id: 1,
    name: 'CERBERUS',
    type: 'Elite Exoskeleton Assault ',
    image: cerberus,
    iconArmor: armor2,
    description: 'Description for Hero',
    weapons: [
      { type: 'MULTI_GUN "MATHILDA"' },
      { type: 'VIBRO BAYONET' },
      { type: 'CR3T2 HE ROCKETS' },
    ],
    levels: [
      // 7
      {
        level: 7,
        class: 2,
        hp: 4204,
        armor: 40,
        speed: 60,
        view: 9,
        cost: 300,
        time: 60,
        cp: 4,
        weapons: [
          {
            damageArmor1: 187,
            damageArmor2: 76,
            damageArmor3: 29,
            firingRange: 5.5,
            rateOfFire: 257,
            firingAccuracy: '81.0',
            firingAccuracy2: '41.3',
            explosionRadius: '0.00',
          },
          {
            damageArmor1: 1950,
            damageArmor2: 1500,
            damageArmor3: 1500,
            firingRange: 1.5,
            rateOfFire: 54,
            firingAccuracy: '100',
            firingAccuracy2: '0.00',
            explosionRadius: '0.00',
          },
          {
            damageArmor1: 111,
            damageArmor2: 451,
            damageArmor3: 256,
            firingRange: 5.5,
            rateOfFire: 40,
            firingAccuracy: '77.1',
            firingAccuracy2: '68.0',
            explosionRadius: '0.82',
          },
        ],
      },
      // 12
      {
        level: 12,
        class: 5,
        hp: 5402,
        armor: 66,
        speed: 66,
        view: 10,
        cost: 300,
        time: 54,
        cp: 4,
        weapons: [
          {
            damageArmor1: 252,
            damageArmor2: 101,
            damageArmor3: 38,
            firingRange: 6,
            rateOfFire: 300,
            firingAccuracy: '84.0',
            firingAccuracy2: '45.4',
            explosionRadius: '0.00',
          },
          {
            damageArmor1: 2655,
            damageArmor2: 1500,
            damageArmor3: 1500,
            firingRange: 1.5,
            rateOfFire: 54,
            firingAccuracy: '100',
            firingAccuracy2: '0.00',
            explosionRadius: '0.00',
          },
          {
            damageArmor1: 149,
            damageArmor2: 612,
            damageArmor3: 348,
            firingRange: 6,
            rateOfFire: 46,
            firingAccuracy: '81.6',
            firingAccuracy2: '73.0',
            explosionRadius: '0.94',
          },
        ],
      },
    ],
  },
  // SERAPHIM
  {
    id: 2,
    name: 'SERAPHIM',
    type: 'Transformer Fighter ',
    image: seraphim,
    iconArmor: armor3,
    description: 'Description for Hero',
    weapons: [
      { type: 'ENERGY AUTOCANNONS "LAZARUS" in avia mode' },
      { type: 'ENERGY AUTOCANNONS "LAZARUS" in ground mode' },
    ],
    levels: [
      // 7
      {
        level: 7,
        class: 1,
        hp: 4182,
        armor: '44 / 50',
        speed: '85 / 40',
        view: '10 / 7',
        cost: 600,
        time: 72,
        cp: 7,
        weapons: [
          {
            damageArmor1: 124,
            damageArmor2: 177,
            damageArmor3: 192,
            firingRange: 7,
            rateOfFire: 141,
            firingAccuracy: '80.0',
            firingAccuracy2: '68.0',
            explosionRadius: '0.70',
          },
          {
            damageArmor1: 124,
            damageArmor2: 177,
            damageArmor3: 192,
            firingRange: 6,
            rateOfFire: 141,
            firingAccuracy: '82.9',
            firingAccuracy2: '72.6',
            explosionRadius: '0.70',
          },
        ],
      },
      // 12
      {
        level: 12,
        class: 4,
        hp: 5383,
        armor: '72 / 82',
        speed: '100 / 42',
        view: '11 / 8',
        cost: 600,
        time: 65,
        cp: 7,
        weapons: [
          {
            damageArmor1: 151,
            damageArmor2: 222,
            damageArmor3: 242,
            firingRange: 7.5,
            rateOfFire: 154,
            firingAccuracy: '81.1',
            firingAccuracy2: '69.1',
            explosionRadius: '0.70',
          },
          {
            damageArmor1: 151,
            damageArmor2: 222,
            damageArmor3: 242,
            firingRange: 6.5,
            rateOfFire: 154,
            firingAccuracy: '83.7',
            firingAccuracy2: '73.3',
            explosionRadius: '0.70',
          },
        ],
      },
    ],
  },
  // SOLARIS
  {
    id: 3,
    name: 'SOLARIS',
    type: 'Antigravity Heavy Tank ',
    image: solaris,
    iconArmor: armor3,
    description: 'Description for Hero',
    weapons: [{ type: 'SPE-2.0 WEAPON SYSTEM' }],
    levels: [
      // 7
      {
        level: 7,
        class: 1,
        hp: 10375,
        armor: 75,
        speed: 54,
        view: 7,
        cost: 900,
        time: 92,
        cp: 12,
        weapons: [
          {
            damageArmor1: 736,
            damageArmor2: 1998,
            damageArmor3: 2211,
            firingRange: 8,
            rateOfFire: 17,
            firingAccuracy: '71.2',
            firingAccuracy2: '60.4',
            explosionRadius: '1.00',
          },
        ],
      },
      // 12
      {
        level: 12,
        class: 2,
        hp: 10760,
        armor: 80,
        speed: 54,
        view: 7,
        cost: 900,
        time: 82,
        cp: 12,
        weapons: [
          {
            damageArmor1: 772,
            damageArmor2: 2098,
            damageArmor3: 2324,
            firingRange: 8.5,
            rateOfFire: 17,
            firingAccuracy: '69.4',
            firingAccuracy2: '59.8',
            explosionRadius: '1.00',
          },
        ],
      },
    ],
  },
];
