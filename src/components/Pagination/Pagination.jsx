import SvgIcon from 'components/SvgIcon/SvgIcon';

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
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <SvgIcon iconId={'icon-pagination'} />
          </button>
        </li>
        <li className={styles.pagination_item}>
          <button
            className={styles.pagination_btn}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <SvgIcon iconId={'icon-pagination'} />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
