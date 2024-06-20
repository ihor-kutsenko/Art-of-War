import cp from '../../images/icons/star.png';
import resources from '../../images/icons/3d.png';
import energy from '../../images/icons/green-energy.png';
import radius from '../../images/icons/grid.png';

import assault from '../../images/units/confederation/assault.png';

export const resistanceBuildings = [
  // headquarters
  {
    id: 1,
    name: 'Headquarters',
    image: assault,
    description: 'Description for Building',
    weapons: null,
    produces: [{ type: 'CP' }, { type: 'Resources' }, { type: 'Energy' }],
    levels: [
      // 7
      {
        level: 7,
        subLevels: [
          {
            subLevel: 1,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: null,
            produces: [
              { type: 'CP', amount: 0, icon: cp },
              { type: 'Resources', amount: 0, icon: resources },
              { type: 'Energy', amount: 0, icon: energy },
            ],
          },
          {
            subLevel: 2,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: null,
            produces: [
              { type: 'CP', amount: 0, icon: cp },
              { type: 'Resources', amount: 0, icon: resources },
              { type: 'Energy', amount: 0, icon: energy },
            ],
          },
          {
            subLevel: 3,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: null,
            produces: [
              { type: 'CP', amount: 0, icon: cp },
              { type: 'Resources', amount: 0, icon: resources },
              { type: 'Energy', amount: 0, icon: energy },
            ],
          },
        ],
      },
      // 29
      {
        level: 29,
        subLevels: [
          {
            subLevel: 1,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: null,
            produces: [
              { type: 'CP', amount: 0, icon: cp },
              { type: 'Resources', amount: 0, icon: resources },
              { type: 'Energy', amount: 0, icon: energy },
            ],
          },
          {
            subLevel: 2,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: null,
            produces: [
              { type: 'CP', amount: 0, icon: cp },
              { type: 'Resources', amount: 0, icon: resources },
              { type: 'Energy', amount: 0, icon: energy },
            ],
          },
          {
            subLevel: 3,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: null,
            produces: [
              { type: 'CP', amount: 0, icon: cp },
              { type: 'Resources', amount: 0, icon: resources },
              { type: 'Energy', amount: 0, icon: energy },
            ],
          },
          {
            subLevel: 4,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: null,
            produces: [
              { type: 'CP', amount: 0, icon: cp },
              { type: 'Resources', amount: 0, icon: resources },
              { type: 'Energy', amount: 0, icon: energy },
            ],
          },
          {
            subLevel: 5,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: null,
            produces: [
              { type: 'CP', amount: 0, icon: cp },
              { type: 'Resources', amount: 0, icon: resources },
              { type: 'Energy', amount: 0, icon: energy },
            ],
          },
        ],
      },
    ],
  },
  // Construction Yard
  {
    id: 2,
    name: 'Construction Yard',
    image: assault,
    description: 'Description for Building',
    weapons: null,
    produces: [{ type: 'Radius' }],
    levels: [
      // 7
      {
        level: 7,
        subLevels: [
          {
            subLevel: 1,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: null,
            produces: [{ type: 'Radius', amount: 0, icon: radius }],
          },
        ],
      },
      // 29
      {
        level: 29,
        subLevels: [
          {
            subLevel: 1,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: null,
            produces: [{ type: 'Radius', amount: 0, icon: radius }],
          },
        ],
      },
    ],
  },
  // Power Plant
  {
    id: 3,
    name: 'Power Plant',
    image: assault,
    description: 'Description for Building',
    weapons: null,
    produces: [{ type: 'Energy' }],
    levels: [
      // 7
      {
        level: 7,
        subLevels: [
          {
            subLevel: 1,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: null,
            produces: [{ type: 'Energy', amount: 0, icon: energy }],
          },
        ],
      },
      // 29
      {
        level: 29,
        subLevels: [
          {
            subLevel: 1,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: null,
            produces: [{ type: 'Radius', amount: 0, icon: radius }],
          },
        ],
      },
    ],
  },
  // Supply Center
  {
    id: 4,
    name: 'Supply Center',
    image: assault,
    description: 'Description for Building',
    weapons: null,
    produces: [{ type: 'Resources' }],
    levels: [
      // 7
      {
        level: 7,
        subLevels: [
          {
            subLevel: 1,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: null,
            produces: [{ type: 'Resources', amount: 0, icon: resources }],
          },
        ],
      },
      // 29
      {
        level: 29,
        subLevels: [
          {
            subLevel: 1,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: null,
            produces: [{ type: 'Resources', amount: 0, icon: resources }],
          },
        ],
      },
    ],
  },
  // Barracks
  {
    id: 5,
    name: 'Barracks',
    image: assault,
    description: 'Description for Building',
    weapons: null,
    produces: null,
    levels: [
      // 7
      {
        level: 7,
        subLevels: [
          {
            subLevel: 1,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: null,
            produces: [{ type: 'Rifleman', icon: assault }],
          },
          {
            subLevel: 2,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: null,
            produces: [
              { type: 'Rifleman', icon: assault },
              { type: 'Grenadier', icon: assault },
            ],
          },
          {
            subLevel: 3,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: null,
            produces: [
              { type: 'Rifleman', icon: assault },
              { type: 'Grenadier', icon: assault },
              { type: 'Sniper', icon: assault },
            ],
          },
        ],
      },
      // 29
      {
        level: 29,
        subLevels: [
          {
            subLevel: 1,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: null,
            produces: [{ type: 'Rifleman', icon: assault }],
          },
          {
            subLevel: 2,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: null,
            produces: [
              { type: 'Rifleman', icon: assault },
              { type: 'Grenadier', icon: assault },
            ],
          },
          {
            subLevel: 3,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: null,
            produces: [
              { type: 'Rifleman', icon: assault },
              { type: 'Grenadier', icon: assault },
              { type: 'Sniper', icon: assault },
            ],
          },
        ],
      },
    ],
  },
  // Assault Vehicle Factory
  {
    id: 6,
    name: 'Assault Vehicle Factory',
    image: assault,
    description: 'Description for Building',
    weapons: null,
    produces: null,
    levels: [
      // 7
      {
        level: 7,
        subLevels: [
          {
            subLevel: 1,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: null,
            produces: [{ type: 'Coyote', icon: assault }],
          },
          {
            subLevel: 2,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: null,
            produces: [
              { type: 'Coyote', icon: assault },
              { type: 'Armadillo', icon: assault },
            ],
          },
          {
            subLevel: 3,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: null,
            produces: [
              { type: 'Coyote', icon: assault },
              { type: 'Armadillo', icon: assault },
              { type: 'Jaguar', icon: assault },
            ],
          },
        ],
      },
      // 29
      {
        level: 29,
        subLevels: [
          {
            subLevel: 1,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: null,
            produces: [{ type: 'Coyote', icon: assault }],
          },
          {
            subLevel: 2,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: null,
            produces: [
              { type: 'Coyote', icon: assault },
              { type: 'Armadillo', icon: assault },
            ],
          },
          {
            subLevel: 3,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: null,
            produces: [
              { type: 'Coyote', icon: assault },
              { type: 'Armadillo', icon: assault },
              { type: 'Jaguar', icon: assault },
            ],
          },
        ],
      },
    ],
  },
  // Special Vehicle Factory
  {
    id: 7,
    name: 'Special Vehicle Factory',
    image: assault,
    description: 'Description for Building',
    weapons: null,
    produces: null,
    levels: [
      // 7
      {
        level: 7,
        subLevels: [
          {
            subLevel: 1,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: null,
            produces: [{ type: 'Porcupine', icon: assault }],
          },
          {
            subLevel: 2,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: null,
            produces: [
              { type: 'Porcupine', icon: assault },
              { type: 'Mammoth', icon: assault },
            ],
          },
          {
            subLevel: 3,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: null,
            produces: [
              { type: 'Porcupine', icon: assault },
              { type: 'Mammoth', icon: assault },
              { type: 'Chameleon', icon: assault },
            ],
          },
        ],
      },
      // 29
      {
        level: 29,
        subLevels: [
          {
            subLevel: 1,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: null,
            produces: [{ type: 'Porcupine', icon: assault }],
          },
          {
            subLevel: 2,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: null,
            produces: [
              { type: 'Porcupine', icon: assault },
              { type: 'Mammoth', icon: assault },
            ],
          },
          {
            subLevel: 3,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: null,
            produces: [
              { type: 'Porcupine', icon: assault },
              { type: 'Mammoth', icon: assault },
              { type: 'Chameleon', icon: assault },
            ],
          },
        ],
      },
    ],
  },
  // Avia Factory
  {
    id: 8,
    name: 'Avia Factory',
    image: assault,
    description: 'Description for Building',
    weapons: null,
    produces: null,
    levels: [
      // 7
      {
        level: 7,
        subLevels: [
          {
            subLevel: 1,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: null,
            produces: [{ type: 'Dragonfly', icon: assault }],
          },
          {
            subLevel: 2,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: null,
            produces: [
              { type: 'Dragonfly', icon: assault },
              { type: 'Hawk', icon: assault },
            ],
          },
          {
            subLevel: 3,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: null,
            produces: [
              { type: 'Dragonfly', icon: assault },
              { type: 'Hawk', icon: assault },
              { type: 'Albatross', icon: assault },
            ],
          },
        ],
      },
      // 29
      {
        level: 29,
        subLevels: [
          {
            subLevel: 1,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: null,
            produces: [{ type: 'Dragonfly', icon: assault }],
          },
          {
            subLevel: 2,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: null,
            produces: [
              { type: 'Dragonfly', icon: assault },
              { type: 'Hawk', icon: assault },
            ],
          },
          {
            subLevel: 3,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: null,
            produces: [
              { type: 'Dragonfly', icon: assault },
              { type: 'Hawk', icon: assault },
              { type: 'Albatross', icon: assault },
            ],
          },
        ],
      },
    ],
  },
  // Airfield
  {
    id: 9,
    name: 'Airfield',
    image: assault,
    description: 'Description for Building',
    weapons: null,
    produces: null,
    levels: [
      // 7
      {
        level: 7,
        subLevels: [
          {
            subLevel: 1,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: null,
            produces: null,
          },
        ],
      },
      // 29
      {
        level: 29,
        subLevels: [
          {
            subLevel: 1,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: null,
            produces: null,
          },
        ],
      },
    ],
  },
  // Shipyard
  {
    id: 10,
    name: 'Shipyard',
    image: assault,
    description: 'Description for Building',
    weapons: null,
    produces: null,
    levels: [
      // 7
      {
        level: 7,
        subLevels: [
          {
            subLevel: 1,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: null,
            produces: [{ type: 'Caiman', icon: assault }],
          },
          {
            subLevel: 2,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: null,
            produces: [
              { type: 'Caiman', icon: assault },
              { type: 'Alligator', icon: assault },
            ],
          },
          {
            subLevel: 3,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: null,
            produces: [
              { type: 'Caiman', icon: assault },
              { type: 'Alligator', icon: assault },
              { type: 'Barracuda', icon: assault },
            ],
          },
        ],
      },
      // 29
      {
        level: 29,
        subLevels: [
          {
            subLevel: 1,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: null,
            produces: [{ type: 'Caiman', icon: assault }],
          },
          {
            subLevel: 2,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: null,
            produces: [
              { type: 'Caiman', icon: assault },
              { type: 'Alligator', icon: assault },
            ],
          },
          {
            subLevel: 3,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: null,
            produces: [
              { type: 'Caiman', icon: assault },
              { type: 'Alligator', icon: assault },
              { type: 'Barracuda', icon: assault },
            ],
          },
        ],
      },
    ],
  },
  // Prototype Factory
  {
    id: 11,
    name: 'Prototype Factory',
    image: assault,
    description: 'Description for Building',
    weapons: null,
    produces: null,
    levels: [
      // 7
      {
        level: 7,
        subLevels: [
          {
            subLevel: 1,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: null,
            produces: [{ type: 'Wasp', icon: assault }],
          },
          {
            subLevel: 2,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: null,
            produces: [
              { type: 'Wasp', icon: assault },
              { type: 'Wolverine', icon: assault },
              { type: 'Mole', icon: assault },
            ],
          },
          {
            subLevel: 3,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: null,
            produces: [
              { type: 'Wasp', icon: assault },
              { type: 'Wolverine', icon: assault },
              { type: 'Mole', icon: assault },
              { type: 'Leviathan', icon: assault },
            ],
          },
        ],
      },
      // 29
      {
        level: 29,
        subLevels: [
          {
            subLevel: 1,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: null,
            produces: [
              { type: 'Wasp', icon: assault },
              { type: 'Wolverine', icon: assault },
            ],
          },
          {
            subLevel: 2,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: null,
            produces: [
              { type: 'Wasp', icon: assault },
              { type: 'Wolverine', icon: assault },
              { type: 'Mole', icon: assault },
            ],
          },
          {
            subLevel: 3,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: null,
            produces: [
              { type: 'Wasp', icon: assault },
              { type: 'Wolverine', icon: assault },
              { type: 'Mole', icon: assault },
              { type: 'Leviathan', icon: assault },
            ],
          },
        ],
      },
    ],
  },
  // Nuclear Launcher
  {
    id: 12,
    name: 'Nuclear Launcher',
    image: assault,
    description: 'Description for Building',
    weapons: [{ type: 'Nuclear Missile' }],
    produces: null,
    levels: [
      // 7
      {
        level: 7,
        subLevels: [
          {
            subLevel: 1,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: [
              {
                title: 'Nuclear Missile',
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
            produces: null,
          },
        ],
      },
      // 29
      {
        level: 29,
        subLevels: [
          {
            subLevel: 1,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: [
              {
                title: 'Nuclear Missile',
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
            produces: null,
          },
        ],
      },
    ],
  },
  // Wall
  {
    id: 13,
    name: 'Wall',
    image: assault,
    description: 'Description for Building',
    weapons: null,
    produces: null,
    levels: [
      // 7
      {
        level: 7,
        subLevels: [
          {
            subLevel: 1,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: null,
            produces: null,
          },
        ],
      },
      // 29
      {
        level: 29,
        subLevels: [
          {
            subLevel: 1,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: null,
            produces: null,
          },
        ],
      },
    ],
  },
  // Sniper Tower
  {
    id: 14,
    name: 'Sniper Tower',
    image: assault,
    description: 'Description for Building',
    weapons: [{ type: 'Sniper Rifle' }],
    produces: null,
    levels: [
      // 7
      {
        level: 7,
        subLevels: [
          {
            subLevel: 1,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: [
              {
                title: 'Sniper Rifle',
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
            produces: null,
          },
        ],
      },
      // 29
      {
        level: 29,
        subLevels: [
          {
            subLevel: 1,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: [
              {
                title: 'Sniper Rifle',
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
            produces: null,
          },
        ],
      },
    ],
  },
  // Gun Tower
  {
    id: 15,
    name: 'Gun Tower',
    image: assault,
    description: 'Description for Building',
    weapons: [{ type: '200MM Stationary Gun' }],
    produces: null,
    levels: [
      // 7
      {
        level: 7,
        subLevels: [
          {
            subLevel: 1,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: [
              {
                title: '200MM Stationary Gun',
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
            produces: null,
          },
        ],
      },
      // 29
      {
        level: 29,
        subLevels: [
          {
            subLevel: 1,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: [
              {
                title: '200MM Stationary Gun',
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
            produces: null,
          },
        ],
      },
    ],
  },
  // Anti-Air Tower
  {
    id: 16,
    name: 'Anti-Air Tower',
    image: assault,
    description: 'Description for Building',
    weapons: [{ type: 'Stationary Sam Launcher' }],
    produces: null,
    levels: [
      // 7
      {
        level: 7,
        subLevels: [
          {
            subLevel: 1,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: [
              {
                title: 'Stationary Sam Launcher',
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
            produces: null,
          },
        ],
      },
      // 29
      {
        level: 29,
        subLevels: [
          {
            subLevel: 1,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: [
              {
                title: 'Stationary Sam Launcher',
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
            produces: null,
          },
        ],
      },
    ],
  },
  // Naval Platform
  {
    id: 17,
    name: 'Naval Platform',
    image: assault,
    description: 'Description for Building',
    weapons: [{ type: '30MM Flack Cannon' }],
    produces: null,
    levels: [
      // 7
      {
        level: 7,
        subLevels: [
          {
            subLevel: 1,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: [
              {
                title: '30MM Flack Cannon',
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
            produces: null,
          },
        ],
      },
      // 29
      {
        level: 29,
        subLevels: [
          {
            subLevel: 1,
            hp: 0,
            armor: 0,
            energy: 0,
            size: 0,
            cost: 0,
            time: 0,
            weapons: [
              {
                title: '30MM Flack Cannon',
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
            produces: null,
          },
        ],
      },
    ],
  },
];
