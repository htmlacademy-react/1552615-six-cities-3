import Main from '../../pages/main-page/main-page';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from '../layout/layout';
import LoginPage from '../../pages/login-page/login-page';
import FavoritePage from '../../pages/favorite-page/favorite-page';
import OfferPage from '../../pages/offer-page/offer-page';
import { AuthStatus, Pages } from '../../utils/const';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { useAppSelector } from '../../hooks';
import LoadingScreen from '../../pages/loading-screen/loading-screen';

export default function App(): JSX.Element {

  const isOffersLoading = useAppSelector((state) => state.isOffersLoading);

  if (isOffersLoading) {
    return <LoadingScreen />;
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={Pages.Main} element={<Layout />}>
            <Route index element={<Main />} />
            <Route path={Pages.Login} element={<LoginPage />} />
            <Route path={Pages.Favorites}
              element={
                <PrivateRoute authStatus={AuthStatus.Auth}>
                  <FavoritePage />
                </PrivateRoute>
              }
            />
            <Route path={Pages.Offer} element={<OfferPage />} />
            <Route path={Pages.NotFound} element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
