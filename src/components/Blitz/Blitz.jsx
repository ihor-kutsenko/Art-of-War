import { useState } from 'react';

import Item from 'components/Item/Item';
import ItemList from 'components/ItemList/ItemList';

import { blitz } from 'data/blitz';

import styles from './Blitz.module.scss';
import Button from 'components/Button/Button';

const Blitz = () => {
  const [visibleItems, setVisibleItems] = useState(5);

  const handleLoadMore = () => {
    setVisibleItems(prevVisibleItems => prevVisibleItems + 5);
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
            buttonText={blitz.buttonText}
            medals={blitz.medals}
            disabled={blitz.medals.length === 0}
          />
        ))}
        {visibleItems < blitz.length && (
          <Button
            className={styles.loadMore_btn}
            text="Load More"
            onClick={handleLoadMore}
          />
        )}
      </ItemList>
    </>
  );
};

export default Blitz;
