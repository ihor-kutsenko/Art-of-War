import { Route, Routes } from 'react-router-dom';
import ScrollToTop from 'react-scroll-up';
import { RxThickArrowUp } from 'react-icons/rx';

import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import ScrollWrapper from 'components/ScrollToUp/ScrollWrapper';
import scrollToTopStyle from 'components/ScrollToUp/ScrollToTopStyle';

import { appRoutes } from 'routes/routes';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          {appRoutes.map(({ path, element, children }) => (
            <Route key={path} path={path} element={element}>
              {children &&
                children.map(({ path, element }) => (
                  <Route key={path} path={path} element={element} />
                ))}
            </Route>
          ))}
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <ScrollToTop showUnder={100} style={scrollToTopStyle}>
        <ScrollWrapper>
          <RxThickArrowUp size="28" strokeWidth="0.2px" />
        </ScrollWrapper>
      </ScrollToTop>
    </>
  );
};

export default App;
