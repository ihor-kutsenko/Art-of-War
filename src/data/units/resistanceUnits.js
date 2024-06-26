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
            damageArmor1: 76,
            damageArmor2: 40,
            damageArmor3: 32,
            firingRange: 6,
            rateOfFire: 180,
            firingAccuracy: '87.0',
            firingAccuracy2: '60.9',
            explosionRadius: '0.00',
          },
          {
            damageArmor1: 167,
            damageArmor2: 94,
            damageArmor3: 63,
            firingRange: 6,
            rateOfFire: 9,
            firingAccuracy: '83.0',
            firingAccuracy2: '77.8',
            explosionRadius: '1.15',
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
            damageArmor1: 185,
            damageArmor2: 454,
            damageArmor3: 420,
            firingRange: 6,
            rateOfFire: 42,
            firingAccuracy: '81.3',
            firingAccuracy2: '0.00',
            explosionRadius: '0.90',
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
            damageArmor1: 826,
            damageArmor2: 286,
            damageArmor3: 189,
            firingRange: 11,
            rateOfFire: 30,
            firingAccuracy: '99.0',
            firingAccuracy2: '0.00',
            explosionRadius: '0.00',
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
            damageArmor1: 97,
            damageArmor2: 43,
            damageArmor3: 34,
            firingRange: 6.5,
            rateOfFire: 230,
            firingAccuracy: '80.0',
            firingAccuracy2: '68.0',
            explosionRadius: '0.00',
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
            costPerMine: 0,
            timeToLayMine: 0,
            explosionRadius: 0,
          },
          {
            damageArmor1: 0,
            damageArmor2: 0,
            damageArmor3: 0,
            costPerMine: 0,
            timeToLayMine: 0,
            explosionRadius: 0,
          },
          {
            damageArmor1: 0,
            damageArmor2: 0,
            damageArmor3: 0,
            costPerMine: 0,
            timeToLayMine: 0,
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
            damageArmor1: 101,
            damageArmor2: 199,
            damageArmor3: 156,
            firingRange: 7,
            rateOfFire: 114,
            firingAccuracy: '82.5',
            firingAccuracy2: '75.9',
            explosionRadius: '0.72',
          },
          {
            damageArmor1: 1124,
            damageArmor2: 2240,
            damageArmor3: 1856,
            costPerMine: 10,
            timeToLayMine: '3.0',
            explosionRadius: 0.85,
          },
          {
            damageArmor1: 2918,
            damageArmor2: 674,
            damageArmor3: 337,
            costPerMine: 15,
            timeToLayMine: '4.0',
            explosionRadius: '1.70',
          },
          {
            damageArmor1: 1848,
            damageArmor2: 7392,
            damageArmor3: 6720,
            costPerMine: 30,
            timeToLayMine: '5.0',
            explosionRadius: '1.40',
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
            damageArmor1: 318,
            damageArmor2: 786,
            damageArmor3: 824,
            firingRange: 7,
            rateOfFire: 30,
            firingAccuracy: '83.0',
            firingAccuracy2: '77.0',
            explosionRadius: '1.30',
          },
          {
            damageArmor1: 318,
            damageArmor2: 786,
            damageArmor3: 824,
            firingRange: 9,
            rateOfFire: 50,
            firingAccuracy: '84.4',
            firingAccuracy2: '0.00',
            explosionRadius: '1.30',
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
            damageArmor1: 101,
            damageArmor2: 240,
            damageArmor3: 141,
            firingRange: 10,
            rateOfFire: 150,
            firingAccuracy: '93.0',
            firingAccuracy2: '93.0',
            explosionRadius: '1.00',
          },
          {
            damageArmor1: 121,
            damageArmor2: 71,
            damageArmor3: 48,
            firingRange: 8,
            rateOfFire: 266,
            firingAccuracy: '60.0',
            firingAccuracy2: '48.0',
            explosionRadius: '0.00',
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
            damageArmor1: 570,
            damageArmor2: 1378,
            damageArmor3: 1382,
            firingRange: 16,
            rateOfFire: 16,
            firingAccuracy: '84.0',
            firingAccuracy2: '0.00',
            explosionRadius: '2.00',
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
        weapons: null,
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
        weapons: null,
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
            damageArmor1: 134,
            damageArmor2: 224,
            damageArmor3: 224,
            firingRange: 8,
            rateOfFire: 46,
            firingAccuracy: '87.0',
            firingAccuracy2: '87.0',
            explosionRadius: '0.80',
          },
          {
            damageArmor1: 90,
            damageArmor2: 55,
            damageArmor3: 38,
            firingRange: 7,
            rateOfFire: 225,
            firingAccuracy: '87.0',
            firingAccuracy2: '66.1',
            explosionRadius: '0.00',
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
            damageArmor1: 518,
            damageArmor2: 744,
            damageArmor3: 807,
            firingRange: 12,
            rateOfFire: 88,
            firingAccuracy: '95.0',
            firingAccuracy2: '95.0',
            explosionRadius: '1.50',
          },
          {
            damageArmor1: 224,
            damageArmor2: 160,
            damageArmor3: 129,
            firingRange: 11,
            rateOfFire: 342,
            firingAccuracy: '68.0',
            firingAccuracy2: '68.0',
            explosionRadius: '0.00',
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
            damageArmor1: 1889,
            damageArmor2: 5348,
            damageArmor3: 5348,
            firingRange: 3,
            rateOfFire: 15,
            firingAccuracy: '96.9',
            firingAccuracy2: '96.9',
            explosionRadius: '2.20',
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
            costPerMine: 0,
            timeToLayMine: 0,
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
            damageArmor1: 84,
            damageArmor2: 67,
            damageArmor3: 50,
            firingRange: 8,
            rateOfFire: 218,
            firingAccuracy: '88.0',
            firingAccuracy2: '72.2',
            explosionRadius: '0.00',
          },
          {
            damageArmor1: 1120,
            damageArmor2: 7824,
            damageArmor3: 11200,
            costPerMine: 30,
            timeToLayMine: '5.5',
            explosionRadius: '1.40',
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
            damageArmor1: 699,
            damageArmor2: 1362,
            damageArmor3: 1766,
            firingRange: 7.5,
            rateOfFire: 42,
            firingAccuracy: '89.3',
            firingAccuracy2: '86.3',
            explosionRadius: '1.70',
          },
          {
            damageArmor1: 247,
            damageArmor2: 621,
            damageArmor3: 411,
            firingRange: 9.5,
            rateOfFire: 55,
            firingAccuracy: '95.0',
            firingAccuracy2: '95.0',
            explosionRadius: '0.80',
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
            damageArmor1: 936,
            damageArmor2: 1217,
            damageArmor3: 1529,
            firingRange: 8,
            rateOfFire: 37,
            firingAccuracy: '98.0',
            firingAccuracy2: '98.0',
            explosionRadius: '1.60',
          },
          {
            damageArmor1: 576,
            damageArmor2: 902,
            damageArmor3: 1154,
            firingRange: 15.5,
            rateOfFire: 30,
            firingAccuracy: '67.2',
            firingAccuracy2: '0.00',
            explosionRadius: '1.70',
          },
        ],
      },
    ],
  },
];
