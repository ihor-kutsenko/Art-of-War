import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import Header from 'components/Header/Header';
import Container from 'components/Container/Container';
import Loader from 'components/Loader/Loader';
import Footer from 'components/Footer/Footer';

import styles from './SharedLayout.module.scss';

export const SharedLayout = () => {
  return (
    <Container>
      <div className={styles.wrapper}>
        <Header />
        <main className={styles.main}>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main>
        <Footer />
      </div>
    </Container>
  );
};

export default SharedLayout;
