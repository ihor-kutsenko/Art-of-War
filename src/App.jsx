import { Route, Routes } from 'react-router-dom';

import { appRoutes } from 'routes/routes';

import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import SharedLayout from 'components/SharedLayout/SharedLayout';

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
    </>
  );
};

export default App;
