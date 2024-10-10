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
    description: '',
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
      // 16
      {
        level: 16,
        class: 7,
        hp: 6294,
        armor: 90,
        speed: 66,
        view: 10,
        cost: 300,
        time: 51,
        cp: 4,
        weapons: [
          {
            damageArmor1: 301,
            damageArmor2: 121,
            damageArmor3: 46,
            firingRange: 6.5,
            rateOfFire: 327,
            firingAccuracy: '87.0',
            firingAccuracy2: '48.7',
            explosionRadius: '0.00',
          },
          {
            damageArmor1: 3149,
            damageArmor2: 1500,
            damageArmor3: 1500,
            firingRange: 1.5,
            rateOfFire: 60,
            firingAccuracy: '100',
            firingAccuracy2: '0.00',
            explosionRadius: '0.00',
          },
          {
            damageArmor1: 178,
            damageArmor2: 726,
            damageArmor3: 413,
            firingRange: 6.5,
            rateOfFire: 50,
            firingAccuracy: '84.5',
            firingAccuracy2: '76.3',
            explosionRadius: '1.06',
          },
        ],
      },
      // 17
      {
        level: 17,
        class: 8,
        hp: 6529,
        armor: 90,
        speed: 66,
        view: 10,
        cost: 300,
        time: 51,
        cp: 4,
        weapons: [
          {
            damageArmor1: 314,
            damageArmor2: 126,
            damageArmor3: 48,
            firingRange: 6.5,
            rateOfFire: 327,
            firingAccuracy: '87.0',
            firingAccuracy2: '48.7',
            explosionRadius: '0.00',
          },
          {
            damageArmor1: 3275,
            damageArmor2: 1500,
            damageArmor3: 1500,
            firingRange: 1.5,
            rateOfFire: 60,
            firingAccuracy: '100',
            firingAccuracy2: '0.00',
            explosionRadius: '0.00',
          },
          {
            damageArmor1: 186,
            damageArmor2: 756,
            damageArmor3: 430,
            firingRange: 6.5,
            rateOfFire: 50,
            firingAccuracy: '84.5',
            firingAccuracy2: '76.3',
            explosionRadius: '1.06',
          },
        ],
      },
      // 18
      {
        level: 18,
        class: 8,
        hp: 6768,
        armor: 96,
        speed: 75,
        view: 10,
        cost: 300,
        time: 50,
        cp: 4,
        weapons: [
          {
            damageArmor1: 327,
            damageArmor2: 131,
            damageArmor3: 50,
            firingRange: 7,
            rateOfFire: 327,
            firingAccuracy: '89.0',
            firingAccuracy2: '50.7',
            explosionRadius: '0.00',
          },
          {
            damageArmor1: 3402,
            damageArmor2: 1500,
            damageArmor3: 1500,
            firingRange: 1.5,
            rateOfFire: 60,
            firingAccuracy: '100',
            firingAccuracy2: '0.00',
            explosionRadius: '0.00',
          },
          {
            damageArmor1: 194,
            damageArmor2: 786,
            damageArmor3: 447,
            firingRange: 7,
            rateOfFire: 50,
            firingAccuracy: '84.5',
            firingAccuracy2: '75.6',
            explosionRadius: '1.06',
          },
        ],
      },
      // 19
      {
        level: 19,
        class: 9,
        hp: 7012,
        armor: 96,
        speed: 75,
        view: 10,
        cost: 300,
        time: 50,
        cp: 4,
        weapons: [
          {
            damageArmor1: 341,
            damageArmor2: 136,
            damageArmor3: 53,
            firingRange: 7,
            rateOfFire: 327,
            firingAccuracy: '89.0',
            firingAccuracy2: '50.7',
            explosionRadius: '0.00',
          },
          {
            damageArmor1: 3530,
            damageArmor2: 1500,
            damageArmor3: 1500,
            firingRange: 1.5,
            rateOfFire: 60,
            firingAccuracy: '100',
            firingAccuracy2: '0.00',
            explosionRadius: '0.00',
          },
          {
            damageArmor1: 202,
            damageArmor2: 816,
            damageArmor3: 464,
            firingRange: 7,
            rateOfFire: 54,
            firingAccuracy: '85.4',
            firingAccuracy2: '76.9',
            explosionRadius: '1.12',
          },
        ],
      },
      // 20
      {
        level: 20,
        class: 9,
        hp: 7261,
        armor: 103,
        speed: 75,
        view: 11,
        cost: 300,
        time: 49,
        cp: 4,
        weapons: [
          {
            damageArmor1: 355,
            damageArmor2: 142,
            damageArmor3: 56,
            firingRange: 7,
            rateOfFire: 360,
            firingAccuracy: '91.0',
            firingAccuracy2: '52.8',
            explosionRadius: '0.00',
          },
          {
            damageArmor1: 3659,
            damageArmor2: 1500,
            damageArmor3: 1500,
            firingRange: 1.5,
            rateOfFire: 60,
            firingAccuracy: '100',
            firingAccuracy2: '0.00',
            explosionRadius: '0.00',
          },
          {
            damageArmor1: 210,
            damageArmor2: 847,
            damageArmor3: 482,
            firingRange: 7,
            rateOfFire: 54,
            firingAccuracy: '86.5',
            firingAccuracy2: '78.1',
            explosionRadius: '1.12',
          },
        ],
      },
      // 21
      {
        level: 21,
        class: 10,
        hp: 7515,
        armor: 110,
        speed: 75,
        view: 11,
        cost: 300,
        time: 49,
        cp: 4,
        weapons: [
          {
            damageArmor1: 369,
            damageArmor2: 148,
            damageArmor3: 59,
            firingRange: 7,
            rateOfFire: 360,
            firingAccuracy: '91.0',
            firingAccuracy2: '52.8',
            explosionRadius: '0.00',
          },
          {
            damageArmor1: 3789,
            damageArmor2: 1500,
            damageArmor3: 1500,
            firingRange: 1.5,
            rateOfFire: 60,
            firingAccuracy: '100',
            firingAccuracy2: '0.00',
            explosionRadius: '0.00',
          },
          {
            damageArmor1: 219,
            damageArmor2: 878,
            damageArmor3: 500,
            firingRange: 7,
            rateOfFire: 54,
            firingAccuracy: '87.2',
            firingAccuracy2: '79.2',
            explosionRadius: '1.18',
          },
        ],
      },
      // 22
      {
        level: 22,
        class: 10,
        hp: 7773,
        armor: 117,
        speed: 75,
        view: 11,
        cost: 300,
        time: 48,
        cp: 4,
        weapons: [
          {
            damageArmor1: 383,
            damageArmor2: 154,
            damageArmor3: 62,
            firingRange: 7,
            rateOfFire: 360,
            firingAccuracy: '93.0',
            firingAccuracy2: '54.9',
            explosionRadius: '0.00',
          },
          {
            damageArmor1: 3920,
            damageArmor2: 1500,
            damageArmor3: 1500,
            firingRange: 1.5,
            rateOfFire: 60,
            firingAccuracy: '100',
            firingAccuracy2: '0.00',
            explosionRadius: '0.00',
          },
          {
            damageArmor1: 228,
            damageArmor2: 909,
            damageArmor3: 518,
            firingRange: 7,
            rateOfFire: 54,
            firingAccuracy: '88.3',
            firingAccuracy2: '80.2',
            explosionRadius: '1.18',
          },
        ],
      },
      // 24
      {
        level: 24,
        class: 11,
        hp: 8304,
        armor: 131,
        speed: 75,
        view: 11,
        cost: 300,
        time: 46,
        cp: 4,
        weapons: [
          {
            damageArmor1: 413,
            damageArmor2: 166,
            damageArmor3: 68,
            firingRange: 7,
            rateOfFire: 400,
            firingAccuracy: '95.0',
            firingAccuracy2: '57.0',
            explosionRadius: '0.00',
          },
          {
            damageArmor1: 4185,
            damageArmor2: 1500,
            damageArmor3: 1500,
            firingRange: 1.5,
            rateOfFire: 66,
            firingAccuracy: '100',
            firingAccuracy2: '0.00',
            explosionRadius: '0.00',
          },
          {
            damageArmor1: 246,
            damageArmor2: 973,
            damageArmor3: 555,
            firingRange: 7,
            rateOfFire: 60,
            firingAccuracy: '89.8',
            firingAccuracy2: '82.2',
            explosionRadius: '1.24',
          },
        ],
      },
      // 25
      {
        level: 25,
        class: 12,
        hp: 8576,
        armor: 138,
        speed: 75,
        view: 11,
        cost: 300,
        time: 46,
        cp: 4,
        weapons: [
          {
            damageArmor1: 428,
            damageArmor2: 172,
            damageArmor3: 71,
            firingRange: 7,
            rateOfFire: 400,
            firingAccuracy: '95.0',
            firingAccuracy2: '57.0',
            explosionRadius: '0.00',
          },
          {
            damageArmor1: 4319,
            damageArmor2: 1500,
            damageArmor3: 1500,
            firingRange: 1.5,
            rateOfFire: 66,
            firingAccuracy: '100',
            firingAccuracy2: '0.00',
            explosionRadius: '0.00',
          },
          {
            damageArmor1: 255,
            damageArmor2: 1005,
            damageArmor3: 574,
            firingRange: 7,
            rateOfFire: 60,
            firingAccuracy: '89.8',
            firingAccuracy2: '82.2',
            explosionRadius: '1.24',
          },
        ],
      },
      // 26
      {
        level: 26,
        class: 12,
        hp: 8853,
        armor: 145,
        speed: 75,
        view: 11,
        cost: 300,
        time: 45,
        cp: 4,
        weapons: [
          {
            damageArmor1: 443,
            damageArmor2: 178,
            damageArmor3: 74,
            firingRange: 7,
            rateOfFire: 450,
            firingAccuracy: '95.0',
            firingAccuracy2: '57.0',
            explosionRadius: '0.00',
          },
          {
            damageArmor1: 4453,
            damageArmor2: 1500,
            damageArmor3: 1500,
            firingRange: 1.5,
            rateOfFire: 66,
            firingAccuracy: '100',
            firingAccuracy2: '0.00',
            explosionRadius: '0.00',
          },
          {
            damageArmor1: 265,
            damageArmor2: 1038,
            damageArmor3: 593,
            firingRange: 7,
            rateOfFire: 60,
            firingAccuracy: '90.3',
            firingAccuracy2: '83.0',
            explosionRadius: '1.30',
          },
        ],
      },
      // 27
      {
        level: 27,
        class: 12,
        hp: 9135,
        armor: 145,
        speed: 75,
        view: 11,
        cost: 300,
        time: 45,
        cp: 4,
        weapons: [
          {
            damageArmor1: 459,
            damageArmor2: 184,
            damageArmor3: 77,
            firingRange: 7,
            rateOfFire: 450,
            firingAccuracy: '95.0',
            firingAccuracy2: '57.0',
            explosionRadius: '0.00',
          },
          {
            damageArmor1: 4590,
            damageArmor2: 1500,
            damageArmor3: 1500,
            firingRange: 1.5,
            rateOfFire: 75,
            firingAccuracy: '100',
            firingAccuracy2: '0.00',
            explosionRadius: '0.00',
          },
          {
            damageArmor1: 275,
            damageArmor2: 1071,
            damageArmor3: 612,
            firingRange: 7,
            rateOfFire: 60,
            firingAccuracy: '90.3',
            firingAccuracy2: '83.0',
            explosionRadius: '1.30',
          },
        ],
      },
      // 28
      {
        level: 28,
        class: 12,
        hp: 9135,
        armor: 145,
        speed: 75,
        view: 11,
        cost: 300,
        time: 45,
        cp: 4,
        weapons: [
          {
            damageArmor1: 459,
            damageArmor2: 184,
            damageArmor3: 77,
            firingRange: 7,
            rateOfFire: 450,
            firingAccuracy: '95.0',
            firingAccuracy2: '57.0',
            explosionRadius: '0.00',
          },
          {
            damageArmor1: 4590,
            damageArmor2: 1500,
            damageArmor3: 1500,
            firingRange: 1.5,
            rateOfFire: 75,
            firingAccuracy: '100',
            firingAccuracy2: '0.00',
            explosionRadius: '0.00',
          },
          {
            damageArmor1: 275,
            damageArmor2: 1071,
            damageArmor3: 612,
            firingRange: 7,
            rateOfFire: 60,
            firingAccuracy: '90.3',
            firingAccuracy2: '83.0',
            explosionRadius: '1.30',
          },
        ],
      },
      // 29
      {
        level: 29,
        class: 12,
        hp: 9135,
        armor: 145,
        speed: 75,
        view: 11,
        cost: 300,
        time: 45,
        cp: 4,
        weapons: [
          {
            damageArmor1: 459,
            damageArmor2: 184,
            damageArmor3: 77,
            firingRange: 7,
            rateOfFire: 450,
            firingAccuracy: '95.0',
            firingAccuracy2: '57.0',
            explosionRadius: '0.00',
          },
          {
            damageArmor1: 4590,
            damageArmor2: 1500,
            damageArmor3: 1500,
            firingRange: 1.5,
            rateOfFire: 75,
            firingAccuracy: '100',
            firingAccuracy2: '0.00',
            explosionRadius: '0.00',
          },
          {
            damageArmor1: 275,
            damageArmor2: 1071,
            damageArmor3: 612,
            firingRange: 7,
            rateOfFire: 60,
            firingAccuracy: '90.3',
            firingAccuracy2: '83.0',
            explosionRadius: '1.30',
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
    description: '',
    weapons: [
      { type: 'ENERGY AUTOCANNONS "LAZARUS" - in avia mode' },
      { type: 'ENERGY AUTOCANNONS "LAZARUS" - in ground mode' },
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
      // 16
      {
        level: 16,
        class: 6,
        hp: 6285,
        armor: '89 / 100',
        speed: '100 / 42',
        view: '11 / 8',
        cost: 600,
        time: 62,
        cp: 7,
        weapons: [
          {
            damageArmor1: 174,
            damageArmor2: 257,
            damageArmor3: 281,
            firingRange: 8,
            rateOfFire: 160,
            firingAccuracy: '81.3',
            firingAccuracy2: '69.4',
            explosionRadius: '0.70',
          },
          {
            damageArmor1: 174,
            damageArmor2: 257,
            damageArmor3: 281,
            firingRange: 7,
            rateOfFire: 160,
            firingAccuracy: '83.6',
            firingAccuracy2: '73.2',
            explosionRadius: '0.70',
          },
        ],
      },
      // 17
      {
        level: 17,
        class: 7,
        hp: 6523,
        armor: '95 / 107',
        speed: '100 / 42',
        view: '11 / 8',
        cost: 600,
        time: 62,
        cp: 7,
        weapons: [
          {
            damageArmor1: 180,
            damageArmor2: 266,
            damageArmor3: 291,
            firingRange: 8,
            rateOfFire: 165,
            firingAccuracy: '81.3',
            firingAccuracy2: '69.4',
            explosionRadius: '0.70',
          },
          {
            damageArmor1: 180,
            damageArmor2: 266,
            damageArmor3: 291,
            firingRange: 7,
            rateOfFire: 165,
            firingAccuracy: '83.6',
            firingAccuracy2: '73.2',
            explosionRadius: '0.70',
          },
        ],
      },
      // 18
      {
        level: 18,
        class: 7,
        hp: 6766,
        armor: '95 / 107',
        speed: '100 / 42',
        view: '12 / 9',
        cost: 600,
        time: 60,
        cp: 7,
        weapons: [
          {
            damageArmor1: 187,
            damageArmor2: 276,
            damageArmor3: 302,
            firingRange: 8,
            rateOfFire: 165,
            firingAccuracy: '81.3',
            firingAccuracy2: '70.3',
            explosionRadius: '0.70',
          },
          {
            damageArmor1: 187,
            damageArmor2: 276,
            damageArmor3: 302,
            firingRange: 7,
            rateOfFire: 165,
            firingAccuracy: '83.6',
            firingAccuracy2: '74.0',
            explosionRadius: '0.70',
          },
        ],
      },
      // 19
      {
        level: 19,
        class: 7,
        hp: 7014,
        armor: '101 / 114',
        speed: '100 / 42',
        view: '12 / 9',
        cost: 600,
        time: 60,
        cp: 7,
        weapons: [
          {
            damageArmor1: 194,
            damageArmor2: 286,
            damageArmor3: 313,
            firingRange: 8,
            rateOfFire: 171,
            firingAccuracy: '81.3',
            firingAccuracy2: '70.3',
            explosionRadius: '0.70',
          },
          {
            damageArmor1: 194,
            damageArmor2: 286,
            damageArmor3: 313,
            firingRange: 7,
            rateOfFire: 171,
            firingAccuracy: '83.6',
            firingAccuracy2: '74.0',
            explosionRadius: '0.70',
          },
        ],
      },
      // 20
      {
        level: 20,
        class: 8,
        hp: 7267,
        armor: '108 / 121',
        speed: '100 / 42',
        view: '12 / 9',
        cost: 600,
        time: 59,
        cp: 7,
        weapons: [
          {
            damageArmor1: 201,
            damageArmor2: 296,
            damageArmor3: 324,
            firingRange: 8,
            rateOfFire: 171,
            firingAccuracy: '82.6',
            firingAccuracy2: '71.7',
            explosionRadius: '0.70',
          },
          {
            damageArmor1: 201,
            damageArmor2: 296,
            damageArmor3: 324,
            firingRange: 7,
            rateOfFire: 171,
            firingAccuracy: '84.8',
            firingAccuracy2: '75.2',
            explosionRadius: '0.70',
          },
        ],
      },
      // 21
      {
        level: 21,
        class: 8,
        hp: 7525,
        armor: '115 / 128',
        speed: '100 / 42',
        view: '12 / 9',
        cost: 600,
        time: 59,
        cp: 7,
        weapons: [
          {
            damageArmor1: 208,
            damageArmor2: 306,
            damageArmor3: 335,
            firingRange: 8.5,
            rateOfFire: 171,
            firingAccuracy: '81.5',
            firingAccuracy2: '69.9',
            explosionRadius: '0.70',
          },
          {
            damageArmor1: 208,
            damageArmor2: 306,
            damageArmor3: 335,
            firingRange: 7.5,
            rateOfFire: 171,
            firingAccuracy: '83.7',
            firingAccuracy2: '73.4',
            explosionRadius: '0.70',
          },
        ],
      },
      // 22
      {
        level: 22,
        class: 9,
        hp: 7788,
        armor: '122 / 135',
        speed: '100 / 42',
        view: '12 / 9',
        cost: 600,
        time: 57,
        cp: 7,
        weapons: [
          {
            damageArmor1: 224,
            damageArmor2: 328,
            damageArmor3: 359,
            firingRange: 8.5,
            rateOfFire: 171,
            firingAccuracy: '81.5',
            firingAccuracy2: '69.9',
            explosionRadius: '0.70',
          },
          {
            damageArmor1: 224,
            damageArmor2: 328,
            damageArmor3: 359,
            firingRange: 7.5,
            rateOfFire: 171,
            firingAccuracy: '83.7',
            firingAccuracy2: '74.3',
            explosionRadius: '0.70',
          },
        ],
      },
      // 24
      {
        level: 24,
        class: 10,
        hp: 8331,
        armor: '136 / 151',
        speed: '120 / 46',
        view: '12 / 9',
        cost: 600,
        time: 56,
        cp: 7,
        weapons: [
          {
            damageArmor1: 258,
            damageArmor2: 378,
            damageArmor3: 413,
            firingRange: 8.5,
            rateOfFire: 184,
            firingAccuracy: '83.0',
            firingAccuracy2: '72.3',
            explosionRadius: '0.70',
          },
          {
            damageArmor1: 258,
            damageArmor2: 378,
            damageArmor3: 413,
            firingRange: 7.5,
            rateOfFire: 184,
            firingAccuracy: '85.0',
            firingAccuracy2: '75.6',
            explosionRadius: '0.70',
          },
        ],
      },
      // 25
      {
        level: 25,
        class: 11,
        hp: 8610,
        armor: '144 / 159',
        speed: '120 / 46',
        view: '12 / 9',
        cost: 600,
        time: 56,
        cp: 7,
        weapons: [
          {
            damageArmor1: 278,
            damageArmor2: 404,
            damageArmor3: 441,
            firingRange: 9,
            rateOfFire: 184,
            firingAccuracy: '82.0',
            firingAccuracy2: '70.7',
            explosionRadius: '0.70',
          },
          {
            damageArmor1: 278,
            damageArmor2: 404,
            damageArmor3: 441,
            firingRange: 8,
            rateOfFire: 184,
            firingAccuracy: '84.0',
            firingAccuracy2: '73.9',
            explosionRadius: '0.70',
          },
        ],
      },
      // 26
      {
        level: 26,
        class: 12,
        hp: 8894,
        armor: '152 / 167',
        speed: '120 / 46',
        view: '12 / 9',
        cost: 600,
        time: 54,
        cp: 7,
        weapons: [
          {
            damageArmor1: 300,
            damageArmor2: 432,
            damageArmor3: 471,
            firingRange: 9,
            rateOfFire: 192,
            firingAccuracy: '82.0',
            firingAccuracy2: '71.7',
            explosionRadius: '0.70',
          },
          {
            damageArmor1: 300,
            damageArmor2: 432,
            damageArmor3: 471,
            firingRange: 8,
            rateOfFire: 192,
            firingAccuracy: '84.0',
            firingAccuracy2: '74.9',
            explosionRadius: '0.70',
          },
        ],
      },
      // 27
      {
        level: 27,
        class: 12,
        hp: 9477,
        armor: '160 / 175',
        speed: '120 / 46',
        view: '12 / 9',
        cost: 600,
        time: 54,
        cp: 7,
        weapons: [
          {
            damageArmor1: 322,
            damageArmor2: 460,
            damageArmor3: 501,
            firingRange: 9,
            rateOfFire: 192,
            firingAccuracy: '82.0',
            firingAccuracy2: '71.7',
            explosionRadius: '0.70',
          },
          {
            damageArmor1: 322,
            damageArmor2: 460,
            damageArmor3: 501,
            firingRange: 8,
            rateOfFire: 192,
            firingAccuracy: '84.0',
            firingAccuracy2: '74.9',
            explosionRadius: '0.70',
          },
        ],
      },
      // 28
      {
        level: 28,
        class: 12,
        hp: 10080,
        armor: '160 / 175',
        speed: '120 / 46',
        view: '12 / 9',
        cost: 600,
        time: 53,
        cp: 7,
        weapons: [
          {
            damageArmor1: 346,
            damageArmor2: 490,
            damageArmor3: 533,
            firingRange: 9,
            rateOfFire: 192,
            firingAccuracy: '82.0',
            firingAccuracy2: '71.7',
            explosionRadius: '0.70',
          },
          {
            damageArmor1: 346,
            damageArmor2: 490,
            damageArmor3: 533,
            firingRange: 8,
            rateOfFire: 192,
            firingAccuracy: '84.0',
            firingAccuracy2: '74.9',
            explosionRadius: '0.70',
          },
        ],
      },
      // 29
      {
        level: 29,
        class: 12,
        hp: 10080,
        armor: '160 / 175',
        speed: '120 / 46',
        view: '12 / 9',
        cost: 600,
        time: 53,
        cp: 7,
        weapons: [
          {
            damageArmor1: 346,
            damageArmor2: 490,
            damageArmor3: 533,
            firingRange: 9,
            rateOfFire: 192,
            firingAccuracy: '82.0',
            firingAccuracy2: '71.7',
            explosionRadius: '0.70',
          },
          {
            damageArmor1: 346,
            damageArmor2: 490,
            damageArmor3: 533,
            firingRange: 8,
            rateOfFire: 192,
            firingAccuracy: '84.0',
            firingAccuracy2: '74.9',
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
    description: '',
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
      // 16
      {
        level: 16,
        class: 5,
        hp: 13292,
        armor: 104,
        speed: 66,
        view: 8,
        cost: 900,
        time: 78,
        cp: 12,
        weapons: [
          {
            damageArmor1: 1007,
            damageArmor2: 2740,
            damageArmor3: 3044,
            firingRange: 9,
            rateOfFire: 23,
            firingAccuracy: '79.8',
            firingAccuracy2: '73.0',
            explosionRadius: '1.20',
          },
        ],
      },
      // 17
      {
        level: 17,
        class: 5,
        hp: 13750,
        armor: 111,
        speed: 66,
        view: 8,
        cost: 900,
        time: 78,
        cp: 12,
        weapons: [
          {
            damageArmor1: 1048,
            damageArmor2: 2854,
            damageArmor3: 3171,
            firingRange: 9,
            rateOfFire: 23,
            firingAccuracy: '79.8',
            firingAccuracy2: '73.0',
            explosionRadius: '1.20',
          },
        ],
      },
      // 18
      {
        level: 18,
        class: 6,
        hp: 14219,
        armor: 118,
        speed: 66,
        view: 8,
        cost: 900,
        time: 76,
        cp: 12,
        weapons: [
          {
            damageArmor1: 1091,
            damageArmor2: 2970,
            damageArmor3: 3300,
            firingRange: 9,
            rateOfFire: 25,
            firingAccuracy: '79.8',
            firingAccuracy2: '74.7',
            explosionRadius: '1.20',
          },
        ],
      },
      // 19
      {
        level: 19,
        class: 6,
        hp: 14698,
        armor: 125,
        speed: 66,
        view: 8,
        cost: 900,
        time: 76,
        cp: 12,
        weapons: [
          {
            damageArmor1: 1134,
            damageArmor2: 3088,
            damageArmor3: 3431,
            firingRange: 9.5,
            rateOfFire: 25,
            firingAccuracy: '78.6',
            firingAccuracy2: '73.3',
            explosionRadius: '1.20',
          },
        ],
      },
      // 20
      {
        level: 20,
        class: 7,
        hp: 15188,
        armor: 132,
        speed: 66,
        view: 9,
        cost: 900,
        time: 75,
        cp: 12,
        weapons: [
          {
            damageArmor1: 1178,
            damageArmor2: 3208,
            damageArmor3: 3564,
            firingRange: 9.5,
            rateOfFire: 27,
            firingAccuracy: '80.3',
            firingAccuracy2: '77.0',
            explosionRadius: '1.30',
          },
        ],
      },
      // 21
      {
        level: 21,
        class: 7,
        hp: 15688,
        armor: 139,
        speed: 66,
        view: 9,
        cost: 900,
        time: 75,
        cp: 12,
        weapons: [
          {
            damageArmor1: 1223,
            damageArmor2: 3330,
            damageArmor3: 3699,
            firingRange: 9.5,
            rateOfFire: 27,
            firingAccuracy: '80.3',
            firingAccuracy2: '77.0',
            explosionRadius: '1.30',
          },
        ],
      },
      // 22
      {
        level: 22,
        class: 8,
        hp: 16198,
        armor: 147,
        speed: 66,
        view: 9,
        cost: 900,
        time: 73,
        cp: 12,
        weapons: [
          {
            damageArmor1: 1269,
            damageArmor2: 3454,
            damageArmor3: 3836,
            firingRange: 9.5,
            rateOfFire: 30,
            firingAccuracy: '83.6',
            firingAccuracy2: '80.3',
            explosionRadius: '1.30',
          },
        ],
      },
      // 24
      {
        level: 24,
        class: 9,
        hp: 17250,
        armor: 163,
        speed: 66,
        view: 9,
        cost: 900,
        time: 71,
        cp: 12,
        weapons: [
          {
            damageArmor1: 1363,
            damageArmor2: 3708,
            damageArmor3: 4116,
            firingRange: 10,
            rateOfFire: 30,
            firingAccuracy: '83.9',
            firingAccuracy2: '82.3',
            explosionRadius: '1.40',
          },
        ],
      },
      // 25
      {
        level: 25,
        class: 9,
        hp: 17792,
        armor: 171,
        speed: 66,
        view: 9,
        cost: 900,
        time: 71,
        cp: 12,
        weapons: [
          {
            damageArmor1: 1411,
            damageArmor2: 3839,
            damageArmor3: 4259,
            firingRange: 10,
            rateOfFire: 30,
            firingAccuracy: '83.9',
            firingAccuracy2: '83.9',
            explosionRadius: '1.40',
          },
        ],
      },
      // 26
      {
        level: 26,
        class: 10,
        hp: 18906,
        armor: 179,
        speed: 66,
        view: 9,
        cost: 900,
        time: 69,
        cp: 12,
        weapons: [
          {
            damageArmor1: 1510,
            damageArmor2: 4107,
            damageArmor3: 4551,
            firingRange: 10,
            rateOfFire: 30,
            firingAccuracy: '87.1',
            firingAccuracy2: '87.1',
            explosionRadius: '1.40',
          },
        ],
      },
      // 27
      {
        level: 27,
        class: 11,
        hp: 20062,
        armor: 197,
        speed: 66,
        view: 9,
        cost: 900,
        time: 69,
        cp: 12,
        weapons: [
          {
            damageArmor1: 1612,
            damageArmor2: 4383,
            damageArmor3: 4853,
            firingRange: 10,
            rateOfFire: 30,
            firingAccuracy: '87.1',
            firingAccuracy2: '87.1',
            explosionRadius: '1.40',
          },
        ],
      },
      // 28
      {
        level: 28,
        class: 12,
        hp: 21260,
        armor: 215,
        speed: 66,
        view: 9,
        cost: 900,
        time: 67,
        cp: 12,
        weapons: [
          {
            damageArmor1: 1718,
            damageArmor2: 4667,
            damageArmor3: 5163,
            firingRange: 10,
            rateOfFire: 30,
            firingAccuracy: '87.1',
            firingAccuracy2: '87.1',
            explosionRadius: '1.40',
          },
        ],
      },
      // 29
      {
        level: 29,
        class: 12,
        hp: 22500,
        armor: 215,
        speed: 66,
        view: 9,
        cost: 900,
        time: 67,
        cp: 12,
        weapons: [
          {
            damageArmor1: 1827,
            damageArmor2: 4959,
            damageArmor3: 5481,
            firingRange: 10,
            rateOfFire: 30,
            firingAccuracy: '87.1',
            firingAccuracy2: '87.1',
            explosionRadius: '1.40',
          },
        ],
      },
    ],
  },
];
