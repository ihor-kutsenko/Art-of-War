import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Item from 'components/Item/Item';
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn';
import ItemList from 'components/ItemList/ItemList';
import UniversalSelector from 'components/UniversalSelector/UniversalSelector';

import { skirmish } from 'data/skirmish';
const Skirmish = () => {
  const { t } = useTranslation();
  const [visibleItems, setVisibleItems] = useState(5);
  const [selectedSkirmish, setSelectedSkirmish] = useState('');

  const handleLoadMore = () => {
    setVisibleItems(prevState => prevState + 5);
  };

  const handleSelect = selected => {
    setSelectedSkirmish(selected);
    setVisibleItems(5);
  };

  const selected = skirmish.find(
    skirmish => t(skirmish.title) === selectedSkirmish
  );

  const currentItems = skirmish.slice(0, visibleItems);

  return (
    <>
      <div>
        <UniversalSelector
          options={skirmish}
          optionLabelKey="title"
          placeholder="select.skirmish"
          onSelect={handleSelect}
        />
      </div>

      <ItemList>
        {selected ? (
          <Item
            title={selected.title}
            imageUrl={selected.imageUrl}
            buttonText={selected.buttonText}
            medals={selected.medals}
            info={selected.info}
            disabled={selected.medals.length === 0}
          />
        ) : (
          <>
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
          </>
        )}
      </ItemList>
    </>
  );
};

export default Skirmish;
