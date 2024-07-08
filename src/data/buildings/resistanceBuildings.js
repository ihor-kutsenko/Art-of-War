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
      // 28
      {
        level: 22,
        subLevels: [
          {
            subLevel: 1,
            hp: 20020,
            armor: 158,
            energy: 0,
            size: '3x3',
            cost: 1000,
            time: 35,
            weapons: null,
            produces: [
              { type: 'CP', amount: 40, icon: cp },
              { type: 'Resources', amount: 50, icon: resources },
              { type: 'Energy', amount: 80, icon: energy },
            ],
          },
          {
            subLevel: 2,
            hp: 24750,
            armor: 163,
            energy: 0,
            size: '3x3',
            cost: 400,
            time: 49,
            weapons: null,
            produces: [
              { type: 'CP', amount: 70, icon: cp },
              { type: 'Resources', amount: 80, icon: resources },
              { type: 'Energy', amount: 120, icon: energy },
            ],
          },
          {
            subLevel: 3,
            hp: 29038,
            armor: 168,
            energy: 0,
            size: '3x3',
            cost: 800,
            time: 63,
            weapons: null,
            produces: [
              { type: 'CP', amount: 100, icon: cp },
              { type: 'Resources', amount: 110, icon: resources },
              { type: 'Energy', amount: 160, icon: energy },
            ],
          },
          {
            subLevel: 4,
            hp: 32892,
            armor: 173,
            energy: 0,
            size: '3x3',
            cost: 1300,
            time: 84,
            weapons: null,
            produces: [
              { type: 'CP', amount: 130, icon: cp },
              { type: 'Resources', amount: 140, icon: resources },
              { type: 'Energy', amount: 200, icon: energy },
            ],
          },
          {
            subLevel: 5,
            hp: 40480,
            armor: 178,
            energy: 0,
            size: '3x3',
            cost: 1600,
            time: 98,
            weapons: null,
            produces: [
              { type: 'CP', amount: 160, icon: cp },
              { type: 'Resources', amount: 170, icon: resources },
              { type: 'Energy', amount: 240, icon: energy },
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
            hp: 20020,
            armor: 158,
            energy: 0,
            size: '3x3',
            cost: 1000,
            time: 35,
            weapons: null,
            produces: [
              { type: 'CP', amount: 40, icon: cp },
              { type: 'Resources', amount: 50, icon: resources },
              { type: 'Energy', amount: 80, icon: energy },
            ],
          },
          {
            subLevel: 2,
            hp: 24750,
            armor: 163,
            energy: 0,
            size: '3x3',
            cost: 400,
            time: 49,
            weapons: null,
            produces: [
              { type: 'CP', amount: 70, icon: cp },
              { type: 'Resources', amount: 80, icon: resources },
              { type: 'Energy', amount: 120, icon: energy },
            ],
          },
          {
            subLevel: 3,
            hp: 29038,
            armor: 168,
            energy: 0,
            size: '3x3',
            cost: 800,
            time: 63,
            weapons: null,
            produces: [
              { type: 'CP', amount: 100, icon: cp },
              { type: 'Resources', amount: 110, icon: resources },
              { type: 'Energy', amount: 160, icon: energy },
            ],
          },
          {
            subLevel: 4,
            hp: 32892,
            armor: 173,
            energy: 0,
            size: '3x3',
            cost: 1300,
            time: 84,
            weapons: null,
            produces: [
              { type: 'CP', amount: 130, icon: cp },
              { type: 'Resources', amount: 140, icon: resources },
              { type: 'Energy', amount: 200, icon: energy },
            ],
          },
          {
            subLevel: 5,
            hp: 40480,
            armor: 178,
            energy: 0,
            size: '3x3',
            cost: 1600,
            time: 98,
            weapons: null,
            produces: [
              { type: 'CP', amount: 160, icon: cp },
              { type: 'Resources', amount: 170, icon: resources },
              { type: 'Energy', amount: 240, icon: energy },
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
      // 28
      {
        level: 28,
        subLevels: [
          {
            subLevel: 1,
            hp: 10811,
            armor: 137,
            energy: 40,
            size: '2x2',
            cost: 300,
            time: 21,
            weapons: null,
            produces: [{ type: 'Radius', amount: 11, icon: radius }],
          },
        ],
      },
      // 29
      {
        level: 29,
        subLevels: [
          {
            subLevel: 1,
            hp: 10811,
            armor: 137,
            energy: 40,
            size: '2x2',
            cost: 300,
            time: 21,
            weapons: null,
            produces: [{ type: 'Radius', amount: 11, icon: radius }],
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
      // 28
      {
        level: 28,
        subLevels: [
          {
            subLevel: 1,
            hp: 9781,
            armor: 127,
            energy: 0,
            size: '2x2',
            cost: 250,
            time: 21,
            weapons: null,
            produces: [{ type: 'Energy', amount: 150, icon: energy }],
          },
        ],
      },
      // 29
      {
        level: 29,
        subLevels: [
          {
            subLevel: 1,
            hp: 9781,
            armor: 127,
            energy: 0,
            size: '2x2',
            cost: 250,
            time: 21,
            weapons: null,
            produces: [{ type: 'Energy', amount: 150, icon: energy }],
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
      // 28
      {
        level: 28,
        subLevels: [
          {
            subLevel: 1,
            hp: 9781,
            armor: 137,
            energy: 40,
            size: '2x2',
            cost: 300,
            time: 28,
            weapons: null,
            produces: [{ type: 'Resources', amount: 250, icon: resources }],
          },
        ],
      },
      // 29
      {
        level: 29,
        subLevels: [
          {
            subLevel: 1,
            hp: 9781,
            armor: 137,
            energy: 40,
            size: '2x2',
            cost: 300,
            time: 28,
            weapons: null,
            produces: [{ type: 'Resources', amount: 250, icon: resources }],
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
      // 28
      {
        level: 28,
        subLevels: [
          {
            subLevel: 1,
            hp: 6692,
            armor: 124,
            energy: 10,
            size: '2x2',
            cost: 80,
            time: 14,
            weapons: null,
            produces: [{ type: 'Rifleman', icon: rifleman }],
          },
          {
            subLevel: 2,
            hp: 7920,
            armor: 129,
            energy: 15,
            size: '2x2',
            cost: 100,
            time: 21,
            weapons: null,
            produces: [
              { type: 'Rifleman', icon: rifleman },
              { type: 'Grenadier', icon: grenadier },
            ],
          },
          {
            subLevel: 3,
            hp: 9030,
            armor: 134,
            energy: 20,
            size: '2x2',
            cost: 120,
            time: 28,
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
            hp: 6692,
            armor: 124,
            energy: 10,
            size: '2x2',
            cost: 80,
            time: 14,
            weapons: null,
            produces: [{ type: 'Rifleman', icon: rifleman }],
          },
          {
            subLevel: 2,
            hp: 7920,
            armor: 129,
            energy: 15,
            size: '2x2',
            cost: 100,
            time: 21,
            weapons: null,
            produces: [
              { type: 'Rifleman', icon: rifleman },
              { type: 'Grenadier', icon: grenadier },
            ],
          },
          {
            subLevel: 3,
            hp: 9030,
            armor: 134,
            energy: 20,
            size: '2x2',
            cost: 120,
            time: 28,
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
      // 28
      {
        level: 28,
        subLevels: [
          {
            subLevel: 1,
            hp: 9782,
            armor: 130,
            energy: 15,
            size: '3x3',
            cost: 160,
            time: 21,
            weapons: null,
            produces: [{ type: 'Coyote', icon: coyote }],
          },
          {
            subLevel: 2,
            hp: 10641,
            armor: 135,
            energy: 30,
            size: '3x3',
            cost: 210,
            time: 32,
            weapons: null,
            produces: [
              { type: 'Coyote', icon: coyote },
              { type: 'Armadillo', icon: armadillo },
            ],
          },
          {
            subLevel: 3,
            hp: 13781,
            armor: 140,
            energy: 60,
            size: '3x3',
            cost: 310,
            time: 42,
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
            hp: 9782,
            armor: 130,
            energy: 15,
            size: '3x3',
            cost: 160,
            time: 21,
            weapons: null,
            produces: [{ type: 'Coyote', icon: coyote }],
          },
          {
            subLevel: 2,
            hp: 10641,
            armor: 135,
            energy: 30,
            size: '3x3',
            cost: 210,
            time: 32,
            weapons: null,
            produces: [
              { type: 'Coyote', icon: coyote },
              { type: 'Armadillo', icon: armadillo },
            ],
          },
          {
            subLevel: 3,
            hp: 13781,
            armor: 140,
            energy: 60,
            size: '3x3',
            cost: 310,
            time: 42,
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
      // 28
      {
        level: 28,
        subLevels: [
          {
            subLevel: 1,
            hp: 11388,
            armor: 131,
            energy: 30,
            size: '3x3',
            cost: 200,
            time: 28,
            weapons: null,
            produces: [{ type: 'Porcupine', icon: porcupine }],
          },
          {
            subLevel: 2,
            hp: 12355,
            armor: 136,
            energy: 45,
            size: '3x3',
            cost: 250,
            time: 42,
            weapons: null,
            produces: [
              { type: 'Porcupine', icon: porcupine },
              { type: 'Mammoth', icon: mammoth },
            ],
          },
          {
            subLevel: 3,
            hp: 15483,
            armor: 141,
            energy: 70,
            size: '3x3',
            cost: 300,
            time: 56,
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
            hp: 11388,
            armor: 131,
            energy: 30,
            size: '3x3',
            cost: 200,
            time: 28,
            weapons: null,
            produces: [{ type: 'Porcupine', icon: porcupine }],
          },
          {
            subLevel: 2,
            hp: 12355,
            armor: 136,
            energy: 45,
            size: '3x3',
            cost: 250,
            time: 42,
            weapons: null,
            produces: [
              { type: 'Porcupine', icon: porcupine },
              { type: 'Mammoth', icon: mammoth },
            ],
          },
          {
            subLevel: 3,
            hp: 15483,
            armor: 141,
            energy: 70,
            size: '3x3',
            cost: 300,
            time: 56,
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
      // 28
      {
        level: 28,
        subLevels: [
          {
            subLevel: 1,
            hp: 12871,
            armor: 131,
            energy: 30,
            size: '3x3',
            cost: 250,
            time: 42,
            weapons: null,
            produces: [{ type: 'Dragonfly', icon: dragonfly }],
          },
          {
            subLevel: 2,
            hp: 13305,
            armor: 136,
            energy: 60,
            size: '3x3',
            cost: 320,
            time: 56,
            weapons: null,
            produces: [
              { type: 'Dragonfly', icon: dragonfly },
              { type: 'Hawk', icon: hawk },
            ],
          },
          {
            subLevel: 3,
            hp: 17305,
            armor: 141,
            energy: 90,
            size: '3x3',
            cost: 400,
            time: 70,
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
            hp: 12871,
            armor: 131,
            energy: 30,
            size: '3x3',
            cost: 250,
            time: 42,
            weapons: null,
            produces: [{ type: 'Dragonfly', icon: dragonfly }],
          },
          {
            subLevel: 2,
            hp: 13305,
            armor: 136,
            energy: 60,
            size: '3x3',
            cost: 320,
            time: 56,
            weapons: null,
            produces: [
              { type: 'Dragonfly', icon: dragonfly },
              { type: 'Hawk', icon: hawk },
            ],
          },
          {
            subLevel: 3,
            hp: 17305,
            armor: 141,
            energy: 90,
            size: '3x3',
            cost: 400,
            time: 70,
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
      // 28
      {
        level: 28,
        subLevels: [
          {
            subLevel: 1,
            hp: 11880,
            armor: 126,
            energy: 40,
            size: '3x3',
            cost: 300,
            time: 35,
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
            hp: 11880,
            armor: 126,
            energy: 40,
            size: '3x3',
            cost: 300,
            time: 35,
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
      // 28
      {
        level: 28,
        subLevels: [
          {
            subLevel: 1,
            hp: 13860,
            armor: 131,
            energy: 30,
            size: '3x3',
            cost: 200,
            time: 42,
            weapons: null,
            produces: [{ type: 'Caiman', icon: caiman }],
          },
          {
            subLevel: 2,
            hp: 15206,
            armor: 136,
            energy: 60,
            size: '3x3',
            cost: 270,
            time: 56,
            weapons: null,
            produces: [
              { type: 'Caiman', icon: caiman },
              { type: 'Alligator', icon: alligator },
            ],
          },
          {
            subLevel: 3,
            hp: 19581,
            armor: 141,
            energy: 90,
            size: '3x3',
            cost: 300,
            time: 70,
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
            hp: 13860,
            armor: 131,
            energy: 30,
            size: '3x3',
            cost: 200,
            time: 42,
            weapons: null,
            produces: [{ type: 'Caiman', icon: caiman }],
          },
          {
            subLevel: 2,
            hp: 15206,
            armor: 136,
            energy: 60,
            size: '3x3',
            cost: 270,
            time: 56,
            weapons: null,
            produces: [
              { type: 'Caiman', icon: caiman },
              { type: 'Alligator', icon: alligator },
            ],
          },
          {
            subLevel: 3,
            hp: 19581,
            armor: 141,
            energy: 90,
            size: '3x3',
            cost: 300,
            time: 70,
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
      // 28
      {
        level: 28,
        subLevels: [
          {
            subLevel: 1,
            hp: 14850,
            armor: 138,
            energy: 40,
            size: '3x3',
            cost: 270,
            time: 49,
            weapons: null,
            produces: [
              { type: 'Wasp', icon: wasp },
              { type: 'Wolverine', icon: wolverine },
            ],
          },
          {
            subLevel: 2,
            hp: 16633,
            armor: 148,
            energy: 60,
            size: '3x3',
            cost: 400,
            time: 63,
            weapons: null,
            produces: [
              { type: 'Wasp', icon: wasp },
              { type: 'Wolverine', icon: wolverine },
              { type: 'Mole', icon: mole },
            ],
          },
          {
            subLevel: 3,
            hp: 20493,
            armor: 158,
            energy: 90,
            size: '3x3',
            cost: 550,
            time: 77,
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
            hp: 14850,
            armor: 144,
            energy: 40,
            size: '3x3',
            cost: 270,
            time: 49,
            weapons: null,
            produces: [
              { type: 'Wasp', icon: wasp },
              { type: 'Wolverine', icon: wolverine },
            ],
          },
          {
            subLevel: 2,
            hp: 16633,
            armor: 154,
            energy: 60,
            size: '3x3',
            cost: 400,
            time: 63,
            weapons: null,
            produces: [
              { type: 'Wasp', icon: wasp },
              { type: 'Wolverine', icon: wolverine },
              { type: 'Mole', icon: mole },
            ],
          },
          {
            subLevel: 3,
            hp: 20493,
            armor: 164,
            energy: 90,
            size: '3x3',
            cost: 550,
            time: 77,
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
      // 28
      {
        level: 28,
        subLevels: [
          {
            subLevel: 1,
            hp: 13009,
            armor: 131,
            energy: 100,
            size: '3x3',
            cost: 1800,
            time: 88,
            weapons: [
              {
                title: 'Nuclear Missile',
                damageArmor1: 49621,
                damageArmor2: 49621,
                damageArmor3: 49621,
                firingRange: 100,
                rateOfFire: null,
                firingAccuracy: '96.0',
                firingAccuracy2: '0.00',
                explosionRadius: '12.0',
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
            hp: 13009,
            armor: 131,
            energy: 100,
            size: '3x3',
            cost: 1800,
            time: 88,
            weapons: [
              {
                title: 'Nuclear Missile',
                damageArmor1: 50903,
                damageArmor2: 50903,
                damageArmor3: 50903,
                firingRange: 100,
                rateOfFire: null,
                firingAccuracy: '96.0',
                firingAccuracy2: '0.00',
                explosionRadius: '12.0',
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
      // 28
      {
        level: 28,
        subLevels: [
          {
            subLevel: 1,
            hp: 1979,
            armor: 288,
            energy: 0,
            size: '1x1',
            cost: 50,
            time: 35,
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
            hp: 1979,
            armor: 288,
            energy: 0,
            size: '1x1',
            cost: 50,
            time: 35,
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
      // 28
      {
        level: 28,
        subLevels: [
          {
            subLevel: 1,
            hp: 5665,
            armor: 129,
            energy: 10,
            size: '2x2',
            cost: 170,
            time: 35,
            weapons: [
              {
                title: 'Sniper Rifle',
                damageArmor1: 677,
                damageArmor2: 261,
                damageArmor3: 171,
                firingRange: 13.5,
                rateOfFire: 30,
                firingAccuracy: '99.0',
                firingAccuracy2: '0.00',
                explosionRadius: '0.00',
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
            hp: 5665,
            armor: 129,
            energy: 10,
            size: '2x2',
            cost: 170,
            time: 35,
            weapons: [
              {
                title: 'Sniper Rifle',
                damageArmor1: 677,
                damageArmor2: 261,
                damageArmor3: 171,
                firingRange: 13.5,
                rateOfFire: 30,
                firingAccuracy: '99.0',
                firingAccuracy2: '0.00',
                explosionRadius: '0.00',
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
      // 28
      {
        level: 28,
        subLevels: [
          {
            subLevel: 1,
            hp: 5940,
            armor: 135,
            energy: 35,
            size: '2x2',
            cost: 300,
            time: 56,
            weapons: [
              {
                title: '200MM Stationary Gun',
                damageArmor1: 843,
                damageArmor2: 1794,
                damageArmor3: 1895,
                firingRange: 9.5,
                rateOfFire: 48,
                firingAccuracy: '78.6',
                firingAccuracy2: '0.00',
                explosionRadius: '1.30',
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
            hp: 5940,
            armor: 135,
            energy: 35,
            size: '2x2',
            cost: 300,
            time: 56,
            weapons: [
              {
                title: '200MM Stationary Gun',
                damageArmor1: 843,
                damageArmor2: 1794,
                damageArmor3: 1895,
                firingRange: 9.5,
                rateOfFire: 48,
                firingAccuracy: '78.6',
                firingAccuracy2: '0.00',
                explosionRadius: '1.30',
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
      // 28
      {
        level: 28,
        subLevels: [
          {
            subLevel: 1,
            hp: 5702,
            armor: 126,
            energy: 35,
            size: '1x1',
            cost: 250,
            time: 42,
            weapons: [
              {
                title: 'Stationary Sam Launcher',
                damageArmor1: 247,
                damageArmor2: 678,
                damageArmor3: 407,
                firingRange: 11,
                rateOfFire: 75,
                firingAccuracy: '97.0',
                firingAccuracy2: '0.00',
                explosionRadius: '1.10',
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
            hp: 5702,
            armor: 126,
            energy: 35,
            size: '1x1',
            cost: 250,
            time: 42,
            weapons: [
              {
                title: 'Stationary Sam Launcher',
                damageArmor1: 247,
                damageArmor2: 678,
                damageArmor3: 407,
                firingRange: 11,
                rateOfFire: 75,
                firingAccuracy: '97.0',
                firingAccuracy2: '0.00',
                explosionRadius: '1.10',
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
    weapons: [{ type: 'Torpedo Launcher' }, { type: '30MM Flack Cannon' }],
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
                title: 'Torpedo Launcher',
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
      // 28
      {
        level: 28,
        subLevels: [
          {
            subLevel: 1,
            hp: 11880,
            armor: 131,
            energy: 35,
            size: '2x2',
            cost: 300,
            time: 49,
            weapons: [
              {
                title: 'Torpedo Launcher',
                damageArmor1: 778,
                damageArmor2: 3226,
                damageArmor3: 3830,
                firingRange: 11,
                rateOfFire: 33,
                firingAccuracy: '95.0',
                firingAccuracy2: '0.00',
                explosionRadius: '1.40',
              },
              {
                title: '30MM Flack Cannon',
                damageArmor1: 150,
                damageArmor2: 308,
                damageArmor3: 187,
                firingRange: 11,
                rateOfFire: 150,
                firingAccuracy: '90.0',
                firingAccuracy2: '0.00',
                explosionRadius: '1.10',
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
            hp: 11880,
            armor: 131,
            energy: 35,
            size: '2x2',
            cost: 300,
            time: 49,
            weapons: [
              {
                title: 'Torpedo Launcher',
                damageArmor1: 778,
                damageArmor2: 3226,
                damageArmor3: 3830,
                firingRange: 11,
                rateOfFire: 33,
                firingAccuracy: '95.0',
                firingAccuracy2: '0.00',
                explosionRadius: '1.40',
              },
              {
                title: '30MM Flack Cannon',
                damageArmor1: 150,
                damageArmor2: 308,
                damageArmor3: 187,
                firingRange: 11,
                rateOfFire: 150,
                firingAccuracy: '90.0',
                firingAccuracy2: '0.00',
                explosionRadius: '1.10',
              },
            ],
            produces: null,
          },
        ],
      },
    ],
  },
];
