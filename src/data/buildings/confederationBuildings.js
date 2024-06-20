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
              { type: 'Cerberus', icon: cerberus },
              { type: 'Beholder', icon: beholder },
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
  // Torpedo Platform
  {
    id: 17,
    name: 'Torpedo Platform',
    image: torpedoPlatform,
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
];
