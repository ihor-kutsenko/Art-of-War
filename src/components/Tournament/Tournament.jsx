import { useState } from 'react';

import PaginationContainer from 'components/Pagination/PaginationContainer';
import Pagination from 'components/Pagination/Pagination';
import useItemsPerPage from 'components/Pagination/PaginationHooks';
import Item from 'components/Item/Item';
import ItemList from 'components/ItemList/ItemList';

import { tournaments } from 'data/tournaments';

const Tournament = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = useItemsPerPage();

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tournaments.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = newPage => {
    setCurrentPage(newPage);
  };
  return (
    <PaginationContainer>
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
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={tournaments.length}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </ItemList>
    </PaginationContainer>
  );
};

export default Tournament;
