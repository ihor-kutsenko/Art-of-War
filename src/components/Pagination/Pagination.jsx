import { FcPrevious, FcNext } from 'react-icons/fc';

import styles from './Pagination.module.scss';

const Pagination = ({
  itemsPerPage,
  totalItems,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = newPage => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  return (
    <nav aria-label="Pagination">
      <ul className={styles.pagination_list}>
        <li className={styles.pagination_item}>
          <button
            className={styles.pagination_btn}
            onClick={() => {
              handlePageChange(currentPage - 1);
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              });
            }}
            disabled={currentPage === 1}
          >
            <FcPrevious size="24" /> Previous page
          </button>
        </li>
        <li className={styles.pagination_item}>
          <button
            className={styles.pagination_btn}
            onClick={() => {
              handlePageChange(currentPage + 1);
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              });
            }}
            disabled={currentPage === totalPages}
          >
            {' '}
            Next page
            <FcNext size="24" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
