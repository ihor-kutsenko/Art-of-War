import Item from 'components/Item/Item';

import { skirmish } from 'data/skirmish';

const SkirmishPage = () => {
  return (
    <div>
      {skirmish.map((skirmish, index) => (
        <Item
          key={index}
          title={skirmish.title}
          imageUrl={skirmish.imageUrl}
          buttonText={skirmish.buttonText}
          medals={skirmish.medals}
        />
      ))}
    </div>
  );
};

export default SkirmishPage;
