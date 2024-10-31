import { useState } from 'react';

import Item from 'components/Item/Item';
import ItemList from 'components/ItemList/ItemList';
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn';

import { blitz } from 'data/blitz';

const Blitz = () => {
  const [visibleItems, setVisibleItems] = useState(5);

  const handleLoadMore = () => {
    setVisibleItems(prevState => prevState + 5);
  };

  const currentItems = blitz.slice(0, visibleItems);

  return (
    <>
      <ItemList>
        {currentItems.map((blitz, index) => (
          <Item
            key={index}
            title={blitz.title}
            imageUrl={blitz.imageUrl}
            medals={blitz.medals}
            info={blitz.info}
            disabled={blitz.medals.length === 0}
          />
        ))}
        {visibleItems < blitz.length && (
          <LoadMoreBtn handleLoadMore={handleLoadMore} />
        )}
      </ItemList>
    </>
  );
};

export default Blitz;
