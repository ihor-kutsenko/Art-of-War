// import { useState } from 'react';
// import Item from 'components/Item/Item';
// import Pagination from 'components/Pagination/Pagination';
// import PaginationContainer from 'components/Pagination/PaginationContainer';
// import useItemsPerPage from 'components/Pagination/PaginationHooks';
// import { tournaments } from 'data/tournaments';
// import styles from './TournamentPage.module.scss';

import Tournament from 'components/Tournament/Tournament';

const TournamentPage = () => {
  // const [currentPage, setCurrentPage] = useState(1);
  // const itemsPerPage = useItemsPerPage();

  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = tournaments.slice(indexOfFirstItem, indexOfLastItem);

  // const handlePageChange = newPage => {
  //   setCurrentPage(newPage);
  // };
  return (
    // <PaginationContainer>
    //   <div className={styles.list}>
    //     {currentItems.map((tournament, index) => (
    //       <Item
    //         key={index}
    //         title={tournament.title}
    //         imageUrl={tournament.imageUrl}
    //         buttonText={tournament.buttonText}
    //         medals={tournament.medals}
    //       />
    //     ))}
    //     <Pagination
    //       itemsPerPage={itemsPerPage}
    //       totalItems={tournaments.length}
    //       currentPage={currentPage}
    //       onPageChange={handlePageChange}
    //     />
    //   </div>
    // </PaginationContainer>
    <Tournament />
  );
};

export default TournamentPage;
