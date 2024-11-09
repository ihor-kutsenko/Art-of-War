import cp from '../../images/icons/star.png';
import resources from '../../images/icons/3d.png';
import energy from '../../images/icons/green-energy.png';
import radius from '../../images/icons/grid.png';
// buildings
import hq from '../../images/buildings/resistance/hq.webp';
import constructionYard from '../../images/buildings/resistance/construction-yard.webp';
import powerPlant from '../../images/buildings/resistance/power-plant.webp';
import supplyCenter from '../../images/buildings/resistance/supply-center.webp';
import barracks from '../../images/buildings/resistance/barracks.webp';
import assaultVehicleFactory from '../../images/buildings/resistance/assault-vehicle-factory.webp';
import specialVehicleFactory from '../../images/buildings/resistance/special-vehicle-factory.webp';
import aviaFactory from '../../images/buildings/resistance/avia-factory.webp';
import airfield from '../../images/buildings/resistance/airfield.webp';
import shipyard from '../../images/buildings/resistance/shipyard.webp';
import prototypeFactory from '../../images/buildings/resistance/prototype-factory.webp';
import nuclearLauncher from '../../images/buildings/resistance/nuclear-launcher.webp';
import wall from '../../images/buildings/resistance/wall.webp';
import sniperTower from '../../images/buildings/resistance/sniper-tower.webp';
import gunTower from '../../images/buildings/resistance/gun-tower.webp';
import antiAirTower from '../../images/buildings/resistance/anti-air-tower.webp';
import navalPlatform from '../../images/buildings/resistance/naval-platform.webp';
// units
import rifleman from '../../images/units/resistance/rifleman.webp';
import grenadier from '../../images/units/resistance/grenadier.webp';
import sniper from '../../images/units/resistance/sniper.webp';
import coyote from '../../images/units/resistance/coyote.webp';
import armadillo from '../../images/units/resistance/armadillo.webp';
import jaguar from '../../images/units/resistance/jaguar.webp';
import porcupine from '../../images/units/resistance/porcupine.webp';
import mammoth from '../../images/units/resistance/mammoth.webp';
import chameleon from '../../images/units/resistance/chameleon.webp';
import dragonfly from '../../images/units/resistance/dragonfly.webp';
import hawk from '../../images/units/resistance/hawk.webp';
import albatross from '../../images/units/resistance/albatross.webp';
import caiman from '../../images/units/resistance/caiman.webp';
import alligator from '../../images/units/resistance/alligator.webp';
import barracuda from '../../images/units/resistance/barracuda.webp';

// hero
import wasp from '../../images/hero/wasp.webp';
import wolverine from '../../images/hero/wolverine.webp';
import mole from '../../images/hero/mole.webp';
import salamander from '../../images/hero/salamander.webp';
import leviathan from '../../images/hero/leviathan.webp';

export const resistanceBuildings = [
  // headquarters
  {
    id: 1,
    name: 'buildings.resistBuildings.headquarters',
    image: hq,
    description: '',
    weapons: null,
    produces: [
      { type: 'buildings.stats.cp' },
      { type: 'buildings.stats.resources' },
      { type: 'buildings.stats.energy' },
    ],
    levels: [
      // 7
      {
        level: 7,
        subLevels: [
          {
            subLevel: 1,
            hp: 9502,
            armor: 76,
            energy: 0,
            size: '3x3',
            cost: 1000,
            time: 44,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 23, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 25,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 52, icon: energy },
            ],
          },
          {
            subLevel: 2,
            hp: 12114,
            armor: 81,
            energy: 0,
            size: '3x3',
            cost: 400,
            time: 62,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 45, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 40,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 77, icon: energy },
            ],
          },
          {
            subLevel: 3,
            hp: 14908,
            armor: 86,
            energy: 0,
            size: '3x3',
            cost: 800,
            time: 80,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 67, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 55,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 104, icon: energy },
            ],
          },
          {
            subLevel: 4,
            hp: 17674,
            armor: 91,
            energy: 0,
            size: '3x3',
            cost: 1300,
            time: 106,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 89, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 70,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 129, icon: energy },
            ],
          },
          {
            subLevel: 5,
            hp: 21812,
            armor: 96,
            energy: 0,
            size: '3x3',
            cost: 1600,
            time: 124,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 111, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 85,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 157, icon: energy },
            ],
          },
        ],
      },
      // 12
      {
        level: 12,
        subLevels: [
          {
            subLevel: 1,
            hp: 10255,
            armor: 89,
            energy: 0,
            size: '3x3',
            cost: 1000,
            time: 42,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 26, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 28,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 58, icon: energy },
            ],
          },
          {
            subLevel: 2,
            hp: 13073,
            armor: 94,
            energy: 0,
            size: '3x3',
            cost: 400,
            time: 59,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 50, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 45,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 86, icon: energy },
            ],
          },
          {
            subLevel: 3,
            hp: 16081,
            armor: 99,
            energy: 0,
            size: '3x3',
            cost: 800,
            time: 76,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 74, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 62,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 117, icon: energy },
            ],
          },
          {
            subLevel: 4,
            hp: 19056,
            armor: 104,
            energy: 0,
            size: '3x3',
            cost: 1300,
            time: 101,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 98, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 79,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 145, icon: energy },
            ],
          },
          {
            subLevel: 5,
            hp: 23517,
            armor: 109,
            energy: 0,
            size: '3x3',
            cost: 1600,
            time: 118,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 122, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 96,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 175, icon: energy },
            ],
          },
        ],
      },
      // 16
      {
        level: 16,
        subLevels: [
          {
            subLevel: 1,
            hp: 12077,
            armor: 99,
            energy: 0,
            size: '3x3',
            cost: 1000,
            time: 40,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 30, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 32,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 66, icon: energy },
            ],
          },
          {
            subLevel: 2,
            hp: 15426,
            armor: 104,
            energy: 0,
            size: '3x3',
            cost: 400,
            time: 56,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 55, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 51,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 97, icon: energy },
            ],
          },
          {
            subLevel: 3,
            hp: 18919,
            armor: 109,
            energy: 0,
            size: '3x3',
            cost: 800,
            time: 72,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 80, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 70,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 131, icon: energy },
            ],
          },
          {
            subLevel: 4,
            hp: 22380,
            armor: 114,
            energy: 0,
            size: '3x3',
            cost: 1300,
            time: 96,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 105, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 89,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 163, icon: energy },
            ],
          },
          {
            subLevel: 5,
            hp: 27595,
            armor: 119,
            energy: 0,
            size: '3x3',
            cost: 1600,
            time: 112,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 130, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 108,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 197, icon: energy },
            ],
          },
        ],
      },
      // 17
      {
        level: 17,
        subLevels: [
          {
            subLevel: 1,
            hp: 12598,
            armor: 99,
            energy: 0,
            size: '3x3',
            cost: 1000,
            time: 39,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 30, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 34,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 70, icon: energy },
            ],
          },
          {
            subLevel: 2,
            hp: 16105,
            armor: 104,
            energy: 0,
            size: '3x3',
            cost: 400,
            time: 55,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 55, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 55,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 104, icon: energy },
            ],
          },
          {
            subLevel: 3,
            hp: 19731,
            armor: 109,
            energy: 0,
            size: '3x3',
            cost: 800,
            time: 71,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 80, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 76,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 140, icon: energy },
            ],
          },
          {
            subLevel: 4,
            hp: 23327,
            armor: 114,
            energy: 0,
            size: '3x3',
            cost: 1300,
            time: 94,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 105, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 97,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 174, icon: energy },
            ],
          },
          {
            subLevel: 5,
            hp: 28754,
            armor: 119,
            energy: 0,
            size: '3x3',
            cost: 1600,
            time: 110,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 130, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 118,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 210, icon: energy },
            ],
          },
        ],
      },
      // 18
      {
        level: 18,
        subLevels: [
          {
            subLevel: 1,
            hp: 13146,
            armor: 105,
            energy: 0,
            size: '3x3',
            cost: 1000,
            time: 39,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 32, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 34,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 70, icon: energy },
            ],
          },
          {
            subLevel: 2,
            hp: 16819,
            armor: 110,
            energy: 0,
            size: '3x3',
            cost: 400,
            time: 55,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 58, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 55,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 104, icon: energy },
            ],
          },
          {
            subLevel: 3,
            hp: 20585,
            armor: 115,
            energy: 0,
            size: '3x3',
            cost: 800,
            time: 71,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 84, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 76,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 140, icon: energy },
            ],
          },
          {
            subLevel: 4,
            hp: 24321,
            armor: 120,
            energy: 0,
            size: '3x3',
            cost: 1300,
            time: 94,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 110, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 97,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 174, icon: energy },
            ],
          },
          {
            subLevel: 5,
            hp: 29968,
            armor: 125,
            energy: 0,
            size: '3x3',
            cost: 1600,
            time: 110,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 136, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 118,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 210, icon: energy },
            ],
          },
        ],
      },
      // 19
      {
        level: 19,
        subLevels: [
          {
            subLevel: 1,
            hp: 13720,
            armor: 111,
            energy: 0,
            size: '3x3',
            cost: 1000,
            time: 38,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 32, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 37,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 75, icon: energy },
            ],
          },
          {
            subLevel: 2,
            hp: 17570,
            armor: 116,
            energy: 0,
            size: '3x3',
            cost: 400,
            time: 54,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 58, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 60,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 112, icon: energy },
            ],
          },
          {
            subLevel: 3,
            hp: 21480,
            armor: 121,
            energy: 0,
            size: '3x3',
            cost: 800,
            time: 69,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 84, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 83,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 150, icon: energy },
            ],
          },
          {
            subLevel: 4,
            hp: 25361,
            armor: 126,
            energy: 0,
            size: '3x3',
            cost: 1300,
            time: 92,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 110, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 106,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 187, icon: energy },
            ],
          },
          {
            subLevel: 5,
            hp: 31237,
            armor: 131,
            energy: 0,
            size: '3x3',
            cost: 1600,
            time: 107,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 136, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 129,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 225, icon: energy },
            ],
          },
        ],
      },
      // 20
      {
        level: 20,
        subLevels: [
          {
            subLevel: 1,
            hp: 14320,
            armor: 117,
            energy: 0,
            size: '3x3',
            cost: 1000,
            time: 38,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 34, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 40,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 75, icon: energy },
            ],
          },
          {
            subLevel: 2,
            hp: 18358,
            armor: 122,
            energy: 0,
            size: '3x3',
            cost: 400,
            time: 54,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 61, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 65,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 112, icon: energy },
            ],
          },
          {
            subLevel: 3,
            hp: 22416,
            armor: 127,
            energy: 0,
            size: '3x3',
            cost: 800,
            time: 69,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 88, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 90,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 150, icon: energy },
            ],
          },
          {
            subLevel: 4,
            hp: 26447,
            armor: 132,
            energy: 0,
            size: '3x3',
            cost: 1300,
            time: 92,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 115, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 115,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 187, icon: energy },
            ],
          },
          {
            subLevel: 5,
            hp: 32562,
            armor: 137,
            energy: 0,
            size: '3x3',
            cost: 1600,
            time: 107,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 142, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 140,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 225, icon: energy },
            ],
          },
        ],
      },
      // 21
      {
        level: 21,
        subLevels: [
          {
            subLevel: 1,
            hp: 14947,
            armor: 124,
            energy: 0,
            size: '3x3',
            cost: 1000,
            time: 37,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 34, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 42,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 80, icon: energy },
            ],
          },
          {
            subLevel: 2,
            hp: 19181,
            armor: 129,
            energy: 0,
            size: '3x3',
            cost: 400,
            time: 52,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 61, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 68,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 120, icon: energy },
            ],
          },
          {
            subLevel: 3,
            hp: 23393,
            armor: 134,
            energy: 0,
            size: '3x3',
            cost: 800,
            time: 67,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 88, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 94,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 160, icon: energy },
            ],
          },
          {
            subLevel: 4,
            hp: 27580,
            armor: 139,
            energy: 0,
            size: '3x3',
            cost: 1300,
            time: 89,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 115, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 120,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 200, icon: energy },
            ],
          },
          {
            subLevel: 5,
            hp: 33943,
            armor: 144,
            energy: 0,
            size: '3x3',
            cost: 1600,
            time: 104,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 142, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 146,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 240, icon: energy },
            ],
          },
        ],
      },
      // 22
      {
        level: 22,
        subLevels: [
          {
            subLevel: 1,
            hp: 15593,
            armor: 131,
            energy: 0,
            size: '3x3',
            cost: 1000,
            time: 37,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 34, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 44,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 80, icon: energy },
            ],
          },
          {
            subLevel: 2,
            hp: 19868,
            armor: 136,
            energy: 0,
            size: '3x3',
            cost: 400,
            time: 52,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 61, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 71,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 120, icon: energy },
            ],
          },
          {
            subLevel: 3,
            hp: 24076,
            armor: 141,
            energy: 0,
            size: '3x3',
            cost: 800,
            time: 67,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 88, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 98,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 160, icon: energy },
            ],
          },
          {
            subLevel: 4,
            hp: 28199,
            armor: 146,
            energy: 0,
            size: '3x3',
            cost: 1300,
            time: 89,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 115, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 125,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 200, icon: energy },
            ],
          },
          {
            subLevel: 5,
            hp: 34705,
            armor: 151,
            energy: 0,
            size: '3x3',
            cost: 1600,
            time: 104,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 142, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 152,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 240, icon: energy },
            ],
          },
        ],
      },
      // 24
      {
        level: 24,
        subLevels: [
          {
            subLevel: 1,
            hp: 16963,
            armor: 143,
            energy: 0,
            size: '3x3',
            cost: 1000,
            time: 36,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 37, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 48,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 80, icon: energy },
            ],
          },
          {
            subLevel: 2,
            hp: 21350,
            armor: 148,
            energy: 0,
            size: '3x3',
            cost: 400,
            time: 51,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 65, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 77,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 120, icon: energy },
            ],
          },
          {
            subLevel: 3,
            hp: 25565,
            armor: 153,
            energy: 0,
            size: '3x3',
            cost: 800,
            time: 65,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 93, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 106,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 160, icon: energy },
            ],
          },
          {
            subLevel: 4,
            hp: 29577,
            armor: 158,
            energy: 0,
            size: '3x3',
            cost: 1300,
            time: 87,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 121, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 135,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 200, icon: energy },
            ],
          },
          {
            subLevel: 5,
            hp: 36401,
            armor: 163,
            energy: 0,
            size: '3x3',
            cost: 1600,
            time: 101,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 149, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 164,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 240, icon: energy },
            ],
          },
        ],
      },
      // 25
      {
        level: 25,
        subLevels: [
          {
            subLevel: 1,
            hp: 17688,
            armor: 148,
            energy: 0,
            size: '3x3',
            cost: 1000,
            time: 35,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 37, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 50,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 80, icon: energy },
            ],
          },
          {
            subLevel: 2,
            hp: 22146,
            armor: 153,
            energy: 0,
            size: '3x3',
            cost: 400,
            time: 49,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 65, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 80,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 120, icon: energy },
            ],
          },
          {
            subLevel: 3,
            hp: 26371,
            armor: 158,
            energy: 0,
            size: '3x3',
            cost: 800,
            time: 63,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 93, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 110,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 160, icon: energy },
            ],
          },
          {
            subLevel: 4,
            hp: 30336,
            armor: 163,
            energy: 0,
            size: '3x3',
            cost: 1300,
            time: 84,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 121, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 140,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 200, icon: energy },
            ],
          },
          {
            subLevel: 5,
            hp: 37335,
            armor: 168,
            energy: 0,
            size: '3x3',
            cost: 1600,
            time: 98,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 149, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 170,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 240, icon: energy },
            ],
          },
        ],
      },
      // 26
      {
        level: 26,
        subLevels: [
          {
            subLevel: 1,
            hp: 18439,
            armor: 153,
            energy: 0,
            size: '3x3',
            cost: 1000,
            time: 35,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 40, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 50,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 80, icon: energy },
            ],
          },
          {
            subLevel: 2,
            hp: 22978,
            armor: 158,
            energy: 0,
            size: '3x3',
            cost: 400,
            time: 49,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 70, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 80,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 120, icon: energy },
            ],
          },
          {
            subLevel: 3,
            hp: 27218,
            armor: 163,
            energy: 0,
            size: '3x3',
            cost: 800,
            time: 63,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 100, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 110,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 160, icon: energy },
            ],
          },
          {
            subLevel: 4,
            hp: 31141,
            armor: 168,
            energy: 0,
            size: '3x3',
            cost: 1300,
            time: 84,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 130, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 140,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 200, icon: energy },
            ],
          },
          {
            subLevel: 5,
            hp: 38326,
            armor: 173,
            energy: 0,
            size: '3x3',
            cost: 1600,
            time: 98,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 160, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 170,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 240, icon: energy },
            ],
          },
        ],
      },
      // 27
      {
        level: 27,
        subLevels: [
          {
            subLevel: 1,
            hp: 19216,
            armor: 158,
            energy: 0,
            size: '3x3',
            cost: 1000,
            time: 35,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 40, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 50,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 80, icon: energy },
            ],
          },
          {
            subLevel: 2,
            hp: 23846,
            armor: 163,
            energy: 0,
            size: '3x3',
            cost: 400,
            time: 49,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 70, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 80,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 120, icon: energy },
            ],
          },
          {
            subLevel: 3,
            hp: 28107,
            armor: 168,
            energy: 0,
            size: '3x3',
            cost: 800,
            time: 63,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 100, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 110,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 160, icon: energy },
            ],
          },
          {
            subLevel: 4,
            hp: 31993,
            armor: 173,
            energy: 0,
            size: '3x3',
            cost: 1300,
            time: 84,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 130, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 140,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 200, icon: energy },
            ],
          },
          {
            subLevel: 5,
            hp: 39374,
            armor: 178,
            energy: 0,
            size: '3x3',
            cost: 1600,
            time: 98,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 160, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 170,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 240, icon: energy },
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
            hp: 20020,
            armor: 158,
            energy: 0,
            size: '3x3',
            cost: 1000,
            time: 35,
            weapons: null,
            produces: [
              { type: 'buildings.stats.cp', amount: 40, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 50,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 80, icon: energy },
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
              { type: 'buildings.stats.cp', amount: 70, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 80,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 120, icon: energy },
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
              { type: 'buildings.stats.cp', amount: 100, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 110,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 160, icon: energy },
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
              { type: 'buildings.stats.cp', amount: 130, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 140,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 200, icon: energy },
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
              { type: 'buildings.stats.cp', amount: 160, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 170,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 240, icon: energy },
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
              { type: 'buildings.stats.cp', amount: 40, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 50,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 80, icon: energy },
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
              { type: 'buildings.stats.cp', amount: 70, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 80,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 120, icon: energy },
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
              { type: 'buildings.stats.cp', amount: 100, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 110,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 160, icon: energy },
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
              { type: 'buildings.stats.cp', amount: 130, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 140,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 200, icon: energy },
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
              { type: 'buildings.stats.cp', amount: 160, icon: cp },
              {
                type: 'buildings.stats.resources',
                amount: 170,
                icon: resources,
              },
              { type: 'buildings.stats.energy', amount: 240, icon: energy },
            ],
          },
        ],
      },
    ],
  },
  // Construction Yard
  {
    id: 2,
    name: 'buildings.resistBuildings.constructionYard',
    image: constructionYard,
    description: '',
    weapons: null,
    produces: [{ type: 'buildings.stats.radius' }],
    levels: [
      // 7
      {
        level: 7,
        subLevels: [
          {
            subLevel: 1,
            hp: 6101,
            armor: 57,
            energy: 40,
            size: '2x2',
            cost: 300,
            time: 27,
            weapons: null,
            produces: [
              { type: 'buildings.stats.radius', amount: 9, icon: radius },
            ],
          },
        ],
      },
      // 12
      {
        level: 12,
        subLevels: [
          {
            subLevel: 1,
            hp: 7030,
            armor: 74,
            energy: 40,
            size: '2x2',
            cost: 300,
            time: 26,
            weapons: null,
            produces: [
              { type: 'buildings.stats.radius', amount: 10, icon: radius },
            ],
          },
        ],
      },
      // 16
      {
        level: 16,
        subLevels: [
          {
            subLevel: 1,
            hp: 7719,
            armor: 88,
            energy: 40,
            size: '2x2',
            cost: 300,
            time: 24,
            weapons: null,
            produces: [
              { type: 'buildings.stats.radius', amount: 11, icon: radius },
            ],
          },
        ],
      },
      // 17
      {
        level: 17,
        subLevels: [
          {
            subLevel: 1,
            hp: 7719,
            armor: 88,
            energy: 40,
            size: '2x2',
            cost: 300,
            time: 24,
            weapons: null,
            produces: [
              { type: 'buildings.stats.radius', amount: 11, icon: radius },
            ],
          },
        ],
      },
      // 18
      {
        level: 18,
        subLevels: [
          {
            subLevel: 1,
            hp: 8084,
            armor: 96,
            energy: 40,
            size: '2x2',
            cost: 300,
            time: 24,
            weapons: null,
            produces: [
              { type: 'buildings.stats.radius', amount: 11, icon: radius },
            ],
          },
        ],
      },
      // 19
      {
        level: 19,
        subLevels: [
          {
            subLevel: 1,
            hp: 8084,
            armor: 96,
            energy: 40,
            size: '2x2',
            cost: 300,
            time: 23,
            weapons: null,
            produces: [
              { type: 'buildings.stats.radius', amount: 11, icon: radius },
            ],
          },
        ],
      },
      // 20
      {
        level: 20,
        subLevels: [
          {
            subLevel: 1,
            hp: 8432,
            armor: 104,
            energy: 40,
            size: '2x2',
            cost: 300,
            time: 23,
            weapons: null,
            produces: [
              { type: 'buildings.stats.radius', amount: 11, icon: radius },
            ],
          },
        ],
      },
      // 21
      {
        level: 21,
        subLevels: [
          {
            subLevel: 1,
            hp: 8795,
            armor: 104,
            energy: 40,
            size: '2x2',
            cost: 300,
            time: 23,
            weapons: null,
            produces: [
              { type: 'buildings.stats.radius', amount: 11, icon: radius },
            ],
          },
        ],
      },
      // 22
      {
        level: 22,
        subLevels: [
          {
            subLevel: 1,
            hp: 9171,
            armor: 112,
            energy: 40,
            size: '2x2',
            cost: 300,
            time: 23,
            weapons: null,
            produces: [
              { type: 'buildings.stats.radius', amount: 11, icon: radius },
            ],
          },
        ],
      },
      // 24
      {
        level: 24,
        subLevels: [
          {
            subLevel: 1,
            hp: 9963,
            armor: 124,
            energy: 40,
            size: '2x2',
            cost: 300,
            time: 22,
            weapons: null,
            produces: [
              { type: 'buildings.stats.radius', amount: 11, icon: radius },
            ],
          },
        ],
      },
      // 25
      {
        level: 25,
        subLevels: [
          {
            subLevel: 1,
            hp: 10380,
            armor: 130,
            energy: 40,
            size: '2x2',
            cost: 300,
            time: 21,
            weapons: null,
            produces: [
              { type: 'buildings.stats.radius', amount: 11, icon: radius },
            ],
          },
        ],
      },
      // 26
      {
        level: 26,
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
            produces: [
              { type: 'buildings.stats.radius', amount: 11, icon: radius },
            ],
          },
        ],
      },
      // 27
      {
        level: 27,
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
            produces: [
              { type: 'buildings.stats.radius', amount: 11, icon: radius },
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
            hp: 10811,
            armor: 137,
            energy: 40,
            size: '2x2',
            cost: 300,
            time: 21,
            weapons: null,
            produces: [
              { type: 'buildings.stats.radius', amount: 11, icon: radius },
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
            hp: 10811,
            armor: 137,
            energy: 40,
            size: '2x2',
            cost: 300,
            time: 21,
            weapons: null,
            produces: [
              { type: 'buildings.stats.radius', amount: 11, icon: radius },
            ],
          },
        ],
      },
    ],
  },
  // Power Plant
  {
    id: 3,
    name: 'buildings.resistBuildings.powerPlant',
    image: powerPlant,
    description: '',
    weapons: null,
    produces: [{ type: 'buildings.stats.energy' }],
    levels: [
      // 7
      {
        level: 7,
        subLevels: [
          {
            subLevel: 1,
            hp: 5787,
            armor: 64,
            energy: 0,
            size: '2x2',
            cost: 250,
            time: 27,
            weapons: null,
            produces: [
              { type: 'buildings.stats.energy', amount: 121, icon: energy },
            ],
          },
        ],
      },
      // 12
      {
        level: 12,
        subLevels: [
          {
            subLevel: 1,
            hp: 6360,
            armor: 78,
            energy: 0,
            size: '2x2',
            cost: 250,
            time: 26,
            weapons: null,
            produces: [
              { type: 'buildings.stats.energy', amount: 135, icon: energy },
            ],
          },
        ],
      },
      // 16
      {
        level: 16,
        subLevels: [
          {
            subLevel: 1,
            hp: 6983,
            armor: 94,
            energy: 0,
            size: '2x2',
            cost: 250,
            time: 24,
            weapons: null,
            produces: [
              { type: 'buildings.stats.energy', amount: 143, icon: energy },
            ],
          },
        ],
      },
      // 17
      {
        level: 17,
        subLevels: [
          {
            subLevel: 1,
            hp: 7313,
            armor: 102,
            energy: 0,
            size: '2x2',
            cost: 250,
            time: 24,
            weapons: null,
            produces: [
              { type: 'buildings.stats.energy', amount: 143, icon: energy },
            ],
          },
        ],
      },
      // 18
      {
        level: 18,
        subLevels: [
          {
            subLevel: 1,
            hp: 7313,
            armor: 102,
            energy: 0,
            size: '2x2',
            cost: 250,
            time: 24,
            weapons: null,
            produces: [
              { type: 'buildings.stats.energy', amount: 146, icon: energy },
            ],
          },
        ],
      },
      // 19
      {
        level: 19,
        subLevels: [
          {
            subLevel: 1,
            hp: 7628,
            armor: 108,
            energy: 0,
            size: '2x2',
            cost: 250,
            time: 23,
            weapons: null,
            produces: [
              { type: 'buildings.stats.energy', amount: 150, icon: energy },
            ],
          },
        ],
      },
      // 20
      {
        level: 20,
        subLevels: [
          {
            subLevel: 1,
            hp: 7628,
            armor: 108,
            energy: 0,
            size: '2x2',
            cost: 250,
            time: 23,
            weapons: null,
            produces: [
              { type: 'buildings.stats.energy', amount: 150, icon: energy },
            ],
          },
        ],
      },
      // 21
      {
        level: 21,
        subLevels: [
          {
            subLevel: 1,
            hp: 7956,
            armor: 114,
            energy: 0,
            size: '2x2',
            cost: 250,
            time: 23,
            weapons: null,
            produces: [
              { type: 'buildings.stats.energy', amount: 150, icon: energy },
            ],
          },
        ],
      },
      // 22
      {
        level: 22,
        subLevels: [
          {
            subLevel: 1,
            hp: 8296,
            armor: 114,
            energy: 0,
            size: '2x2',
            cost: 250,
            time: 23,
            weapons: null,
            produces: [
              { type: 'buildings.stats.energy', amount: 150, icon: energy },
            ],
          },
        ],
      },
      // 24
      {
        level: 24,
        subLevels: [
          {
            subLevel: 1,
            hp: 9013,
            armor: 120,
            energy: 0,
            size: '2x2',
            cost: 250,
            time: 22,
            weapons: null,
            produces: [
              { type: 'buildings.stats.energy', amount: 150, icon: energy },
            ],
          },
        ],
      },
      // 25
      {
        level: 25,
        subLevels: [
          {
            subLevel: 1,
            hp: 9391,
            armor: 127,
            energy: 0,
            size: '2x2',
            cost: 250,
            time: 21,
            weapons: null,
            produces: [
              { type: 'buildings.stats.energy', amount: 150, icon: energy },
            ],
          },
        ],
      },
      // 26
      {
        level: 26,
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
            produces: [
              { type: 'buildings.stats.energy', amount: 150, icon: energy },
            ],
          },
        ],
      },
      // 27
      {
        level: 27,
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
            produces: [
              { type: 'buildings.stats.energy', amount: 150, icon: energy },
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
            hp: 9781,
            armor: 127,
            energy: 0,
            size: '2x2',
            cost: 250,
            time: 21,
            weapons: null,
            produces: [
              { type: 'buildings.stats.energy', amount: 150, icon: energy },
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
            hp: 9781,
            armor: 127,
            energy: 0,
            size: '2x2',
            cost: 250,
            time: 21,
            weapons: null,
            produces: [
              { type: 'buildings.stats.energy', amount: 150, icon: energy },
            ],
          },
        ],
      },
    ],
  },
  // Supply Center
  {
    id: 4,
    name: 'buildings.resistBuildings.supplyCenter',
    image: supplyCenter,
    description: '',
    weapons: null,
    produces: [{ type: 'buildings.stats.resources' }],
    levels: [
      // 7
      {
        level: 7,
        subLevels: [
          {
            subLevel: 1,
            hp: 5520,
            armor: 74,
            energy: 40,
            size: '2x2',
            cost: 300,
            time: 36,
            weapons: null,
            produces: [
              {
                type: 'buildings.stats.resources',
                amount: 185,
                icon: resources,
              },
            ],
          },
        ],
      },
      // 12
      {
        level: 12,
        subLevels: [
          {
            subLevel: 1,
            hp: 6360,
            armor: 88,
            energy: 40,
            size: '2x2',
            cost: 300,
            time: 34,
            weapons: null,
            produces: [
              {
                type: 'buildings.stats.resources',
                amount: 202,
                icon: resources,
              },
            ],
          },
        ],
      },
      // 16
      {
        level: 16,
        subLevels: [
          {
            subLevel: 1,
            hp: 6983,
            armor: 104,
            energy: 40,
            size: '2x2',
            cost: 300,
            time: 32,
            weapons: null,
            produces: [
              {
                type: 'buildings.stats.resources',
                amount: 220,
                icon: resources,
              },
            ],
          },
        ],
      },
      // 17
      {
        level: 17,
        subLevels: [
          {
            subLevel: 1,
            hp: 6983,
            armor: 112,
            energy: 40,
            size: '2x2',
            cost: 300,
            time: 32,
            weapons: null,
            produces: [
              {
                type: 'buildings.stats.resources',
                amount: 230,
                icon: resources,
              },
            ],
          },
        ],
      },
      // 18
      {
        level: 18,
        subLevels: [
          {
            subLevel: 1,
            hp: 7313,
            armor: 112,
            energy: 40,
            size: '2x2',
            cost: 300,
            time: 32,
            weapons: null,
            produces: [
              {
                type: 'buildings.stats.resources',
                amount: 230,
                icon: resources,
              },
            ],
          },
        ],
      },
      // 19
      {
        level: 19,
        subLevels: [
          {
            subLevel: 1,
            hp: 7313,
            armor: 118,
            energy: 40,
            size: '2x2',
            cost: 300,
            time: 31,
            weapons: null,
            produces: [
              {
                type: 'buildings.stats.resources',
                amount: 240,
                icon: resources,
              },
            ],
          },
        ],
      },
      // 20
      {
        level: 20,
        subLevels: [
          {
            subLevel: 1,
            hp: 7628,
            armor: 118,
            energy: 40,
            size: '2x2',
            cost: 300,
            time: 31,
            weapons: null,
            produces: [
              {
                type: 'buildings.stats.resources',
                amount: 240,
                icon: resources,
              },
            ],
          },
        ],
      },
      // 21
      {
        level: 21,
        subLevels: [
          {
            subLevel: 1,
            hp: 7956,
            armor: 124,
            energy: 40,
            size: '2x2',
            cost: 300,
            time: 30,
            weapons: null,
            produces: [
              {
                type: 'buildings.stats.resources',
                amount: 250,
                icon: resources,
              },
            ],
          },
        ],
      },
      // 22
      {
        level: 22,
        subLevels: [
          {
            subLevel: 1,
            hp: 8296,
            armor: 124,
            energy: 40,
            size: '2x2',
            cost: 300,
            time: 30,
            weapons: null,
            produces: [
              {
                type: 'buildings.stats.resources',
                amount: 250,
                icon: resources,
              },
            ],
          },
        ],
      },
      // 24
      {
        level: 24,
        subLevels: [
          {
            subLevel: 1,
            hp: 9013,
            armor: 130,
            energy: 40,
            size: '2x2',
            cost: 300,
            time: 29,
            weapons: null,
            produces: [
              {
                type: 'buildings.stats.resources',
                amount: 250,
                icon: resources,
              },
            ],
          },
        ],
      },
      // 25
      {
        level: 25,
        subLevels: [
          {
            subLevel: 1,
            hp: 9391,
            armor: 137,
            energy: 40,
            size: '2x2',
            cost: 300,
            time: 28,
            weapons: null,
            produces: [
              {
                type: 'buildings.stats.resources',
                amount: 250,
                icon: resources,
              },
            ],
          },
        ],
      },
      // 26
      {
        level: 26,
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
            produces: [
              {
                type: 'buildings.stats.resources',
                amount: 250,
                icon: resources,
              },
            ],
          },
        ],
      },
      // 27
      {
        level: 27,
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
            produces: [
              {
                type: 'buildings.stats.resources',
                amount: 250,
                icon: resources,
              },
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
            hp: 9781,
            armor: 137,
            energy: 40,
            size: '2x2',
            cost: 300,
            time: 28,
            weapons: null,
            produces: [
              {
                type: 'buildings.stats.resources',
                amount: 250,
                icon: resources,
              },
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
            hp: 9781,
            armor: 137,
            energy: 40,
            size: '2x2',
            cost: 300,
            time: 28,
            weapons: null,
            produces: [
              {
                type: 'buildings.stats.resources',
                amount: 250,
                icon: resources,
              },
            ],
          },
        ],
      },
    ],
  },
  // Barracks
  {
    id: 5,
    name: 'buildings.resistBuildings.barracks',
    image: barracks,
    description: '',
    weapons: null,
    produces: null,
    levels: [
      // 7
      {
        level: 7,
        subLevels: [
          {
            subLevel: 1,
            hp: 4353,
            armor: 71,
            energy: 10,
            size: '2x2',
            cost: 80,
            time: 18,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.rifleman.name', icon: rifleman },
            ],
          },
          {
            subLevel: 2,
            hp: 5350,
            armor: 76,
            energy: 15,
            size: '2x2',
            cost: 100,
            time: 27,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.rifleman.name', icon: rifleman },
              { type: 'units.resistUnits.grenadier.name', icon: grenadier },
            ],
          },
          {
            subLevel: 3,
            hp: 6348,
            armor: 81,
            energy: 20,
            size: '2x2',
            cost: 120,
            time: 36,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.rifleman.name', icon: rifleman },
              { type: 'units.resistUnits.grenadier.name', icon: grenadier },
              { type: 'units.resistUnits.sniper.name', icon: sniper },
            ],
          },
        ],
      },
      // 12
      {
        level: 12,
        subLevels: [
          {
            subLevel: 1,
            hp: 4778,
            armor: 86,
            energy: 10,
            size: '2x2',
            cost: 80,
            time: 17,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.rifleman.name', icon: rifleman },
            ],
          },
          {
            subLevel: 2,
            hp: 5871,
            armor: 91,
            energy: 15,
            size: '2x2',
            cost: 100,
            time: 26,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.rifleman.name', icon: rifleman },
              { type: 'units.resistUnits.grenadier.name', icon: grenadier },
            ],
          },
          {
            subLevel: 3,
            hp: 6960,
            armor: 96,
            energy: 20,
            size: '2x2',
            cost: 120,
            time: 34,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.rifleman.name', icon: rifleman },
              { type: 'units.resistUnits.grenadier.name', icon: grenadier },
              { type: 'units.resistUnits.sniper.name', icon: sniper },
            ],
          },
        ],
      },
      // 16
      {
        level: 16,
        subLevels: [
          {
            subLevel: 1,
            hp: 5219,
            armor: 102,
            energy: 10,
            size: '2x2',
            cost: 80,
            time: 16,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.rifleman.name', icon: rifleman },
            ],
          },
          {
            subLevel: 2,
            hp: 6370,
            armor: 107,
            energy: 15,
            size: '2x2',
            cost: 100,
            time: 24,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.rifleman.name', icon: rifleman },
              { type: 'units.resistUnits.grenadier.name', icon: grenadier },
            ],
          },
          {
            subLevel: 3,
            hp: 7497,
            armor: 112,
            energy: 20,
            size: '2x2',
            cost: 120,
            time: 32,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.rifleman.name', icon: rifleman },
              { type: 'units.resistUnits.grenadier.name', icon: grenadier },
              { type: 'units.resistUnits.sniper.name', icon: sniper },
            ],
          },
        ],
      },
      // 17
      {
        level: 17,
        subLevels: [
          {
            subLevel: 1,
            hp: 5443,
            armor: 107,
            energy: 10,
            size: '2x2',
            cost: 80,
            time: 16,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.rifleman.name', icon: rifleman },
            ],
          },
          {
            subLevel: 2,
            hp: 6603,
            armor: 112,
            energy: 15,
            size: '2x2',
            cost: 100,
            time: 24,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.rifleman.name', icon: rifleman },
              { type: 'units.resistUnits.grenadier.name', icon: grenadier },
            ],
          },
          {
            subLevel: 3,
            hp: 7723,
            armor: 117,
            energy: 20,
            size: '2x2',
            cost: 120,
            time: 32,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.rifleman.name', icon: rifleman },
              { type: 'units.resistUnits.grenadier.name', icon: grenadier },
              { type: 'units.resistUnits.sniper.name', icon: sniper },
            ],
          },
        ],
      },
      // 18
      {
        level: 18,
        subLevels: [
          {
            subLevel: 1,
            hp: 5443,
            armor: 107,
            energy: 10,
            size: '2x2',
            cost: 80,
            time: 16,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.rifleman.name', icon: rifleman },
            ],
          },
          {
            subLevel: 2,
            hp: 6603,
            armor: 112,
            energy: 15,
            size: '2x2',
            cost: 100,
            time: 24,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.rifleman.name', icon: rifleman },
              { type: 'units.resistUnits.grenadier.name', icon: grenadier },
            ],
          },
          {
            subLevel: 3,
            hp: 7723,
            armor: 117,
            energy: 20,
            size: '2x2',
            cost: 120,
            time: 32,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.rifleman.name', icon: rifleman },
              { type: 'units.resistUnits.grenadier.name', icon: grenadier },
              { type: 'units.resistUnits.sniper.name', icon: sniper },
            ],
          },
        ],
      },
      // 19
      {
        level: 19,
        subLevels: [
          {
            subLevel: 1,
            hp: 5675,
            armor: 112,
            energy: 10,
            size: '2x2',
            cost: 80,
            time: 16,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.rifleman.name', icon: rifleman },
            ],
          },
          {
            subLevel: 2,
            hp: 6846,
            armor: 117,
            energy: 15,
            size: '2x2',
            cost: 100,
            time: 23,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.rifleman.name', icon: rifleman },
              { type: 'units.resistUnits.grenadier.name', icon: grenadier },
            ],
          },
          {
            subLevel: 3,
            hp: 7961,
            armor: 122,
            energy: 20,
            size: '2x2',
            cost: 120,
            time: 31,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.rifleman.name', icon: rifleman },
              { type: 'units.resistUnits.grenadier.name', icon: grenadier },
              { type: 'units.resistUnits.sniper.name', icon: sniper },
            ],
          },
        ],
      },
      // 20
      {
        level: 20,
        subLevels: [
          {
            subLevel: 1,
            hp: 5675,
            armor: 112,
            energy: 10,
            size: '2x2',
            cost: 80,
            time: 16,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.rifleman.name', icon: rifleman },
            ],
          },
          {
            subLevel: 2,
            hp: 6846,
            armor: 117,
            energy: 15,
            size: '2x2',
            cost: 100,
            time: 23,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.rifleman.name', icon: rifleman },
              { type: 'units.resistUnits.grenadier.name', icon: grenadier },
            ],
          },
          {
            subLevel: 3,
            hp: 7961,
            armor: 122,
            energy: 20,
            size: '2x2',
            cost: 120,
            time: 31,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.rifleman.name', icon: rifleman },
              { type: 'units.resistUnits.grenadier.name', icon: grenadier },
              { type: 'units.resistUnits.sniper.name', icon: sniper },
            ],
          },
        ],
      },
      // 21
      {
        level: 21,
        subLevels: [
          {
            subLevel: 1,
            hp: 5916,
            armor: 118,
            energy: 10,
            size: '2x2',
            cost: 80,
            time: 15,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.rifleman.name', icon: rifleman },
            ],
          },
          {
            subLevel: 2,
            hp: 7100,
            armor: 123,
            energy: 15,
            size: '2x2',
            cost: 100,
            time: 23,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.rifleman.name', icon: rifleman },
              { type: 'units.resistUnits.grenadier.name', icon: grenadier },
            ],
          },
          {
            subLevel: 3,
            hp: 8211,
            armor: 128,
            energy: 20,
            size: '2x2',
            cost: 120,
            time: 30,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.rifleman.name', icon: rifleman },
              { type: 'units.resistUnits.grenadier.name', icon: grenadier },
              { type: 'units.resistUnits.sniper.name', icon: sniper },
            ],
          },
        ],
      },
      // 22
      {
        level: 22,
        subLevels: [
          {
            subLevel: 1,
            hp: 5916,
            armor: 118,
            energy: 10,
            size: '2x2',
            cost: 80,
            time: 15,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.rifleman.name', icon: rifleman },
            ],
          },
          {
            subLevel: 2,
            hp: 7100,
            armor: 123,
            energy: 15,
            size: '2x2',
            cost: 100,
            time: 23,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.rifleman.name', icon: rifleman },
              { type: 'units.resistUnits.grenadier.name', icon: grenadier },
            ],
          },
          {
            subLevel: 3,
            hp: 8211,
            armor: 128,
            energy: 20,
            size: '2x2',
            cost: 120,
            time: 30,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.rifleman.name', icon: rifleman },
              { type: 'units.resistUnits.grenadier.name', icon: grenadier },
              { type: 'units.resistUnits.sniper.name', icon: sniper },
            ],
          },
        ],
      },
      // 24
      {
        level: 24,
        subLevels: [
          {
            subLevel: 1,
            hp: 6166,
            armor: 124,
            energy: 10,
            size: '2x2',
            cost: 80,
            time: 15,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.rifleman.name', icon: rifleman },
            ],
          },
          {
            subLevel: 2,
            hp: 7363,
            armor: 129,
            energy: 15,
            size: '2x2',
            cost: 100,
            time: 22,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.rifleman.name', icon: rifleman },
              { type: 'units.resistUnits.grenadier.name', icon: grenadier },
            ],
          },
          {
            subLevel: 3,
            hp: 8472,
            armor: 134,
            energy: 20,
            size: '2x2',
            cost: 120,
            time: 29,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.rifleman.name', icon: rifleman },
              { type: 'units.resistUnits.grenadier.name', icon: grenadier },
              { type: 'units.resistUnits.sniper.name', icon: sniper },
            ],
          },
        ],
      },
      // 25
      {
        level: 25,
        subLevels: [
          {
            subLevel: 1,
            hp: 6425,
            armor: 124,
            energy: 10,
            size: '2x2',
            cost: 80,
            time: 14,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.rifleman.name', icon: rifleman },
            ],
          },
          {
            subLevel: 2,
            hp: 7636,
            armor: 129,
            energy: 15,
            size: '2x2',
            cost: 100,
            time: 21,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.rifleman.name', icon: rifleman },
              { type: 'units.resistUnits.grenadier.name', icon: grenadier },
            ],
          },
          {
            subLevel: 3,
            hp: 8745,
            armor: 134,
            energy: 20,
            size: '2x2',
            cost: 120,
            time: 28,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.rifleman.name', icon: rifleman },
              { type: 'units.resistUnits.grenadier.name', icon: grenadier },
              { type: 'units.resistUnits.sniper.name', icon: sniper },
            ],
          },
        ],
      },
      // 26
      {
        level: 26,
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
            produces: [
              { type: 'units.resistUnits.rifleman.name', icon: rifleman },
            ],
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
              { type: 'units.resistUnits.rifleman.name', icon: rifleman },
              { type: 'units.resistUnits.grenadier.name', icon: grenadier },
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
              { type: 'units.resistUnits.rifleman.name', icon: rifleman },
              { type: 'units.resistUnits.grenadier.name', icon: grenadier },
              { type: 'units.resistUnits.sniper.name', icon: sniper },
            ],
          },
        ],
      },
      // 27
      {
        level: 27,
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
            produces: [
              { type: 'units.resistUnits.rifleman.name', icon: rifleman },
            ],
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
              { type: 'units.resistUnits.rifleman.name', icon: rifleman },
              { type: 'units.resistUnits.grenadier.name', icon: grenadier },
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
              { type: 'units.resistUnits.rifleman.name', icon: rifleman },
              { type: 'units.resistUnits.grenadier.name', icon: grenadier },
              { type: 'units.resistUnits.sniper.name', icon: sniper },
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
            produces: [
              { type: 'units.resistUnits.rifleman.name', icon: rifleman },
            ],
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
              { type: 'units.resistUnits.rifleman.name', icon: rifleman },
              { type: 'units.resistUnits.grenadier.name', icon: grenadier },
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
              { type: 'units.resistUnits.rifleman.name', icon: rifleman },
              { type: 'units.resistUnits.grenadier.name', icon: grenadier },
              { type: 'units.resistUnits.sniper.name', icon: sniper },
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
            produces: [
              { type: 'units.resistUnits.rifleman.name', icon: rifleman },
            ],
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
              { type: 'units.resistUnits.rifleman.name', icon: rifleman },
              { type: 'units.resistUnits.grenadier.name', icon: grenadier },
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
              { type: 'units.resistUnits.rifleman.name', icon: rifleman },
              { type: 'units.resistUnits.grenadier.name', icon: grenadier },
              { type: 'units.resistUnits.sniper.name', icon: sniper },
            ],
          },
        ],
      },
    ],
  },
  // Assault Vehicle Factory
  {
    id: 6,
    name: 'buildings.resistBuildings.assaultVehicleFactory',
    image: assaultVehicleFactory,
    description: '',
    weapons: null,
    produces: null,
    levels: [
      // 7
      {
        level: 7,
        subLevels: [
          {
            subLevel: 1,
            hp: 5794,
            armor: 62,
            energy: 15,
            size: '3x3',
            cost: 160,
            time: 27,
            weapons: null,
            produces: [{ type: 'units.resistUnits.coyote.name', icon: coyote }],
          },
          {
            subLevel: 2,
            hp: 6544,
            armor: 67,
            energy: 30,
            size: '3x3',
            cost: 210,
            time: 40,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.coyote.name', icon: coyote },
              { type: 'units.resistUnits.armadillo.name', icon: armadillo },
            ],
          },
          {
            subLevel: 3,
            hp: 8829,
            armor: 72,
            energy: 60,
            size: '3x3',
            cost: 310,
            time: 53,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.coyote.name', icon: coyote },
              { type: 'units.resistUnits.armadillo.name', icon: armadillo },
              { type: 'units.resistUnits.jaguar.name', icon: jaguar },
            ],
          },
        ],
      },
      // 12
      {
        level: 12,
        subLevels: [
          {
            subLevel: 1,
            hp: 6668,
            armor: 74,
            energy: 15,
            size: '3x3',
            cost: 160,
            time: 26,
            weapons: null,
            produces: [{ type: 'units.resistUnits.coyote.name', icon: coyote }],
          },
          {
            subLevel: 2,
            hp: 7530,
            armor: 79,
            energy: 30,
            size: '3x3',
            cost: 210,
            time: 38,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.coyote.name', icon: coyote },
              { type: 'units.resistUnits.armadillo.name', icon: armadillo },
            ],
          },
          {
            subLevel: 3,
            hp: 10148,
            armor: 84,
            energy: 60,
            size: '3x3',
            cost: 310,
            time: 51,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.coyote.name', icon: coyote },
              { type: 'units.resistUnits.armadillo.name', icon: armadillo },
              { type: 'units.resistUnits.jaguar.name', icon: jaguar },
            ],
          },
        ],
      },
      // 16
      {
        level: 16,
        subLevels: [
          {
            subLevel: 1,
            hp: 7314,
            armor: 88,
            energy: 15,
            size: '3x3',
            cost: 160,
            time: 24,
            weapons: null,
            produces: [{ type: 'units.resistUnits.coyote.name', icon: coyote }],
          },
          {
            subLevel: 2,
            hp: 8256,
            armor: 93,
            energy: 30,
            size: '3x3',
            cost: 210,
            time: 36,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.coyote.name', icon: coyote },
              { type: 'units.resistUnits.armadillo.name', icon: armadillo },
            ],
          },
          {
            subLevel: 3,
            hp: 11117,
            armor: 98,
            energy: 60,
            size: '3x3',
            cost: 310,
            time: 48,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.coyote.name', icon: coyote },
              { type: 'units.resistUnits.armadillo.name', icon: armadillo },
              { type: 'units.resistUnits.jaguar.name', icon: jaguar },
            ],
          },
        ],
      },
      // 17
      {
        level: 17,
        subLevels: [
          {
            subLevel: 1,
            hp: 7314,
            armor: 96,
            energy: 15,
            size: '3x3',
            cost: 160,
            time: 24,
            weapons: null,
            produces: [{ type: 'units.resistUnits.coyote.name', icon: coyote }],
          },
          {
            subLevel: 2,
            hp: 8256,
            armor: 101,
            energy: 30,
            size: '3x3',
            cost: 210,
            time: 36,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.coyote.name', icon: coyote },
              { type: 'units.resistUnits.armadillo.name', icon: armadillo },
            ],
          },
          {
            subLevel: 3,
            hp: 11117,
            armor: 106,
            energy: 60,
            size: '3x3',
            cost: 310,
            time: 47,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.coyote.name', icon: coyote },
              { type: 'units.resistUnits.armadillo.name', icon: armadillo },
              { type: 'units.resistUnits.jaguar.name', icon: jaguar },
            ],
          },
        ],
      },
      // 18
      {
        level: 18,
        subLevels: [
          {
            subLevel: 1,
            hp: 7629,
            armor: 96,
            energy: 15,
            size: '3x3',
            cost: 160,
            time: 24,
            weapons: null,
            produces: [{ type: 'units.resistUnits.coyote.name', icon: coyote }],
          },
          {
            subLevel: 2,
            hp: 8555,
            armor: 101,
            energy: 30,
            size: '3x3',
            cost: 210,
            time: 36,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.coyote.name', icon: coyote },
              { type: 'units.resistUnits.armadillo.name', icon: armadillo },
            ],
          },
          {
            subLevel: 3,
            hp: 11444,
            armor: 106,
            energy: 60,
            size: '3x3',
            cost: 310,
            time: 47,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.coyote.name', icon: coyote },
              { type: 'units.resistUnits.armadillo.name', icon: armadillo },
              { type: 'units.resistUnits.jaguar.name', icon: jaguar },
            ],
          },
        ],
      },
      // 19
      {
        level: 19,
        subLevels: [
          {
            subLevel: 1,
            hp: 7629,
            armor: 104,
            energy: 15,
            size: '3x3',
            cost: 160,
            time: 23,
            weapons: null,
            produces: [{ type: 'units.resistUnits.coyote.name', icon: coyote }],
          },
          {
            subLevel: 2,
            hp: 8555,
            armor: 109,
            energy: 30,
            size: '3x3',
            cost: 210,
            time: 35,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.coyote.name', icon: coyote },
              { type: 'units.resistUnits.armadillo.name', icon: armadillo },
            ],
          },
          {
            subLevel: 3,
            hp: 11444,
            armor: 114,
            energy: 60,
            size: '3x3',
            cost: 310,
            time: 46,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.coyote.name', icon: coyote },
              { type: 'units.resistUnits.armadillo.name', icon: armadillo },
              { type: 'units.resistUnits.jaguar.name', icon: jaguar },
            ],
          },
        ],
      },
      // 20
      {
        level: 20,
        subLevels: [
          {
            subLevel: 1,
            hp: 7957,
            armor: 104,
            energy: 15,
            size: '3x3',
            cost: 160,
            time: 23,
            weapons: null,
            produces: [{ type: 'units.resistUnits.coyote.name', icon: coyote }],
          },
          {
            subLevel: 2,
            hp: 8868,
            armor: 109,
            energy: 30,
            size: '3x3',
            cost: 210,
            time: 35,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.coyote.name', icon: coyote },
              { type: 'units.resistUnits.armadillo.name', icon: armadillo },
            ],
          },
          {
            subLevel: 3,
            hp: 11788,
            armor: 114,
            energy: 60,
            size: '3x3',
            cost: 310,
            time: 46,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.coyote.name', icon: coyote },
              { type: 'units.resistUnits.armadillo.name', icon: armadillo },
              { type: 'units.resistUnits.jaguar.name', icon: jaguar },
            ],
          },
        ],
      },
      // 21
      {
        level: 21,
        subLevels: [
          {
            subLevel: 1,
            hp: 7957,
            armor: 112,
            energy: 15,
            size: '3x3',
            cost: 160,
            time: 23,
            weapons: null,
            produces: [{ type: 'units.resistUnits.coyote.name', icon: coyote }],
          },
          {
            subLevel: 2,
            hp: 8868,
            armor: 117,
            energy: 30,
            size: '3x3',
            cost: 210,
            time: 34,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.coyote.name', icon: coyote },
              { type: 'units.resistUnits.armadillo.name', icon: armadillo },
            ],
          },
          {
            subLevel: 3,
            hp: 11788,
            armor: 122,
            energy: 60,
            size: '3x3',
            cost: 310,
            time: 45,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.coyote.name', icon: coyote },
              { type: 'units.resistUnits.armadillo.name', icon: armadillo },
              { type: 'units.resistUnits.jaguar.name', icon: jaguar },
            ],
          },
        ],
      },
      // 22
      {
        level: 22,
        subLevels: [
          {
            subLevel: 1,
            hp: 8297,
            armor: 116,
            energy: 15,
            size: '3x3',
            cost: 160,
            time: 23,
            weapons: null,
            produces: [{ type: 'units.resistUnits.coyote.name', icon: coyote }],
          },
          {
            subLevel: 2,
            hp: 9195,
            armor: 121,
            energy: 30,
            size: '3x3',
            cost: 210,
            time: 34,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.coyote.name', icon: coyote },
              { type: 'units.resistUnits.armadillo.name', icon: armadillo },
            ],
          },
          {
            subLevel: 3,
            hp: 12151,
            armor: 126,
            energy: 60,
            size: '3x3',
            cost: 310,
            time: 45,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.coyote.name', icon: coyote },
              { type: 'units.resistUnits.armadillo.name', icon: armadillo },
              { type: 'units.resistUnits.jaguar.name', icon: jaguar },
            ],
          },
        ],
      },
      // 24
      {
        level: 24,
        subLevels: [
          {
            subLevel: 1,
            hp: 9014,
            armor: 125,
            energy: 15,
            size: '3x3',
            cost: 160,
            time: 22,
            weapons: null,
            produces: [{ type: 'units.resistUnits.coyote.name', icon: coyote }],
          },
          {
            subLevel: 2,
            hp: 9891,
            armor: 130,
            energy: 30,
            size: '3x3',
            cost: 210,
            time: 33,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.coyote.name', icon: coyote },
              { type: 'units.resistUnits.armadillo.name', icon: armadillo },
            ],
          },
          {
            subLevel: 3,
            hp: 12929,
            armor: 135,
            energy: 60,
            size: '3x3',
            cost: 310,
            time: 44,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.coyote.name', icon: coyote },
              { type: 'units.resistUnits.armadillo.name', icon: armadillo },
              { type: 'units.resistUnits.jaguar.name', icon: jaguar },
            ],
          },
        ],
      },
      // 25
      {
        level: 25,
        subLevels: [
          {
            subLevel: 1,
            hp: 9392,
            armor: 130,
            energy: 15,
            size: '3x3',
            cost: 160,
            time: 21,
            weapons: null,
            produces: [{ type: 'units.resistUnits.coyote.name', icon: coyote }],
          },
          {
            subLevel: 2,
            hp: 10259,
            armor: 135,
            energy: 30,
            size: '3x3',
            cost: 210,
            time: 32,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.coyote.name', icon: coyote },
              { type: 'units.resistUnits.armadillo.name', icon: armadillo },
            ],
          },
          {
            subLevel: 3,
            hp: 13346,
            armor: 140,
            energy: 60,
            size: '3x3',
            cost: 310,
            time: 42,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.coyote.name', icon: coyote },
              { type: 'units.resistUnits.armadillo.name', icon: armadillo },
              { type: 'units.resistUnits.jaguar.name', icon: jaguar },
            ],
          },
        ],
      },
      // 26
      {
        level: 26,
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
            produces: [{ type: 'units.resistUnits.coyote.name', icon: coyote }],
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
              { type: 'units.resistUnits.coyote.name', icon: coyote },
              { type: 'units.resistUnits.armadillo.name', icon: armadillo },
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
              { type: 'units.resistUnits.coyote.name', icon: coyote },
              { type: 'units.resistUnits.armadillo.name', icon: armadillo },
              { type: 'units.resistUnits.jaguar.name', icon: jaguar },
            ],
          },
        ],
      },
      // 27
      {
        level: 27,
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
            produces: [{ type: 'units.resistUnits.coyote.name', icon: coyote }],
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
              { type: 'units.resistUnits.coyote.name', icon: coyote },
              { type: 'units.resistUnits.armadillo.name', icon: armadillo },
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
              { type: 'units.resistUnits.coyote.name', icon: coyote },
              { type: 'units.resistUnits.armadillo.name', icon: armadillo },
              { type: 'units.resistUnits.jaguar.name', icon: jaguar },
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
            produces: [{ type: 'units.resistUnits.coyote.name', icon: coyote }],
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
              { type: 'units.resistUnits.coyote.name', icon: coyote },
              { type: 'units.resistUnits.armadillo.name', icon: armadillo },
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
              { type: 'units.resistUnits.coyote.name', icon: coyote },
              { type: 'units.resistUnits.armadillo.name', icon: armadillo },
              { type: 'units.resistUnits.jaguar.name', icon: jaguar },
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
            produces: [{ type: 'units.resistUnits.coyote.name', icon: coyote }],
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
              { type: 'units.resistUnits.coyote.name', icon: coyote },
              { type: 'units.resistUnits.armadillo.name', icon: armadillo },
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
              { type: 'units.resistUnits.coyote.name', icon: coyote },
              { type: 'units.resistUnits.armadillo.name', icon: armadillo },
              { type: 'units.resistUnits.jaguar.name', icon: jaguar },
            ],
          },
        ],
      },
    ],
  },
  // Special Vehicle Factory
  {
    id: 7,
    name: 'buildings.resistBuildings.specialVehicleFactory',
    image: specialVehicleFactory,
    description: '',
    weapons: null,
    produces: null,
    levels: [
      // 7
      {
        level: 7,
        subLevels: [
          {
            subLevel: 1,
            hp: 6373,
            armor: 62,
            energy: 30,
            size: '3x3',
            cost: 200,
            time: 36,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.porcupine.name', icon: porcupine },
            ],
          },
          {
            subLevel: 2,
            hp: 7207,
            armor: 67,
            energy: 45,
            size: '3x3',
            cost: 250,
            time: 53,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.porcupine.name', icon: porcupine },
              { type: 'units.resistUnits.mammoth.name', icon: mammoth },
            ],
          },
          {
            subLevel: 3,
            hp: 9433,
            armor: 72,
            energy: 70,
            size: '3x3',
            cost: 300,
            time: 71,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.porcupine.name', icon: porcupine },
              { type: 'units.resistUnits.mammoth.name', icon: mammoth },
              { type: 'units.resistUnits.chameleon.name', icon: chameleon },
            ],
          },
        ],
      },
      // 12
      {
        level: 12,
        subLevels: [
          {
            subLevel: 1,
            hp: 7004,
            armor: 79,
            energy: 30,
            size: '3x3',
            cost: 200,
            time: 34,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.porcupine.name', icon: porcupine },
            ],
          },
          {
            subLevel: 2,
            hp: 7915,
            armor: 84,
            energy: 45,
            size: '3x3',
            cost: 250,
            time: 51,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.porcupine.name', icon: porcupine },
              { type: 'units.resistUnits.mammoth.name', icon: mammoth },
            ],
          },
          {
            subLevel: 3,
            hp: 10353,
            armor: 89,
            energy: 70,
            size: '3x3',
            cost: 300,
            time: 68,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.porcupine.name', icon: porcupine },
              { type: 'units.resistUnits.mammoth.name', icon: mammoth },
              { type: 'units.resistUnits.chameleon.name', icon: chameleon },
            ],
          },
        ],
      },
      // 16
      {
        level: 16,
        subLevels: [
          {
            subLevel: 1,
            hp: 7693,
            armor: 93,
            energy: 30,
            size: '3x3',
            cost: 200,
            time: 32,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.porcupine.name', icon: porcupine },
            ],
          },
          {
            subLevel: 2,
            hp: 8687,
            armor: 98,
            energy: 45,
            size: '3x3',
            cost: 250,
            time: 48,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.porcupine.name', icon: porcupine },
              { type: 'units.resistUnits.mammoth.name', icon: mammoth },
            ],
          },
          {
            subLevel: 3,
            hp: 11352,
            armor: 103,
            energy: 70,
            size: '3x3',
            cost: 300,
            time: 64,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.porcupine.name', icon: porcupine },
              { type: 'units.resistUnits.mammoth.name', icon: mammoth },
              { type: 'units.resistUnits.chameleon.name', icon: chameleon },
            ],
          },
        ],
      },
      // 17
      {
        level: 17,
        subLevels: [
          {
            subLevel: 1,
            hp: 8060,
            armor: 93,
            energy: 30,
            size: '3x3',
            cost: 200,
            time: 32,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.porcupine.name', icon: porcupine },
            ],
          },
          {
            subLevel: 2,
            hp: 9097,
            armor: 98,
            energy: 45,
            size: '3x3',
            cost: 250,
            time: 47,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.porcupine.name', icon: porcupine },
              { type: 'units.resistUnits.mammoth.name', icon: mammoth },
            ],
          },
          {
            subLevel: 3,
            hp: 11881,
            armor: 103,
            energy: 70,
            size: '3x3',
            cost: 300,
            time: 63,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.porcupine.name', icon: porcupine },
              { type: 'units.resistUnits.mammoth.name', icon: mammoth },
              { type: 'units.resistUnits.chameleon.name', icon: chameleon },
            ],
          },
        ],
      },
      // 18
      {
        level: 18,
        subLevels: [
          {
            subLevel: 1,
            hp: 8442,
            armor: 101,
            energy: 30,
            size: '3x3',
            cost: 200,
            time: 32,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.porcupine.name', icon: porcupine },
            ],
          },
          {
            subLevel: 2,
            hp: 9523,
            armor: 106,
            energy: 45,
            size: '3x3',
            cost: 250,
            time: 47,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.porcupine.name', icon: porcupine },
              { type: 'units.resistUnits.mammoth.name', icon: mammoth },
            ],
          },
          {
            subLevel: 3,
            hp: 12430,
            armor: 111,
            energy: 70,
            size: '3x3',
            cost: 300,
            time: 63,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.porcupine.name', icon: porcupine },
              { type: 'units.resistUnits.mammoth.name', icon: mammoth },
              { type: 'units.resistUnits.chameleon.name', icon: chameleon },
            ],
          },
        ],
      },
      // 19
      {
        level: 19,
        subLevels: [
          {
            subLevel: 1,
            hp: 8838,
            armor: 101,
            energy: 30,
            size: '3x3',
            cost: 200,
            time: 31,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.porcupine.name', icon: porcupine },
            ],
          },
          {
            subLevel: 2,
            hp: 9966,
            armor: 106,
            energy: 45,
            size: '3x3',
            cost: 250,
            time: 46,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.porcupine.name', icon: porcupine },
              { type: 'units.resistUnits.mammoth.name', icon: mammoth },
            ],
          },
          {
            subLevel: 3,
            hp: 12999,
            armor: 111,
            energy: 70,
            size: '3x3',
            cost: 300,
            time: 61,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.porcupine.name', icon: porcupine },
              { type: 'units.resistUnits.mammoth.name', icon: mammoth },
              { type: 'units.resistUnits.chameleon.name', icon: chameleon },
            ],
          },
        ],
      },
      // 20
      {
        level: 20,
        subLevels: [
          {
            subLevel: 1,
            hp: 9158,
            armor: 109,
            energy: 30,
            size: '3x3',
            cost: 200,
            time: 31,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.porcupine.name', icon: porcupine },
            ],
          },
          {
            subLevel: 2,
            hp: 10258,
            armor: 114,
            energy: 45,
            size: '3x3',
            cost: 250,
            time: 46,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.porcupine.name', icon: porcupine },
              { type: 'units.resistUnits.mammoth.name', icon: mammoth },
            ],
          },
          {
            subLevel: 3,
            hp: 13295,
            armor: 119,
            energy: 70,
            size: '3x3',
            cost: 300,
            time: 61,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.porcupine.name', icon: porcupine },
              { type: 'units.resistUnits.mammoth.name', icon: mammoth },
              { type: 'units.resistUnits.chameleon.name', icon: chameleon },
            ],
          },
        ],
      },
      // 21
      {
        level: 21,
        subLevels: [
          {
            subLevel: 1,
            hp: 9493,
            armor: 117,
            energy: 30,
            size: '3x3',
            cost: 200,
            time: 30,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.porcupine.name', icon: porcupine },
            ],
          },
          {
            subLevel: 2,
            hp: 10567,
            armor: 122,
            energy: 45,
            size: '3x3',
            cost: 250,
            time: 45,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.porcupine.name', icon: porcupine },
              { type: 'units.resistUnits.mammoth.name', icon: mammoth },
            ],
          },
          {
            subLevel: 3,
            hp: 13610,
            armor: 127,
            energy: 70,
            size: '3x3',
            cost: 300,
            time: 60,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.porcupine.name', icon: porcupine },
              { type: 'units.resistUnits.mammoth.name', icon: mammoth },
              { type: 'units.resistUnits.chameleon.name', icon: chameleon },
            ],
          },
        ],
      },
      // 22
      {
        level: 22,
        subLevels: [
          {
            subLevel: 1,
            hp: 9842,
            armor: 120,
            energy: 30,
            size: '3x3',
            cost: 200,
            time: 30,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.porcupine.name', icon: porcupine },
            ],
          },
          {
            subLevel: 2,
            hp: 10892,
            armor: 125,
            energy: 45,
            size: '3x3',
            cost: 250,
            time: 45,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.porcupine.name', icon: porcupine },
              { type: 'units.resistUnits.mammoth.name', icon: mammoth },
            ],
          },
          {
            subLevel: 3,
            hp: 13945,
            armor: 130,
            energy: 70,
            size: '3x3',
            cost: 300,
            time: 60,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.porcupine.name', icon: porcupine },
              { type: 'units.resistUnits.mammoth.name', icon: mammoth },
              { type: 'units.resistUnits.chameleon.name', icon: chameleon },
            ],
          },
        ],
      },
      // 24
      {
        level: 24,
        subLevels: [
          {
            subLevel: 1,
            hp: 10585,
            armor: 127,
            energy: 30,
            size: '3x3',
            cost: 200,
            time: 29,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.porcupine.name', icon: porcupine },
            ],
          },
          {
            subLevel: 2,
            hp: 11590,
            armor: 132,
            energy: 45,
            size: '3x3',
            cost: 250,
            time: 44,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.porcupine.name', icon: porcupine },
              { type: 'units.resistUnits.mammoth.name', icon: mammoth },
            ],
          },
          {
            subLevel: 3,
            hp: 14675,
            armor: 137,
            energy: 70,
            size: '3x3',
            cost: 300,
            time: 58,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.porcupine.name', icon: porcupine },
              { type: 'units.resistUnits.mammoth.name', icon: mammoth },
              { type: 'units.resistUnits.chameleon.name', icon: chameleon },
            ],
          },
        ],
      },
      // 25
      {
        level: 25,
        subLevels: [
          {
            subLevel: 1,
            hp: 10979,
            armor: 131,
            energy: 30,
            size: '3x3',
            cost: 200,
            time: 28,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.porcupine.name', icon: porcupine },
            ],
          },
          {
            subLevel: 2,
            hp: 11964,
            armor: 136,
            energy: 45,
            size: '3x3',
            cost: 250,
            time: 42,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.porcupine.name', icon: porcupine },
              { type: 'units.resistUnits.mammoth.name', icon: mammoth },
            ],
          },
          {
            subLevel: 3,
            hp: 15069,
            armor: 141,
            energy: 70,
            size: '3x3',
            cost: 300,
            time: 56,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.porcupine.name', icon: porcupine },
              { type: 'units.resistUnits.mammoth.name', icon: mammoth },
              { type: 'units.resistUnits.chameleon.name', icon: chameleon },
            ],
          },
        ],
      },
      // 26
      {
        level: 26,
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
            produces: [
              { type: 'units.resistUnits.porcupine.name', icon: porcupine },
            ],
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
              { type: 'units.resistUnits.porcupine.name', icon: porcupine },
              { type: 'units.resistUnits.mammoth.name', icon: mammoth },
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
              { type: 'units.resistUnits.porcupine.name', icon: porcupine },
              { type: 'units.resistUnits.mammoth.name', icon: mammoth },
              { type: 'units.resistUnits.chameleon.name', icon: chameleon },
            ],
          },
        ],
      },
      // 27
      {
        level: 27,
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
            produces: [
              { type: 'units.resistUnits.porcupine.name', icon: porcupine },
            ],
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
              { type: 'units.resistUnits.porcupine.name', icon: porcupine },
              { type: 'units.resistUnits.mammoth.name', icon: mammoth },
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
              { type: 'units.resistUnits.porcupine.name', icon: porcupine },
              { type: 'units.resistUnits.mammoth.name', icon: mammoth },
              { type: 'units.resistUnits.chameleon.name', icon: chameleon },
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
            produces: [
              { type: 'units.resistUnits.porcupine.name', icon: porcupine },
            ],
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
              { type: 'units.resistUnits.porcupine.name', icon: porcupine },
              { type: 'units.resistUnits.mammoth.name', icon: mammoth },
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
              { type: 'units.resistUnits.porcupine.name', icon: porcupine },
              { type: 'units.resistUnits.mammoth.name', icon: mammoth },
              { type: 'units.resistUnits.chameleon.name', icon: chameleon },
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
            produces: [
              { type: 'units.resistUnits.porcupine.name', icon: porcupine },
            ],
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
              { type: 'units.resistUnits.porcupine.name', icon: porcupine },
              { type: 'units.resistUnits.mammoth.name', icon: mammoth },
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
              { type: 'units.resistUnits.porcupine.name', icon: porcupine },
              { type: 'units.resistUnits.mammoth.name', icon: mammoth },
              { type: 'units.resistUnits.chameleon.name', icon: chameleon },
            ],
          },
        ],
      },
    ],
  },
  // Avia Factory
  {
    id: 8,
    name: 'buildings.resistBuildings.aviaFactory',
    image: aviaFactory,
    description: '',
    weapons: null,
    produces: null,
    levels: [
      // 7
      {
        level: 7,
        subLevels: [
          {
            subLevel: 1,
            hp: 6873,
            armor: 62,
            energy: 30,
            size: '3x3',
            cost: 250,
            time: 53,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.dragonfly.name', icon: dragonfly },
            ],
          },
          {
            subLevel: 2,
            hp: 7407,
            armor: 67,
            energy: 60,
            size: '3x3',
            cost: 320,
            time: 71,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.dragonfly.name', icon: dragonfly },
              { type: 'units.resistUnits.hawk.name', icon: hawk },
            ],
          },
          {
            subLevel: 3,
            hp: 10062,
            armor: 72,
            energy: 90,
            size: '3x3',
            cost: 400,
            time: 88,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.dragonfly.name', icon: dragonfly },
              { type: 'units.resistUnits.hawk.name', icon: hawk },
              { type: 'units.resistUnits.albatross.name', icon: albatross },
            ],
          },
        ],
      },
      // 12
      {
        level: 12,
        subLevels: [
          {
            subLevel: 1,
            hp: 7917,
            armor: 79,
            energy: 30,
            size: '3x3',
            cost: 250,
            time: 51,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.dragonfly.name', icon: dragonfly },
            ],
          },
          {
            subLevel: 2,
            hp: 8524,
            armor: 84,
            energy: 60,
            size: '3x3',
            cost: 320,
            time: 68,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.dragonfly.name', icon: dragonfly },
              { type: 'units.resistUnits.hawk.name', icon: hawk },
            ],
          },
          {
            subLevel: 3,
            hp: 11571,
            armor: 89,
            energy: 90,
            size: '3x3',
            cost: 400,
            time: 84,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.dragonfly.name', icon: dragonfly },
              { type: 'units.resistUnits.hawk.name', icon: hawk },
              { type: 'units.resistUnits.albatross.name', icon: albatross },
            ],
          },
        ],
      },
      // 16
      {
        level: 16,
        subLevels: [
          {
            subLevel: 1,
            hp: 8696,
            armor: 93,
            energy: 30,
            size: '3x3',
            cost: 250,
            time: 48,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.dragonfly.name', icon: dragonfly },
            ],
          },
          {
            subLevel: 2,
            hp: 9355,
            armor: 98,
            energy: 60,
            size: '3x3',
            cost: 320,
            time: 64,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.dragonfly.name', icon: dragonfly },
              { type: 'units.resistUnits.hawk.name', icon: hawk },
            ],
          },
          {
            subLevel: 3,
            hp: 12687,
            armor: 103,
            energy: 90,
            size: '3x3',
            cost: 400,
            time: 80,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.dragonfly.name', icon: dragonfly },
              { type: 'units.resistUnits.hawk.name', icon: hawk },
              { type: 'units.resistUnits.albatross.name', icon: albatross },
            ],
          },
        ],
      },
      // 17
      {
        level: 17,
        subLevels: [
          {
            subLevel: 1,
            hp: 8696,
            armor: 93,
            energy: 30,
            size: '3x3',
            cost: 250,
            time: 47,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.dragonfly.name', icon: dragonfly },
            ],
          },
          {
            subLevel: 2,
            hp: 9355,
            armor: 98,
            energy: 60,
            size: '3x3',
            cost: 320,
            time: 63,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.dragonfly.name', icon: dragonfly },
              { type: 'units.resistUnits.hawk.name', icon: hawk },
            ],
          },
          {
            subLevel: 3,
            hp: 12687,
            armor: 103,
            energy: 90,
            size: '3x3',
            cost: 400,
            time: 78,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.dragonfly.name', icon: dragonfly },
              { type: 'units.resistUnits.hawk.name', icon: hawk },
              { type: 'units.resistUnits.albatross.name', icon: albatross },
            ],
          },
        ],
      },
      // 18
      {
        level: 18,
        subLevels: [
          {
            subLevel: 1,
            hp: 9110,
            armor: 101,
            energy: 30,
            size: '3x3',
            cost: 250,
            time: 47,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.dragonfly.name', icon: dragonfly },
            ],
          },
          {
            subLevel: 2,
            hp: 9797,
            armor: 106,
            energy: 60,
            size: '3x3',
            cost: 320,
            time: 63,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.dragonfly.name', icon: dragonfly },
              { type: 'units.resistUnits.hawk.name', icon: hawk },
            ],
          },
          {
            subLevel: 3,
            hp: 13279,
            armor: 111,
            energy: 90,
            size: '3x3',
            cost: 400,
            time: 78,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.dragonfly.name', icon: dragonfly },
              { type: 'units.resistUnits.hawk.name', icon: hawk },
              { type: 'units.resistUnits.albatross.name', icon: albatross },
            ],
          },
        ],
      },
      // 19
      {
        level: 19,
        subLevels: [
          {
            subLevel: 1,
            hp: 9541,
            armor: 101,
            energy: 30,
            size: '3x3',
            cost: 250,
            time: 46,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.dragonfly.name', icon: dragonfly },
            ],
          },
          {
            subLevel: 2,
            hp: 10256,
            armor: 106,
            energy: 60,
            size: '3x3',
            cost: 320,
            time: 61,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.dragonfly.name', icon: dragonfly },
              { type: 'units.resistUnits.hawk.name', icon: hawk },
            ],
          },
          {
            subLevel: 3,
            hp: 13893,
            armor: 111,
            energy: 90,
            size: '3x3',
            cost: 400,
            time: 76,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.dragonfly.name', icon: dragonfly },
              { type: 'units.resistUnits.hawk.name', icon: hawk },
              { type: 'units.resistUnits.albatross.name', icon: albatross },
            ],
          },
        ],
      },
      // 20
      {
        level: 20,
        subLevels: [
          {
            subLevel: 1,
            hp: 9989,
            armor: 109,
            energy: 30,
            size: '3x3',
            cost: 250,
            time: 46,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.dragonfly.name', icon: dragonfly },
            ],
          },
          {
            subLevel: 2,
            hp: 10732,
            armor: 114,
            energy: 60,
            size: '3x3',
            cost: 320,
            time: 61,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.dragonfly.name', icon: dragonfly },
              { type: 'units.resistUnits.hawk.name', icon: hawk },
            ],
          },
          {
            subLevel: 3,
            hp: 14529,
            armor: 119,
            energy: 90,
            size: '3x3',
            cost: 400,
            time: 76,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.dragonfly.name', icon: dragonfly },
              { type: 'units.resistUnits.hawk.name', icon: hawk },
              { type: 'units.resistUnits.albatross.name', icon: albatross },
            ],
          },
        ],
      },
      // 21
      {
        level: 21,
        subLevels: [
          {
            subLevel: 1,
            hp: 10351,
            armor: 109,
            energy: 30,
            size: '3x3',
            cost: 250,
            time: 45,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.dragonfly.name', icon: dragonfly },
            ],
          },
          {
            subLevel: 2,
            hp: 11048,
            armor: 114,
            energy: 60,
            size: '3x3',
            cost: 320,
            time: 60,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.dragonfly.name', icon: dragonfly },
              { type: 'units.resistUnits.hawk.name', icon: hawk },
            ],
          },
          {
            subLevel: 3,
            hp: 14859,
            armor: 119,
            energy: 90,
            size: '3x3',
            cost: 400,
            time: 74,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.dragonfly.name', icon: dragonfly },
              { type: 'units.resistUnits.hawk.name', icon: hawk },
              { type: 'units.resistUnits.albatross.name', icon: albatross },
            ],
          },
        ],
      },
      // 22
      {
        level: 22,
        subLevels: [
          {
            subLevel: 1,
            hp: 10730,
            armor: 117,
            energy: 30,
            size: '3x3',
            cost: 250,
            time: 45,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.dragonfly.name', icon: dragonfly },
            ],
          },
          {
            subLevel: 2,
            hp: 11380,
            armor: 122,
            energy: 60,
            size: '3x3',
            cost: 320,
            time: 60,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.dragonfly.name', icon: dragonfly },
              { type: 'units.resistUnits.hawk.name', icon: hawk },
            ],
          },
          {
            subLevel: 3,
            hp: 15211,
            armor: 127,
            energy: 90,
            size: '3x3',
            cost: 400,
            time: 74,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.dragonfly.name', icon: dragonfly },
              { type: 'units.resistUnits.hawk.name', icon: hawk },
              { type: 'units.resistUnits.albatross.name', icon: albatross },
            ],
          },
        ],
      },
      // 24
      {
        level: 24,
        subLevels: [
          {
            subLevel: 1,
            hp: 11536,
            armor: 123,
            energy: 30,
            size: '3x3',
            cost: 250,
            time: 44,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.dragonfly.name', icon: dragonfly },
            ],
          },
          {
            subLevel: 2,
            hp: 12098,
            armor: 128,
            energy: 60,
            size: '3x3',
            cost: 320,
            time: 58,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.dragonfly.name', icon: dragonfly },
              { type: 'units.resistUnits.hawk.name', icon: hawk },
            ],
          },
          {
            subLevel: 3,
            hp: 15982,
            armor: 133,
            energy: 90,
            size: '3x3',
            cost: 400,
            time: 72,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.dragonfly.name', icon: dragonfly },
              { type: 'units.resistUnits.hawk.name', icon: hawk },
              { type: 'units.resistUnits.albatross.name', icon: albatross },
            ],
          },
        ],
      },
      // 25
      {
        level: 25,
        subLevels: [
          {
            subLevel: 1,
            hp: 11964,
            armor: 127,
            energy: 30,
            size: '3x3',
            cost: 250,
            time: 42,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.dragonfly.name', icon: dragonfly },
            ],
          },
          {
            subLevel: 2,
            hp: 12482,
            armor: 132,
            energy: 60,
            size: '3x3',
            cost: 320,
            time: 56,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.dragonfly.name', icon: dragonfly },
              { type: 'units.resistUnits.hawk.name', icon: hawk },
            ],
          },
          {
            subLevel: 3,
            hp: 16401,
            armor: 137,
            energy: 90,
            size: '3x3',
            cost: 400,
            time: 70,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.dragonfly.name', icon: dragonfly },
              { type: 'units.resistUnits.hawk.name', icon: hawk },
              { type: 'units.resistUnits.albatross.name', icon: albatross },
            ],
          },
        ],
      },
      // 26
      {
        level: 26,
        subLevels: [
          {
            subLevel: 1,
            hp: 12409,
            armor: 131,
            energy: 30,
            size: '3x3',
            cost: 250,
            time: 42,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.dragonfly.name', icon: dragonfly },
            ],
          },
          {
            subLevel: 2,
            hp: 12885,
            armor: 136,
            energy: 60,
            size: '3x3',
            cost: 320,
            time: 56,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.dragonfly.name', icon: dragonfly },
              { type: 'units.resistUnits.hawk.name', icon: hawk },
            ],
          },
          {
            subLevel: 3,
            hp: 16842,
            armor: 141,
            energy: 90,
            size: '3x3',
            cost: 400,
            time: 70,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.dragonfly.name', icon: dragonfly },
              { type: 'units.resistUnits.hawk.name', icon: hawk },
              { type: 'units.resistUnits.albatross.name', icon: albatross },
            ],
          },
        ],
      },
      // 27
      {
        level: 27,
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
            produces: [
              { type: 'units.resistUnits.dragonfly.name', icon: dragonfly },
            ],
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
              { type: 'units.resistUnits.dragonfly.name', icon: dragonfly },
              { type: 'units.resistUnits.hawk.name', icon: hawk },
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
              { type: 'units.resistUnits.dragonfly.name', icon: dragonfly },
              { type: 'units.resistUnits.hawk.name', icon: hawk },
              { type: 'units.resistUnits.albatross.name', icon: albatross },
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
            produces: [
              { type: 'units.resistUnits.dragonfly.name', icon: dragonfly },
            ],
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
              { type: 'units.resistUnits.dragonfly.name', icon: dragonfly },
              { type: 'units.resistUnits.hawk.name', icon: hawk },
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
              { type: 'units.resistUnits.dragonfly.name', icon: dragonfly },
              { type: 'units.resistUnits.hawk.name', icon: hawk },
              { type: 'units.resistUnits.albatross.name', icon: albatross },
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
            produces: [
              { type: 'units.resistUnits.dragonfly.name', icon: dragonfly },
            ],
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
              { type: 'units.resistUnits.dragonfly.name', icon: dragonfly },
              { type: 'units.resistUnits.hawk.name', icon: hawk },
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
              { type: 'units.resistUnits.dragonfly.name', icon: dragonfly },
              { type: 'units.resistUnits.hawk.name', icon: hawk },
              { type: 'units.resistUnits.albatross.name', icon: albatross },
            ],
          },
        ],
      },
    ],
  },
  // Airfield
  {
    id: 9,
    name: 'buildings.resistBuildings.airfield',
    image: airfield,
    description: '',
    weapons: null,
    produces: null,
    levels: [
      // 7
      {
        level: 7,
        subLevels: [
          {
            subLevel: 1,
            hp: 6614,
            armor: 57,
            energy: 40,
            size: '3x3',
            cost: 300,
            time: 44,
            weapons: null,
            produces: null,
          },
        ],
      },
      // 12
      {
        level: 12,
        subLevels: [
          {
            subLevel: 1,
            hp: 7611,
            armor: 74,
            energy: 40,
            size: '3x3',
            cost: 300,
            time: 42,
            weapons: null,
            produces: null,
          },
        ],
      },
      // 16
      {
        level: 16,
        subLevels: [
          {
            subLevel: 1,
            hp: 8354,
            armor: 88,
            energy: 40,
            size: '3x3',
            cost: 300,
            time: 40,
            weapons: null,
            produces: null,
          },
        ],
      },
      // 17
      {
        level: 17,
        subLevels: [
          {
            subLevel: 1,
            hp: 8354,
            armor: 88,
            energy: 40,
            size: '3x3',
            cost: 300,
            time: 39,
            weapons: null,
            produces: null,
          },
        ],
      },
      // 18
      {
        level: 18,
        subLevels: [
          {
            subLevel: 1,
            hp: 8748,
            armor: 96,
            energy: 40,
            size: '3x3',
            cost: 300,
            time: 39,
            weapons: null,
            produces: null,
          },
        ],
      },
      // 19
      {
        level: 19,
        subLevels: [
          {
            subLevel: 1,
            hp: 9158,
            armor: 96,
            energy: 40,
            size: '3x3',
            cost: 300,
            time: 38,
            weapons: null,
            produces: null,
          },
        ],
      },
      // 20
      {
        level: 20,
        subLevels: [
          {
            subLevel: 1,
            hp: 9583,
            armor: 104,
            energy: 40,
            size: '3x3',
            cost: 300,
            time: 38,
            weapons: null,
            produces: null,
          },
        ],
      },
      // 21
      {
        level: 21,
        subLevels: [
          {
            subLevel: 1,
            hp: 9864,
            armor: 104,
            energy: 40,
            size: '3x3',
            cost: 300,
            time: 37,
            weapons: null,
            produces: null,
          },
        ],
      },
      // 22
      {
        level: 22,
        subLevels: [
          {
            subLevel: 1,
            hp: 10161,
            armor: 112,
            energy: 40,
            size: '3x3',
            cost: 300,
            time: 37,
            weapons: null,
            produces: null,
          },
        ],
      },
      // 24
      {
        level: 24,
        subLevels: [
          {
            subLevel: 1,
            hp: 10802,
            armor: 115,
            energy: 40,
            size: '3x3',
            cost: 300,
            time: 36,
            weapons: null,
            produces: null,
          },
        ],
      },
      // 25
      {
        level: 25,
        subLevels: [
          {
            subLevel: 1,
            hp: 11145,
            armor: 118,
            energy: 40,
            size: '3x3',
            cost: 300,
            time: 35,
            weapons: null,
            produces: null,
          },
        ],
      },
      // 26
      {
        level: 26,
        subLevels: [
          {
            subLevel: 1,
            hp: 11505,
            armor: 122,
            energy: 40,
            size: '3x3',
            cost: 300,
            time: 35,
            weapons: null,
            produces: null,
          },
        ],
      },
      // 27
      {
        level: 27,
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
    name: 'buildings.resistBuildings.shipyard',
    image: shipyard,
    description: '',
    weapons: null,
    produces: null,
    levels: [
      // 7
      {
        level: 7,
        subLevels: [
          {
            subLevel: 1,
            hp: 7402,
            armor: 57,
            energy: 30,
            size: '3x3',
            cost: 200,
            time: 53,
            weapons: null,
            produces: [{ type: 'units.resistUnits.caiman.name', icon: caiman }],
          },
          {
            subLevel: 2,
            hp: 8466,
            armor: 62,
            energy: 60,
            size: '3x3',
            cost: 270,
            time: 71,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.caiman.name', icon: caiman },
              { type: 'units.resistUnits.alligator.name', icon: alligator },
            ],
          },
          {
            subLevel: 3,
            hp: 11387,
            armor: 67,
            energy: 90,
            size: '3x3',
            cost: 300,
            time: 88,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.caiman.name', icon: caiman },
              { type: 'units.resistUnits.alligator.name', icon: alligator },
              { type: 'units.resistUnits.barracuda.name', icon: barracuda },
            ],
          },
        ],
      },
      // 12
      {
        level: 12,
        subLevels: [
          {
            subLevel: 1,
            hp: 8526,
            armor: 73,
            energy: 30,
            size: '3x3',
            cost: 200,
            time: 51,
            weapons: null,
            produces: [{ type: 'units.resistUnits.caiman.name', icon: caiman }],
          },
          {
            subLevel: 2,
            hp: 9743,
            armor: 78,
            energy: 60,
            size: '3x3',
            cost: 270,
            time: 68,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.caiman.name', icon: caiman },
              { type: 'units.resistUnits.alligator.name', icon: alligator },
            ],
          },
          {
            subLevel: 3,
            hp: 13094,
            armor: 83,
            energy: 90,
            size: '3x3',
            cost: 300,
            time: 84,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.caiman.name', icon: caiman },
              { type: 'units.resistUnits.alligator.name', icon: alligator },
              { type: 'units.resistUnits.barracuda.name', icon: barracuda },
            ],
          },
        ],
      },
      // 16
      {
        level: 16,
        subLevels: [
          {
            subLevel: 1,
            hp: 9364,
            armor: 86,
            energy: 30,
            size: '3x3',
            cost: 200,
            time: 48,
            weapons: null,
            produces: [{ type: 'units.resistUnits.caiman.name', icon: caiman }],
          },
          {
            subLevel: 2,
            hp: 10693,
            armor: 91,
            energy: 60,
            size: '3x3',
            cost: 270,
            time: 64,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.caiman.name', icon: caiman },
              { type: 'units.resistUnits.alligator.name', icon: alligator },
            ],
          },
          {
            subLevel: 3,
            hp: 14357,
            armor: 96,
            energy: 90,
            size: '3x3',
            cost: 300,
            time: 80,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.caiman.name', icon: caiman },
              { type: 'units.resistUnits.alligator.name', icon: alligator },
              { type: 'units.resistUnits.barracuda.name', icon: barracuda },
            ],
          },
        ],
      },
      // 17
      {
        level: 17,
        subLevels: [
          {
            subLevel: 1,
            hp: 9364,
            armor: 86,
            energy: 30,
            size: '3x3',
            cost: 200,
            time: 47,
            weapons: null,
            produces: [{ type: 'units.resistUnits.caiman.name', icon: caiman }],
          },
          {
            subLevel: 2,
            hp: 10693,
            armor: 91,
            energy: 60,
            size: '3x3',
            cost: 270,
            time: 63,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.caiman.name', icon: caiman },
              { type: 'units.resistUnits.alligator.name', icon: alligator },
            ],
          },
          {
            subLevel: 3,
            hp: 14357,
            armor: 96,
            energy: 90,
            size: '3x3',
            cost: 300,
            time: 78,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.caiman.name', icon: caiman },
              { type: 'units.resistUnits.alligator.name', icon: alligator },
              { type: 'units.resistUnits.barracuda.name', icon: barracuda },
            ],
          },
        ],
      },
      // 18
      {
        level: 18,
        subLevels: [
          {
            subLevel: 1,
            hp: 9810,
            armor: 93,
            energy: 30,
            size: '3x3',
            cost: 200,
            time: 47,
            weapons: null,
            produces: [{ type: 'units.resistUnits.caiman.name', icon: caiman }],
          },
          {
            subLevel: 2,
            hp: 11198,
            armor: 98,
            energy: 60,
            size: '3x3',
            cost: 270,
            time: 63,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.caiman.name', icon: caiman },
              { type: 'units.resistUnits.alligator.name', icon: alligator },
            ],
          },
          {
            subLevel: 3,
            hp: 15026,
            armor: 103,
            energy: 90,
            size: '3x3',
            cost: 300,
            time: 78,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.caiman.name', icon: caiman },
              { type: 'units.resistUnits.alligator.name', icon: alligator },
              { type: 'units.resistUnits.barracuda.name', icon: barracuda },
            ],
          },
        ],
      },
      // 19
      {
        level: 19,
        subLevels: [
          {
            subLevel: 1,
            hp: 10275,
            armor: 93,
            energy: 30,
            size: '3x3',
            cost: 200,
            time: 46,
            weapons: null,
            produces: [{ type: 'units.resistUnits.caiman.name', icon: caiman }],
          },
          {
            subLevel: 2,
            hp: 11722,
            armor: 98,
            energy: 60,
            size: '3x3',
            cost: 270,
            time: 61,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.caiman.name', icon: caiman },
              { type: 'units.resistUnits.alligator.name', icon: alligator },
            ],
          },
          {
            subLevel: 3,
            hp: 15721,
            armor: 103,
            energy: 90,
            size: '3x3',
            cost: 300,
            time: 76,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.caiman.name', icon: caiman },
              { type: 'units.resistUnits.alligator.name', icon: alligator },
              { type: 'units.resistUnits.barracuda.name', icon: barracuda },
            ],
          },
        ],
      },
      // 20
      {
        level: 20,
        subLevels: [
          {
            subLevel: 1,
            hp: 10757,
            armor: 101,
            energy: 30,
            size: '3x3',
            cost: 200,
            time: 46,
            weapons: null,
            produces: [{ type: 'units.resistUnits.caiman.name', icon: caiman }],
          },
          {
            subLevel: 2,
            hp: 12267,
            armor: 106,
            energy: 60,
            size: '3x3',
            cost: 270,
            time: 61,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.caiman.name', icon: caiman },
              { type: 'units.resistUnits.alligator.name', icon: alligator },
            ],
          },
          {
            subLevel: 3,
            hp: 16440,
            armor: 111,
            energy: 90,
            size: '3x3',
            cost: 300,
            time: 76,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.caiman.name', icon: caiman },
              { type: 'units.resistUnits.alligator.name', icon: alligator },
              { type: 'units.resistUnits.barracuda.name', icon: barracuda },
            ],
          },
        ],
      },
      // 21
      {
        level: 21,
        subLevels: [
          {
            subLevel: 1,
            hp: 11147,
            armor: 101,
            energy: 30,
            size: '3x3',
            cost: 200,
            time: 45,
            weapons: null,
            produces: [{ type: 'units.resistUnits.caiman.name', icon: caiman }],
          },
          {
            subLevel: 2,
            hp: 12627,
            armor: 106,
            energy: 60,
            size: '3x3',
            cost: 270,
            time: 60,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.caiman.name', icon: caiman },
              { type: 'units.resistUnits.alligator.name', icon: alligator },
            ],
          },
          {
            subLevel: 3,
            hp: 16814,
            armor: 111,
            energy: 90,
            size: '3x3',
            cost: 300,
            time: 74,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.caiman.name', icon: caiman },
              { type: 'units.resistUnits.alligator.name', icon: alligator },
              { type: 'units.resistUnits.barracuda.name', icon: barracuda },
            ],
          },
        ],
      },
      // 22
      {
        level: 22,
        subLevels: [
          {
            subLevel: 1,
            hp: 11555,
            armor: 109,
            energy: 30,
            size: '3x3',
            cost: 200,
            time: 45,
            weapons: null,
            produces: [{ type: 'units.resistUnits.caiman.name', icon: caiman }],
          },
          {
            subLevel: 2,
            hp: 13007,
            armor: 114,
            energy: 60,
            size: '3x3',
            cost: 270,
            time: 60,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.caiman.name', icon: caiman },
              { type: 'units.resistUnits.alligator.name', icon: alligator },
            ],
          },
          {
            subLevel: 3,
            hp: 17212,
            armor: 119,
            energy: 90,
            size: '3x3',
            cost: 300,
            time: 74,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.caiman.name', icon: caiman },
              { type: 'units.resistUnits.alligator.name', icon: alligator },
              { type: 'units.resistUnits.barracuda.name', icon: barracuda },
            ],
          },
        ],
      },
      // 24
      {
        level: 24,
        subLevels: [
          {
            subLevel: 1,
            hp: 12423,
            armor: 120,
            energy: 30,
            size: '3x3',
            cost: 200,
            time: 44,
            weapons: null,
            produces: [{ type: 'units.resistUnits.caiman.name', icon: caiman }],
          },
          {
            subLevel: 2,
            hp: 13826,
            armor: 125,
            energy: 60,
            size: '3x3',
            cost: 270,
            time: 58,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.caiman.name', icon: caiman },
              { type: 'units.resistUnits.alligator.name', icon: alligator },
            ],
          },
          {
            subLevel: 3,
            hp: 18084,
            armor: 130,
            energy: 90,
            size: '3x3',
            cost: 300,
            time: 72,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.caiman.name', icon: caiman },
              { type: 'units.resistUnits.alligator.name', icon: alligator },
              { type: 'units.resistUnits.barracuda.name', icon: barracuda },
            ],
          },
        ],
      },
      // 25
      {
        level: 25,
        subLevels: [
          {
            subLevel: 1,
            hp: 12884,
            armor: 123,
            energy: 30,
            size: '3x3',
            cost: 200,
            time: 42,
            weapons: null,
            produces: [{ type: 'units.resistUnits.caiman.name', icon: caiman }],
          },
          {
            subLevel: 2,
            hp: 14266,
            armor: 128,
            energy: 60,
            size: '3x3',
            cost: 270,
            time: 56,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.caiman.name', icon: caiman },
              { type: 'units.resistUnits.alligator.name', icon: alligator },
            ],
          },
          {
            subLevel: 3,
            hp: 18558,
            armor: 133,
            energy: 90,
            size: '3x3',
            cost: 300,
            time: 70,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.caiman.name', icon: caiman },
              { type: 'units.resistUnits.alligator.name', icon: alligator },
              { type: 'units.resistUnits.barracuda.name', icon: barracuda },
            ],
          },
        ],
      },
      // 26
      {
        level: 26,
        subLevels: [
          {
            subLevel: 1,
            hp: 13363,
            armor: 127,
            energy: 30,
            size: '3x3',
            cost: 200,
            time: 42,
            weapons: null,
            produces: [{ type: 'units.resistUnits.caiman.name', icon: caiman }],
          },
          {
            subLevel: 2,
            hp: 14726,
            armor: 132,
            energy: 60,
            size: '3x3',
            cost: 270,
            time: 56,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.caiman.name', icon: caiman },
              { type: 'units.resistUnits.alligator.name', icon: alligator },
            ],
          },
          {
            subLevel: 3,
            hp: 19057,
            armor: 137,
            energy: 90,
            size: '3x3',
            cost: 300,
            time: 70,
            weapons: null,
            produces: [
              { type: 'units.resistUnits.caiman.name', icon: caiman },
              { type: 'units.resistUnits.alligator.name', icon: alligator },
              { type: 'units.resistUnits.barracuda.name', icon: barracuda },
            ],
          },
        ],
      },
      // 27
      {
        level: 27,
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
            produces: [{ type: 'units.resistUnits.caiman.name', icon: caiman }],
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
              { type: 'units.resistUnits.caiman.name', icon: caiman },
              { type: 'units.resistUnits.alligator.name', icon: alligator },
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
              { type: 'units.resistUnits.caiman.name', icon: caiman },
              { type: 'units.resistUnits.alligator.name', icon: alligator },
              { type: 'units.resistUnits.barracuda.name', icon: barracuda },
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
            produces: [{ type: 'units.resistUnits.caiman.name', icon: caiman }],
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
              { type: 'units.resistUnits.caiman.name', icon: caiman },
              { type: 'units.resistUnits.alligator.name', icon: alligator },
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
              { type: 'units.resistUnits.caiman.name', icon: caiman },
              { type: 'units.resistUnits.alligator.name', icon: alligator },
              { type: 'units.resistUnits.barracuda.name', icon: barracuda },
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
            produces: [{ type: 'units.resistUnits.caiman.name', icon: caiman }],
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
              { type: 'units.resistUnits.caiman.name', icon: caiman },
              { type: 'units.resistUnits.alligator.name', icon: alligator },
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
              { type: 'units.resistUnits.caiman.name', icon: caiman },
              { type: 'units.resistUnits.alligator.name', icon: alligator },
              { type: 'units.resistUnits.barracuda.name', icon: barracuda },
            ],
          },
        ],
      },
    ],
  },
  // Prototype Factory
  {
    id: 11,
    name: 'buildings.resistBuildings.prototypeFactory',
    image: prototypeFactory,
    description: '',
    weapons: null,
    produces: null,
    levels: [
      // 7
      {
        level: 7,
        subLevels: [
          {
            subLevel: 1,
            hp: 7227,
            armor: 58,
            energy: 40,
            size: '3x3',
            cost: 270,
            time: 62,
            weapons: null,
            produces: [{ type: 'heroes.wasp.name', icon: wasp }],
          },
          {
            subLevel: 2,
            hp: 8436,
            armor: 68,
            energy: 60,
            size: '3x3',
            cost: 400,
            time: 80,
            weapons: null,
            produces: [
              { type: 'heroes.wasp.name', icon: wasp },
              { type: 'heroes.wolverine.name', icon: wolverine },
              { type: 'heroes.mole.name', icon: mole },
            ],
          },
          {
            subLevel: 3,
            hp: 10855,
            armor: 78,
            energy: 90,
            size: '3x3',
            cost: 550,
            time: 97,
            weapons: null,
            produces: [
              { type: 'heroes.wasp.name', icon: wasp },
              { type: 'heroes.wolverine.name', icon: wolverine },
              { type: 'heroes.mole.name', icon: mole },
              { type: 'heroes.leviathan.name', icon: leviathan },
            ],
          },
        ],
      },
      // 12
      {
        level: 12,
        subLevels: [
          {
            subLevel: 1,
            hp: 9134,
            armor: 84,
            energy: 40,
            size: '3x3',
            cost: 270,
            time: 59,
            weapons: null,
            produces: [
              { type: 'heroes.wasp.name', icon: wasp },
              { type: 'heroes.wolverine.name', icon: wolverine },
            ],
          },
          {
            subLevel: 2,
            hp: 10656,
            armor: 94,
            energy: 60,
            size: '3x3',
            cost: 400,
            time: 76,
            weapons: null,
            produces: [
              { type: 'heroes.wasp.name', icon: wasp },
              { type: 'heroes.wolverine.name', icon: wolverine },
              { type: 'heroes.mole.name', icon: mole },
              { type: 'heroes.salamander.name', icon: salamander },
            ],
          },
          {
            subLevel: 3,
            hp: 13702,
            armor: 104,
            energy: 90,
            size: '3x3',
            cost: 550,
            time: 93,
            weapons: null,
            produces: [
              { type: 'heroes.wasp.name', icon: wasp },
              { type: 'heroes.wolverine.name', icon: wolverine },
              { type: 'heroes.mole.name', icon: mole },
              { type: 'heroes.salamander.name', icon: salamander },
              { type: 'heroes.leviathan.name', icon: leviathan },
            ],
          },
        ],
      },
      // 16
      {
        level: 16,
        subLevels: [
          {
            subLevel: 1,
            hp: 11008,
            armor: 98,
            energy: 40,
            size: '3x3',
            cost: 270,
            time: 56,
            weapons: null,
            produces: [
              { type: 'heroes.wasp.name', icon: wasp },
              { type: 'heroes.wolverine.name', icon: wolverine },
            ],
          },
          {
            subLevel: 2,
            hp: 12822,
            armor: 108,
            energy: 60,
            size: '3x3',
            cost: 400,
            time: 72,
            weapons: null,
            produces: [
              { type: 'heroes.wasp.name', icon: wasp },
              { type: 'heroes.wolverine.name', icon: wolverine },
              { type: 'heroes.mole.name', icon: mole },
              { type: 'heroes.salamander.name', icon: salamander },
            ],
          },
          {
            subLevel: 3,
            hp: 16452,
            armor: 118,
            energy: 90,
            size: '3x3',
            cost: 550,
            time: 88,
            weapons: null,
            produces: [
              { type: 'heroes.wasp.name', icon: wasp },
              { type: 'heroes.wolverine.name', icon: wolverine },
              { type: 'heroes.mole.name', icon: mole },
              { type: 'heroes.salamander.name', icon: salamander },
              { type: 'heroes.leviathan.name', icon: leviathan },
            ],
          },
        ],
      },
      // 17
      {
        level: 17,
        subLevels: [
          {
            subLevel: 1,
            hp: 11525,
            armor: 106,
            energy: 40,
            size: '3x3',
            cost: 270,
            time: 55,
            weapons: null,
            produces: [
              { type: 'heroes.wasp.name', icon: wasp },
              { type: 'heroes.wolverine.name', icon: wolverine },
            ],
          },
          {
            subLevel: 2,
            hp: 13418,
            armor: 116,
            energy: 60,
            size: '3x3',
            cost: 400,
            time: 71,
            weapons: null,
            produces: [
              { type: 'heroes.wasp.name', icon: wasp },
              { type: 'heroes.wolverine.name', icon: wolverine },
              { type: 'heroes.mole.name', icon: mole },
              { type: 'heroes.salamander.name', icon: salamander },
            ],
          },
          {
            subLevel: 3,
            hp: 17205,
            armor: 126,
            energy: 90,
            size: '3x3',
            cost: 550,
            time: 86,
            weapons: null,
            produces: [
              { type: 'heroes.wasp.name', icon: wasp },
              { type: 'heroes.wolverine.name', icon: wolverine },
              { type: 'heroes.mole.name', icon: mole },
              { type: 'heroes.salamander.name', icon: salamander },
              { type: 'heroes.leviathan.name', icon: leviathan },
            ],
          },
        ],
      },
      // 18
      {
        level: 18,
        subLevels: [
          {
            subLevel: 1,
            hp: 11942,
            armor: 106,
            energy: 40,
            size: '3x3',
            cost: 270,
            time: 55,
            weapons: null,
            produces: [
              { type: 'heroes.wasp.name', icon: wasp },
              { type: 'heroes.wolverine.name', icon: wolverine },
            ],
          },
          {
            subLevel: 2,
            hp: 13812,
            armor: 116,
            energy: 60,
            size: '3x3',
            cost: 400,
            time: 71,
            weapons: null,
            produces: [
              { type: 'heroes.wasp.name', icon: wasp },
              { type: 'heroes.wolverine.name', icon: wolverine },
              { type: 'heroes.mole.name', icon: mole },
              { type: 'heroes.salamander.name', icon: salamander },
            ],
          },
          {
            subLevel: 3,
            hp: 17597,
            armor: 126,
            energy: 90,
            size: '3x3',
            cost: 550,
            time: 86,
            weapons: null,
            produces: [
              { type: 'heroes.wasp.name', icon: wasp },
              { type: 'heroes.wolverine.name', icon: wolverine },
              { type: 'heroes.mole.name', icon: mole },
              { type: 'heroes.salamander.name', icon: salamander },
              { type: 'heroes.leviathan.name', icon: leviathan },
            ],
          },
        ],
      },
      // 19
      {
        level: 19,
        subLevels: [
          {
            subLevel: 1,
            hp: 12379,
            armor: 114,
            energy: 40,
            size: '3x3',
            cost: 270,
            time: 54,
            weapons: null,
            produces: [
              { type: 'heroes.wasp.name', icon: wasp },
              { type: 'heroes.wolverine.name', icon: wolverine },
            ],
          },
          {
            subLevel: 2,
            hp: 14228,
            armor: 124,
            energy: 60,
            size: '3x3',
            cost: 400,
            time: 69,
            weapons: null,
            produces: [
              { type: 'heroes.wasp.name', icon: wasp },
              { type: 'heroes.wolverine.name', icon: wolverine },
              { type: 'heroes.mole.name', icon: mole },
              { type: 'heroes.salamander.name', icon: salamander },
            ],
          },
          {
            subLevel: 3,
            hp: 18014,
            armor: 134,
            energy: 90,
            size: '3x3',
            cost: 550,
            time: 84,
            weapons: null,
            produces: [
              { type: 'heroes.wasp.name', icon: wasp },
              { type: 'heroes.wolverine.name', icon: wolverine },
              { type: 'heroes.mole.name', icon: mole },
              { type: 'heroes.salamander.name', icon: salamander },
              { type: 'heroes.leviathan.name', icon: leviathan },
            ],
          },
        ],
      },
      // 20
      {
        level: 20,
        subLevels: [
          {
            subLevel: 1,
            hp: 12835,
            armor: 114,
            energy: 40,
            size: '3x3',
            cost: 270,
            time: 54,
            weapons: null,
            produces: [
              { type: 'heroes.wasp.name', icon: wasp },
              { type: 'heroes.wolverine.name', icon: wolverine },
            ],
          },
          {
            subLevel: 2,
            hp: 14665,
            armor: 124,
            energy: 60,
            size: '3x3',
            cost: 400,
            time: 69,
            weapons: null,
            produces: [
              { type: 'heroes.wasp.name', icon: wasp },
              { type: 'heroes.wolverine.name', icon: wolverine },
              { type: 'heroes.mole.name', icon: mole },
              { type: 'heroes.salamander.name', icon: salamander },
            ],
          },
          {
            subLevel: 3,
            hp: 18458,
            armor: 134,
            energy: 90,
            size: '3x3',
            cost: 550,
            time: 84,
            weapons: null,
            produces: [
              { type: 'heroes.wasp.name', icon: wasp },
              { type: 'heroes.wolverine.name', icon: wolverine },
              { type: 'heroes.mole.name', icon: mole },
              { type: 'heroes.salamander.name', icon: salamander },
              { type: 'heroes.leviathan.name', icon: leviathan },
            ],
          },
        ],
      },
      // 21
      {
        level: 21,
        subLevels: [
          {
            subLevel: 1,
            hp: 12835,
            armor: 122,
            energy: 40,
            size: '3x3',
            cost: 270,
            time: 52,
            weapons: null,
            produces: [
              { type: 'heroes.wasp.name', icon: wasp },
              { type: 'heroes.wolverine.name', icon: wolverine },
            ],
          },
          {
            subLevel: 2,
            hp: 14665,
            armor: 132,
            energy: 60,
            size: '3x3',
            cost: 400,
            time: 67,
            weapons: null,
            produces: [
              { type: 'heroes.wasp.name', icon: wasp },
              { type: 'heroes.wolverine.name', icon: wolverine },
              { type: 'heroes.mole.name', icon: mole },
              { type: 'heroes.salamander.name', icon: salamander },
            ],
          },
          {
            subLevel: 3,
            hp: 18458,
            armor: 142,
            energy: 90,
            size: '3x3',
            cost: 550,
            time: 82,
            weapons: null,
            produces: [
              { type: 'heroes.wasp.name', icon: wasp },
              { type: 'heroes.wolverine.name', icon: wolverine },
              { type: 'heroes.mole.name', icon: mole },
              { type: 'heroes.salamander.name', icon: salamander },
              { type: 'heroes.leviathan.name', icon: leviathan },
            ],
          },
        ],
      },
      // 22
      {
        level: 22,
        subLevels: [
          {
            subLevel: 1,
            hp: 13310,
            armor: 122,
            energy: 40,
            size: '3x3',
            cost: 270,
            time: 52,
            weapons: null,
            produces: [
              { type: 'heroes.wasp.name', icon: wasp },
              { type: 'heroes.wolverine.name', icon: wolverine },
            ],
          },
          {
            subLevel: 2,
            hp: 15124,
            armor: 132,
            energy: 60,
            size: '3x3',
            cost: 400,
            time: 67,
            weapons: null,
            produces: [
              { type: 'heroes.wasp.name', icon: wasp },
              { type: 'heroes.wolverine.name', icon: wolverine },
              { type: 'heroes.mole.name', icon: mole },
              { type: 'heroes.salamander.name', icon: salamander },
            ],
          },
          {
            subLevel: 3,
            hp: 18928,
            armor: 142,
            energy: 90,
            size: '3x3',
            cost: 550,
            time: 82,
            weapons: null,
            produces: [
              { type: 'heroes.wasp.name', icon: wasp },
              { type: 'heroes.wolverine.name', icon: wolverine },
              { type: 'heroes.mole.name', icon: mole },
              { type: 'heroes.salamander.name', icon: salamander },
              { type: 'heroes.leviathan.name', icon: leviathan },
            ],
          },
        ],
      },
      // 24
      {
        level: 24,
        subLevels: [
          {
            subLevel: 1,
            hp: 13804,
            armor: 127,
            energy: 40,
            size: '3x3',
            cost: 270,
            time: 51,
            weapons: null,
            produces: [
              { type: 'heroes.wasp.name', icon: wasp },
              { type: 'heroes.wolverine.name', icon: wolverine },
            ],
          },
          {
            subLevel: 2,
            hp: 15605,
            armor: 137,
            energy: 60,
            size: '3x3',
            cost: 400,
            time: 65,
            weapons: null,
            produces: [
              { type: 'heroes.wasp.name', icon: wasp },
              { type: 'heroes.wolverine.name', icon: wolverine },
              { type: 'heroes.mole.name', icon: mole },
              { type: 'heroes.salamander.name', icon: salamander },
            ],
          },
          {
            subLevel: 3,
            hp: 19423,
            armor: 147,
            energy: 90,
            size: '3x3',
            cost: 550,
            time: 80,
            weapons: null,
            produces: [
              { type: 'heroes.wasp.name', icon: wasp },
              { type: 'heroes.wolverine.name', icon: wolverine },
              { type: 'heroes.mole.name', icon: mole },
              { type: 'heroes.salamander.name', icon: salamander },
              { type: 'heroes.leviathan.name', icon: leviathan },
            ],
          },
        ],
      },
      // 25
      {
        level: 25,
        subLevels: [
          {
            subLevel: 1,
            hp: 13804,
            armor: 132,
            energy: 40,
            size: '3x3',
            cost: 270,
            time: 49,
            weapons: null,
            produces: [
              { type: 'heroes.wasp.name', icon: wasp },
              { type: 'heroes.wolverine.name', icon: wolverine },
            ],
          },
          {
            subLevel: 2,
            hp: 15605,
            armor: 142,
            energy: 60,
            size: '3x3',
            cost: 400,
            time: 63,
            weapons: null,
            produces: [
              { type: 'heroes.wasp.name', icon: wasp },
              { type: 'heroes.wolverine.name', icon: wolverine },
              { type: 'heroes.mole.name', icon: mole },
              { type: 'heroes.salamander.name', icon: salamander },
            ],
          },
          {
            subLevel: 3,
            hp: 19423,
            armor: 152,
            energy: 90,
            size: '3x3',
            cost: 550,
            time: 77,
            weapons: null,
            produces: [
              { type: 'heroes.wasp.name', icon: wasp },
              { type: 'heroes.wolverine.name', icon: wolverine },
              { type: 'heroes.mole.name', icon: mole },
              { type: 'heroes.salamander.name', icon: salamander },
              { type: 'heroes.leviathan.name', icon: leviathan },
            ],
          },
        ],
      },
      // 26
      {
        level: 26,
        subLevels: [
          {
            subLevel: 1,
            hp: 14317,
            armor: 132,
            energy: 40,
            size: '3x3',
            cost: 270,
            time: 49,
            weapons: null,
            produces: [
              { type: 'heroes.wasp.name', icon: wasp },
              { type: 'heroes.wolverine.name', icon: wolverine },
            ],
          },
          {
            subLevel: 2,
            hp: 16108,
            armor: 142,
            energy: 60,
            size: '3x3',
            cost: 400,
            time: 63,
            weapons: null,
            produces: [
              { type: 'heroes.wasp.name', icon: wasp },
              { type: 'heroes.wolverine.name', icon: wolverine },
              { type: 'heroes.mole.name', icon: mole },
              { type: 'heroes.salamander.name', icon: salamander },
            ],
          },
          {
            subLevel: 3,
            hp: 19945,
            armor: 152,
            energy: 90,
            size: '3x3',
            cost: 550,
            time: 77,
            weapons: null,
            produces: [
              { type: 'heroes.wasp.name', icon: wasp },
              { type: 'heroes.wolverine.name', icon: wolverine },
              { type: 'heroes.mole.name', icon: mole },
              { type: 'heroes.salamander.name', icon: salamander },
              { type: 'heroes.leviathan.name', icon: leviathan },
            ],
          },
        ],
      },
      // 27
      {
        level: 27,
        subLevels: [
          {
            subLevel: 1,
            hp: 14317,
            armor: 138,
            energy: 40,
            size: '3x3',
            cost: 270,
            time: 49,
            weapons: null,
            produces: [
              { type: 'heroes.wasp.name', icon: wasp },
              { type: 'heroes.wolverine.name', icon: wolverine },
            ],
          },
          {
            subLevel: 2,
            hp: 16108,
            armor: 148,
            energy: 60,
            size: '3x3',
            cost: 400,
            time: 63,
            weapons: null,
            produces: [
              { type: 'heroes.wasp.name', icon: wasp },
              { type: 'heroes.wolverine.name', icon: wolverine },
              { type: 'heroes.mole.name', icon: mole },
              { type: 'heroes.salamander.name', icon: salamander },
            ],
          },
          {
            subLevel: 3,
            hp: 19945,
            armor: 158,
            energy: 90,
            size: '3x3',
            cost: 550,
            time: 77,
            weapons: null,
            produces: [
              { type: 'heroes.wasp.name', icon: wasp },
              { type: 'heroes.wolverine.name', icon: wolverine },
              { type: 'heroes.mole.name', icon: mole },
              { type: 'heroes.salamander.name', icon: salamander },
              { type: 'heroes.leviathan.name', icon: leviathan },
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
              { type: 'heroes.wasp.name', icon: wasp },
              { type: 'heroes.wolverine.name', icon: wolverine },
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
              { type: 'heroes.wasp.name', icon: wasp },
              { type: 'heroes.wolverine.name', icon: wolverine },
              { type: 'heroes.mole.name', icon: mole },
              { type: 'heroes.salamander.name', icon: salamander },
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
              { type: 'heroes.wasp.name', icon: wasp },
              { type: 'heroes.wolverine.name', icon: wolverine },
              { type: 'heroes.mole.name', icon: mole },
              { type: 'heroes.salamander.name', icon: salamander },
              { type: 'heroes.leviathan.name', icon: leviathan },
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
              { type: 'heroes.wasp.name', icon: wasp },
              { type: 'heroes.wolverine.name', icon: wolverine },
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
              { type: 'heroes.wasp.name', icon: wasp },
              { type: 'heroes.wolverine.name', icon: wolverine },
              { type: 'heroes.mole.name', icon: mole },
              { type: 'heroes.salamander.name', icon: salamander },
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
              { type: 'heroes.wasp.name', icon: wasp },
              { type: 'heroes.wolverine.name', icon: wolverine },
              { type: 'heroes.mole.name', icon: mole },
              { type: 'heroes.salamander.name', icon: salamander },
              { type: 'heroes.leviathan.name', icon: leviathan },
            ],
          },
        ],
      },
    ],
  },
  // Nuclear Launcher
  {
    id: 12,
    name: 'buildings.resistBuildings.nuclearLauncher',
    image: nuclearLauncher,
    description: '',
    weapons: [{ type: 'buildings.resistBuildings.weapons.nuclearLauncher' }],
    produces: null,
    levels: [
      // 7
      {
        level: 7,
        subLevels: [
          {
            subLevel: 1,
            hp: 5940,
            armor: 45,
            energy: 100,
            size: '3x3',
            cost: 1800,
            time: 105,
            weapons: [
              {
                title: 'buildings.resistBuildings.weapons.nuclearLauncher',
                damageArmor1: 20200,
                damageArmor2: 20200,
                damageArmor3: 20200,
                firingRange: 100,
                rateOfFire: null,
                firingAccuracy: '40.0',
                firingAccuracy2: '0.00',
                explosionRadius: '8.00',
              },
            ],
            produces: null,
          },
        ],
      },
      // 12
      {
        level: 12,
        subLevels: [
          {
            subLevel: 1,
            hp: 5940,
            armor: 45,
            energy: 100,
            size: '3x3',
            cost: 1800,
            time: 105,
            weapons: [
              {
                title: 'buildings.resistBuildings.weapons.nuclearLauncher',
                damageArmor1: 20200,
                damageArmor2: 20200,
                damageArmor3: 20200,
                firingRange: 100,
                rateOfFire: null,
                firingAccuracy: '40.0',
                firingAccuracy2: '0.00',
                explosionRadius: '8.00',
              },
            ],
            produces: null,
          },
        ],
      },
      // 16
      {
        level: 16,
        subLevels: [
          {
            subLevel: 1,
            hp: 7158,
            armor: 58,
            energy: 100,
            size: '3x3',
            cost: 1800,
            time: 100,
            weapons: [
              {
                title: 'buildings.resistBuildings.weapons.nuclearLauncher',
                damageArmor1: 26384,
                damageArmor2: 26384,
                damageArmor3: 26384,
                firingRange: 100,
                rateOfFire: null,
                firingAccuracy: '58.0',
                firingAccuracy2: '0.00',
                explosionRadius: '9.20',
              },
            ],
            produces: null,
          },
        ],
      },
      // 17
      {
        level: 17,
        subLevels: [
          {
            subLevel: 1,
            hp: 7455,
            armor: 62,
            energy: 100,
            size: '3x3',
            cost: 1800,
            time: 98,
            weapons: [
              {
                title: 'buildings.resistBuildings.weapons.nuclearLauncher',
                damageArmor1: 27545,
                damageArmor2: 27545,
                damageArmor3: 27545,
                firingRange: 100,
                rateOfFire: null,
                firingAccuracy: '62.0',
                firingAccuracy2: '0.00',
                explosionRadius: '9.40',
              },
            ],
            produces: null,
          },
        ],
      },
      // 18
      {
        level: 18,
        subLevels: [
          {
            subLevel: 1,
            hp: 7768,
            armor: 66,
            energy: 100,
            size: '3x3',
            cost: 1800,
            time: 98,
            weapons: [
              {
                title: 'buildings.resistBuildings.weapons.nuclearLauncher',
                damageArmor1: 28736,
                damageArmor2: 28736,
                damageArmor3: 28736,
                firingRange: 100,
                rateOfFire: null,
                firingAccuracy: '66.7',
                firingAccuracy2: '0.00',
                explosionRadius: '9.60',
              },
            ],
            produces: null,
          },
        ],
      },
      // 19
      {
        level: 19,
        subLevels: [
          {
            subLevel: 1,
            hp: 8099,
            armor: 71,
            energy: 100,
            size: '3x3',
            cost: 1800,
            time: 95,
            weapons: [
              {
                title: 'buildings.resistBuildings.weapons.nuclearLauncher',
                damageArmor1: 29968,
                damageArmor2: 29968,
                damageArmor3: 29968,
                firingRange: 100,
                rateOfFire: null,
                firingAccuracy: '71.3',
                firingAccuracy2: '0.00',
                explosionRadius: '9.80',
              },
            ],
            produces: null,
          },
        ],
      },
      // 20
      {
        level: 20,
        subLevels: [
          {
            subLevel: 1,
            hp: 8448,
            armor: 76,
            energy: 100,
            size: '3x3',
            cost: 1800,
            time: 95,
            weapons: [
              {
                title: 'buildings.resistBuildings.weapons.nuclearLauncher',
                damageArmor1: 31237,
                damageArmor2: 31237,
                damageArmor3: 31237,
                firingRange: 100,
                rateOfFire: null,
                firingAccuracy: '76.0',
                firingAccuracy2: '0.00',
                explosionRadius: '10.00',
              },
            ],
            produces: null,
          },
        ],
      },
      // 21
      {
        level: 21,
        subLevels: [
          {
            subLevel: 1,
            hp: 8814,
            armor: 81,
            energy: 100,
            size: '3x3',
            cost: 1800,
            time: 93,
            weapons: [
              {
                title: 'buildings.resistBuildings.weapons.nuclearLauncher',
                damageArmor1: 32542,
                damageArmor2: 32542,
                damageArmor3: 32542,
                firingRange: 100,
                rateOfFire: null,
                firingAccuracy: '81.3',
                firingAccuracy2: '0.00',
                explosionRadius: '10.20',
              },
            ],
            produces: null,
          },
        ],
      },
      // 22
      {
        level: 22,
        subLevels: [
          {
            subLevel: 1,
            hp: 9198,
            armor: 87,
            energy: 100,
            size: '3x3',
            cost: 1800,
            time: 93,
            weapons: [
              {
                title: 'buildings.resistBuildings.weapons.nuclearLauncher',
                damageArmor1: 33884,
                damageArmor2: 33884,
                damageArmor3: 33884,
                firingRange: 100,
                rateOfFire: null,
                firingAccuracy: '86.7',
                firingAccuracy2: '0.00',
                explosionRadius: '10.40',
              },
            ],
            produces: null,
          },
        ],
      },
      // 24
      {
        level: 24,
        subLevels: [
          {
            subLevel: 1,
            hp: 10456,
            armor: 105,
            energy: 100,
            size: '3x3',
            cost: 1800,
            time: 90,
            weapons: [
              {
                title: 'buildings.resistBuildings.weapons.nuclearLauncher',
                damageArmor1: 39614,
                damageArmor2: 39614,
                damageArmor3: 39614,
                firingRange: 100,
                rateOfFire: null,
                firingAccuracy: '92.4',
                firingAccuracy2: '0.00',
                explosionRadius: '11.40',
              },
            ],
            produces: null,
          },
        ],
      },
      // 25
      {
        level: 25,
        subLevels: [
          {
            subLevel: 1,
            hp: 11157,
            armor: 117,
            energy: 100,
            size: '3x3',
            cost: 1800,
            time: 88,
            weapons: [
              {
                title: 'buildings.resistBuildings.weapons.nuclearLauncher',
                damageArmor1: 42698,
                damageArmor2: 42698,
                damageArmor3: 42698,
                firingRange: 100,
                rateOfFire: null,
                firingAccuracy: '94.2',
                firingAccuracy2: '0.00',
                explosionRadius: '12.0',
              },
            ],
            produces: null,
          },
        ],
      },
      // 26
      {
        level: 26,
        subLevels: [
          {
            subLevel: 1,
            hp: 11703,
            armor: 123,
            energy: 100,
            size: '3x3',
            cost: 1800,
            time: 88,
            weapons: [
              {
                title: 'buildings.resistBuildings.weapons.nuclearLauncher',
                damageArmor1: 44858,
                damageArmor2: 44858,
                damageArmor3: 44858,
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
      // 27
      {
        level: 27,
        subLevels: [
          {
            subLevel: 1,
            hp: 12320,
            armor: 131,
            energy: 100,
            size: '3x3',
            cost: 1800,
            time: 88,
            weapons: [
              {
                title: 'buildings.resistBuildings.weapons.nuclearLauncher',
                damageArmor1: 47166,
                damageArmor2: 47166,
                damageArmor3: 47166,
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
                title: 'buildings.resistBuildings.weapons.nuclearLauncher',
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
                title: 'buildings.resistBuildings.weapons.nuclearLauncher',
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
    name: 'buildings.resistBuildings.wall',
    image: wall,
    description: '',
    weapons: null,
    produces: null,
    levels: [
      // 7
      {
        level: 7,
        subLevels: [
          {
            subLevel: 1,
            hp: 1417,
            armor: 236,
            energy: 0,
            size: '1x1',
            cost: 50,
            time: 44,
            weapons: null,
            produces: null,
          },
        ],
      },
      // 12
      {
        level: 12,
        subLevels: [
          {
            subLevel: 1,
            hp: 1618,
            armor: 266,
            energy: 0,
            size: '1x1',
            cost: 50,
            time: 42,
            weapons: null,
            produces: null,
          },
        ],
      },
      // 16
      {
        level: 16,
        subLevels: [
          {
            subLevel: 1,
            hp: 1727,
            armor: 280,
            energy: 0,
            size: '1x1',
            cost: 50,
            time: 40,
            weapons: null,
            produces: null,
          },
        ],
      },
      // 17
      {
        level: 17,
        subLevels: [
          {
            subLevel: 1,
            hp: 1786,
            armor: 280,
            energy: 0,
            size: '1x1',
            cost: 50,
            time: 39,
            weapons: null,
            produces: null,
          },
        ],
      },
      // 18
      {
        level: 18,
        subLevels: [
          {
            subLevel: 1,
            hp: 1848,
            armor: 288,
            energy: 0,
            size: '1x1',
            cost: 50,
            time: 39,
            weapons: null,
            produces: null,
          },
        ],
      },
      // 19
      {
        level: 19,
        subLevels: [
          {
            subLevel: 1,
            hp: 1912,
            armor: 288,
            energy: 0,
            size: '1x1',
            cost: 50,
            time: 38,
            weapons: null,
            produces: null,
          },
        ],
      },
      // 20
      {
        level: 20,
        subLevels: [
          {
            subLevel: 1,
            hp: 1979,
            armor: 288,
            energy: 0,
            size: '1x1',
            cost: 50,
            time: 38,
            weapons: null,
            produces: null,
          },
        ],
      },
      // 21
      {
        level: 21,
        subLevels: [
          {
            subLevel: 1,
            hp: 1979,
            armor: 288,
            energy: 0,
            size: '1x1',
            cost: 50,
            time: 37,
            weapons: null,
            produces: null,
          },
        ],
      },
      // 22
      {
        level: 22,
        subLevels: [
          {
            subLevel: 1,
            hp: 1979,
            armor: 288,
            energy: 0,
            size: '1x1',
            cost: 50,
            time: 37,
            weapons: null,
            produces: null,
          },
        ],
      },
      // 24
      {
        level: 24,
        subLevels: [
          {
            subLevel: 1,
            hp: 1979,
            armor: 288,
            energy: 0,
            size: '1x1',
            cost: 50,
            time: 36,
            weapons: null,
            produces: null,
          },
        ],
      },
      // 25
      {
        level: 25,
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
      // 26
      {
        level: 26,
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
      // 27
      {
        level: 27,
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
    name: 'buildings.resistBuildings.sniperTower',
    image: sniperTower,
    description: '',
    weapons: [{ type: 'buildings.resistBuildings.weapons.sniperTower' }],
    produces: null,
    levels: [
      // 7
      {
        level: 7,
        subLevels: [
          {
            subLevel: 1,
            hp: 3352,
            armor: 69,
            energy: 10,
            size: '2x2',
            cost: 170,
            time: 44,
            weapons: [
              {
                title: 'buildings.resistBuildings.weapons.sniperTower',
                damageArmor1: 393,
                damageArmor2: 148,
                damageArmor3: 96,
                firingRange: 12,
                rateOfFire: 28,
                firingAccuracy: '97.0',
                firingAccuracy2: '0.00',
                explosionRadius: '0.00',
              },
            ],
            produces: null,
          },
        ],
      },
      // 12
      {
        level: 12,
        subLevels: [
          {
            subLevel: 1,
            hp: 3861,
            armor: 83,
            energy: 10,
            size: '2x2',
            cost: 170,
            time: 42,
            weapons: [
              {
                title: 'buildings.resistBuildings.weapons.sniperTower',
                damageArmor1: 466,
                damageArmor2: 174,
                damageArmor3: 114,
                firingRange: 12.5,
                rateOfFire: 30,
                firingAccuracy: '98.0',
                firingAccuracy2: '0.00',
                explosionRadius: '0.00',
              },
            ],
            produces: null,
          },
        ],
      },
      // 16
      {
        level: 16,
        subLevels: [
          {
            subLevel: 1,
            hp: 4236,
            armor: 99,
            energy: 10,
            size: '2x2',
            cost: 170,
            time: 40,
            weapons: [
              {
                title: 'buildings.resistBuildings.weapons.sniperTower',
                damageArmor1: 516,
                damageArmor2: 192,
                damageArmor3: 126,
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
      // 17
      {
        level: 17,
        subLevels: [
          {
            subLevel: 1,
            hp: 4236,
            armor: 107,
            energy: 10,
            size: '2x2',
            cost: 170,
            time: 39,
            weapons: [
              {
                title: 'buildings.resistBuildings.weapons.sniperTower',
                damageArmor1: 516,
                damageArmor2: 192,
                damageArmor3: 126,
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
      // 18
      {
        level: 18,
        subLevels: [
          {
            subLevel: 1,
            hp: 4419,
            armor: 107,
            energy: 10,
            size: '2x2',
            cost: 170,
            time: 39,
            weapons: [
              {
                title: 'buildings.resistBuildings.weapons.sniperTower',
                damageArmor1: 541,
                damageArmor2: 202,
                damageArmor3: 133,
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
      // 19
      {
        level: 19,
        subLevels: [
          {
            subLevel: 1,
            hp: 4419,
            armor: 112,
            energy: 10,
            size: '2x2',
            cost: 170,
            time: 38,
            weapons: [
              {
                title: 'buildings.resistBuildings.weapons.sniperTower',
                damageArmor1: 541,
                damageArmor2: 202,
                damageArmor3: 133,
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
      // 20
      {
        level: 20,
        subLevels: [
          {
            subLevel: 1,
            hp: 4608,
            armor: 112,
            energy: 10,
            size: '2x2',
            cost: 170,
            time: 38,
            weapons: [
              {
                title: 'buildings.resistBuildings.weapons.sniperTower',
                damageArmor1: 566,
                damageArmor2: 213,
                damageArmor3: 140,
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
      // 21
      {
        level: 21,
        subLevels: [
          {
            subLevel: 1,
            hp: 4608,
            armor: 117,
            energy: 10,
            size: '2x2',
            cost: 170,
            time: 37,
            weapons: [
              {
                title: 'buildings.resistBuildings.weapons.sniperTower',
                damageArmor1: 591,
                damageArmor2: 224,
                damageArmor3: 147,
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
      // 22
      {
        level: 22,
        subLevels: [
          {
            subLevel: 1,
            hp: 4805,
            armor: 117,
            energy: 10,
            size: '2x2',
            cost: 170,
            time: 37,
            weapons: [
              {
                title: 'buildings.resistBuildings.weapons.sniperTower',
                damageArmor1: 616,
                damageArmor2: 235,
                damageArmor3: 154,
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
      // 24
      {
        level: 24,
        subLevels: [
          {
            subLevel: 1,
            hp: 5221,
            armor: 123,
            energy: 10,
            size: '2x2',
            cost: 170,
            time: 36,
            weapons: [
              {
                title: 'buildings.resistBuildings.weapons.sniperTower',
                damageArmor1: 667,
                damageArmor2: 257,
                damageArmor3: 168,
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
      // 25
      {
        level: 25,
        subLevels: [
          {
            subLevel: 1,
            hp: 5439,
            armor: 129,
            energy: 10,
            size: '2x2',
            cost: 170,
            time: 35,
            weapons: [
              {
                title: 'buildings.resistBuildings.weapons.sniperTower',
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
      // 26
      {
        level: 26,
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
                title: 'buildings.resistBuildings.weapons.sniperTower',
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
      // 27
      {
        level: 27,
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
                title: 'buildings.resistBuildings.weapons.sniperTower',
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
                title: 'buildings.resistBuildings.weapons.sniperTower',
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
                title: 'buildings.resistBuildings.weapons.sniperTower',
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
    name: 'buildings.resistBuildings.gunTower',
    image: gunTower,
    description: '',
    weapons: [{ type: 'buildings.resistBuildings.weapons.gunTower' }],
    produces: null,
    levels: [
      // 7
      {
        level: 7,
        subLevels: [
          {
            subLevel: 1,
            hp: 3173,
            armor: 57,
            energy: 35,
            size: '2x2',
            cost: 300,
            time: 71,
            weapons: [
              {
                title: 'buildings.resistBuildings.weapons.gunTower',
                damageArmor1: 404,
                damageArmor2: 864,
                damageArmor3: 911,
                firingRange: 7,
                rateOfFire: 21,
                firingAccuracy: '78.3',
                firingAccuracy2: '0.00',
                explosionRadius: '1.13',
              },
            ],
            produces: null,
          },
        ],
      },
      // 12
      {
        level: 12,
        subLevels: [
          {
            subLevel: 1,
            hp: 3653,
            armor: 67,
            energy: 35,
            size: '2x2',
            cost: 300,
            time: 68,
            weapons: [
              {
                title: 'buildings.resistBuildings.weapons.gunTower',
                damageArmor1: 452,
                damageArmor2: 968,
                damageArmor3: 1021,
                firingRange: 7,
                rateOfFire: 24,
                firingAccuracy: '79.9',
                firingAccuracy2: '0.00',
                explosionRadius: '1.16',
              },
            ],
            produces: null,
          },
        ],
      },
      // 16
      {
        level: 16,
        subLevels: [
          {
            subLevel: 1,
            hp: 4013,
            armor: 79,
            energy: 35,
            size: '2x2',
            cost: 300,
            time: 64,
            weapons: [
              {
                title: 'buildings.resistBuildings.weapons.gunTower',
                damageArmor1: 529,
                damageArmor2: 1130,
                damageArmor3: 1192,
                firingRange: 8,
                rateOfFire: 30,
                firingAccuracy: '79.9',
                firingAccuracy2: '0.00',
                explosionRadius: '1.22',
              },
            ],
            produces: null,
          },
        ],
      },
      // 17
      {
        level: 17,
        subLevels: [
          {
            subLevel: 1,
            hp: 4013,
            armor: 86,
            energy: 35,
            size: '2x2',
            cost: 300,
            time: 63,
            weapons: [
              {
                title: 'buildings.resistBuildings.weapons.gunTower',
                damageArmor1: 556,
                damageArmor2: 1187,
                damageArmor3: 1250,
                firingRange: 8.5,
                rateOfFire: 32,
                firingAccuracy: '79.0',
                firingAccuracy2: '0.00',
                explosionRadius: '1.24',
              },
            ],
            produces: null,
          },
        ],
      },
      // 18
      {
        level: 18,
        subLevels: [
          {
            subLevel: 1,
            hp: 4204,
            armor: 86,
            energy: 35,
            size: '2x2',
            cost: 300,
            time: 63,
            weapons: [
              {
                title: 'buildings.resistBuildings.weapons.gunTower',
                damageArmor1: 583,
                damageArmor2: 1244,
                damageArmor3: 1310,
                firingRange: 9,
                rateOfFire: 35,
                firingAccuracy: '78.1',
                firingAccuracy2: '0.00',
                explosionRadius: '1.26',
              },
            ],
            produces: null,
          },
        ],
      },
      // 19
      {
        level: 19,
        subLevels: [
          {
            subLevel: 1,
            hp: 4403,
            armor: 93,
            energy: 35,
            size: '2x2',
            cost: 300,
            time: 61,
            weapons: [
              {
                title: 'buildings.resistBuildings.weapons.gunTower',
                damageArmor1: 612,
                damageArmor2: 1301,
                damageArmor3: 1370,
                firingRange: 9,
                rateOfFire: 42,
                firingAccuracy: '79.4',
                firingAccuracy2: '0.00',
                explosionRadius: '1.28',
              },
            ],
            produces: null,
          },
        ],
      },
      // 20
      {
        level: 20,
        subLevels: [
          {
            subLevel: 1,
            hp: 4610,
            armor: 93,
            energy: 35,
            size: '2x2',
            cost: 300,
            time: 61,
            weapons: [
              {
                title: 'buildings.resistBuildings.weapons.gunTower',
                damageArmor1: 641,
                damageArmor2: 1358,
                damageArmor3: 1433,
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
      // 21
      {
        level: 21,
        subLevels: [
          {
            subLevel: 1,
            hp: 4777,
            armor: 101,
            energy: 35,
            size: '2x2',
            cost: 300,
            time: 60,
            weapons: [
              {
                title: 'buildings.resistBuildings.weapons.gunTower',
                damageArmor1: 669,
                damageArmor2: 1419,
                damageArmor3: 1498,
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
      // 22
      {
        level: 22,
        subLevels: [
          {
            subLevel: 1,
            hp: 4951,
            armor: 109,
            energy: 35,
            size: '2x2',
            cost: 300,
            time: 60,
            weapons: [
              {
                title: 'buildings.resistBuildings.weapons.gunTower',
                damageArmor1: 697,
                damageArmor2: 1480,
                damageArmor3: 1563,
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
      // 24
      {
        level: 24,
        subLevels: [
          {
            subLevel: 1,
            hp: 5324,
            armor: 121,
            energy: 35,
            size: '2x2',
            cost: 300,
            time: 58,
            weapons: [
              {
                title: 'buildings.resistBuildings.weapons.gunTower',
                damageArmor1: 753,
                damageArmor2: 1602,
                damageArmor3: 1694,
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
      // 25
      {
        level: 25,
        subLevels: [
          {
            subLevel: 1,
            hp: 5522,
            armor: 125,
            energy: 35,
            size: '2x2',
            cost: 300,
            time: 56,
            weapons: [
              {
                title: 'buildings.resistBuildings.weapons.gunTower',
                damageArmor1: 783,
                damageArmor2: 1666,
                damageArmor3: 1761,
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
      // 26
      {
        level: 26,
        subLevels: [
          {
            subLevel: 1,
            hp: 5727,
            armor: 130,
            energy: 35,
            size: '2x2',
            cost: 300,
            time: 56,
            weapons: [
              {
                title: 'buildings.resistBuildings.weapons.gunTower',
                damageArmor1: 813,
                damageArmor2: 1730,
                damageArmor3: 1828,
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
      // 27
      {
        level: 27,
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
                title: 'buildings.resistBuildings.weapons.gunTower',
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
                title: 'buildings.resistBuildings.weapons.gunTower',
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
                title: 'buildings.resistBuildings.weapons.gunTower',
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
    name: 'buildings.resistBuildings.antiAirTower',
    image: antiAirTower,
    description: '',
    weapons: [{ type: 'buildings.resistBuildings.weapons.antiAirTower' }],
    produces: null,
    levels: [
      // 7
      {
        level: 7,
        subLevels: [
          {
            subLevel: 1,
            hp: 2892,
            armor: 48,
            energy: 35,
            size: '1x1',
            cost: 250,
            time: 53,
            weapons: [
              {
                title: 'buildings.resistBuildings.weapons.antiAirTower',
                damageArmor1: 110,
                damageArmor2: 262,
                damageArmor3: 182,
                firingRange: 9.5,
                rateOfFire: 60,
                firingAccuracy: '90.0',
                firingAccuracy2: '0.00',
                explosionRadius: '0.95',
              },
            ],
            produces: null,
          },
        ],
      },
      // 12
      {
        level: 12,
        subLevels: [
          {
            subLevel: 1,
            hp: 3486,
            armor: 68,
            energy: 35,
            size: '1x1',
            cost: 250,
            time: 51,
            weapons: [
              {
                title: 'buildings.resistBuildings.weapons.antiAirTower',
                damageArmor1: 133,
                damageArmor2: 333,
                damageArmor3: 218,
                firingRange: 10,
                rateOfFire: 70,
                firingAccuracy: '94.0',
                firingAccuracy2: '0.00',
                explosionRadius: '1.00',
              },
            ],
            produces: null,
          },
        ],
      },
      // 16
      {
        level: 16,
        subLevels: [
          {
            subLevel: 1,
            hp: 3827,
            armor: 81,
            energy: 35,
            size: '1x1',
            cost: 250,
            time: 48,
            weapons: [
              {
                title: 'buildings.resistBuildings.weapons.antiAirTower',
                damageArmor1: 158,
                damageArmor2: 414,
                damageArmor3: 261,
                firingRange: 11,
                rateOfFire: 70,
                firingAccuracy: '95.0',
                firingAccuracy2: '0.00',
                explosionRadius: '1.05',
              },
            ],
            produces: null,
          },
        ],
      },
      // 17
      {
        level: 17,
        subLevels: [
          {
            subLevel: 1,
            hp: 4009,
            armor: 81,
            energy: 35,
            size: '1x1',
            cost: 250,
            time: 47,
            weapons: [
              {
                title: 'buildings.resistBuildings.weapons.antiAirTower',
                damageArmor1: 167,
                damageArmor2: 443,
                damageArmor3: 276,
                firingRange: 11,
                rateOfFire: 70,
                firingAccuracy: '95.0',
                firingAccuracy2: '0.00',
                explosionRadius: '1.05',
              },
            ],
            produces: null,
          },
        ],
      },
      // 18
      {
        level: 18,
        subLevels: [
          {
            subLevel: 1,
            hp: 4198,
            armor: 88,
            energy: 35,
            size: '1x1',
            cost: 250,
            time: 47,
            weapons: [
              {
                title: 'buildings.resistBuildings.weapons.antiAirTower',
                damageArmor1: 176,
                damageArmor2: 473,
                damageArmor3: 291,
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
      // 19
      {
        level: 19,
        subLevels: [
          {
            subLevel: 1,
            hp: 4395,
            armor: 88,
            energy: 35,
            size: '1x1',
            cost: 250,
            time: 46,
            weapons: [
              {
                title: 'buildings.resistBuildings.weapons.antiAirTower',
                damageArmor1: 185,
                damageArmor2: 504,
                damageArmor3: 307,
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
      // 20
      {
        level: 20,
        subLevels: [
          {
            subLevel: 1,
            hp: 4599,
            armor: 96,
            energy: 35,
            size: '1x1',
            cost: 250,
            time: 46,
            weapons: [
              {
                title: 'buildings.resistBuildings.weapons.antiAirTower',
                damageArmor1: 194,
                damageArmor2: 538,
                damageArmor3: 323,
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
      // 21
      {
        level: 21,
        subLevels: [
          {
            subLevel: 1,
            hp: 4734,
            armor: 104,
            energy: 35,
            size: '1x1',
            cost: 250,
            time: 45,
            weapons: [
              {
                title: 'buildings.resistBuildings.weapons.antiAirTower',
                damageArmor1: 201,
                damageArmor2: 558,
                damageArmor3: 335,
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
      // 22
      {
        level: 22,
        subLevels: [
          {
            subLevel: 1,
            hp: 4876,
            armor: 112,
            energy: 35,
            size: '1x1',
            cost: 250,
            time: 45,
            weapons: [
              {
                title: 'buildings.resistBuildings.weapons.antiAirTower',
                damageArmor1: 208,
                damageArmor2: 578,
                damageArmor3: 347,
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
      // 24
      {
        level: 24,
        subLevels: [
          {
            subLevel: 1,
            hp: 5184,
            armor: 118,
            energy: 35,
            size: '1x1',
            cost: 250,
            time: 44,
            weapons: [
              {
                title: 'buildings.resistBuildings.weapons.antiAirTower',
                damageArmor1: 223,
                damageArmor2: 618,
                damageArmor3: 371,
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
      // 25
      {
        level: 25,
        subLevels: [
          {
            subLevel: 1,
            hp: 5349,
            armor: 122,
            energy: 35,
            size: '1x1',
            cost: 250,
            time: 42,
            weapons: [
              {
                title: 'buildings.resistBuildings.weapons.antiAirTower',
                damageArmor1: 231,
                damageArmor2: 638,
                damageArmor3: 383,
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
      // 26
      {
        level: 26,
        subLevels: [
          {
            subLevel: 1,
            hp: 5522,
            armor: 126,
            energy: 35,
            size: '1x1',
            cost: 250,
            time: 42,
            weapons: [
              {
                title: 'buildings.resistBuildings.weapons.antiAirTower',
                damageArmor1: 239,
                damageArmor2: 658,
                damageArmor3: 395,
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
      // 27
      {
        level: 27,
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
                title: 'buildings.resistBuildings.weapons.antiAirTower',
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
                title: 'buildings.resistBuildings.weapons.antiAirTower',
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
                title: 'buildings.resistBuildings.weapons.antiAirTower',
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
    name: 'buildings.resistBuildings.navalPlatform',
    image: navalPlatform,
    description: '',
    weapons: [
      { type: 'buildings.resistBuildings.weapons.navalPlatform1' },
      { type: 'buildings.resistBuildings.weapons.navalPlatform2' },
    ],
    produces: null,
    levels: [
      // 7
      {
        level: 7,
        subLevels: [
          {
            subLevel: 1,
            hp: 5500,
            armor: 45,
            energy: 35,
            size: '2x2',
            cost: 300,
            time: 62,
            weapons: [
              {
                title: 'buildings.resistBuildings.weapons.navalPlatform1',
                damageArmor1: 320,
                damageArmor2: 1328,
                damageArmor3: 1576,
                firingRange: 7,
                rateOfFire: 23,
                firingAccuracy: '85.0',
                firingAccuracy2: '0.00',
                explosionRadius: '1.20',
              },
              {
                title: 'buildings.resistBuildings.weapons.navalPlatform2',
                damageArmor1: 64,
                damageArmor2: 115,
                damageArmor3: 80,
                firingRange: 9,
                rateOfFire: 120,
                firingAccuracy: '80.0',
                firingAccuracy2: '0.00',
                explosionRadius: '1.00',
              },
            ],
            produces: null,
          },
        ],
      },
      // 12
      {
        level: 12,
        subLevels: [
          {
            subLevel: 1,
            hp: 7263,
            armor: 73,
            energy: 35,
            size: '2x2',
            cost: 300,
            time: 59,
            weapons: [
              {
                title: 'buildings.resistBuildings.weapons.navalPlatform1',
                damageArmor1: 423,
                damageArmor2: 1762,
                damageArmor3: 2091,
                firingRange: 8.5,
                rateOfFire: 27,
                firingAccuracy: '90.0',
                firingAccuracy2: '0.00',
                explosionRadius: '1.30',
              },
              {
                title: 'buildings.resistBuildings.weapons.navalPlatform2',
                damageArmor1: 81,
                damageArmor2: 165,
                damageArmor3: 103,
                firingRange: 9.5,
                rateOfFire: 128,
                firingAccuracy: '85.0',
                firingAccuracy2: '0.00',
                explosionRadius: '1.04',
              },
            ],
            produces: null,
          },
        ],
      },
      // 16
      {
        level: 16,
        subLevels: [
          {
            subLevel: 1,
            hp: 7975,
            armor: 86,
            energy: 35,
            size: '2x2',
            cost: 300,
            time: 56,
            weapons: [
              {
                title: 'buildings.resistBuildings.weapons.navalPlatform1',
                damageArmor1: 472,
                damageArmor2: 1963,
                damageArmor3: 2330,
                firingRange: 9,
                rateOfFire: 30,
                firingAccuracy: '92.0',
                firingAccuracy2: '0.00',
                explosionRadius: '1.35',
              },
              {
                title: 'buildings.resistBuildings.weapons.navalPlatform2',
                damageArmor1: 94,
                damageArmor2: 198,
                damageArmor3: 119,
                firingRange: 10.5,
                rateOfFire: 133,
                firingAccuracy: '86.0',
                firingAccuracy2: '0.00',
                explosionRadius: '1.07',
              },
            ],
            produces: null,
          },
        ],
      },
      // 17
      {
        level: 17,
        subLevels: [
          {
            subLevel: 1,
            hp: 8354,
            armor: 86,
            energy: 35,
            size: '2x2',
            cost: 300,
            time: 55,
            weapons: [
              {
                title: 'buildings.resistBuildings.weapons.navalPlatform1',
                damageArmor1: 498,
                damageArmor2: 2069,
                damageArmor3: 2457,
                firingRange: 9.5,
                rateOfFire: 30,
                firingAccuracy: '92.0',
                firingAccuracy2: '0.00',
                explosionRadius: '1.35',
              },
              {
                title: 'buildings.resistBuildings.weapons.navalPlatform2',
                damageArmor1: 99,
                damageArmor2: 209,
                damageArmor3: 125,
                firingRange: 10.5,
                rateOfFire: 133,
                firingAccuracy: '86.0',
                firingAccuracy2: '0.00',
                explosionRadius: '1.07',
              },
            ],
            produces: null,
          },
        ],
      },
      // 18
      {
        level: 18,
        subLevels: [
          {
            subLevel: 1,
            hp: 8748,
            armor: 93,
            energy: 35,
            size: '2x2',
            cost: 300,
            time: 55,
            weapons: [
              {
                title: 'buildings.resistBuildings.weapons.navalPlatform1',
                damageArmor1: 525,
                damageArmor2: 2180,
                damageArmor3: 2590,
                firingRange: 10,
                rateOfFire: 33,
                firingAccuracy: '94.0',
                firingAccuracy2: '0.00',
                explosionRadius: '1.35',
              },
              {
                title: 'buildings.resistBuildings.weapons.navalPlatform2',
                damageArmor1: 104,
                damageArmor2: 220,
                damageArmor3: 131,
                firingRange: 10.5,
                rateOfFire: 133,
                firingAccuracy: '88.0',
                firingAccuracy2: '0.00',
                explosionRadius: '1.10',
              },
            ],
            produces: null,
          },
        ],
      },
      // 19
      {
        level: 19,
        subLevels: [
          {
            subLevel: 1,
            hp: 9158,
            armor: 93,
            energy: 35,
            size: '2x2',
            cost: 300,
            time: 54,
            weapons: [
              {
                title: 'buildings.resistBuildings.weapons.navalPlatform1',
                damageArmor1: 554,
                damageArmor2: 2296,
                damageArmor3: 2726,
                firingRange: 10.5,
                rateOfFire: 33,
                firingAccuracy: '94.0',
                firingAccuracy2: '0.00',
                explosionRadius: '1.40',
              },
              {
                title: 'buildings.resistBuildings.weapons.navalPlatform2',
                damageArmor1: 109,
                damageArmor2: 232,
                damageArmor3: 137,
                firingRange: 11,
                rateOfFire: 133,
                firingAccuracy: '88.0',
                firingAccuracy2: '0.00',
                explosionRadius: '1.10',
              },
            ],
            produces: null,
          },
        ],
      },
      // 20
      {
        level: 20,
        subLevels: [
          {
            subLevel: 1,
            hp: 9583,
            armor: 101,
            energy: 35,
            size: '2x2',
            cost: 300,
            time: 54,
            weapons: [
              {
                title: 'buildings.resistBuildings.weapons.navalPlatform1',
                damageArmor1: 583,
                damageArmor2: 2416,
                damageArmor3: 2869,
                firingRange: 10.5,
                rateOfFire: 33,
                firingAccuracy: '94.0',
                firingAccuracy2: '0.00',
                explosionRadius: '1.40',
              },
              {
                title: 'buildings.resistBuildings.weapons.navalPlatform2',
                damageArmor1: 115,
                damageArmor2: 244,
                damageArmor3: 144,
                firingRange: 11,
                rateOfFire: 144,
                firingAccuracy: '88.0',
                firingAccuracy2: '0.00',
                explosionRadius: '1.10',
              },
            ],
            produces: null,
          },
        ],
      },
      // 21
      {
        level: 21,
        subLevels: [
          {
            subLevel: 1,
            hp: 9864,
            armor: 109,
            energy: 35,
            size: '2x2',
            cost: 300,
            time: 52,
            weapons: [
              {
                title: 'buildings.resistBuildings.weapons.navalPlatform1',
                damageArmor1: 613,
                damageArmor2: 2542,
                damageArmor3: 3018,
                firingRange: 11,
                rateOfFire: 33,
                firingAccuracy: '95.0',
                firingAccuracy2: '0.00',
                explosionRadius: '1.40',
              },
              {
                title: 'buildings.resistBuildings.weapons.navalPlatform2',
                damageArmor1: 120,
                damageArmor2: 253,
                damageArmor3: 150,
                firingRange: 11,
                rateOfFire: 144,
                firingAccuracy: '89.0',
                firingAccuracy2: '0.00',
                explosionRadius: '1.10',
              },
            ],
            produces: null,
          },
        ],
      },
      // 22
      {
        level: 22,
        subLevels: [
          {
            subLevel: 1,
            hp: 10161,
            armor: 117,
            energy: 35,
            size: '2x2',
            cost: 300,
            time: 52,
            weapons: [
              {
                title: 'buildings.resistBuildings.weapons.navalPlatform1',
                damageArmor1: 634,
                damageArmor2: 2628,
                damageArmor3: 3122,
                firingRange: 11,
                rateOfFire: 33,
                firingAccuracy: '95.0',
                firingAccuracy2: '0.00',
                explosionRadius: '1.40',
              },
              {
                title: 'buildings.resistBuildings.weapons.navalPlatform2',
                damageArmor1: 125,
                damageArmor2: 262,
                damageArmor3: 156,
                firingRange: 11,
                rateOfFire: 150,
                firingAccuracy: '89.0',
                firingAccuracy2: '0.00',
                explosionRadius: '1.10',
              },
            ],
            produces: null,
          },
        ],
      },
      // 24
      {
        level: 24,
        subLevels: [
          {
            subLevel: 1,
            hp: 10802,
            armor: 123,
            energy: 35,
            size: '2x2',
            cost: 300,
            time: 51,
            weapons: [
              {
                title: 'buildings.resistBuildings.weapons.navalPlatform1',
                damageArmor1: 680,
                damageArmor2: 2812,
                damageArmor3: 3341,
                firingRange: 11,
                rateOfFire: 33,
                firingAccuracy: '95.0',
                firingAccuracy2: '0.00',
                explosionRadius: '1.40',
              },
              {
                title: 'buildings.resistBuildings.weapons.navalPlatform2',
                damageArmor1: 135,
                damageArmor2: 280,
                damageArmor3: 168,
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
      // 25
      {
        level: 25,
        subLevels: [
          {
            subLevel: 1,
            hp: 11145,
            armor: 127,
            energy: 35,
            size: '2x2',
            cost: 300,
            time: 49,
            weapons: [
              {
                title: 'buildings.resistBuildings.weapons.navalPlatform1',
                damageArmor1: 704,
                damageArmor2: 2909,
                damageArmor3: 3458,
                firingRange: 11,
                rateOfFire: 33,
                firingAccuracy: '95.0',
                firingAccuracy2: '0.00',
                explosionRadius: '1.40',
              },
              {
                title: 'buildings.resistBuildings.weapons.navalPlatform2',
                damageArmor1: 140,
                damageArmor2: 289,
                damageArmor3: 174,
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
      // 26
      {
        level: 26,
        subLevels: [
          {
            subLevel: 1,
            hp: 11505,
            armor: 131,
            energy: 35,
            size: '2x2',
            cost: 300,
            time: 49,
            weapons: [
              {
                title: 'buildings.resistBuildings.weapons.navalPlatform1',
                damageArmor1: 728,
                damageArmor2: 3011,
                damageArmor3: 3578,
                firingRange: 11,
                rateOfFire: 33,
                firingAccuracy: '95.0',
                firingAccuracy2: '0.00',
                explosionRadius: '1.40',
              },
              {
                title: 'buildings.resistBuildings.weapons.navalPlatform2',
                damageArmor1: 145,
                damageArmor2: 298,
                damageArmor3: 180,
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
      // 27
      {
        level: 27,
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
                title: 'buildings.resistBuildings.weapons.navalPlatform1',
                damageArmor1: 753,
                damageArmor2: 3116,
                damageArmor3: 3702,
                firingRange: 11,
                rateOfFire: 33,
                firingAccuracy: '95.0',
                firingAccuracy2: '0.00',
                explosionRadius: '1.40',
              },
              {
                title: 'buildings.resistBuildings.weapons.navalPlatform2',
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
                title: 'buildings.resistBuildings.weapons.navalPlatform1',
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
                title: 'buildings.resistBuildings.weapons.navalPlatform2',
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
                title: 'buildings.resistBuildings.weapons.navalPlatform1',
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
                title: 'buildings.resistBuildings.weapons.navalPlatform2',
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
