import cerberus from '../../images/hero/cerberus.webp';
// import beholder from '../../images/hero/beholder.webp';
// import seraphim from '../../images/hero/seraphim.webp';
// import solaris from '../../images/hero/solaris.webp';
// icons
// import armor1 from '../../images/icons/armor1.png';
import armor2 from '../../images/icons/armor2.png';
// import armor3 from '../../images/icons/armor3.png';

export const confederationHeroes = [
  // Cerberus
  {
    id: 1,
    name: 'Cerberus',
    type: 'Elite Exoskeleton Assault ',
    image: cerberus,
    iconArmor: armor2,
    description: 'Description for Hero',
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
            firingAccuracy: '100.0',
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
    ],
  },
];
