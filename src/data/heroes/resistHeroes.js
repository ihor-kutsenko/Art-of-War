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
      // 12
      {
        level: 12,
        class: 5,
        hp: 3859,
        armor: 47,
        speed: 120,
        view: 11,
        cost: 300,
        time: 52,
        cp: 3,
        weapons: [
          {
            damageArmor1: 145,
            damageArmor2: 177,
            damageArmor3: 145,
            firingRange: 6,
            rateOfFire: 120,
            firingAccuracy: '80.0',
            firingAccuracy2: '80.0',
            explosionRadius: '1.00',
          },
        ],
      },
      // 16
      {
        level: 16,
        class: 7,
        hp: 4496,
        armor: 68,
        speed: 120,
        view: 12,
        cost: 300,
        time: 50,
        cp: 3,
        weapons: [
          {
            damageArmor1: 169,
            damageArmor2: 209,
            damageArmor3: 169,
            firingRange: 6.5,
            rateOfFire: 126,
            firingAccuracy: '82.0',
            firingAccuracy2: '82.0',
            explosionRadius: '1.10',
          },
        ],
      },
      // 17
      {
        level: 17,
        class: 8,
        hp: 4664,
        armor: 68,
        speed: 120,
        view: 12,
        cost: 300,
        time: 50,
        cp: 3,
        weapons: [
          {
            damageArmor1: 175,
            damageArmor2: 217,
            damageArmor3: 175,
            firingRange: 6.5,
            rateOfFire: 133,
            firingAccuracy: '83.0',
            firingAccuracy2: '83.0',
            explosionRadius: '1.10',
          },
        ],
      },
      // 18
      {
        level: 18,
        class: 8,
        hp: 4835,
        armor: 74,
        speed: 120,
        view: 12,
        cost: 300,
        time: 48,
        cp: 3,
        weapons: [
          {
            damageArmor1: 182,
            damageArmor2: 226,
            damageArmor3: 182,
            firingRange: 6.5,
            rateOfFire: 133,
            firingAccuracy: '83.0',
            firingAccuracy2: '83.0',
            explosionRadius: '1.10',
          },
        ],
      },
      // 19
      {
        level: 19,
        class: 9,
        hp: 5009,
        armor: 74,
        speed: 120,
        view: 12,
        cost: 300,
        time: 48,
        cp: 3,
        weapons: [
          {
            damageArmor1: 189,
            damageArmor2: 235,
            damageArmor3: 189,
            firingRange: 7,
            rateOfFire: 141,
            firingAccuracy: '84.0',
            firingAccuracy2: '84.0',
            explosionRadius: '1.10',
          },
        ],
      },
      // 20
      {
        level: 20,
        class: 9,
        hp: 5187,
        armor: 80,
        speed: 120,
        view: 12,
        cost: 300,
        time: 47,
        cp: 3,
        weapons: [
          {
            damageArmor1: 196,
            damageArmor2: 244,
            damageArmor3: 196,
            firingRange: 7,
            rateOfFire: 141,
            firingAccuracy: '84.0',
            firingAccuracy2: '84.0',
            explosionRadius: '1.10',
          },
        ],
      },
      // 21
      {
        level: 21,
        class: 10,
        hp: 5368,
        armor: 86,
        speed: 120,
        view: 12,
        cost: 300,
        time: 47,
        cp: 3,
        weapons: [
          {
            damageArmor1: 212,
            damageArmor2: 262,
            damageArmor3: 212,
            firingRange: 7,
            rateOfFire: 141,
            firingAccuracy: '86.0',
            firingAccuracy2: '86.0',
            explosionRadius: '1.20',
          },
        ],
      },
      // 22
      {
        level: 22,
        class: 10,
        hp: 5552,
        armor: 92,
        speed: 120,
        view: 12,
        cost: 300,
        time: 46,
        cp: 3,
        weapons: [
          {
            damageArmor1: 229,
            damageArmor2: 282,
            damageArmor3: 229,
            firingRange: 7,
            rateOfFire: 150,
            firingAccuracy: '86.0',
            firingAccuracy2: '86.0',
            explosionRadius: '1.20',
          },
        ],
      },
      // 24
      {
        level: 24,
        class: 11,
        hp: 5931,
        armor: 106,
        speed: 120,
        view: 12,
        cost: 300,
        time: 45,
        cp: 3,
        weapons: [
          {
            damageArmor1: 266,
            damageArmor2: 323,
            damageArmor3: 266,
            firingRange: 7,
            rateOfFire: 150,
            firingAccuracy: '88.0',
            firingAccuracy2: '88.0',
            explosionRadius: '1.20',
          },
        ],
      },
      // 25
      {
        level: 25,
        class: 12,
        hp: 6126,
        armor: 113,
        speed: 120,
        view: 12,
        cost: 300,
        time: 45,
        cp: 3,
        weapons: [
          {
            damageArmor1: 286,
            damageArmor2: 345,
            damageArmor3: 286,
            firingRange: 7,
            rateOfFire: 160,
            firingAccuracy: '90.0',
            firingAccuracy2: '90.0',
            explosionRadius: '1.20',
          },
        ],
      },
      // 26
      {
        level: 26,
        class: 12,
        hp: 6324,
        armor: 120,
        speed: 120,
        view: 12,
        cost: 300,
        time: 44,
        cp: 3,
        weapons: [
          {
            damageArmor1: 306,
            damageArmor2: 367,
            damageArmor3: 306,
            firingRange: 7,
            rateOfFire: 160,
            firingAccuracy: '90.0',
            firingAccuracy2: '90.0',
            explosionRadius: '1.20',
          },
        ],
      },
      // 27
      {
        level: 27,
        class: 12,
        hp: 6525,
        armor: 120,
        speed: 120,
        view: 12,
        cost: 300,
        time: 44,
        cp: 3,
        weapons: [
          {
            damageArmor1: 306,
            damageArmor2: 367,
            damageArmor3: 306,
            firingRange: 7,
            rateOfFire: 160,
            firingAccuracy: '90.0',
            firingAccuracy2: '90.0',
            explosionRadius: '1.20',
          },
        ],
      },
      // 28
      {
        level: 28,
        class: 12,
        hp: 6525,
        armor: 120,
        speed: 120,
        view: 12,
        cost: 300,
        time: 44,
        cp: 3,
        weapons: [
          {
            damageArmor1: 306,
            damageArmor2: 367,
            damageArmor3: 306,
            firingRange: 7,
            rateOfFire: 160,
            firingAccuracy: '90.0',
            firingAccuracy2: '90.0',
            explosionRadius: '1.20',
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
            explosionRadius: '0.45',
          },
        ],
      },
      // 12
      {
        level: 12,
        class: 4,
        hp: 7001,
        armor: '118 / 162',
        speed: 54,
        view: '6 / 9',
        cost: 550,
        time: 61,
        cp: 6,
        weapons: [
          {
            damageArmor1: 177,
            damageArmor2: 324,
            damageArmor3: 515,
            firingRange: 1.5,
            rateOfFire: 240,
            firingAccuracy: '100',
            firingAccuracy2: '0.00',
            explosionRadius: '0.45',
          },
        ],
      },
      // 16
      {
        level: 16,
        class: 6,
        hp: 8154,
        armor: '150 / 202',
        speed: 60,
        view: '6 / 9',
        cost: 550,
        time: 58,
        cp: 6,
        weapons: [
          {
            damageArmor1: 211,
            damageArmor2: 386,
            damageArmor3: 614,
            firingRange: 1.5,
            rateOfFire: 240,
            firingAccuracy: '100',
            firingAccuracy2: '0.00',
            explosionRadius: '0.45',
          },
        ],
      },
      // 17
      {
        level: 17,
        class: 7,
        hp: 8458,
        armor: '159 / 213',
        speed: 60,
        view: '6 / 10',
        cost: 550,
        time: 58,
        cp: 6,
        weapons: [
          {
            damageArmor1: 220,
            damageArmor2: 403,
            damageArmor3: 640,
            firingRange: 1.5,
            rateOfFire: 240,
            firingAccuracy: '100',
            firingAccuracy2: '0.00',
            explosionRadius: '0.45',
          },
        ],
      },
      // 18
      {
        level: 18,
        class: 7,
        hp: 8768,
        armor: '168 / 224',
        speed: 60,
        view: '6 / 10',
        cost: 550,
        time: 56,
        cp: 6,
        weapons: [
          {
            damageArmor1: 229,
            damageArmor2: 420,
            damageArmor3: 667,
            firingRange: 1.5,
            rateOfFire: 240,
            firingAccuracy: '100',
            firingAccuracy2: '0.00',
            explosionRadius: '0.45',
          },
        ],
      },
      // 19
      {
        level: 19,
        class: 7,
        hp: 9085,
        armor: '168 / 224',
        speed: 60,
        view: '6 / 10',
        cost: 550,
        time: 56,
        cp: 6,
        weapons: [
          {
            damageArmor1: 238,
            damageArmor2: 437,
            damageArmor3: 695,
            firingRange: 1.5,
            rateOfFire: 240,
            firingAccuracy: '100',
            firingAccuracy2: '0.00',
            explosionRadius: '0.45',
          },
        ],
      },
      // 20
      {
        level: 20,
        class: 8,
        hp: 9408,
        armor: '177 / 235',
        speed: 60,
        view: '6 / 10',
        cost: 550,
        time: 55,
        cp: 6,
        weapons: [
          {
            damageArmor1: 248,
            damageArmor2: 455,
            damageArmor3: 723,
            firingRange: 1.5,
            rateOfFire: 240,
            firingAccuracy: '100',
            firingAccuracy2: '0.00',
            explosionRadius: '0.45',
          },
        ],
      },
      // 21
      {
        level: 21,
        class: 8,
        hp: 9737,
        armor: '186 / 246',
        speed: 60,
        view: '6 / 10',
        cost: 550,
        time: 55,
        cp: 6,
        weapons: [
          {
            damageArmor1: 258,
            damageArmor2: 473,
            damageArmor3: 752,
            firingRange: 1.5,
            rateOfFire: 240,
            firingAccuracy: '100',
            firingAccuracy2: '0.00',
            explosionRadius: '0.45',
          },
        ],
      },
      // 22
      {
        level: 22,
        class: 9,
        hp: 10073,
        armor: '195 / 257',
        speed: 60,
        view: '6 / 10',
        cost: 550,
        time: 54,
        cp: 6,
        weapons: [
          {
            damageArmor1: 268,
            damageArmor2: 492,
            damageArmor3: 782,
            firingRange: 1.5,
            rateOfFire: 240,
            firingAccuracy: '100',
            firingAccuracy2: '0.00',
            explosionRadius: '0.45',
          },
        ],
      },
      // 24
      {
        level: 24,
        class: 10,
        hp: 10763,
        armor: '215 / 281',
        speed: 60,
        view: '6 / 10',
        cost: 550,
        time: 52,
        cp: 6,
        weapons: [
          {
            damageArmor1: 289,
            damageArmor2: 530,
            damageArmor3: 843,
            firingRange: 1.5,
            rateOfFire: 240,
            firingAccuracy: '100',
            firingAccuracy2: '0.00',
            explosionRadius: '0.45',
          },
        ],
      },
      // 25
      {
        level: 25,
        class: 11,
        hp: 11118,
        armor: '225 / 293',
        speed: 60,
        view: '6 / 10',
        cost: 550,
        time: 52,
        cp: 6,
        weapons: [
          {
            damageArmor1: 300,
            damageArmor2: 550,
            damageArmor3: 875,
            firingRange: 1.5,
            rateOfFire: 240,
            firingAccuracy: '100',
            firingAccuracy2: '0.00',
            explosionRadius: '0.45',
          },
        ],
      },
      // 26
      {
        level: 26,
        class: 12,
        hp: 11479,
        armor: '235 / 305',
        speed: 60,
        view: '6 / 10',
        cost: 550,
        time: 51,
        cp: 6,
        weapons: [
          {
            damageArmor1: 311,
            damageArmor2: 570,
            damageArmor3: 907,
            firingRange: 1.5,
            rateOfFire: 240,
            firingAccuracy: '100',
            firingAccuracy2: '0.00',
            explosionRadius: '0.45',
          },
        ],
      },
      // 27
      {
        level: 27,
        class: 12,
        hp: 11846,
        armor: '235 / 305',
        speed: 60,
        view: '6 / 10',
        cost: 550,
        time: 51,
        cp: 6,
        weapons: [
          {
            damageArmor1: 322,
            damageArmor2: 591,
            damageArmor3: 940,
            firingRange: 1.5,
            rateOfFire: 240,
            firingAccuracy: '100',
            firingAccuracy2: '0.00',
            explosionRadius: '0.45',
          },
        ],
      },
      // 28
      {
        level: 28,
        class: 12,
        hp: 12600,
        armor: '235 / 305',
        speed: 60,
        view: '6 / 10',
        cost: 550,
        time: 49,
        cp: 6,
        weapons: [
          {
            damageArmor1: 346,
            damageArmor2: 634,
            damageArmor3: 1008,
            firingRange: 1.5,
            rateOfFire: 240,
            firingAccuracy: '100',
            firingAccuracy2: '0.00',
            explosionRadius: '0.45',
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
      // 12
      {
        level: 12,
        class: 2,
        hp: 8608,
        armor: 72,
        speed: 40,
        view: 9,
        cost: 1100,
        time: 95,
        cp: 13,
        weapons: [
          {
            damageArmor1: 224,
            damageArmor2: 291,
            damageArmor3: 269,
            firingRange: 7.5,
            rateOfFire: 206,
            firingAccuracy: '74.9',
            firingAccuracy2: '71.5',
            explosionRadius: '0.90',
          },
          {
            damageArmor1: 136,
            damageArmor2: 170,
            damageArmor3: 159,
            firingRange: 5.5,
            rateOfFire: 206,
            firingAccuracy: '81.6',
            firingAccuracy2: '79.1',
            explosionRadius: '0.90',
          },
          {
            damageArmor1: 168,
            damageArmor2: 337,
            damageArmor3: 280,
            firingRange: 7.5,
            rateOfFire: 82,
            firingAccuracy: '82.0',
            firingAccuracy2: '82.0',
            explosionRadius: '0.97',
          },
        ],
      },
      // 16
      {
        level: 16,
        class: 5,
        hp: 10633,
        armor: 99,
        speed: 42,
        view: 10,
        cost: 1100,
        time: 91,
        cp: 13,
        weapons: [
          {
            damageArmor1: 280,
            damageArmor2: 363,
            damageArmor3: 336,
            firingRange: 8,
            rateOfFire: 222,
            firingAccuracy: '76.8',
            firingAccuracy2: '74.4',
            explosionRadius: '0.90',
          },
          {
            damageArmor1: 174,
            damageArmor2: 218,
            damageArmor3: 203,
            firingRange: 6,
            rateOfFire: 222,
            firingAccuracy: '82.6',
            firingAccuracy2: '80.8',
            explosionRadius: '0.90',
          },
          {
            damageArmor1: 210,
            damageArmor2: 419,
            damageArmor3: 349,
            firingRange: 8,
            rateOfFire: 88,
            firingAccuracy: '84.0',
            firingAccuracy2: '84.0',
            explosionRadius: '1.04',
          },
        ],
      },
      // 17
      {
        level: 17,
        class: 5,
        hp: 11000,
        armor: 106,
        speed: 42,
        view: 10,
        cost: 1100,
        time: 91,
        cp: 13,
        weapons: [
          {
            damageArmor1: 295,
            damageArmor2: 383,
            damageArmor3: 354,
            firingRange: 8,
            rateOfFire: 222,
            firingAccuracy: '76.8',
            firingAccuracy2: '74.4',
            explosionRadius: '0.90',
          },
          {
            damageArmor1: 185,
            damageArmor2: 231,
            damageArmor3: 215,
            firingRange: 6,
            rateOfFire: 222,
            firingAccuracy: '82.6',
            firingAccuracy2: '80.8',
            explosionRadius: '0.90',
          },
          {
            damageArmor1: 221,
            damageArmor2: 442,
            damageArmor3: 368,
            firingRange: 8,
            rateOfFire: 88,
            firingAccuracy: '84.0',
            firingAccuracy2: '84.0',
            explosionRadius: '1.04',
          },
        ],
      },
      // 18
      {
        level: 18,
        class: 6,
        hp: 11375,
        armor: 114,
        speed: 42,
        view: 11,
        cost: 1100,
        time: 88,
        cp: 13,
        weapons: [
          {
            damageArmor1: 311,
            damageArmor2: 404,
            damageArmor3: 373,
            firingRange: 8.5,
            rateOfFire: 222,
            firingAccuracy: '76.6',
            firingAccuracy2: '74.5',
            explosionRadius: '0.90',
          },
          {
            damageArmor1: 196,
            damageArmor2: 245,
            damageArmor3: 228,
            firingRange: 6,
            rateOfFire: 230,
            firingAccuracy: '83.5',
            firingAccuracy2: '82.0',
            explosionRadius: '0.90',
          },
          {
            damageArmor1: 233,
            damageArmor2: 466,
            damageArmor3: 388,
            firingRange: 8,
            rateOfFire: 88,
            firingAccuracy: '84.0',
            firingAccuracy2: '84.0',
            explosionRadius: '1.04',
          },
        ],
      },
      // 19
      {
        level: 19,
        class: 6,
        hp: 11758,
        armor: 122,
        speed: 42,
        view: 11,
        cost: 1100,
        time: 88,
        cp: 13,
        weapons: [
          {
            damageArmor1: 327,
            damageArmor2: 425,
            damageArmor3: 393,
            firingRange: 8.5,
            rateOfFire: 230,
            firingAccuracy: '76.6',
            firingAccuracy2: '74.5',
            explosionRadius: '0.90',
          },
          {
            damageArmor1: 196,
            damageArmor2: 245,
            damageArmor3: 228,
            firingRange: 6,
            rateOfFire: 230,
            firingAccuracy: '83.5',
            firingAccuracy2: '82.0',
            explosionRadius: '0.90',
          },
          {
            damageArmor1: 245,
            damageArmor2: 491,
            damageArmor3: 409,
            firingRange: 8.5,
            rateOfFire: 88,
            firingAccuracy: '87.0',
            firingAccuracy2: '87.0',
            explosionRadius: '1.12',
          },
        ],
      },
      // 20
      {
        level: 20,
        class: 7,
        hp: 12150,
        armor: 130,
        speed: 42,
        view: 11,
        cost: 1100,
        time: 86,
        cp: 13,
        weapons: [
          {
            damageArmor1: 344,
            damageArmor2: 447,
            damageArmor3: 413,
            firingRange: 8.5,
            rateOfFire: 230,
            firingAccuracy: '77.9',
            firingAccuracy2: '76.2',
            explosionRadius: '0.90',
          },
          {
            damageArmor1: 207,
            damageArmor2: 259,
            damageArmor3: 241,
            firingRange: 6.5,
            rateOfFire: 230,
            firingAccuracy: '83.1',
            firingAccuracy2: '81.8',
            explosionRadius: '0.90',
          },
          {
            damageArmor1: 258,
            damageArmor2: 516,
            damageArmor3: 430,
            firingRange: 8.5,
            rateOfFire: 92,
            firingAccuracy: '87.0',
            firingAccuracy2: '87.0',
            explosionRadius: '1.12',
          },
        ],
      },
      // 21
      {
        level: 21,
        class: 7,
        hp: 12550,
        armor: 138,
        speed: 42,
        view: 11,
        cost: 1100,
        time: 86,
        cp: 13,
        weapons: [
          {
            damageArmor1: 362,
            damageArmor2: 470,
            damageArmor3: 434,
            firingRange: 8.5,
            rateOfFire: 230,
            firingAccuracy: '77.9',
            firingAccuracy2: '76.2',
            explosionRadius: '0.90',
          },
          {
            damageArmor1: 207,
            damageArmor2: 259,
            damageArmor3: 241,
            firingRange: 6.5,
            rateOfFire: 230,
            firingAccuracy: '83.1',
            firingAccuracy2: '81.8',
            explosionRadius: '0.90',
          },
          {
            damageArmor1: 271,
            damageArmor2: 542,
            damageArmor3: 452,
            firingRange: 8.5,
            rateOfFire: 92,
            firingAccuracy: '87.0',
            firingAccuracy2: '87.0',
            explosionRadius: '1.12',
          },
        ],
      },
      // 22
      {
        level: 22,
        class: 8,
        hp: 12958,
        armor: 147,
        speed: 46,
        view: 11,
        cost: 1100,
        time: 84,
        cp: 13,
        weapons: [
          {
            damageArmor1: 380,
            damageArmor2: 494,
            damageArmor3: 456,
            firingRange: 8.5,
            rateOfFire: 240,
            firingAccuracy: '79.2',
            firingAccuracy2: '77.9',
            explosionRadius: '0.90',
          },
          {
            damageArmor1: 219,
            damageArmor2: 274,
            damageArmor3: 255,
            firingRange: 6.5,
            rateOfFire: 240,
            firingAccuracy: '84.1',
            firingAccuracy2: '83.1',
            explosionRadius: '0.90',
          },
          {
            damageArmor1: 285,
            damageArmor2: 569,
            damageArmor3: 475,
            firingRange: 8.5,
            rateOfFire: 92,
            firingAccuracy: '87.0',
            firingAccuracy2: '87.0',
            explosionRadius: '1.12',
          },
        ],
      },
      // 24
      {
        level: 24,
        class: 9,
        hp: 13800,
        armor: 165,
        speed: 46,
        view: 12,
        cost: 1100,
        time: 82,
        cp: 13,
        weapons: [
          {
            damageArmor1: 399,
            damageArmor2: 518,
            damageArmor3: 478,
            firingRange: 9,
            rateOfFire: 240,
            firingAccuracy: '79.3',
            firingAccuracy2: '78.4',
            explosionRadius: '0.90',
          },
          {
            damageArmor1: 231,
            damageArmor2: 289,
            damageArmor3: 269,
            firingRange: 6.5,
            rateOfFire: 240,
            firingAccuracy: '85.1',
            firingAccuracy2: '84.4',
            explosionRadius: '0.90',
          },
          {
            damageArmor1: 299,
            damageArmor2: 597,
            damageArmor3: 498,
            firingRange: 8.5,
            rateOfFire: 92,
            firingAccuracy: '87.0',
            firingAccuracy2: '87.0',
            explosionRadius: '1.12',
          },
        ],
      },
      // 25
      {
        level: 25,
        class: 9,
        hp: 14233,
        armor: 174,
        speed: 46,
        view: 12,
        cost: 1100,
        time: 82,
        cp: 13,
        weapons: [
          {
            damageArmor1: 418,
            damageArmor2: 543,
            damageArmor3: 501,
            firingRange: 9,
            rateOfFire: 240,
            firingAccuracy: '79.3',
            firingAccuracy2: '78.4',
            explosionRadius: '0.90',
          },
          {
            damageArmor1: 244,
            damageArmor2: 305,
            damageArmor3: 284,
            firingRange: 6.5,
            rateOfFire: 250,
            firingAccuracy: '85.1',
            firingAccuracy2: '84.4',
            explosionRadius: '0.90',
          },
          {
            damageArmor1: 313,
            damageArmor2: 626,
            damageArmor3: 522,
            firingRange: 9,
            rateOfFire: 96,
            firingAccuracy: '90.0',
            firingAccuracy2: '90.0',
            explosionRadius: '1.20',
          },
        ],
      },
      // 26
      {
        level: 26,
        class: 10,
        hp: 15125,
        armor: 184,
        speed: 46,
        view: 12,
        cost: 1100,
        time: 80,
        cp: 13,
        weapons: [
          {
            damageArmor1: 438,
            damageArmor2: 569,
            damageArmor3: 525,
            firingRange: 9,
            rateOfFire: 250,
            firingAccuracy: '80.7',
            firingAccuracy2: '80.2',
            explosionRadius: '0.90',
          },
          {
            damageArmor1: 257,
            damageArmor2: 321,
            damageArmor3: 299,
            firingRange: 6.5,
            rateOfFire: 250,
            firingAccuracy: '86.0',
            firingAccuracy2: '85.7',
            explosionRadius: '0.90',
          },
          {
            damageArmor1: 328,
            damageArmor2: 656,
            damageArmor3: 547,
            firingRange: 9,
            rateOfFire: 96,
            firingAccuracy: '90.0',
            firingAccuracy2: '90.0',
            explosionRadius: '1.20',
          },
        ],
      },
      // 27
      {
        level: 27,
        class: 11,
        hp: 16050,
        armor: 204,
        speed: 46,
        view: 12,
        cost: 1100,
        time: 80,
        cp: 13,
        weapons: [
          {
            damageArmor1: 458,
            damageArmor2: 595,
            damageArmor3: 549,
            firingRange: 9,
            rateOfFire: 250,
            firingAccuracy: '82.0',
            firingAccuracy2: '82.0',
            explosionRadius: '0.90',
          },
          {
            damageArmor1: 270,
            damageArmor2: 338,
            damageArmor3: 315,
            firingRange: 7,
            rateOfFire: 260,
            firingAccuracy: '86.0',
            firingAccuracy2: '86.0',
            explosionRadius: '0.90',
          },
          {
            damageArmor1: 343,
            damageArmor2: 687,
            damageArmor3: 572,
            firingRange: 9,
            rateOfFire: 96,
            firingAccuracy: '90.0',
            firingAccuracy2: '90.0',
            explosionRadius: '1.20',
          },
        ],
      },
      // 28
      {
        level: 28,
        class: 12,
        hp: 17008,
        armor: 225,
        speed: 46,
        view: 12,
        cost: 1100,
        time: 77,
        cp: 13,
        weapons: [
          {
            damageArmor1: 479,
            damageArmor2: 622,
            damageArmor3: 574,
            firingRange: 9,
            rateOfFire: 250,
            firingAccuracy: '82.0',
            firingAccuracy2: '82.0',
            explosionRadius: '0.90',
          },
          {
            damageArmor1: 284,
            damageArmor2: 355,
            damageArmor3: 331,
            firingRange: 7,
            rateOfFire: 260,
            firingAccuracy: '86.0',
            firingAccuracy2: '86.0',
            explosionRadius: '0.90',
          },
          {
            damageArmor1: 359,
            damageArmor2: 718,
            damageArmor3: 598,
            firingRange: 9,
            rateOfFire: 96,
            firingAccuracy: '90.0',
            firingAccuracy2: '90.0',
            explosionRadius: '1.20',
          },
        ],
      },
    ],
  },
];
