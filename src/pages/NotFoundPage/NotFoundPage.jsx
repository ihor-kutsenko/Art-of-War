import React from 'react';
import { Link } from 'react-router-dom';

import { WELCOME_PAGE_ROUTE } from 'routes/routes';

const NotFoundPage = () => {
  return (
    <div>
      Error 404. Sorry, page wasn`t found.{' '}
      <Link to={WELCOME_PAGE_ROUTE}>Back to the Home page.</Link>
    </div>
  );
};

export default NotFoundPage;
