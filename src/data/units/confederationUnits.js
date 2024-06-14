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
  // Heavy Assault
  {
    id: 2,
    name: 'Heavy Assault',
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
  // Fire Assault
  {
    id: 3,
    name: 'Fire Assault',
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
  // Fortress
  {
    id: 4,
    name: 'Fortress',
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
  // Hammer
  {
    id: 5,
    name: 'Hammer',
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
  // Zeus
  {
    id: 6,
    name: 'Zeus',
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
  // Typhoon
  {
    id: 7,
    name: 'Typhoon',
    image: typhoon,
    iconArmor: armor2,
    description: 'Description for Unit',
    weapons: [{ type: 'Sum Launcher' }, { type: 'Sum Launcher' }],
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
  // Torrent
  {
    id: 8,
    name: 'Torrent',
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
  // Energy Shield
  {
    id: 9,
    name: 'Energy Shield',
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
  // Cyclone
  {
    id: 10,
    name: 'Cyclone',
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
  // Vertex
  {
    id: 11,
    name: 'Vertex',
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
  // Thor
  {
    id: 12,
    name: 'Thor',
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
  // Delta
  {
    id: 13,
    name: 'Delta',
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
  // Viking
  {
    id: 14,
    name: 'Viking',
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
  // Poseidon
  {
    id: 15,
    name: 'Poseidon',
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
