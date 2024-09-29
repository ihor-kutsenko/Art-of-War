import { useState } from 'react';

import Item from 'components/Item/Item';
import ItemList from 'components/ItemList/ItemList';
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn';

import { tournaments } from 'data/tournaments';

const Tournament = () => {
  const [visibleItems, setVisibleItems] = useState(5);

  const handleLoadMore = () => {
    setVisibleItems(prevState => prevState + 5);
  };

  const currentItems = tournaments.slice(0, visibleItems);
  return (
    <>
      <ItemList>
        {currentItems.map((tournament, index) => (
          <Item
            key={index}
            title={tournament.title}
            imageUrl={tournament.imageUrl}
            buttonText={tournament.buttonText}
            medals={tournament.medals}
            disabled={tournament.medals.length === 0}
          />
        ))}
        {visibleItems < tournaments.length && (
          <LoadMoreBtn handleLoadMore={handleLoadMore} />
        )}
      </ItemList>
    </>
  );
};

export default Tournament;
