import { skirmish } from 'data/skirmish';
import Item from 'components/Item/Item';

const Skirmish = () => {
  return (
    <div>
      {skirmish.map((skirmish, index) => (
        <Item
          key={index}
          title={skirmish.title}
          imageUrl={skirmish.imageUrl}
          buttonText={skirmish.buttonText}
          medals={skirmish.medals}
          disabled={skirmish.medals.length === 0}
        />
      ))}
    </div>
  );
};

export default Skirmish;
