// import allForTheFrontImage from '../images/tournaments/all-for-the-front.jpg';
// import assaultImage from '../images/tournaments/assault.jpg';
// import battleRoyaleImage from '../images/tournaments/battle-royale.jpg';
// import behindTheWallImage from '../images/tournaments/behind-the-wall.jpg';
// import corsairsImage from '../images/tournaments/corsairs.jpg';
// import crossfireImage from '../images/tournaments/crossfire.jpg';
// import flightRecorderImage from '../images/tournaments/flight-recoder.png';
// import birthdayImage from '../images/tournaments/birthday.jpg';
// import jokerImage from '../images/tournaments/joker.jpg';
// import judgmentDayImage from '../images/tournaments/judgment-day.jpg';
// import largeReservesImage from '../images/tournaments/large-reserves.jpg';
// import newYearImage from '../images/tournaments/battle-for-christmas-trees.jpg';
// import niceLootImage from '../images/tournaments/big-booty.jpg';
// import onlyByChanceImage from '../images/tournaments/only-by-chance.jpg';
// import pumpkinMadnessImage from '../images/tournaments/pumpkin-madness.jpg';
// import reliablePartnerImage from '../images/tournaments/reliable-partner.jpg';
// import nautilusImage from '../images/tournaments/nautilus.jpg';
// import totalControlImage from '../images/tournaments/total-control.jpg';
// import twoCitadelsImage from '../images/tournaments/two-citadels.jpg';
// import vanguardImage from '../images/tournaments/vanguard.jpg';
// import fifthAnniversaryImage from '../images/tournaments/5th-anniversary.jpg';
// import emergencyCall from '../images/tournaments/emergency-call.jpg';

import { allTheFrontMedals } from './tournaments/allTheFront';
import { assaultMedals } from './tournaments/assault';
import { battleRoyaleMedals } from './tournaments/battleRoyale';
import { behindTheWallMedals } from './tournaments/behindTheWall';
// import { corsairsMedals } from './tournaments/corsairs';
import { crossfireMedals } from './tournaments/crossfire';
// import { emergencyCallMedals } from './tournaments/emergencyCall';
import { flightRecorderMedals } from './tournaments/flightRecorder';
// import { gameBirthdayMedals } from './tournaments/gameBirthday';
import { jokerMedals } from './tournaments/joker';
// import { judgmentDayMedals } from './tournaments/judgmentDay';
import { largeReservesMedals } from './tournaments/largeReserves';
import { newYearMedals } from './tournaments/newYearsAlarm';
import { niceLootMedals } from './tournaments/niceLoot';
import { onlyByChanceMedals } from './tournaments/onlyByChance';
import { pumpkinMedals } from './tournaments/pumpkinMadness';
import { reliablePartnerMedals } from './tournaments/reliablePartner';
import { nautilusMedals } from './tournaments/nautilus';
import { totalControlMedals } from './tournaments/totalControl';
import { twoCitadelsMedals } from './tournaments/twoCitadels';
import { vanguardMedals } from './tournaments/vanguard';
import { fifthAnniversaryMedals } from './tournaments/fifthAnniversary';

export const tournaments = [
  {
    title: 'All for the Front',
    imageUrl:
      'https://res.cloudinary.com/dsy8hantq/image/upload/v1727349641/all-for-the-front_v3jmnj.webp',
    buttonText: 'Medals',
    medals: allTheFrontMedals,
    info: 'Command gives the highest priority to this part of the front! Containers with resources will be dropped regularly on the battlefield. Find them before the enemy to gain an advantage.',
  },
  {
    title: 'Assault',
    imageUrl:
      'https://res.cloudinary.com/dsy8hantq/image/upload/v1727349641/assault_ki6tdu.webp',
    buttonText: 'Medals',
    medals: assaultMedals,
    info: 'The troops are eager for battle! Once training is complete, the allied troop moves to the enemy base. Each time, the strength of the allied troops increases. Capture the flags to reduce the preparation time for the next troop. All for the assault!',
  },
  {
    title: 'Battle Royale',
    imageUrl:
      'https://res.cloudinary.com/dsy8hantq/image/upload/v1727349641/battle-royale_qfhz9k.webp',
    buttonText: 'Medals',
    medals: battleRoyaleMedals,
    info: "You have no base in this tournament. Just a squad only. That's hardcore! Capture containers to get new units. Beware of the battle zone that reduces. The yellow zone is safe, but soon it'll become red. Units in the red zone get damaged.",
  },
  {
    title: 'Behind the Wall',
    imageUrl:
      'https://res.cloudinary.com/dsy8hantq/image/upload/v1727349641/behind-the-wall_lsct3i.webp',
    buttonText: 'Medals',
    medals: behindTheWallMedals,
    info: 'The allies have built up the defensive line. But sitting on the sidelines won’t work. While the defense is holding, gather strength to destroy the enemy.',
  },
  {
    title: 'Classified Files',
    imageUrl: '',
    buttonText: 'Medals',
    medals: [],
    info: "The Syndicate hackers have breached the security system and stolen data from both factions. Encrypted Data Cells containing classified files have appeared on the battlefield. Capture as many Data Cells as possible to access the enemy's information system. Don't let the enemy get there first.",
  },
  {
    title: 'Corsairs',
    imageUrl:
      'https://res.cloudinary.com/dsy8hantq/image/upload/v1727349614/corsairs_spixfs.webp',
    buttonText: 'Medals',
    medals: [],
    info: "Bloody hell! There's a new peril in these waters. Mutineers have established their pirate fleet and are pillaging everyone in sight. Now, they want to capture our strategic stockpile in the port. Defend the port from pirates. After every successful attack, the pirates will take a part of the stockpile from your port. If the strategic stockpile gets depleted in your port, you will lose.",
  },
  {
    title: 'Crossfire',
    imageUrl:
      'https://res.cloudinary.com/dsy8hantq/image/upload/v1727349614/crossfire_xeiww4.webp',
    buttonText: 'Medals',
    medals: crossfireMedals,
    info: 'Two bases. One commander. You have to command two bases at once. Both of them must survive. To win, destroy one of the enemy bases. The base is considered destroyed if there are no buildings left in the set area.',
  },
  {
    title: 'Emergency Call',
    imageUrl:
      'https://res.cloudinary.com/dsy8hantq/image/upload/v1727349614/emergency-call_nhb3dc.webp',
    buttonText: 'Medals',
    medals: [],
    info: "Enemy hackers breached our communication protocols. Now, we're unable to request reinforcements. There's a factory assembling scientific vehicles near the base. Capture the factory and use scientific vehicles to request backup squads through additional communication channels.",
  },
  {
    title: 'Flight Recorder',
    imageUrl:
      'https://res.cloudinary.com/dsy8hantq/image/upload/v1727349615/flight-recoder_gwnlzj.webp',
    buttonText: 'Medals',
    medals: flightRecorderMedals,
    info: "As a result of the crash of the Zenon space station, flight recorders with important information were dropped on the battlefield. Our allies have already found and deciphered some of them. Capture the rest of the flight recorders at the enemy's warehouse and evacuate them to the research center for decoding.",
  },
  {
    title: 'Game Birthday',
    imageUrl:
      'https://res.cloudinary.com/dsy8hantq/image/upload/v1727349614/birthday_fd6lcb.webp',
    buttonText: 'Medals',
    medals: [],
    info: "We are giving gifts on the game's birthday! Resource containers and prize boxes regularly appear on the battlefield. You can also give gifts, as each container you capture moves a prize box closer to your opponent's side. If you want a prize box to appear earlier, then complete the progress bar. You can open captured prize boxes right after the battle.",
  },
  {
    title: 'Joker',
    imageUrl:
      'https://res.cloudinary.com/dsy8hantq/image/upload/v1727349614/joker_ag5joe.webp',
    buttonText: 'Medals',
    medals: jokerMedals,
    info: "Haha! I'm the Joker, the master of surprises. Think of this battlefield as my amusement park. Here's the game: whoever collects my surprise boxes first wins. Curious about what's inside? Well, you'll just have to open them to find out. Let's get this fun started!",
  },
  {
    title: 'Judgment Day',
    imageUrl:
      'https://res.cloudinary.com/dsy8hantq/image/upload/v1727349615/judgment-day_xxjqik.webp',
    buttonText: 'Medals',
    medals: [],
    info: 'Achilles, an experimental satellite system, is used to guide super weapons strikes. After the testing was completed, the satellite stations were conserved. However, the enemy plans to activate the stations and attack our positions. Get ahead of the enemy. Use scientific vehicles to activate the stations and bring the enemy their judgment day.',
  },
  {
    title: 'Large Reserves',
    imageUrl:
      'https://res.cloudinary.com/dsy8hantq/image/upload/v1727349615/large-reserves_vlgwgk.webp',
    buttonText: 'Medals',
    medals: largeReservesMedals,
    info: 'Depots in this part of the region are filled with raw materials. We need to collect them to meet our growing military needs. Break open active depots with a special vehicle and escort transports back to base',
  },
  {
    title: 'New Years Alarm',
    imageUrl:
      'https://res.cloudinary.com/dsy8hantq/image/upload/v1727349641/battle-for-christmas-trees_b5lq99.webp',
    buttonText: 'Medals',
    medals: newYearMedals,
    info: "Scouting reports: a secret organization that uses the technology of both factions for its own purposes has been spotted in neutral territory. The organization's convoys carry Christmas trees and gifts, attacking everyone on their way. Capture Christmas trees and deliver them to the warehouse before the enemy does.",
  },
  {
    title: 'Nice Loot',
    imageUrl:
      'https://res.cloudinary.com/dsy8hantq/image/upload/v1727349614/big-booty_dedg7r.webp',
    buttonText: 'Medals',
    medals: niceLootMedals,
    info: 'The coordinates of strategic Cold War stores have been disclosed. We were able to get the access codes and are ready to remove the contents. But the enemy also has their own plans for these stores. Obtain all the valuable supplies before they do.',
  },
  {
    title: 'Only by Chance',
    imageUrl:
      'https://res.cloudinary.com/dsy8hantq/image/upload/v1727349615/only-by-chance_qcdnci.webp',
    buttonText: 'Medals',
    medals: onlyByChanceMedals,
    info: 'Objects on the map randomly change in each battle. Will you be able to adapt and win in such hard conditions? All luck is in your hands, commanders!',
  },
  {
    title: 'Pumpkin Madness',
    imageUrl:
      'https://res.cloudinary.com/dsy8hantq/image/upload/v1727349615/pumpkin-madness_yewxqg.webp',
    buttonText: 'Medals',
    medals: pumpkinMedals,
    info: 'Major Pumpkin is a master of surprises. He scattered these damn `gifts` across the battlefield. Collect all the pumpkins before the enemy does. But be careful!',
  },
  {
    title: 'Reliable Partner',
    imageUrl:
      'https://res.cloudinary.com/dsy8hantq/image/upload/v1727349615/reliable-partner_ep7it2.webp',
    buttonText: 'Medals',
    medals: reliablePartnerMedals,
    info: "Today, you will engage in battle together with a partner. And don't be afraid that it is AI. Work together and show the full power of such a union!",
  },
  {
    title: 'Searching the Nautilus ',
    imageUrl:
      'https://res.cloudinary.com/dsy8hantq/image/upload/v1727349615/nautilus_rebcln.webp',
    buttonText: 'Medals',
    medals: nautilusMedals,
    info: 'A large cargo shipment was sunk in this area. Several containers with the latest scientific developments lie on the seabed. We do not intend for the enemy to have them!',
  },
  {
    title: 'Total Control',
    imageUrl:
      'https://res.cloudinary.com/dsy8hantq/image/upload/v1727349616/total-control_torbnu.webp',
    buttonText: 'Medals',
    medals: totalControlMedals,
    info: 'The radio-electronic interception complex `Osiris` is integrated with the radar network of the region. It can provide exhaustive information about enemy maneuvers. A sophisticated access system requires holding several points at the same time to take control of the complex.',
  },
  {
    title: 'Two Citadels',
    imageUrl:
      'https://res.cloudinary.com/dsy8hantq/image/upload/v1727349616/two-citadels_z3wztg.webp',
    buttonText: 'Medals',
    medals: twoCitadelsMedals,
    info: 'Two fortified bases stand opposite each other, ready for battle. Who will be the first to break through the defenses and strike at the heart of the enemy?',
  },
  {
    title: 'Vanguard',
    imageUrl:
      'https://res.cloudinary.com/dsy8hantq/image/upload/v1727349616/vanguard_rnmhnn.webp',
    buttonText: 'Medals',
    medals: vanguardMedals,
    info: 'The Vanguard complex consists of several factories designed to train assault troops. The enemy is preparing to capture the complex and attack our positions. Capture the factories to get allied units and destroy the enemy base.',
  },
  {
    title: '5th Anniversary',
    imageUrl:
      'https://res.cloudinary.com/dsy8hantq/image/upload/v1727349624/5th-anniversary_xgspub.webp',
    buttonText: 'Medals',
    medals: fifthAnniversaryMedals,
  },
];
