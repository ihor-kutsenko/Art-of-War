import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import Header from 'components/Header/Header';
import Container from 'components/Container/Container';
import Loader from 'components/Loader/Loader';
import Footer from 'components/Footer/Footer';

export const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </Container>
  );
};

export default SharedLayout;
