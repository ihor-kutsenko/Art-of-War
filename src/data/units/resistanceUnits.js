import rifleman from '../../images/units/resistance/rifleman.png';
import grenadier from '../../images/units/resistance/grenadier.png';
import sniper from '../../images/units/resistance/sniper.png';
import coyote from '../../images/units/resistance/coyote.png';
import armadillo from '../../images/units/resistance/armadillo.png';
import jaguar from '../../images/units/resistance/jaguar.png';
import porcupine from '../../images/units/resistance/porcupine.png';
import mammoth from '../../images/units/resistance/mammoth.png';
import chameleon from '../../images/units/resistance/chameleon.png';
import dragonfly from '../../images/units/resistance/dragonfly.png';
import hawk from '../../images/units/resistance/hawk.png';
import albatross from '../../images/units/resistance/albatross.png';
import caiman from '../../images/units/resistance/caiman.png';
import alligator from '../../images/units/resistance/alligator.png';
import barracuda from '../../images/units/resistance/barracuda.png';

// icons
import armor1 from '../../images/icons/armor1.png';
import armor2 from '../../images/icons/armor2.png';
import armor3 from '../../images/icons/armor3.png';

export const resistanceUnits = [
  // Rifleman
  {
    id: 1,
    name: 'Rifleman',
    type: 'Light Infantry ',
    image: rifleman,
    iconArmor: armor1,
    description: 'Description for Unit',
    weapons: [
      { type: 'Individual Combat Rifle' },
      { type: 'Electro-Smoke Grenade' },
    ],
    levels: [
      // 7
      {
        level: 7,
        hp: 0,
        armor: 0,
        speed: 0,
        view: 0,
        cost: 0,
        time: 0,
        cp: 0,
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
      // 29
      {
        level: 29,
        hp: 1966,
        armor: 26,
        speed: 75,
        view: 7,
        cost: 34,
        time: 12,
        cp: 1,
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
  // Grenadier
  {
    id: 2,
    name: 'Grenadier',
    type: 'Anti-Tank Infantry',
    image: grenadier,
    iconArmor: armor1,
    description: 'Description for Unit ',
    weapons: [{ type: 'Individual Grenadier Launcher' }],
    levels: [
      // 7
      {
        level: 7,
        hp: 0,
        armor: 0,
        speed: 0,
        view: 0,
        cost: 0,
        time: 0,
        cp: 0,
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
      // 29
      {
        level: 29,
        hp: 2318,
        armor: 31,
        speed: 54,
        view: 7,
        cost: 40,
        time: 14,
        cp: 1,
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
  // Sniper
  {
    id: 3,
    name: 'Sniper',
    type: 'Special Infantry',
    image: sniper,
    iconArmor: armor1,
    description: 'Description for Unit',
    weapons: [{ type: 'Sniper Rifle' }],
    levels: [
      // 7
      {
        level: 7,
        hp: 0,
        armor: 0,
        speed: 0,
        view: 0,
        cost: 0,
        time: 0,
        cp: 0,
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
      // 29
      {
        level: 29,
        hp: 1620,
        armor: 26,
        speed: 60,
        view: '8/10',
        cost: 64,
        time: 19,
        cp: 2,
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
  // Coyote
  {
    id: 4,
    name: 'Coyote',
    type: 'Ultra Light Recon Vehicle',
    image: coyote,
    iconArmor: armor2,
    description: 'Description for Unit',
    weapons: [{ type: '14.5MM Light Machine Gun' }],
    levels: [
      // 7
      {
        level: 7,
        hp: 0,
        armor: 0,
        speed: 0,
        view: 0,
        cost: 0,
        time: 0,
        cp: 0,
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
      // 29
      {
        level: 29,
        hp: 2771,
        armor: 60,
        speed: 85,
        view: 8,
        cost: 70,
        time: 20,
        cp: 2,
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
  // Armadillo
  {
    id: 5,
    name: 'Armadillo',
    type: 'Multi-Purpose Combat Vehicle',
    image: armadillo,
    iconArmor: armor2,
    description: 'Description for Unit',
    weapons: [
      { type: '57MM Anti-Armor AutoCannon' },
      { type: 'Scorpion Mine' },
      { type: 'Frog Mine' },
      { type: 'Lizard Mine' },
    ],
    levels: [
      // 7
      {
        level: 7,
        hp: 0,
        armor: 0,
        speed: 0,
        view: 0,
        cost: 0,
        time: 0,
        cp: 0,
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
      // 29
      {
        level: 29,
        hp: 4340,
        armor: 70,
        speed: 60,
        view: 8,
        cost: 120,
        time: 26,
        cp: 3,
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
  // Jaguar
  {
    id: 6,
    name: 'Jaguar',
    type: 'Heavy Siege Tank',
    image: jaguar,
    iconArmor: armor3,
    description: 'Description for Unit',
    weapons: [
      { type: '110MM Double-Barreled Gun' },
      { type: '110MM Double-Barreled Gun' },
    ],
    levels: [
      // 7
      {
        level: 7,
        hp: 0,
        armor: 0,
        speed: 0,
        view: 0,
        cost: 0,
        time: 0,
        cp: 0,
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
      // 29
      {
        level: 29,
        hp: 5237,
        armor: '109/92',
        speed: 66,
        view: '8/10',
        cost: 220,
        time: 35,
        cp: 4,
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
  // Porcupine
  {
    id: 7,
    name: 'Porcupine',
    type: 'Anti-Aircraft Platform',
    image: porcupine,
    iconArmor: armor2,
    description: 'Description for Unit',
    weapons: [
      { type: 'Panoramic Sam Launcher' },
      { type: '23MM Three-Barreled Rotary Gun' },
    ],
    levels: [
      // 7
      {
        level: 7,
        hp: 0,
        armor: 0,
        speed: 0,
        view: 0,
        cost: 0,
        time: 0,
        cp: 0,
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
      // 29
      {
        level: 29,
        hp: 4410,
        armor: 79,
        speed: 54,
        view: 11,
        cost: 180,
        time: 32,
        cp: 3,
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
  // Mammoth
  {
    id: 8,
    name: 'Mammoth',
    type: 'Self-Propelled Artillery',
    image: mammoth,
    iconArmor: armor3,
    description: 'Description for Unit',
    weapons: [{ type: '130MM Long-Range Howitzer' }],
    levels: [
      // 7
      {
        level: 7,
        hp: 0,
        armor: 0,
        speed: 0,
        view: 0,
        cost: 0,
        time: 0,
        cp: 0,
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
      // 29
      {
        level: 29,
        hp: 4277,
        armor: '85/71',
        speed: 46,
        view: '10/12',
        cost: 240,
        time: 39,
        cp: 4,
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
  // Chameleon
  {
    id: 9,
    name: 'Chameleon',
    type: 'Active Camouflage System',
    image: chameleon,
    iconArmor: armor2,
    description: 'Description for Unit',
    weapons: null,
    levels: [
      // 7
      {
        level: 7,
        hp: 0,
        armor: 0,
        speed: 0,
        view: 0,
        cost: 0,
        time: 0,
        cp: 0,
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
      // 29
      {
        level: 29,
        hp: 4782,
        armor: '89/76',
        speed: 54,
        view: 8,
        cost: 350,
        time: 53,
        cp: 5,
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
  // Dragonfly
  {
    id: 10,
    name: 'Dragonfly',
    type: 'Light Attack Helicopter',
    image: dragonfly,
    iconArmor: armor2,
    description: 'Description for Unit',
    weapons: [
      { type: 'Guided Missile Launcher' },
      { type: '14.5MM Helicopter Machine Gun' },
    ],
    levels: [
      // 7
      {
        level: 7,
        hp: 0,
        armor: 0,
        speed: 0,
        view: 0,
        cost: 0,
        time: 0,
        cp: 0,
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
      // 29
      {
        level: 29,
        hp: 3970,
        armor: 72,
        speed: 100,
        view: 12,
        cost: 150,
        time: 26,
        cp: 3,
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
  // Hawk
  {
    id: 11,
    name: 'Hawk',
    type: 'G5 Heavy Jet Fighter',
    image: hawk,
    iconArmor: armor2,
    description: 'Description for Unit',
    weapons: [
      { type: 'Er Self-Guided Wing Missiles' },
      { type: '23MM Fuselage Coaxial Cannon' },
    ],
    levels: [
      // 7
      {
        level: 7,
        hp: 0,
        armor: 0,
        speed: 0,
        view: 0,
        cost: 0,
        time: 0,
        cp: 0,
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
      // 29
      {
        level: 29,
        hp: 6178,
        armor: 71,
        speed: 372,
        view: 14,
        cost: 300,
        time: 38,
        cp: 5,
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
  // Albatross
  {
    id: 12,
    name: 'Albatross',
    type: 'Tactical Bomber',
    image: albatross,
    iconArmor: armor3,
    description: 'Description for Unit',
    weapons: [{ type: 'Air Bomb' }],
    levels: [
      // 7
      {
        level: 7,
        hp: 0,
        armor: 0,
        speed: 0,
        view: 0,
        cost: 0,
        time: 0,
        cp: 0,
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
      // 29
      {
        level: 29,
        hp: 8653,
        armor: 82,
        speed: 300,
        view: 13,
        cost: 450,
        time: 48,
        cp: 7,
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
  // Caiman
  {
    id: 13,
    name: 'Caiman',
    type: 'Light Recon Boat',
    image: caiman,
    iconArmor: armor2,
    description: 'Description for Unit',
    weapons: [{ type: '14.5MM Machine Gun' }, { type: 'Triton Mine' }],
    levels: [
      // 7
      {
        level: 7,
        hp: 0,
        armor: 0,
        speed: 0,
        view: 0,
        cost: 0,
        time: 0,
        cp: 0,
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
      // 29
      {
        level: 29,
        hp: 3218,
        armor: 59,
        speed: 100,
        view: 10,
        cost: 80,
        time: 16,
        cp: 2,
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
  // Alligator
  {
    id: 14,
    name: 'Alligator',
    type: 'Heavy Corvette',
    image: alligator,
    iconArmor: armor3,
    description: 'Description for Unit',
    weapons: [
      { type: '130MM Double-Barreled Naval Gun' },
      { type: 'Sam Launcher' },
    ],
    levels: [
      // 7
      {
        level: 7,
        hp: 0,
        armor: 0,
        speed: 0,
        view: 0,
        cost: 0,
        time: 0,
        cp: 0,
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
      // 29
      {
        level: 29,
        hp: 14256,
        armor: 116,
        speed: 54,
        view: 11,
        cost: 320,
        time: 35,
        cp: 5,
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
  // Barracuda
  {
    id: 15,
    name: 'Barracuda',
    type: 'Missile-Torpedo Submarine',
    image: barracuda,
    iconArmor: armor3,
    description: 'Description for Unit',
    weapons: [
      { type: 'Torpedo Launcher' },
      { type: 'Vertical Launch Missile System' },
    ],
    levels: [
      // 7
      {
        level: 7,
        hp: 0,
        armor: 0,
        speed: 0,
        view: 0,
        cost: 0,
        time: 0,
        cp: 0,
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
      // 29
      {
        level: 29,
        hp: 11081,
        armor: '84/80',
        speed: 40,
        view: '10/13',
        cost: 340,
        time: 42,
        cp: 5,
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
