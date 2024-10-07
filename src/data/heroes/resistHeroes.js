import wasp from '../../images/hero/wasp.webp';
import mole from '../../images/hero/mole.webp';
import leviathan from '../../images/hero/leviathan.webp';
// icons
// import armor1 from '../../images/icons/armor1.png';
import armor2 from '../../images/icons/armor2.png';
import armor3 from '../../images/icons/armor3.png';

export const resistanceHeroes = [
  // Wasp
  {
    id: 1,
    name: 'WASP',
    type: 'Light Support Helicopter',
    image: wasp,
    iconArmor: armor2,
    description: 'Description for Hero',
    weapons: [{ type: '"STING" CAPSULE MISSILES' }],
    levels: [
      // 7
      {
        level: 7,
        class: 2,
        hp: 3003,
        armor: 25,
        speed: 100,
        view: 10,
        cost: 300,
        time: 58,
        cp: 3,
        weapons: [
          {
            damageArmor1: 116,
            damageArmor2: 140,
            damageArmor3: 116,
            firingRange: 5.5,
            rateOfFire: 109,
            firingAccuracy: '77.0',
            firingAccuracy2: '77.0',
            explosionRadius: '1.00',
          },
        ],
      },
    ],
  },
  // Mole
  {
    id: 2,
    name: 'Mole',
    type: 'Engineering Machine',
    image: mole,
    iconArmor: armor3,
    description: 'Description for Hero',
    weapons: [{ type: '"CRUSHER" DRILL' }],
    levels: [
      // 7
      {
        level: 7,
        class: 1,
        hp: 5228,
        armor: '76 / 108',
        speed: 50,
        view: '6 / 8',
        cost: 550,
        time: 68,
        cp: 6,
        weapons: [
          {
            damageArmor1: 126,
            damageArmor2: 232,
            damageArmor3: 368,
            firingRange: 1.5,
            rateOfFire: 240,
            firingAccuracy: '100',
            firingAccuracy2: '0.00',
            explosionRadius: '1.45',
          },
        ],
      },
    ],
  },
  // Leviathan
  {
    id: 3,
    name: 'LEVIATHAN',
    type: 'Heavy Air Crusher',
    image: leviathan,
    iconArmor: armor3,
    description: 'Description for Hero',
    weapons: [
      { type: 'FRONTAL AUTOCANNONS' },
      { type: 'SIDE AUTOCANNONS' },
      { type: 'ANTI-AIR LAUNCHER "SCOURGE"' },
    ],
    levels: [
      // 7
      {
        level: 7,
        class: 1,
        hp: 8300,
        armor: 66,
        speed: 40,
        view: 9,
        cost: 1100,
        time: 106,
        cp: 13,
        weapons: [
          {
            damageArmor1: 212,
            damageArmor2: 275,
            damageArmor3: 254,
            firingRange: 7,
            rateOfFire: 206,
            firingAccuracy: '75.5',
            firingAccuracy2: '72.0',
            explosionRadius: '0.90',
          },
          {
            damageArmor1: 128,
            damageArmor2: 160,
            damageArmor3: 149,
            firingRange: 5,
            rateOfFire: 200,
            firingAccuracy: '82.5',
            firingAccuracy2: '80.0',
            explosionRadius: '0.90',
          },
          {
            damageArmor1: 159,
            damageArmor2: 318,
            damageArmor3: 265,
            firingRange: 7,
            rateOfFire: 82,
            firingAccuracy: '80.0',
            firingAccuracy2: '80.0',
            explosionRadius: '0.90',
          },
        ],
      },
    ],
  },
];
