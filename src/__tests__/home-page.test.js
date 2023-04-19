import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import store from '../redux/store';
import router from '../route/routes';
import { Home } from '../pages';
import { globalInfo, getAllContinents } from '../redux/metrics/metricSlice';

describe('Home Page', () => {
  beforeEach(async () => {
    await store.dispatch(globalInfo());
    await store.dispatch(getAllContinents());
  });

  it('should render home page correctly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <RouterProvider router={router}>
          <Home />
        </RouterProvider>
      </Provider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
