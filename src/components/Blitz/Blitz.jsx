import { useState } from 'react';
import Item from 'components/Item/Item';
import Pagination from 'components/Pagination/Pagination';
import PaginationContainer from 'components/Pagination/PaginationContainer';
import useItemsPerPage from 'components/Pagination/PaginationHooks';
import ItemList from 'components/ItemList/ItemList';
import { blitz } from 'data/blitz';

const Blitz = () => {
  const disabled = medals => {
    return medals && medals.length > 0;
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = useItemsPerPage();

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = blitz.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = newPage => {
    setCurrentPage(newPage);
  };

  return (
    <PaginationContainer>
      <ItemList>
        {currentItems.map((blitz, index) => (
          <Item
            key={index}
            title={blitz.title}
            imageUrl={blitz.imageUrl}
            buttonText={blitz.buttonText}
            medals={blitz.medals}
            disabled={disabled}
          />
        ))}
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={blitz.length}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </ItemList>
    </PaginationContainer>
  );
};

export default Blitz;
