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
        hp: 1,
        armor: 1,
        speed: 1,
        view: 1,
        cost: 1,
        time: 1,
        cp: 1,
        weapons: [
          {
            damageArmor1: 1,
            damageArmor2: 1,
            damageArmor3: 1,
            firingRange: 1,
            rateOfFire: 1,
            firingAccuracy: '1.0',
            firingAccuracy2: '1.3',
            explosionRadius: '0.00',
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
        class: 2,
        hp: 1,
        armor: 1,
        speed: 1,
        view: 1,
        cost: 1,
        time: 1,
        cp: 1,
        weapons: [
          {
            damageArmor1: 1,
            damageArmor2: 1,
            damageArmor3: 1,
            firingRange: 1,
            rateOfFire: 1,
            firingAccuracy: '1.0',
            firingAccuracy2: '1.3',
            explosionRadius: '0.00',
          },
          {
            damageArmor1: 1,
            damageArmor2: 1,
            damageArmor3: 1,
            firingRange: 1,
            rateOfFire: 1,
            firingAccuracy: '1.0',
            firingAccuracy2: '1.3',
            explosionRadius: '0.00',
          },
          {
            damageArmor1: 1,
            damageArmor2: 1,
            damageArmor3: 1,
            firingRange: 1,
            rateOfFire: 1,
            firingAccuracy: '1.0',
            firingAccuracy2: '1.3',
            explosionRadius: '0.00',
          },
        ],
      },
    ],
  },
];
