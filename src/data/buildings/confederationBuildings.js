import cp from '../../images/icons/star.png';
import resources from '../../images/icons/3d.png';
import energy from '../../images/icons/green-energy.png';
import radius from '../../images/icons/grid.png';
// buildings
import hq from '../../images/buildings/confederation/hq.png';
import constructionYard from '../../images/buildings/confederation/construction-yard.png';
import powerPlant from '../../images/buildings/confederation/power-plant.png';
import supplyCenter from '../../images/buildings/confederation/supply-center.png';
import barracks from '../../images/buildings/confederation/barracks.png';
import assaultVehicleFactory from '../../images/buildings/confederation/assault-vehicle-factory.png';
import specialVehicleFactory from '../../images/buildings/confederation/special-vehicle-factory.png';
import aviaFactory from '../../images/buildings/confederation/avia-factory.png';
import airfield from '../../images/buildings/confederation/airfield.png';
import shipyard from '../../images/buildings/confederation/shipyard.png';
import xFacility from '../../images/buildings/confederation/x-facility.png';
import spaceSystem from '../../images/buildings/confederation/space-system.png';
import wall from '../../images/buildings/confederation/wall.png';
import bunker from '../../images/buildings/confederation/bunker.png';
import rocketTower from '../../images/buildings/confederation/rocket-tower.png';
import airDefense from '../../images/buildings/confederation/air-defense.png';
import torpedoPlatform from '../../images/buildings/confederation/torpedo-platform.png';
// units
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
import cerberus from '../../images/hero/cerberus.png';
import beholder from '../../images/hero/beholder.png';
import seraphim from '../../images/hero/seraphim.png';
import solaris from '../../images/hero/solaris.png';

export const confederationBuildings = [
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
      // 25
      {
        level: 25,
        subLevels: [
          {
            subLevel: 1,
            hp: 12830,
            armor: 148,
            energy: 0,
            size: '3x3',
            cost: 1000,
            time: 35,
            weapons: null,
            produces: [
              { type: 'CP', amount: 37, icon: cp },
              { type: 'Resources', amount: 50, icon: resources },
              { type: 'Energy', amount: 80, icon: energy },
            ],
          },
          {
            subLevel: 2,
            hp: 17450,
            armor: 153,
            energy: 0,
            size: '3x3',
            cost: 400,
            time: 49,
            weapons: null,
            produces: [
              { type: 'CP', amount: 65, icon: cp },
              { type: 'Resources', amount: 80, icon: resources },
              { type: 'Energy', amount: 120, icon: energy },
            ],
          },
          {
            subLevel: 3,
            hp: 23977,
            armor: 158,
            energy: 0,
            size: '3x3',
            cost: 800,
            time: 63,
            weapons: null,
            produces: [
              { type: 'CP', amount: 93, icon: cp },
              { type: 'Resources', amount: 110, icon: resources },
              { type: 'Energy', amount: 160, icon: energy },
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
              { type: 'CP', amount: 121, icon: cp },
              { type: 'Resources', amount: 140, icon: resources },
              { type: 'Energy', amount: 200, icon: energy },
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
              { type: 'CP', amount: 149, icon: cp },
              { type: 'Resources', amount: 170, icon: resources },
              { type: 'Energy', amount: 240, icon: energy },
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
            hp: 13801,
            armor: 154,
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
            hp: 18670,
            armor: 159,
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
            hp: 25556,
            armor: 164,
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
            hp: 31993,
            armor: 169,
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
            hp: 39374,
            armor: 174,
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
      // 28
      {
        level: 28,
        subLevels: [
          {
            subLevel: 1,
            hp: 14300,
            armor: 154,
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
            hp: 19250,
            armor: 159,
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
            hp: 26402,
            armor: 164,
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
            armor: 169,
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
            armor: 174,
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
            hp: 14300,
            armor: 154,
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
            hp: 19250,
            armor: 159,
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
            hp: 26402,
            armor: 164,
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
            armor: 169,
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
            armor: 174,
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
      // 25
      {
        level: 25,
        subLevels: [
          {
            subLevel: 1,
            hp: 9886,
            armor: 140,
            energy: 40,
            size: '2x2',
            cost: 300,
            time: 21,
            weapons: null,
            produces: [{ type: 'Radius', amount: 11, icon: radius }],
          },
        ],
      },
      // 27
      {
        level: 27,
        subLevels: [
          {
            subLevel: 1,
            hp: 10296,
            armor: 147,
            energy: 40,
            size: '2x2',
            cost: 300,
            time: 21,
            weapons: null,
            produces: [{ type: 'Radius', amount: 11, icon: radius }],
          },
        ],
      },
      // 28
      {
        level: 28,
        subLevels: [
          {
            subLevel: 1,
            hp: 10296,
            armor: 147,
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
            hp: 10296,
            armor: 147,
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
            size: '2x2',
            cost: 250,
            time: 0,
            weapons: null,
            produces: [{ type: 'Energy', amount: 0, icon: energy }],
          },
        ],
      },
      // 25
      {
        level: 25,
        subLevels: [
          {
            subLevel: 1,
            hp: 9886,
            armor: 137,
            energy: 0,
            size: '2x2',
            cost: 250,
            time: 21,
            weapons: null,
            produces: [{ type: 'Energy', amount: 150, icon: energy }],
          },
        ],
      },
      // 27
      {
        level: 27,
        subLevels: [
          {
            subLevel: 1,
            hp: 10296,
            armor: 137,
            energy: 0,
            size: '2x2',
            cost: 250,
            time: 21,
            weapons: null,
            produces: [{ type: 'Energy', amount: 150, icon: energy }],
          },
        ],
      },
      // 28
      {
        level: 28,
        subLevels: [
          {
            subLevel: 1,
            hp: 10296,
            armor: 137,
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
            hp: 10296,
            armor: 137,
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
      // 25
      {
        level: 25,
        subLevels: [
          {
            subLevel: 1,
            hp: 9886,
            armor: 147,
            energy: 40,
            size: '2x2',
            cost: 300,
            time: 28,
            weapons: null,
            produces: [{ type: 'Resources', amount: 250, icon: resources }],
          },
        ],
      },
      // 27
      {
        level: 27,
        subLevels: [
          {
            subLevel: 1,
            hp: 10296,
            armor: 147,
            energy: 40,
            size: '2x2',
            cost: 300,
            time: 28,
            weapons: null,
            produces: [{ type: 'Resources', amount: 250, icon: resources }],
          },
        ],
      },
      // 28
      {
        level: 28,
        subLevels: [
          {
            subLevel: 1,
            hp: 10296,
            armor: 147,
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
            hp: 10296,
            armor: 147,
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
            produces: [{ type: 'Assault', icon: assault }],
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
              { type: 'Assault', icon: assault },
              { type: 'Heavy-assault', icon: heavyAssault },
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
              { type: 'Assault', icon: assault },
              { type: 'Heavy-assault', icon: heavyAssault },
              { type: 'Fire-assault', icon: fireAssault },
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
            hp: 7413,
            armor: 134,
            energy: 10,
            size: '2x2',
            cost: 100,
            time: 14,
            weapons: null,
            produces: [{ type: 'Assault', icon: assault }],
          },
          {
            subLevel: 2,
            hp: 8351,
            armor: 139,
            energy: 15,
            size: '2x2',
            cost: 100,
            time: 21,
            weapons: null,
            produces: [
              { type: 'Assault', icon: assault },
              { type: 'Heavy-assault', icon: heavyAssault },
            ],
          },
          {
            subLevel: 3,
            hp: 9206,
            armor: 144,
            energy: 20,
            size: '2x2',
            cost: 100,
            time: 28,
            weapons: null,
            produces: [
              { type: 'Assault', icon: assault },
              { type: 'Heavy-assault', icon: heavyAssault },
              { type: 'Fire-assault', icon: fireAssault },
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
            hp: 7722,
            armor: 134,
            energy: 10,
            size: '2x2',
            cost: 100,
            time: 14,
            weapons: null,
            produces: [{ type: 'Assault', icon: assault }],
          },
          {
            subLevel: 2,
            hp: 8662,
            armor: 139,
            energy: 15,
            size: '2x2',
            cost: 100,
            time: 21,
            weapons: null,
            produces: [
              { type: 'Assault', icon: assault },
              { type: 'Heavy-assault', icon: heavyAssault },
            ],
          },
          {
            subLevel: 3,
            hp: 9505,
            armor: 144,
            energy: 20,
            size: '2x2',
            cost: 100,
            time: 28,
            weapons: null,
            produces: [
              { type: 'Assault', icon: assault },
              { type: 'Heavy-assault', icon: heavyAssault },
              { type: 'Fire-assault', icon: fireAssault },
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
            hp: 7722,
            armor: 134,
            energy: 10,
            size: '2x2',
            cost: 100,
            time: 14,
            weapons: null,
            produces: [{ type: 'Assault', icon: assault }],
          },
          {
            subLevel: 2,
            hp: 8662,
            armor: 139,
            energy: 15,
            size: '2x2',
            cost: 100,
            time: 21,
            weapons: null,
            produces: [
              { type: 'Assault', icon: assault },
              { type: 'Heavy-assault', icon: heavyAssault },
            ],
          },
          {
            subLevel: 3,
            hp: 9505,
            armor: 144,
            energy: 20,
            size: '2x2',
            cost: 100,
            time: 28,
            weapons: null,
            produces: [
              { type: 'Assault', icon: assault },
              { type: 'Heavy-assault', icon: heavyAssault },
              { type: 'Fire-assault', icon: fireAssault },
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
            hp: 7722,
            armor: 134,
            energy: 10,
            size: '2x2',
            cost: 100,
            time: 14,
            weapons: null,
            produces: [{ type: 'Assault', icon: assault }],
          },
          {
            subLevel: 2,
            hp: 8662,
            armor: 139,
            energy: 15,
            size: '2x2',
            cost: 100,
            time: 21,
            weapons: null,
            produces: [
              { type: 'Assault', icon: assault },
              { type: 'Heavy-assault', icon: heavyAssault },
            ],
          },
          {
            subLevel: 3,
            hp: 9505,
            armor: 144,
            energy: 20,
            size: '2x2',
            cost: 100,
            time: 28,
            weapons: null,
            produces: [
              { type: 'Assault', icon: assault },
              { type: 'Heavy-assault', icon: heavyAssault },
              { type: 'Fire-assault', icon: fireAssault },
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
            produces: [{ type: 'Fortress', icon: fortress }],
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
              { type: 'Fortress', icon: fortress },
              { type: 'Hammer', icon: hammer },
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
              { type: 'Fortress', icon: fortress },
              { type: 'Hammer', icon: hammer },
              { type: 'Zeus', icon: zeus },
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
            hp: 9886,
            armor: 140,
            energy: 20,
            size: '3x3',
            cost: 180,
            time: 21,
            weapons: null,
            produces: [{ type: 'Fortress', icon: fortress }],
          },
          {
            subLevel: 2,
            hp: 10375,
            armor: 145,
            energy: 30,
            size: '3x3',
            cost: 210,
            time: 32,
            weapons: null,
            produces: [
              { type: 'Fortress', icon: fortress },
              { type: 'Hammer', icon: hammer },
            ],
          },
          {
            subLevel: 3,
            hp: 13805,
            armor: 150,
            energy: 60,
            size: '3x3',
            cost: 290,
            time: 42,
            weapons: null,
            produces: [
              { type: 'Fortress', icon: fortress },
              { type: 'Hammer', icon: hammer },
              { type: 'Zeus', icon: zeus },
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
            hp: 10296,
            armor: 140,
            energy: 20,
            size: '3x3',
            cost: 180,
            time: 21,
            weapons: null,
            produces: [{ type: 'Fortress', icon: fortress }],
          },
          {
            subLevel: 2,
            hp: 11134,
            armor: 145,
            energy: 30,
            size: '3x3',
            cost: 210,
            time: 32,
            weapons: null,
            produces: [
              { type: 'Fortress', icon: fortress },
              { type: 'Hammer', icon: hammer },
            ],
          },
          {
            subLevel: 3,
            hp: 14255,
            armor: 150,
            energy: 60,
            size: '3x3',
            cost: 290,
            time: 42,
            weapons: null,
            produces: [
              { type: 'Fortress', icon: fortress },
              { type: 'Hammer', icon: hammer },
              { type: 'Zeus', icon: zeus },
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
            hp: 10296,
            armor: 140,
            energy: 20,
            size: '3x3',
            cost: 180,
            time: 21,
            weapons: null,
            produces: [{ type: 'Fortress', icon: fortress }],
          },
          {
            subLevel: 2,
            hp: 11134,
            armor: 145,
            energy: 30,
            size: '3x3',
            cost: 210,
            time: 32,
            weapons: null,
            produces: [
              { type: 'Fortress', icon: fortress },
              { type: 'Hammer', icon: hammer },
            ],
          },
          {
            subLevel: 3,
            hp: 14255,
            armor: 150,
            energy: 60,
            size: '3x3',
            cost: 290,
            time: 42,
            weapons: null,
            produces: [
              { type: 'Fortress', icon: fortress },
              { type: 'Hammer', icon: hammer },
              { type: 'Zeus', icon: zeus },
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
            hp: 10296,
            armor: 140,
            energy: 20,
            size: '3x3',
            cost: 180,
            time: 21,
            weapons: null,
            produces: [{ type: 'Fortress', icon: fortress }],
          },
          {
            subLevel: 2,
            hp: 11134,
            armor: 145,
            energy: 30,
            size: '3x3',
            cost: 210,
            time: 32,
            weapons: null,
            produces: [
              { type: 'Fortress', icon: fortress },
              { type: 'Hammer', icon: hammer },
            ],
          },
          {
            subLevel: 3,
            hp: 14255,
            armor: 150,
            energy: 60,
            size: '3x3',
            cost: 290,
            time: 42,
            weapons: null,
            produces: [
              { type: 'Fortress', icon: fortress },
              { type: 'Hammer', icon: hammer },
              { type: 'Zeus', icon: zeus },
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
            produces: [{ type: 'Typhon', icon: typhoon }],
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
              { type: 'Typhon', icon: typhoon },
              { type: 'Torrent', icon: torrent },
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
              { type: 'Typhon', icon: typhoon },
              { type: 'Torrent', icon: torrent },
              { type: 'Energy Shield', icon: energyShield },
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
            hp: 11931,
            armor: 136,
            energy: 30,
            size: '3x3',
            cost: 200,
            time: 28,
            weapons: null,
            produces: [{ type: 'Typhon', icon: typhoon }],
          },
          {
            subLevel: 2,
            hp: 12657,
            armor: 141,
            energy: 50,
            size: '3x3',
            cost: 250,
            time: 42,
            weapons: null,
            produces: [
              { type: 'Typhon', icon: typhoon },
              { type: 'Torrent', icon: torrent },
            ],
          },
          {
            subLevel: 3,
            hp: 15513,
            armor: 146,
            energy: 80,
            size: '3x3',
            cost: 300,
            time: 56,
            weapons: null,
            produces: [
              { type: 'Typhon', icon: typhoon },
              { type: 'Torrent', icon: torrent },
              { type: 'Energy Shield', icon: energyShield },
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
            hp: 12375,
            armor: 136,
            energy: 30,
            size: '3x3',
            cost: 200,
            time: 28,
            weapons: null,
            produces: [{ type: 'Typhon', icon: typhoon }],
          },
          {
            subLevel: 2,
            hp: 13068,
            armor: 141,
            energy: 50,
            size: '3x3',
            cost: 250,
            time: 42,
            weapons: null,
            produces: [
              { type: 'Typhon', icon: typhoon },
              { type: 'Torrent', icon: torrent },
            ],
          },
          {
            subLevel: 3,
            hp: 15939,
            armor: 146,
            energy: 80,
            size: '3x3',
            cost: 300,
            time: 56,
            weapons: null,
            produces: [
              { type: 'Typhon', icon: typhoon },
              { type: 'Torrent', icon: torrent },
              { type: 'Energy Shield', icon: energyShield },
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
            hp: 12375,
            armor: 136,
            energy: 30,
            size: '3x3',
            cost: 200,
            time: 28,
            weapons: null,
            produces: [{ type: 'Typhon', icon: typhoon }],
          },
          {
            subLevel: 2,
            hp: 13068,
            armor: 141,
            energy: 50,
            size: '3x3',
            cost: 250,
            time: 42,
            weapons: null,
            produces: [
              { type: 'Typhon', icon: typhoon },
              { type: 'Torrent', icon: torrent },
            ],
          },
          {
            subLevel: 3,
            hp: 15939,
            armor: 146,
            energy: 80,
            size: '3x3',
            cost: 300,
            time: 56,
            weapons: null,
            produces: [
              { type: 'Typhon', icon: typhoon },
              { type: 'Torrent', icon: torrent },
              { type: 'Energy Shield', icon: energyShield },
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
            hp: 12375,
            armor: 136,
            energy: 30,
            size: '3x3',
            cost: 200,
            time: 28,
            weapons: null,
            produces: [{ type: 'Typhon', icon: typhoon }],
          },
          {
            subLevel: 2,
            hp: 13068,
            armor: 141,
            energy: 50,
            size: '3x3',
            cost: 250,
            time: 42,
            weapons: null,
            produces: [
              { type: 'Typhon', icon: typhoon },
              { type: 'Torrent', icon: torrent },
            ],
          },
          {
            subLevel: 3,
            hp: 15939,
            armor: 146,
            energy: 80,
            size: '3x3',
            cost: 300,
            time: 56,
            weapons: null,
            produces: [
              { type: 'Typhon', icon: typhoon },
              { type: 'Torrent', icon: torrent },
              { type: 'Energy Shield', icon: energyShield },
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
            produces: [{ type: 'Cyclone', icon: cyclone }],
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
              { type: 'Cyclone', icon: cyclone },
              { type: 'Vertex', icon: vertex },
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
              { type: 'Cyclone', icon: cyclone },
              { type: 'Vertex', icon: vertex },
              { type: 'Thor', icon: thor },
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
            hp: 11503,
            armor: 132,
            energy: 40,
            size: '3x3',
            cost: 250,
            time: 42,
            weapons: null,
            produces: [{ type: 'Cyclone', icon: cyclone }],
          },
          {
            subLevel: 2,
            hp: 13373,
            armor: 137,
            energy: 60,
            size: '3x3',
            cost: 320,
            time: 56,
            weapons: null,
            produces: [
              { type: 'Cyclone', icon: cyclone },
              { type: 'Vertex', icon: vertex },
            ],
          },
          {
            subLevel: 3,
            hp: 17266,
            armor: 142,
            energy: 90,
            size: '3x3',
            cost: 400,
            time: 70,
            weapons: null,
            produces: [
              { type: 'Cyclone', icon: cyclone },
              { type: 'Vertex', icon: vertex },
              { type: 'Thor', icon: thor },
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
            hp: 12375,
            armor: 136,
            energy: 40,
            size: '3x3',
            cost: 250,
            time: 42,
            weapons: null,
            produces: [{ type: 'Cyclone', icon: cyclone }],
          },
          {
            subLevel: 2,
            hp: 14255,
            armor: 141,
            energy: 60,
            size: '3x3',
            cost: 320,
            time: 56,
            weapons: null,
            produces: [
              { type: 'Cyclone', icon: cyclone },
              { type: 'Vertex', icon: vertex },
            ],
          },
          {
            subLevel: 3,
            hp: 18217,
            armor: 146,
            energy: 90,
            size: '3x3',
            cost: 400,
            time: 70,
            weapons: null,
            produces: [
              { type: 'Cyclone', icon: cyclone },
              { type: 'Vertex', icon: vertex },
              { type: 'Thor', icon: thor },
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
            hp: 12375,
            armor: 136,
            energy: 40,
            size: '3x3',
            cost: 250,
            time: 42,
            weapons: null,
            produces: [{ type: 'Cyclone', icon: cyclone }],
          },
          {
            subLevel: 2,
            hp: 14255,
            armor: 141,
            energy: 60,
            size: '3x3',
            cost: 320,
            time: 56,
            weapons: null,
            produces: [
              { type: 'Cyclone', icon: cyclone },
              { type: 'Vertex', icon: vertex },
            ],
          },
          {
            subLevel: 3,
            hp: 18217,
            armor: 146,
            energy: 90,
            size: '3x3',
            cost: 400,
            time: 70,
            weapons: null,
            produces: [
              { type: 'Cyclone', icon: cyclone },
              { type: 'Vertex', icon: vertex },
              { type: 'Thor', icon: thor },
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
            hp: 12375,
            armor: 136,
            energy: 40,
            size: '3x3',
            cost: 250,
            time: 42,
            weapons: null,
            produces: [{ type: 'Cyclone', icon: cyclone }],
          },
          {
            subLevel: 2,
            hp: 14255,
            armor: 141,
            energy: 60,
            size: '3x3',
            cost: 320,
            time: 56,
            weapons: null,
            produces: [
              { type: 'Cyclone', icon: cyclone },
              { type: 'Vertex', icon: vertex },
            ],
          },
          {
            subLevel: 3,
            hp: 18217,
            armor: 146,
            energy: 90,
            size: '3x3',
            cost: 400,
            time: 70,
            weapons: null,
            produces: [
              { type: 'Cyclone', icon: cyclone },
              { type: 'Vertex', icon: vertex },
              { type: 'Thor', icon: thor },
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
      // 25
      {
        level: 25,
        subLevels: [
          {
            subLevel: 1,
            hp: 11145,
            armor: 118,
            energy: 50,
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
            energy: 50,
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
            energy: 50,
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
            energy: 50,
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
            produces: [{ type: 'Delta', icon: delta }],
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
              { type: 'Delta', icon: delta },
              { type: 'Viking', icon: viking },
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
              { type: 'Delta', icon: delta },
              { type: 'Viking', icon: viking },
              { type: 'Poseidon', icon: poseidon },
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
            armor: 128,
            energy: 40,
            size: '3x3',
            cost: 200,
            time: 42,
            weapons: null,
            produces: [{ type: 'Delta', icon: delta }],
          },
          {
            subLevel: 2,
            hp: 15604,
            armor: 133,
            energy: 60,
            size: '3x3',
            cost: 270,
            time: 56,
            weapons: null,
            produces: [
              { type: 'Delta', icon: delta },
              { type: 'Viking', icon: viking },
            ],
          },
          {
            subLevel: 3,
            hp: 19424,
            armor: 138,
            energy: 90,
            size: '3x3',
            cost: 300,
            time: 70,
            weapons: null,
            produces: [
              { type: 'Delta', icon: delta },
              { type: 'Viking', icon: viking },
              { type: 'Poseidon', icon: poseidon },
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
            hp: 14850,
            armor: 136,
            energy: 40,
            size: '3x3',
            cost: 200,
            time: 42,
            weapons: null,
            produces: [{ type: 'Delta', icon: delta }],
          },
          {
            subLevel: 2,
            hp: 16633,
            armor: 141,
            energy: 60,
            size: '3x3',
            cost: 270,
            time: 56,
            weapons: null,
            produces: [
              { type: 'Delta', icon: delta },
              { type: 'Viking', icon: viking },
            ],
          },
          {
            subLevel: 3,
            hp: 20494,
            armor: 146,
            energy: 90,
            size: '3x3',
            cost: 300,
            time: 70,
            weapons: null,
            produces: [
              { type: 'Delta', icon: delta },
              { type: 'Viking', icon: viking },
              { type: 'Poseidon', icon: poseidon },
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
            armor: 136,
            energy: 40,
            size: '3x3',
            cost: 200,
            time: 42,
            weapons: null,
            produces: [{ type: 'Delta', icon: delta }],
          },
          {
            subLevel: 2,
            hp: 16633,
            armor: 141,
            energy: 60,
            size: '3x3',
            cost: 270,
            time: 56,
            weapons: null,
            produces: [
              { type: 'Delta', icon: delta },
              { type: 'Viking', icon: viking },
            ],
          },
          {
            subLevel: 3,
            hp: 20494,
            armor: 146,
            energy: 90,
            size: '3x3',
            cost: 300,
            time: 70,
            weapons: null,
            produces: [
              { type: 'Delta', icon: delta },
              { type: 'Viking', icon: viking },
              { type: 'Poseidon', icon: poseidon },
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
            armor: 136,
            energy: 40,
            size: '3x3',
            cost: 200,
            time: 42,
            weapons: null,
            produces: [{ type: 'Delta', icon: delta }],
          },
          {
            subLevel: 2,
            hp: 16633,
            armor: 141,
            energy: 60,
            size: '3x3',
            cost: 270,
            time: 56,
            weapons: null,
            produces: [
              { type: 'Delta', icon: delta },
              { type: 'Viking', icon: viking },
            ],
          },
          {
            subLevel: 3,
            hp: 20494,
            armor: 146,
            energy: 90,
            size: '3x3',
            cost: 300,
            time: 70,
            weapons: null,
            produces: [
              { type: 'Delta', icon: delta },
              { type: 'Viking', icon: viking },
              { type: 'Poseidon', icon: poseidon },
            ],
          },
        ],
      },
    ],
  },
  // X-Facility
  {
    id: 11,
    name: 'X-Facility',
    image: xFacility,
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
            produces: [{ type: 'Cerberus', icon: cerberus }],
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
              { type: 'Cerberus', icon: cerberus },
              { type: 'Beholder', icon: beholder },
              { type: 'Seraphim', icon: seraphim },
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
              { type: 'Cerberus', icon: cerberus },
              { type: 'Beholder', icon: beholder },
              { type: 'Seraphim', icon: seraphim },
              { type: 'Solaris', icon: solaris },
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
              { type: 'Cerberus', icon: cerberus },
              { type: 'Beholder', icon: beholder },
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
              { type: 'Cerberus', icon: cerberus },
              { type: 'Beholder', icon: beholder },
              { type: 'Seraphim', icon: seraphim },
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
              { type: 'Cerberus', icon: cerberus },
              { type: 'Beholder', icon: beholder },
              { type: 'Seraphim', icon: seraphim },
              { type: 'Solaris', icon: solaris },
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
              { type: 'Cerberus', icon: cerberus },
              { type: 'Beholder', icon: beholder },
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
              { type: 'Cerberus', icon: cerberus },
              { type: 'Beholder', icon: beholder },
              { type: 'Seraphim', icon: seraphim },
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
              { type: 'Cerberus', icon: cerberus },
              { type: 'Beholder', icon: beholder },
              { type: 'Seraphim', icon: seraphim },
              { type: 'Solaris', icon: solaris },
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
              { type: 'Cerberus', icon: cerberus },
              { type: 'Beholder', icon: beholder },
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
              { type: 'Cerberus', icon: cerberus },
              { type: 'Beholder', icon: beholder },
              { type: 'Seraphim', icon: seraphim },
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
              { type: 'Cerberus', icon: cerberus },
              { type: 'Beholder', icon: beholder },
              { type: 'Seraphim', icon: seraphim },
              { type: 'Solaris', icon: solaris },
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
              { type: 'Cerberus', icon: cerberus },
              { type: 'Beholder', icon: beholder },
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
              { type: 'Cerberus', icon: cerberus },
              { type: 'Beholder', icon: beholder },
              { type: 'Seraphim', icon: seraphim },
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
              { type: 'Cerberus', icon: cerberus },
              { type: 'Beholder', icon: beholder },
              { type: 'Seraphim', icon: seraphim },
              { type: 'Solaris', icon: solaris },
            ],
          },
        ],
      },
    ],
  },
  // Space System
  {
    id: 12,
    name: 'Space System',
    image: spaceSystem,
    description: 'Description for Building',
    weapons: [{ type: 'Space Strike' }],
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
                title: 'Space Strike',
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
      // 25
      {
        level: 25,
        subLevels: [
          {
            subLevel: 1,
            hp: 12397,
            armor: 122,
            energy: 300,
            size: '3x3',
            cost: 1500,
            time: 88,
            weapons: [
              {
                title: 'Space Strike',
                damageArmor1: 44813,
                damageArmor2: 44813,
                damageArmor3: 44813,
                firingRange: 100,
                rateOfFire: null,
                firingAccuracy: '94.2',
                firingAccuracy2: '0.00',
                explosionRadius: '10.50',
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
            hp: 13689,
            armor: 136,
            energy: 300,
            size: '3x3',
            cost: 1500,
            time: 88,
            weapons: [
              {
                title: 'Space Strike',
                damageArmor1: 49507,
                damageArmor2: 49507,
                damageArmor3: 49507,
                firingRange: 100,
                rateOfFire: null,
                firingAccuracy: '96.0',
                firingAccuracy2: '0.00',
                explosionRadius: '10.50',
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
            hp: 14454,
            armor: 136,
            energy: 300,
            size: '3x3',
            cost: 1500,
            time: 88,
            weapons: [
              {
                title: 'Space Strike',
                damageArmor1: 52081,
                damageArmor2: 52081,
                damageArmor3: 52081,
                firingRange: 100,
                rateOfFire: null,
                firingAccuracy: '96.0',
                firingAccuracy2: '0.00',
                explosionRadius: '10.50',
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
            hp: 14454,
            armor: 136,
            energy: 300,
            size: '3x3',
            cost: 1500,
            time: 88,
            weapons: [
              {
                title: 'Space Strike',
                damageArmor1: 53425,
                damageArmor2: 53425,
                damageArmor3: 53425,
                firingRange: 100,
                rateOfFire: null,
                firingAccuracy: '96.0',
                firingAccuracy2: '0.00',
                explosionRadius: '10.50',
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
  // Bunker
  {
    id: 14,
    name: 'Bunker',
    image: bunker,
    description: 'Description for Building',
    weapons: [{ type: 'Stationary Machine Gun' }],
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
                title: 'Stationary Machine Gun',
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
      // 25
      {
        level: 25,
        subLevels: [
          {
            subLevel: 1,
            hp: 7167,
            armor: 154,
            energy: 10,
            size: '2x2',
            cost: 170,
            time: 35,
            weapons: [
              {
                title: 'Stationary Machine Gun',
                damageArmor1: 112,
                damageArmor2: 50,
                damageArmor3: 40,
                firingRange: 8,
                rateOfFire: 360,
                firingAccuracy: '90.0',
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
            hp: 7463,
            armor: 154,
            energy: 10,
            size: '2x2',
            cost: 170,
            time: 35,
            weapons: [
              {
                title: 'Stationary Machine Gun',
                damageArmor1: 112,
                damageArmor2: 50,
                damageArmor3: 40,
                firingRange: 8,
                rateOfFire: 360,
                firingAccuracy: '90.0',
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
            hp: 7463,
            armor: 154,
            energy: 10,
            size: '2x2',
            cost: 170,
            time: 35,
            weapons: [
              {
                title: 'Stationary Machine Gun',
                damageArmor1: 112,
                damageArmor2: 50,
                damageArmor3: 40,
                firingRange: 8,
                rateOfFire: 360,
                firingAccuracy: '90.0',
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
            hp: 7463,
            armor: 154,
            energy: 10,
            size: '2x2',
            cost: 170,
            time: 35,
            weapons: [
              {
                title: 'Stationary Machine Gun',
                damageArmor1: 112,
                damageArmor2: 50,
                damageArmor3: 40,
                firingRange: 8,
                rateOfFire: 360,
                firingAccuracy: '90.0',
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
  // Rocket Tower
  {
    id: 15,
    name: 'Rocket Tower',
    image: rocketTower,
    description: 'Description for Building',
    weapons: [{ type: 'Stationary Rocket Launcher RT-2LR' }],
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
                title: 'Stationary Rocket Launcher RT-2LR',
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
      // 25
      {
        level: 25,
        subLevels: [
          {
            subLevel: 1,
            hp: 5753,
            armor: 120,
            energy: 40,
            size: '2x2',
            cost: 300,
            time: 56,
            weapons: [
              {
                title: 'Stationary Rocket Launcher RT-2LR',
                damageArmor1: 708,
                damageArmor2: 1376,
                damageArmor3: 1301,
                firingRange: 10.5,
                rateOfFire: 60,
                firingAccuracy: '77.6',
                firingAccuracy2: '0.00',
                explosionRadius: '1.76',
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
            hp: 6189,
            armor: 130,
            energy: 40,
            size: '2x2',
            cost: 300,
            time: 56,
            weapons: [
              {
                title: 'Stationary Rocket Launcher RT-2LR',
                damageArmor1: 768,
                damageArmor2: 1492,
                damageArmor3: 1412,
                firingRange: 10.5,
                rateOfFire: 60,
                firingAccuracy: '77.6',
                firingAccuracy2: '0.00',
                explosionRadius: '1.76',
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
            hp: 6189,
            armor: 130,
            energy: 40,
            size: '2x2',
            cost: 300,
            time: 56,
            weapons: [
              {
                title: 'Stationary Rocket Launcher RT-2LR',
                damageArmor1: 768,
                damageArmor2: 1492,
                damageArmor3: 1412,
                firingRange: 10.5,
                rateOfFire: 60,
                firingAccuracy: '77.6',
                firingAccuracy2: '0.00',
                explosionRadius: '1.76',
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
            hp: 6189,
            armor: 130,
            energy: 40,
            size: '2x2',
            cost: 300,
            time: 56,
            weapons: [
              {
                title: 'Stationary Rocket Launcher RT-2LR',
                damageArmor1: 768,
                damageArmor2: 1492,
                damageArmor3: 1412,
                firingRange: 10.5,
                rateOfFire: 60,
                firingAccuracy: '77.6',
                firingAccuracy2: '0.00',
                explosionRadius: '1.76',
              },
            ],
            produces: null,
          },
        ],
      },
    ],
  },
  // Air Defense
  {
    id: 16,
    name: 'Air Defense',
    image: airDefense,
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
      // 25
      {
        level: 25,
        subLevels: [
          {
            subLevel: 1,
            hp: 5571,
            armor: 122,
            energy: 40,
            size: '1x1',
            cost: 270,
            time: 42,
            weapons: [
              {
                title: 'Stationary Sam Launcher',
                damageArmor1: 250,
                damageArmor2: 657,
                damageArmor3: 427,
                firingRange: 11,
                rateOfFire: 75,
                firingAccuracy: '97.0',
                firingAccuracy2: '0.00',
                explosionRadius: '1.00',
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
            hp: 5938,
            armor: 126,
            energy: 40,
            size: '1x1',
            cost: 270,
            time: 42,
            weapons: [
              {
                title: 'Stationary Sam Launcher',
                damageArmor1: 267,
                damageArmor2: 700,
                damageArmor3: 456,
                firingRange: 11,
                rateOfFire: 75,
                firingAccuracy: '97.0',
                firingAccuracy2: '0.00',
                explosionRadius: '1.00',
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
            hp: 5938,
            armor: 126,
            energy: 40,
            size: '1x1',
            cost: 270,
            time: 42,
            weapons: [
              {
                title: 'Stationary Sam Launcher',
                damageArmor1: 267,
                damageArmor2: 700,
                damageArmor3: 456,
                firingRange: 11,
                rateOfFire: 75,
                firingAccuracy: '97.0',
                firingAccuracy2: '0.00',
                explosionRadius: '1.00',
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
            hp: 5938,
            armor: 126,
            energy: 40,
            size: '1x1',
            cost: 270,
            time: 42,
            weapons: [
              {
                title: 'Stationary Sam Launcher',
                damageArmor1: 267,
                damageArmor2: 700,
                damageArmor3: 456,
                firingRange: 11,
                rateOfFire: 75,
                firingAccuracy: '97.0',
                firingAccuracy2: '0.00',
                explosionRadius: '1.00',
              },
            ],
            produces: null,
          },
        ],
      },
    ],
  },
  // Torpedo Platform
  {
    id: 17,
    name: 'Torpedo Platform',
    image: torpedoPlatform,
    description: 'Description for Building',
    weapons: [
      { type: 'Stationary Sam Launcher' },
      { type: 'Stationary Sam Launcher' },
    ],
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
      // 25
      {
        level: 25,
        subLevels: [
          {
            subLevel: 1,
            hp: 11145,
            armor: 132,
            energy: 40,
            size: '2x2',
            cost: 300,
            time: 49,
            weapons: [
              {
                title: 'Stationary Sam Launcher',
                damageArmor1: 1218,
                damageArmor2: 2630,
                damageArmor3: 3158,
                firingRange: 11,
                rateOfFire: 42,
                firingAccuracy: '95.0',
                firingAccuracy2: '0.00',
                explosionRadius: '1.40',
              },
              {
                title: 'Stationary Sam Launcher',
                damageArmor1: 239,
                damageArmor2: 587,
                damageArmor3: 402,
                firingRange: 11,
                rateOfFire: 75,
                firingAccuracy: '96.0',
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
            armor: 136,
            energy: 40,
            size: '2x2',
            cost: 300,
            time: 49,
            weapons: [
              {
                title: 'Stationary Sam Launcher',
                damageArmor1: 1303,
                damageArmor2: 2817,
                damageArmor3: 3381,
                firingRange: 11,
                rateOfFire: 42,
                firingAccuracy: '95.0',
                firingAccuracy2: '0.00',
                explosionRadius: '1.40',
              },
              {
                title: 'Stationary Sam Launcher',
                damageArmor1: 257,
                damageArmor2: 624,
                damageArmor3: 430,
                firingRange: 11,
                rateOfFire: 75,
                firingAccuracy: '96.0',
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
            armor: 136,
            energy: 40,
            size: '2x2',
            cost: 300,
            time: 49,
            weapons: [
              {
                title: 'Stationary Sam Launcher',
                damageArmor1: 1348,
                damageArmor2: 2917,
                damageArmor3: 3498,
                firingRange: 11,
                rateOfFire: 42,
                firingAccuracy: '95.0',
                firingAccuracy2: '0.00',
                explosionRadius: '1.40',
              },
              {
                title: 'Stationary Sam Launcher',
                damageArmor1: 257,
                damageArmor2: 624,
                damageArmor3: 430,
                firingRange: 11,
                rateOfFire: 75,
                firingAccuracy: '96.0',
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
            armor: 136,
            energy: 40,
            size: '2x2',
            cost: 300,
            time: 49,
            weapons: [
              {
                title: 'Stationary Sam Launcher',
                damageArmor1: 1348,
                damageArmor2: 2917,
                damageArmor3: 3498,
                firingRange: 11,
                rateOfFire: 42,
                firingAccuracy: '95.0',
                firingAccuracy2: '0.00',
                explosionRadius: '1.40',
              },
              {
                title: 'Stationary Sam Launcher',
                damageArmor1: 257,
                damageArmor2: 624,
                damageArmor3: 430,
                firingRange: 11,
                rateOfFire: 75,
                firingAccuracy: '96.0',
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
