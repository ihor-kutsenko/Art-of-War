import { useState } from 'react';
import PaginationContainer from 'components/Pagination/PaginationContainer';
import useItemsPerPage from 'components/Pagination/PaginationHooks';

import { tournaments } from 'data/tournaments';
import styles from './Tournament.module.scss';
import Item from 'components/Item/Item';
import Pagination from 'components/Pagination/Pagination';

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
      <div className={styles.list}>
        {currentItems.map((tournament, index) => (
          <Item
            key={index}
            title={tournament.title}
            imageUrl={tournament.imageUrl}
            buttonText={tournament.buttonText}
            medals={tournament.medals}
          />
        ))}
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={tournaments.length}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </PaginationContainer>
  );
};

export default Tournament;
