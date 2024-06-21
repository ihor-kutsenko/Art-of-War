import cp from '../../images/icons/star.png';
import resources from '../../images/icons/3d.png';
import energy from '../../images/icons/green-energy.png';
import radius from '../../images/icons/grid.png';
// buildings
import hq from '../../images/buildings/resistance/hq.png';
import constructionYard from '../../images/buildings/resistance/construction-yard.png';
import powerPlant from '../../images/buildings/resistance/power-plant.png';
import supplyCenter from '../../images/buildings/resistance/supply-center.png';
import barracks from '../../images/buildings/resistance/barracks.png';
import assaultVehicleFactory from '../../images/buildings/resistance/assault-vehicle-factory.png';
import specialVehicleFactory from '../../images/buildings/resistance/special-vehicle-factory.png';
import aviaFactory from '../../images/buildings/resistance/avia-factory.png';
import airfield from '../../images/buildings/resistance/airfield.png';
import shipyard from '../../images/buildings/resistance/shipyard.png';
import prototypeFactory from '../../images/buildings/resistance/prototype-factory.png';
import nuclearLauncher from '../../images/buildings/resistance/nuclear-launcher.png';
import wall from '../../images/buildings/resistance/wall.png';
import sniperTower from '../../images/buildings/resistance/sniper-tower.png';
import gunTower from '../../images/buildings/resistance/gun-tower.png';
import antiAirTower from '../../images/buildings/resistance/anti-air-tower.png';
import navalPlatform from '../../images/buildings/resistance/naval-platform.png';
// units
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

// hero
import wasp from '../../images/hero/wasp.png';
import wolverine from '../../images/hero/wolverine.png';
import mole from '../../images/hero/mole.png';
import leviathan from '../../images/hero/leviathan.png';

export const resistanceBuildings = [
  // headquarters
  {
    id: 1,
    name: 'Headquarters',
    image: hq,
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
    image: constructionYard,
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
    image: powerPlant,
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
    image: supplyCenter,
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
    image: barracks,
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
            produces: [{ type: 'Rifleman', icon: rifleman }],
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
              { type: 'Rifleman', icon: rifleman },
              { type: 'Grenadier', icon: grenadier },
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
              { type: 'Rifleman', icon: rifleman },
              { type: 'Grenadier', icon: grenadier },
              { type: 'Sniper', icon: sniper },
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
            produces: [{ type: 'Rifleman', icon: rifleman }],
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
              { type: 'Rifleman', icon: rifleman },
              { type: 'Grenadier', icon: grenadier },
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
              { type: 'Rifleman', icon: rifleman },
              { type: 'Grenadier', icon: grenadier },
              { type: 'Sniper', icon: sniper },
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
    image: assaultVehicleFactory,
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
            produces: [{ type: 'Coyote', icon: coyote }],
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
              { type: 'Coyote', icon: coyote },
              { type: 'Armadillo', icon: armadillo },
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
              { type: 'Coyote', icon: coyote },
              { type: 'Armadillo', icon: armadillo },
              { type: 'Jaguar', icon: jaguar },
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
            produces: [{ type: 'Coyote', icon: coyote }],
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
              { type: 'Coyote', icon: coyote },
              { type: 'Armadillo', icon: armadillo },
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
              { type: 'Coyote', icon: coyote },
              { type: 'Armadillo', icon: armadillo },
              { type: 'Jaguar', icon: jaguar },
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
    image: specialVehicleFactory,
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
            produces: [{ type: 'Porcupine', icon: porcupine }],
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
              { type: 'Porcupine', icon: porcupine },
              { type: 'Mammoth', icon: mammoth },
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
              { type: 'Porcupine', icon: porcupine },
              { type: 'Mammoth', icon: mammoth },
              { type: 'Chameleon', icon: chameleon },
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
            produces: [{ type: 'Porcupine', icon: porcupine }],
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
              { type: 'Porcupine', icon: porcupine },
              { type: 'Mammoth', icon: mammoth },
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
              { type: 'Porcupine', icon: porcupine },
              { type: 'Mammoth', icon: mammoth },
              { type: 'Chameleon', icon: chameleon },
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
    image: aviaFactory,
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
            produces: [{ type: 'Dragonfly', icon: dragonfly }],
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
              { type: 'Dragonfly', icon: dragonfly },
              { type: 'Hawk', icon: hawk },
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
              { type: 'Dragonfly', icon: dragonfly },
              { type: 'Hawk', icon: hawk },
              { type: 'Albatross', icon: albatross },
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
            produces: [{ type: 'Dragonfly', icon: dragonfly }],
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
              { type: 'Dragonfly', icon: dragonfly },
              { type: 'Hawk', icon: hawk },
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
              { type: 'Dragonfly', icon: dragonfly },
              { type: 'Hawk', icon: hawk },
              { type: 'Albatross', icon: albatross },
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
    image: airfield,
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
    image: shipyard,
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
            produces: [{ type: 'Caiman', icon: caiman }],
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
              { type: 'Caiman', icon: caiman },
              { type: 'Alligator', icon: alligator },
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
              { type: 'Caiman', icon: caiman },
              { type: 'Alligator', icon: alligator },
              { type: 'Barracuda', icon: barracuda },
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
            produces: [{ type: 'Caiman', icon: caiman }],
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
              { type: 'Caiman', icon: caiman },
              { type: 'Alligator', icon: alligator },
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
              { type: 'Caiman', icon: caiman },
              { type: 'Alligator', icon: alligator },
              { type: 'Barracuda', icon: barracuda },
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
    image: prototypeFactory,
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
            produces: [{ type: 'Wasp', icon: wasp }],
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
              { type: 'Wasp', icon: wasp },
              { type: 'Wolverine', icon: wolverine },
              { type: 'Mole', icon: mole },
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
              { type: 'Wasp', icon: wasp },
              { type: 'Wolverine', icon: wolverine },
              { type: 'Mole', icon: mole },
              { type: 'Leviathan', icon: leviathan },
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
              { type: 'Wasp', icon: wasp },
              { type: 'Wolverine', icon: wolverine },
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
              { type: 'Wasp', icon: wasp },
              { type: 'Wolverine', icon: wolverine },
              { type: 'Mole', icon: mole },
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
              { type: 'Wasp', icon: wasp },
              { type: 'Wolverine', icon: wolverine },
              { type: 'Mole', icon: mole },
              { type: 'Leviathan', icon: leviathan },
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
    image: nuclearLauncher,
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
    image: wall,
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
    image: sniperTower,
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
    image: gunTower,
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
    image: antiAirTower,
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
    image: navalPlatform,
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
