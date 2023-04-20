import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { RouterProvider } from 'react-router-dom';
import Countries from '../features/Countries/countries';
import store from '../redux/store';
import router from '../route/routes';
import { getAllCountries, getAllContinents } from '../redux/metrics/metricSlice';

describe('countries & continents', () => {
  it('should fetch all countries and save in state', async () => {
    await store.dispatch(getAllCountries()).then(async (response) => {
      expect(response.payload.length).toEqual(store.getState().metrics.countries.length);
    });
  });

  it('should fetch all continents and save in state', async () => {
    await store.dispatch(getAllContinents()).then(async (response) => {
      expect(response.payload.length).toEqual(store.getState().metrics.allContinents.length);
    });
  });

  it('should render list of countries', async () => {
    await store.dispatch(getAllCountries()).then(async () => {
      const tree = renderer.create(
        <Provider store={store}>
          <RouterProvider router={router}>
            <Countries type="country" />
          </RouterProvider>
        </Provider>,
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  it('should render list of continents', async () => {
    await store.dispatch(getAllContinents()).then(async () => {
      const tree = renderer.create(
        <Provider store={store}>
          <RouterProvider router={router}>
            <Countries type="continent" />
          </RouterProvider>
        </Provider>,
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
