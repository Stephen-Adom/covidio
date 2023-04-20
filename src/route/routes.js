import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { Continent, Home, SplashScreen } from '../pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <SplashScreen />,
      },
      {
        path: 'dashboard',
        element: <Home />,
      },
      {
        path: 'continents/:continent',
        element: <Continent />,
      },
    ],
  },
]);

export default router;
