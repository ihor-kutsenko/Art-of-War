import assault from '../../images/units/confederation/assault.png';
import heavyAssault from '../../images/units/confederation/heavy-assault.png';
import fireAssault from '../../images/units/confederation/fire-assault.png';
import fortress from '../../images/units/confederation/fortress.png';
import hammer from '../../images/units/confederation/hammer.png';
import zeus from '../../images/units/confederation/zeus.png';
import typhoon from '../../images/units/confederation/typhoon.png';
import torrent from '../../images/units/confederation/torrent.png';
import energyShield from '../../images/units/confederation/energy-shield.png';
import cyclone from '../../images/units/confederation/cyclone.png';
import vertex from '../../images/units/confederation/vertex.png';
import thor from '../../images/units/confederation/thor.png';
import delta from '../../images/units/confederation/delta.png';
import viking from '../../images/units/confederation/viking.png';
import poseidon from '../../images/units/confederation/poseidon.png';

// icons
import armor1 from '../../images/icons/armor1.png';
import armor2 from '../../images/icons/armor2.png';
import armor3 from '../../images/icons/armor3.png';

export const confederationUnits = [
  // Assault
  {
    id: 1,
    name: 'Assault',
    type: 'Light Assault Infantry ',
    image: assault,
    iconArmor: armor1,
    description: 'Description for Unit',
    weapons: [
      { type: 'M55 Personal Assault Rifle' },
      { type: 'Anti-Personnel Grenade' },
    ],
    levels: [
      // 7
      {
        level: 7,
        hp: 0,
        armor: 0,
        speed: 0,
        view: 0,
        cost: 40,
        time: 0,
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
      // 29
      {
        level: 29,
        hp: 2059,
        armor: 26,
        speed: 66,
        view: 7,
        cost: 40,
        time: 13,
        cp: 1,
        weapons: [
          {
            damageArmor1: 70,
            damageArmor2: 33,
            damageArmor3: 27,
            firingRange: 6,
            rateOfFire: 200,
            firingAccuracy: '90.0',
            firingAccuracy2: '63.0',
            explosionRadius: '0.00',
          },
          {
            damageArmor1: 279,
            damageArmor2: 122,
            damageArmor3: 78,
            firingRange: 6,
            rateOfFire: 15,
            firingAccuracy: '90.5',
            firingAccuracy2: '83.4',
            explosionRadius: '1.10',
          },
        ],
      },
    ],
  },
  // Heavy Assault
  {
    id: 2,
    name: 'Heavy Assault',
    type: 'Heavy Assault Infantry ',
    image: heavyAssault,
    iconArmor: armor1,
    description: 'Description for Unit ',
    weapons: [{ type: 'RL-100 Rocket Launcher' }],
    levels: [
      // 7
      {
        level: 7,
        hp: 0,
        armor: 0,
        speed: 0,
        view: 0,
        cost: 45,
        time: 0,
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
      // 29
      {
        level: 29,
        hp: 2457,
        armor: 34,
        speed: 50,
        view: 7,
        cost: 45,
        time: 15,
        cp: 1,
        weapons: [
          {
            damageArmor1: 168,
            damageArmor2: 571,
            damageArmor3: 457,
            firingRange: 6,
            rateOfFire: 37,
            firingAccuracy: '85.0',
            firingAccuracy2: '0.00',
            explosionRadius: '0.90',
          },
        ],
      },
    ],
  },
  // Fire Assault
  {
    id: 3,
    name: 'Fire Assault',
    type: 'Special Assault Infantry',
    image: fireAssault,
    iconArmor: armor1,
    description: 'Description for Unit',
    weapons: [{ type: 'Portable jet Flamethrower' }],
    levels: [
      // 7
      {
        level: 7,
        hp: 0,
        armor: 0,
        speed: 0,
        view: 0,
        cost: 55,
        time: 0,
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
      // 29
      {
        level: 29,
        hp: 3036,
        armor: 44,
        speed: 60,
        view: 7,
        cost: 55,
        time: 17,
        cp: 1,
        weapons: [
          {
            damageArmor1: 1428,
            damageArmor2: 324,
            damageArmor3: 160,
            firingRange: 4,
            rateOfFire: 25,
            firingAccuracy: '83.0',
            firingAccuracy2: '70.6',
            explosionRadius: '0.80',
          },
        ],
      },
    ],
  },
  // Fortress
  {
    id: 4,
    name: 'Fortress',
    type: 'Infantry Support Vehicle',
    image: fortress,
    iconArmor: armor3,
    description: 'Description for Unit',
    weapons: [
      { type: '12.7MM HMG Turret' },
      { type: 'Machine jet Flamethrower' },
    ],
    levels: [
      // 7
      {
        level: 7,
        hp: 0,
        armor: 0,
        speed: 0,
        view: 0,
        cost: 140,
        time: 0,
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
      // 29
      {
        level: 29,
        hp: 4365,
        armor: 83,
        speed: 46,
        view: 8,
        cost: 140,
        time: 24,
        cp: 3,
        weapons: [
          {
            damageArmor1: 84,
            damageArmor2: 38,
            damageArmor3: 36,
            firingRange: 6.5,
            rateOfFire: 257,
            firingAccuracy: '63.0',
            firingAccuracy2: '52.3',
            explosionRadius: '0.00',
          },
          {
            damageArmor1: 1776,
            damageArmor2: 404,
            damageArmor3: 200,
            firingRange: 4.5,
            rateOfFire: 20,
            firingAccuracy: '87.0',
            firingAccuracy2: '69.6',
            explosionRadius: '0.90',
          },
        ],
      },
    ],
  },
  // Hammer
  {
    id: 5,
    name: 'Hammer',
    type: 'Light Assault Tank',
    image: hammer,
    iconArmor: armor2,
    description: 'Description for Unit',
    weapons: [{ type: '90MM Anti-Armor Gun' }],
    levels: [
      // 7
      {
        level: 7,
        hp: 0,
        armor: 0,
        speed: 0,
        view: 0,
        cost: 120,
        time: 0,
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
      // 29
      {
        level: 29,
        hp: 4082,
        armor: 71,
        speed: 66,
        view: 8,
        cost: 120,
        time: 27,
        cp: 2,
        weapons: [
          {
            damageArmor1: 219,
            damageArmor2: 731,
            damageArmor3: 676,
            firingRange: 7,
            rateOfFire: 31,
            firingAccuracy: '90.1',
            firingAccuracy2: '88.4',
            explosionRadius: '0.95',
          },
        ],
      },
    ],
  },
  // Zeus
  {
    id: 6,
    name: 'Zeus',
    type: 'Heavy Assault Tank',
    image: zeus,
    iconArmor: armor3,
    description: 'Description for Unit',
    weapons: [
      { type: '125MM Thermoelectric Gun' },
      { type: 'Automatic Missile Launcher' },
    ],
    levels: [
      // 7
      {
        level: 7,
        hp: 0,
        armor: 0,
        speed: 0,
        view: 0,
        cost: 240,
        time: 0,
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
      // 29
      {
        level: 29,
        hp: 7286,
        armor: 117,
        speed: 42,
        view: 9,
        cost: 240,
        time: 35,
        cp: 4,
        weapons: [
          {
            damageArmor1: 449,
            damageArmor2: 1273,
            damageArmor3: 1479,
            firingRange: 8,
            rateOfFire: 22,
            firingAccuracy: '86.7',
            firingAccuracy2: '83.5',
            explosionRadius: '1.70',
          },
          {
            damageArmor1: 140,
            damageArmor2: 281,
            damageArmor3: 222,
            firingRange: 8,
            rateOfFire: 24,
            firingAccuracy: '95.0',
            firingAccuracy2: '95.0',
            explosionRadius: '0.80',
          },
        ],
      },
    ],
  },
  // Typhoon
  {
    id: 7,
    name: 'Typhoon',
    type: 'Anti-Aircraft Vehicle',
    image: typhoon,
    iconArmor: armor2,
    description: 'Description for Unit',
    weapons: [{ type: 'Sam Launcher' }, { type: 'Sam Launcher' }],
    levels: [
      // 7
      {
        level: 7,
        hp: 0,
        armor: 0,
        speed: 0,
        view: 0,
        cost: 150,
        time: 0,
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
      // 29
      {
        level: 29,
        hp: 4995,
        armor: '79 / 73',
        speed: 46,
        view: '9 / 11',
        cost: 150,
        time: 28,
        cp: 2,
        weapons: [
          {
            damageArmor1: 186,
            damageArmor2: 482,
            damageArmor3: 298,
            firingRange: 9,
            rateOfFire: 37,
            firingAccuracy: '94.0',
            firingAccuracy2: '94.0',
            explosionRadius: '1.00',
          },
          {
            damageArmor1: 186,
            damageArmor2: 482,
            damageArmor3: 298,
            firingRange: 11,
            rateOfFire: 75,
            firingAccuracy: '99.0',
            firingAccuracy2: '99.0',
            explosionRadius: '1.00',
          },
        ],
      },
    ],
  },
  // Torrent
  {
    id: 8,
    name: 'Torrent',
    type: 'Multiple Launch Rocket System',
    image: torrent,
    iconArmor: armor3,
    description: 'Description for Unit',
    weapons: [{ type: 'Multiple Launch Rocket System' }],
    levels: [
      // 7
      {
        level: 7,
        hp: 0,
        armor: 0,
        speed: 0,
        view: 0,
        cost: 250,
        time: 0,
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
      // 29
      {
        level: 29,
        hp: 4752,
        armor: '97 / 71',
        speed: 40,
        view: '9 / 12',
        cost: 250,
        time: 32,
        cp: 4,
        weapons: [
          {
            damageArmor1: 562,
            damageArmor2: 1038,
            damageArmor3: 1044,
            firingRange: 13,
            rateOfFire: 34,
            firingAccuracy: '57.6',
            firingAccuracy2: '0.00',
            explosionRadius: '2.30',
          },
        ],
      },
    ],
  },
  // Energy Shield
  {
    id: 9,
    name: 'Energy Shield',
    type: 'Support Combat Vehicle',
    image: energyShield,
    iconArmor: armor3,
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
        cost: 350,
        time: 0,
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
      // 29
      {
        level: 29,
        hp: 6376,
        armor: '111 / 103',
        speed: 54,
        view: 8,
        cost: 350,
        time: 53,
        cp: 5,
        weapons: null,
      },
    ],
  },
  // Cyclone
  {
    id: 10,
    name: 'Cyclone',
    type: 'Reconnaissance Helicopter',
    image: cyclone,
    iconArmor: armor2,
    description: 'Description for Unit',
    weapons: [{ type: '14.5MM Avionic Machine Gun' }],
    levels: [
      // 7
      {
        level: 7,
        hp: 0,
        armor: 0,
        speed: 0,
        view: 0,
        cost: 140,
        time: 0,
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
        ],
      },
      // 29
      {
        level: 29,
        hp: 4355,
        armor: 60,
        speed: 120,
        view: 12,
        cost: 140,
        time: 25,
        cp: 3,
        weapons: [
          {
            damageArmor1: 115,
            damageArmor2: 78,
            damageArmor3: 47,
            firingRange: 8,
            rateOfFire: 218,
            firingAccuracy: '93.0',
            firingAccuracy2: '80.0',
            explosionRadius: '0.00',
          },
        ],
      },
    ],
  },
  // Vertex
  {
    id: 11,
    name: 'Vertex',
    type: 'G6 Light Jet Fighter',
    image: vertex,
    iconArmor: armor2,
    description: 'Description for Unit',
    weapons: [{ type: 'Guided Missile Launcher' }],
    levels: [
      // 7
      {
        level: 7,
        hp: 0,
        armor: 0,
        speed: 0,
        view: 0,
        cost: 300,
        time: 0,
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
      // 29
      {
        level: 29,
        hp: 5702,
        armor: 71,
        speed: 450,
        view: 14,
        cost: 300,
        time: 35,
        cp: 5,
        weapons: [
          {
            damageArmor1: 476,
            damageArmor2: 724,
            damageArmor3: 826,
            firingRange: 13,
            rateOfFire: 144,
            firingAccuracy: '98.0',
            firingAccuracy2: '98.0',
            explosionRadius: '1.40',
          },
        ],
      },
    ],
  },
  // Thor
  {
    id: 12,
    name: 'Thor',
    type: 'Tactical Bomber',
    image: thor,
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
        cost: 450,
        time: 0,
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
      // 29
      {
        level: 29,
        hp: 7286,
        armor: 80,
        speed: 330,
        view: 13,
        cost: 450,
        time: 42,
        cp: 7,
        weapons: [
          {
            damageArmor1: 2188,
            damageArmor2: 6079,
            damageArmor3: 6079,
            firingRange: 5,
            rateOfFire: 12,
            firingAccuracy: '95.3',
            firingAccuracy2: '95.3',
            explosionRadius: '2.40',
          },
        ],
      },
    ],
  },
  // Delta
  {
    id: 13,
    name: 'Delta',
    type: 'Light Assault Amphibian',
    image: delta,
    iconArmor: armor2,
    description: 'Description for Unit',
    weapons: [{ type: '30MM AutoCannon' }],
    levels: [
      // 7
      {
        level: 7,
        hp: 0,
        armor: 0,
        speed: 0,
        view: 0,
        cost: 140,
        time: 0,
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
      // 29
      {
        level: 29,
        hp: 3960,
        armor: 74,
        speed: 60,
        view: 9,
        cost: 140,
        time: 18,
        cp: 2,
        weapons: [
          {
            damageArmor1: 158,
            damageArmor2: 265,
            damageArmor3: 202,
            firingRange: 7,
            rateOfFire: 85,
            firingAccuracy: '90.9',
            firingAccuracy2: '83.9',
            explosionRadius: '0.80',
          },
        ],
      },
    ],
  },
  // Viking
  {
    id: 14,
    name: 'Viking',
    type: 'Heavy Destroyer',
    image: viking,
    iconArmor: armor3,
    description: 'Description for Unit',
    weapons: [
      { type: '125MM Thermoelectric Gun' },
      { type: 'Torpedo Launcher' },
    ],
    levels: [
      // 7
      {
        level: 7,
        hp: 0,
        armor: 0,
        speed: 0,
        view: 0,
        cost: 320,
        time: 0,
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
      // 29
      {
        level: 29,
        hp: 13306,
        armor: 122,
        speed: 46,
        view: 10,
        cost: 320,
        time: 35,
        cp: 5,
        weapons: [
          {
            damageArmor1: 487,
            damageArmor2: 1104,
            damageArmor3: 1299,
            firingRange: 7.5,
            rateOfFire: 42,
            firingAccuracy: '86.1',
            firingAccuracy2: ' 82.1',
            explosionRadius: '1.70',
          },
          {
            damageArmor1: 974,
            damageArmor2: 1007,
            damageArmor3: 1527,
            firingRange: 7.5,
            rateOfFire: 37,
            firingAccuracy: '92.0',
            firingAccuracy2: '92.0',
            explosionRadius: '1.50',
          },
        ],
      },
    ],
  },
  // Poseidon
  {
    id: 15,
    name: 'Poseidon',
    type: 'Heavy Missile Cruiser',
    image: poseidon,
    iconArmor: armor3,
    description: 'Description for Unit',
    weapons: [{ type: 'Heavy Naval MRLS' }, { type: 'Sam Launcher' }],
    levels: [
      // 7
      {
        level: 7,
        hp: 0,
        armor: 0,
        speed: 0,
        view: 0,
        cost: 330,
        time: 0,
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
      // 29
      {
        level: 29,
        hp: 15939,
        armor: 151,
        speed: 30,
        view: 12,
        cost: 330,
        time: 42,
        cp: 5,
        weapons: [
          {
            damageArmor1: 648,
            damageArmor2: 1263,
            damageArmor3: 1201,
            firingRange: 14,
            rateOfFire: 36,
            firingAccuracy: '71.2',
            firingAccuracy2: '0.00',
            explosionRadius: '1.70',
          },
          {
            damageArmor1: 387,
            damageArmor2: 828,
            damageArmor3: 544,
            firingRange: 11,
            rateOfFire: 75,
            firingAccuracy: '98.0',
            firingAccuracy2: '98.0',
            explosionRadius: '1.00',
          },
        ],
      },
    ],
  },
];
