import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import store from '../redux/store';
import router from '../route/routes';
import { Continent } from '../pages';
import { getAllCountries } from '../redux/metrics/metricSlice';

describe('Details Page', () => {
  beforeEach(async () => {
    await store.dispatch(getAllCountries());
  });

  it('should render details page correctly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <RouterProvider router={router}>
          <Continent />
        </RouterProvider>
      </Provider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
