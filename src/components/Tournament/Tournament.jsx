import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Item from 'components/Item/Item';
import ItemList from 'components/ItemList/ItemList';
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn';
import UniversalSelector from 'components/UniversalSelector/UniversalSelector';

import { tournaments } from 'data/tournaments';

const Tournament = () => {
  const { t } = useTranslation();
  const [visibleItems, setVisibleItems] = useState(5);
  const [selectedTournament, setSelectedTournament] = useState('');

  const handleLoadMore = () => {
    setVisibleItems(prevState => prevState + 5);
  };

  const handleSelect = selected => {
    setSelectedTournament(selected);
    setVisibleItems(5);
  };

  const selected = tournaments.find(
    tournament => t(tournament.title) === selectedTournament
  );

  const currentItems = tournaments.slice(0, visibleItems);
  return (
    <>
      <div>
        <UniversalSelector
          options={tournaments}
          optionLabelKey="title"
          placeholder="select.tournament"
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
            {currentItems.map((tournament, index) => (
              <Item
                key={index}
                title={tournament.title}
                imageUrl={tournament.imageUrl}
                medals={tournament.medals}
                info={tournament.info}
                disabled={tournament.medals.length === 0}
              />
            ))}
            {visibleItems < tournaments.length && (
              <LoadMoreBtn handleLoadMore={handleLoadMore} />
            )}
          </>
        )}
      </ItemList>
    </>
  );
};

export default Tournament;
