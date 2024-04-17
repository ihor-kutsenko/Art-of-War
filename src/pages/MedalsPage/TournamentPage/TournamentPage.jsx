import Item from 'components/Item/Item';
import nautilus from '../../../images/tournaments/nautilus/nautilus.jpg';

const TournamentPage = () => {
  return (
    <div>
      <p>Tournaments</p>
      <Item title="Nautilus" imageUrl={nautilus} buttonText="medals" />
    </div>
  );
};

export default TournamentPage;
