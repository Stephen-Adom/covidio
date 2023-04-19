/* eslint-disable no-unused-vars */
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import store from '../redux/store';
import PageHeader from '../features/Header/PageHeader';
import router from '../route/routes';
import { globalInfo } from '../redux/metrics/metricSlice';

describe('Home Page', () => {
  it('should render correctly', async () => {
    await store.dispatch(globalInfo()).then((response) => {
      render(
        <Provider store={store}>
          <RouterProvider router={router}>
            <PageHeader data={response.payload} />
          </RouterProvider>
        </Provider>,
      );

      const headerElement = screen.getByRole('heading', {
        level: 1,
      });

      expect(headerElement).toBeInTheDocument();
    });
  });
});
