import Item from 'components/Item/Item';
import { tournaments } from 'data/tournaments';

const TournamentPage = () => {
  return (
    <div>
      <p>Tournaments</p>
      {tournaments.map((tournament, index) => (
        <Item
          key={index}
          title={tournament.title}
          imageUrl={tournament.imageUrl}
          buttonText={tournament.buttonText}
          medals={tournament.medals}
        />
      ))}
    </div>
  );
};

export default TournamentPage;
