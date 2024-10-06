import { useState } from 'react';

import Item from 'components/Item/Item';
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn';
import { skirmish } from 'data/skirmish';

const Skirmish = () => {
  const [visibleItems, setVisibleItems] = useState(5);

  const handleLoadMore = () => {
    setVisibleItems(prevState => prevState + 5);
  };

  const currentItems = skirmish.slice(0, visibleItems);

  return (
    <div>
      {currentItems.map((skirmish, index) => (
        <Item
          key={index}
          title={skirmish.title}
          imageUrl={skirmish.imageUrl}
          buttonText={skirmish.buttonText}
          medals={skirmish.medals}
          info={skirmish.info}
          disabled={skirmish.medals.length === 0}
        />
      ))}
      {visibleItems < skirmish.length && (
        <LoadMoreBtn handleLoadMore={handleLoadMore} />
      )}
    </div>
  );
};

export default Skirmish;
