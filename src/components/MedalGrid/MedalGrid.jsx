import { useState } from 'react';
import styles from './MedalGrid.module.scss';

const MedalGrid = ({ images }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const medalsPerPage = 1;
  const isMobile = window.innerWidth <= 768;

  const totalPages = Math.ceil(images.length / medalsPerPage);

  const changePage = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const paginationButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    paginationButtons.push(
      <button
        key={i}
        className={`${styles.pagination_btn} ${
          currentPage === i ? styles.active : ''
        }`}
        onClick={() => changePage(i)}
      >
        {i}
      </button>
    );
  }

  const indexOfLastMedal = currentPage * medalsPerPage;
  const indexOfFirstMedal = indexOfLastMedal - medalsPerPage;
  const currentMedals = images.slice(indexOfFirstMedal, indexOfLastMedal);

  return (
    <div className={styles.container}>
      {isMobile
        ? currentMedals.map((image, index) => (
            <img key={index} src={image} alt="medal" className={styles.img} />
          ))
        : images.map((image, index) => (
            <img key={index} src={image} alt="medal" className={styles.img} />
          ))}
      <div className={styles.pagination}>{paginationButtons}</div>
    </div>
  );
};

export default MedalGrid;
