import { render, screen } from '@testing-library/react';
import { RouterProvider } from 'react-router-dom';
import renderer from 'react-test-renderer';
import NavBar from '../features/Navigation/navigation';
import router from '../route/routes';

describe('Navigation', () => {
  it('should render navbar correctly', () => {
    render(
      <RouterProvider router={router}>
        <NavBar />
      </RouterProvider>,
    );

    const headerElement = screen.getByRole('heading');

    expect(headerElement).toBeInTheDocument();
  });

  it('should render navbar list items correctly', async () => {
    const tree = renderer.create(
      <RouterProvider router={router}>
        <NavBar />
      </RouterProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
