import Item from 'components/Item/Item';
import { tournaments } from 'data/tournaments';
import styles from './TournamentPage.module.scss';

const TournamentPage = () => {
  return (
    <div className={styles.list}>
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
