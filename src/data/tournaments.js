import nautilusImage from '../images/tournaments/Nautilus/nautilus.jpg';
import { nautilusMedals } from './tournaments/nautilus';
import vanguardImage from '../images/tournaments/Vanguard/vanguard.jpg';
import { vanguardMedals } from './tournaments/vanguard';
import battleRoyaleImage from '../images/tournaments/BattleRoyale/battle-royale.jpg';

export const tournaments = [
  {
    title: 'Nautilus search',
    imageUrl: nautilusImage,
    buttonText: 'Medals',
    medals: nautilusMedals,
  },
  {
    title: 'Vanguard',
    imageUrl: vanguardImage,
    buttonText: 'Medals',
    medals: vanguardMedals,
  },
  {
    title: 'Battle Royale',
    imageUrl: battleRoyaleImage,
    buttonText: 'Medals',
    medals: nautilusMedals,
  },
];
