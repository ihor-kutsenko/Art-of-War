import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Item from 'components/Item/Item';
import ItemList from 'components/ItemList/ItemList';
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn';
import UniversalSelector from 'components/UniversalSelector/UniversalSelector';

import { blitz } from 'data/blitz';

const Blitz = () => {
  const { t } = useTranslation();
  const [visibleItems, setVisibleItems] = useState(5);
  const [selectedBlitz, setSelectedBlitz] = useState('');

  const handleLoadMore = () => {
    setVisibleItems(prevState => prevState + 5);
  };

  const handleSelect = selected => {
    setSelectedBlitz(selected);
    setVisibleItems(5);
  };

  const selected = blitz.find(blitz => t(blitz.title) === selectedBlitz);

  const currentItems = blitz.slice(0, visibleItems);

  return (
    <>
      <div>
        <UniversalSelector
          options={blitz}
          optionLabelKey="title"
          placeholder="select.blitz"
          onSelect={handleSelect}
        />
      </div>

      <ItemList>
        {selected ? (
          <Item
            title={selected.title}
            imageUrl={selected.imageUrl}
            medals={selected.medals}
            info={selected.info}
            disabled={selected.medals.length === 0}
          />
        ) : (
          <>
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
          </>
        )}
      </ItemList>
    </>
  );
};

export default Blitz;
