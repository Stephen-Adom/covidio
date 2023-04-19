import { render, screen } from '@testing-library/react';
import { RouterProvider } from 'react-router-dom';
import { SplashScreen } from '../pages';
import router from '../route/routes';

describe('splash page', () => {
  it('should render correctly', () => {
    render(
      <RouterProvider router={router}>
        <SplashScreen />
      </RouterProvider>,
    );

    const titleElement = screen.getByRole('heading', {
      level: 1,
    });

    expect(titleElement).toBeInTheDocument();
  });
});
