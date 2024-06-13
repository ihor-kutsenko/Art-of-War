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
            type: 'Weapon 1',
            damageArmor1: 50,
            damageArmor2: 20,
            damageArmor3: 20,
            firingRange: 5,
            rateOfFire: 100,
            firingAccuracy: 90,
            firingAccuracy2: 90,
            explosionRadius: 5,
          },
          {
            type: 'Weapon 2',
            damageArmor1: 70,
            damageArmor2: 70,
            damageArmor3: 900,
            firingRange: 5,
            rateOfFire: 100,
            firingAccuracy: 80,
            firingAccuracy2: 80,
            explosionRadius: 15,
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
            type: 'Weapon 1',
            damageArmor1: 50,
            damageArmor2: 20,
            damageArmor3: 20,
            firingRange: 5,
            rateOfFire: 100,
            firingAccuracy: 90,
            firingAccuracy2: 90,
            explosionRadius: 5,
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
            type: 'Weapon 1',
            damageArmor1: 50,
            damageArmor2: 20,
            damageArmor3: 20,
            firingRange: 5,
            rateOfFire: 100,
            firingAccuracy: 90,
            firingAccuracy2: 90,
            explosionRadius: 5,
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
            type: 'Weapon 1',
            damageArmor1: 50,
            damageArmor2: 20,
            damageArmor3: 20,
            firingRange: 5,
            rateOfFire: 100,
            firingAccuracy: 90,
            firingAccuracy2: 90,
            explosionRadius: 5,
          },
        ],
      },
    ],
  },
  // Fire Assault
  {
    id: 1,
    name: 'Fire Assault',
    image: fireAssault,
    iconArmor: armor1,
    description: 'Description for Unit',
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
            type: 'Weapon 1',
            damageArmor1: 50,
            damageArmor2: 20,
            damageArmor3: 20,
            firingRange: 5,
            rateOfFire: 100,
            firingAccuracy: 90,
            firingAccuracy2: 90,
            explosionRadius: 5,
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
            type: 'Weapon 1',
            damageArmor1: 50,
            damageArmor2: 20,
            damageArmor3: 20,
            firingRange: 5,
            rateOfFire: 100,
            firingAccuracy: 90,
            firingAccuracy2: 90,
            explosionRadius: 5,
          },
        ],
      },
    ],
  },
  // Fortress
  {
    id: 1,
    name: 'Fortress',
    image: fortress,
    iconArmor: armor3,
    description: 'Description for Unit',
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
            type: 'Weapon 1',
            damageArmor1: 50,
            damageArmor2: 20,
            damageArmor3: 20,
            firingRange: 5,
            rateOfFire: 100,
            firingAccuracy: 90,
            firingAccuracy2: 90,
            explosionRadius: 5,
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
            type: 'Weapon 1',
            damageArmor1: 50,
            damageArmor2: 20,
            damageArmor3: 20,
            firingRange: 5,
            rateOfFire: 100,
            firingAccuracy: 90,
            firingAccuracy2: 90,
            explosionRadius: 5,
          },
        ],
      },
    ],
  },
  // Hammer
  {
    id: 1,
    name: 'Hammer',
    image: hammer,
    iconArmor: armor2,
    description: 'Description for Unit',
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
            type: 'Weapon 1',
            damageArmor1: 50,
            damageArmor2: 20,
            damageArmor3: 20,
            firingRange: 5,
            rateOfFire: 100,
            firingAccuracy: 90,
            firingAccuracy2: 90,
            explosionRadius: 5,
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
            type: 'Weapon 1',
            damageArmor1: 50,
            damageArmor2: 20,
            damageArmor3: 20,
            firingRange: 5,
            rateOfFire: 100,
            firingAccuracy: 90,
            firingAccuracy2: 90,
            explosionRadius: 5,
          },
        ],
      },
    ],
  },
  // Zeus
  {
    id: 1,
    name: 'Zeus',
    image: zeus,
    iconArmor: armor3,
    description: 'Description for Unit',
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
            type: 'Weapon 1',
            damageArmor1: 50,
            damageArmor2: 20,
            damageArmor3: 20,
            firingRange: 5,
            rateOfFire: 100,
            firingAccuracy: 90,
            firingAccuracy2: 90,
            explosionRadius: 5,
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
            type: 'Weapon 1',
            damageArmor1: 50,
            damageArmor2: 20,
            damageArmor3: 20,
            firingRange: 5,
            rateOfFire: 100,
            firingAccuracy: 90,
            firingAccuracy2: 90,
            explosionRadius: 5,
          },
        ],
      },
    ],
  },
  // Typhoon
  {
    id: 1,
    name: 'Typhoon',
    image: typhoon,
    iconArmor: armor2,
    description: 'Description for Unit',
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
            type: 'Weapon 1',
            damageArmor1: 50,
            damageArmor2: 20,
            damageArmor3: 20,
            firingRange: 5,
            rateOfFire: 100,
            firingAccuracy: 90,
            firingAccuracy2: 90,
            explosionRadius: 5,
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
            type: 'Weapon 1',
            damageArmor1: 50,
            damageArmor2: 20,
            damageArmor3: 20,
            firingRange: 5,
            rateOfFire: 100,
            firingAccuracy: 90,
            firingAccuracy2: 90,
            explosionRadius: 5,
          },
        ],
      },
    ],
  },
  // Torrent
  {
    id: 1,
    name: 'Torrent',
    image: torrent,
    iconArmor: armor3,
    description: 'Description for Unit',
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
            type: 'Weapon 1',
            damageArmor1: 50,
            damageArmor2: 20,
            damageArmor3: 20,
            firingRange: 5,
            rateOfFire: 100,
            firingAccuracy: 90,
            firingAccuracy2: 90,
            explosionRadius: 5,
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
            type: 'Weapon 1',
            damageArmor1: 50,
            damageArmor2: 20,
            damageArmor3: 20,
            firingRange: 5,
            rateOfFire: 100,
            firingAccuracy: 90,
            firingAccuracy2: 90,
            explosionRadius: 5,
          },
        ],
      },
    ],
  },
  // Energy Shield
  {
    id: 1,
    name: 'Energy Shield',
    image: energyShield,
    iconArmor: armor3,
    description: 'Description for Unit',
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
            type: 'Weapon 1',
            damageArmor1: 50,
            damageArmor2: 20,
            damageArmor3: 20,
            firingRange: 5,
            rateOfFire: 100,
            firingAccuracy: 90,
            firingAccuracy2: 90,
            explosionRadius: 5,
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
            type: 'Weapon 1',
            damageArmor1: 50,
            damageArmor2: 20,
            damageArmor3: 20,
            firingRange: 5,
            rateOfFire: 100,
            firingAccuracy: 90,
            firingAccuracy2: 90,
            explosionRadius: 5,
          },
        ],
      },
    ],
  },
  // Cyclone
  {
    id: 1,
    name: 'Cyclone',
    image: cyclone,
    iconArmor: armor2,
    description: 'Description for Unit',
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
            type: 'Weapon 1',
            damageArmor1: 50,
            damageArmor2: 20,
            damageArmor3: 20,
            firingRange: 5,
            rateOfFire: 100,
            firingAccuracy: 90,
            firingAccuracy2: 90,
            explosionRadius: 5,
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
            type: 'Weapon 1',
            damageArmor1: 50,
            damageArmor2: 20,
            damageArmor3: 20,
            firingRange: 5,
            rateOfFire: 100,
            firingAccuracy: 90,
            firingAccuracy2: 90,
            explosionRadius: 5,
          },
        ],
      },
    ],
  },
  // Vertex
  {
    id: 1,
    name: 'Vertex',
    image: vertex,
    iconArmor: armor2,
    description: 'Description for Unit',
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
            type: 'Weapon 1',
            damageArmor1: 50,
            damageArmor2: 20,
            damageArmor3: 20,
            firingRange: 5,
            rateOfFire: 100,
            firingAccuracy: 90,
            firingAccuracy2: 90,
            explosionRadius: 5,
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
            type: 'Weapon 1',
            damageArmor1: 50,
            damageArmor2: 20,
            damageArmor3: 20,
            firingRange: 5,
            rateOfFire: 100,
            firingAccuracy: 90,
            firingAccuracy2: 90,
            explosionRadius: 5,
          },
        ],
      },
    ],
  },
  // Thor
  {
    id: 1,
    name: 'Thor',
    image: thor,
    iconArmor: armor3,
    description: 'Description for Unit',
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
            type: 'Weapon 1',
            damageArmor1: 50,
            damageArmor2: 20,
            damageArmor3: 20,
            firingRange: 5,
            rateOfFire: 100,
            firingAccuracy: 90,
            firingAccuracy2: 90,
            explosionRadius: 5,
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
            type: 'Weapon 1',
            damageArmor1: 50,
            damageArmor2: 20,
            damageArmor3: 20,
            firingRange: 5,
            rateOfFire: 100,
            firingAccuracy: 90,
            firingAccuracy2: 90,
            explosionRadius: 5,
          },
        ],
      },
    ],
  },
  // Delta
  {
    id: 1,
    name: 'Delta',
    image: delta,
    iconArmor: armor2,
    description: 'Description for Unit',
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
            type: 'Weapon 1',
            damageArmor1: 50,
            damageArmor2: 20,
            damageArmor3: 20,
            firingRange: 5,
            rateOfFire: 100,
            firingAccuracy: 90,
            firingAccuracy2: 90,
            explosionRadius: 5,
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
            type: 'Weapon 1',
            damageArmor1: 50,
            damageArmor2: 20,
            damageArmor3: 20,
            firingRange: 5,
            rateOfFire: 100,
            firingAccuracy: 90,
            firingAccuracy2: 90,
            explosionRadius: 5,
          },
        ],
      },
    ],
  },
  // Viking
  {
    id: 1,
    name: 'Viking',
    image: viking,
    iconArmor: armor3,
    description: 'Description for Unit',
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
            type: 'Weapon 1',
            damageArmor1: 50,
            damageArmor2: 20,
            damageArmor3: 20,
            firingRange: 5,
            rateOfFire: 100,
            firingAccuracy: 90,
            firingAccuracy2: 90,
            explosionRadius: 5,
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
            type: 'Weapon 1',
            damageArmor1: 50,
            damageArmor2: 20,
            damageArmor3: 20,
            firingRange: 5,
            rateOfFire: 100,
            firingAccuracy: 90,
            firingAccuracy2: 90,
            explosionRadius: 5,
          },
        ],
      },
    ],
  },
  // Poseidon
  {
    id: 1,
    name: 'Poseidon',
    image: poseidon,
    iconArmor: armor3,
    description: 'Description for Unit',
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
            type: 'Weapon 1',
            damageArmor1: 50,
            damageArmor2: 20,
            damageArmor3: 20,
            firingRange: 5,
            rateOfFire: 100,
            firingAccuracy: 90,
            firingAccuracy2: 90,
            explosionRadius: 5,
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
            type: 'Weapon 1',
            damageArmor1: 50,
            damageArmor2: 20,
            damageArmor3: 20,
            firingRange: 5,
            rateOfFire: 100,
            firingAccuracy: 90,
            firingAccuracy2: 90,
            explosionRadius: 5,
          },
        ],
      },
    ],
  },
];
