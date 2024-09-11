import skirmishImage from './../images/skirmish/skirmish.jpg';
import survialImage from './../images/skirmish/survial.jpg';
import testOfStrengthImage from './../images/skirmish/test-of-strength.jpg';
import pumpkinHuntImage from './../images/skirmish/pumpkin-hunt.jpg';
import syndicateTrap from './../images/skirmish/syndicate-trap.jpg';
import christmasCargoImage from './../images/skirmish/christmas-cargo.jpg';
import battleForTheChristmasTreesImage from './../images/skirmish/battle-for-the-christmas-trees.jpg';

import { aiMedals } from './skirmish/ai';

export const skirmish = [
  {
    title: 'AI',
    imageUrl: skirmishImage,
    buttonText: 'Medals',
    medals: aiMedals,
  },
  {
    title: 'Survial',
    imageUrl: survialImage,
    buttonText: 'Medals',
    medals: [],
  },
  {
    title: 'Test of Strength',
    imageUrl: testOfStrengthImage,
    buttonText: 'Medals',
    medals: [],
  },
  {
    title: 'Pumpkin Hunt',
    imageUrl: pumpkinHuntImage,
    buttonText: 'Medals',
    medals: [],
  },
  {
    title: 'Syndicate Trap',
    imageUrl: syndicateTrap,
    buttonText: 'Medals',
    medals: [],
  },
  {
    title: 'Christmas Cargo',
    imageUrl: christmasCargoImage,
    buttonText: 'Medals',
    medals: [],
  },
  {
    title: 'Battle for the Christmas Trees',
    imageUrl: battleForTheChristmasTreesImage,
    buttonText: 'Medals',
    medals: [],
  },
];
