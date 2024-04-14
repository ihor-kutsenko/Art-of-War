import { Link } from 'react-router-dom';

import { HiArrowLeft } from 'react-icons/hi';
import styles from './BackLink.module.scss';

const BackLink = ({ to, children }) => {
  return (
    <Link to={to} className={styles.link}>
      <HiArrowLeft size="24" /> Go to back
      {children}
    </Link>
  );
};

export default BackLink;
