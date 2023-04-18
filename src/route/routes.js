import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { Details, Home, SplashScreen } from '../pages';

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
        path: 'details/:id',
        element: <Details />,
      },
    ],
  },
]);

export default router;
