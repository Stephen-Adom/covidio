import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { Details, Home } from '../pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
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
