import LoginPage from '@/pages/auth/login';
import { render, screen } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { createMockRouter } from '../../utils/createMockRouter';

describe('LoginPage', () => {
  beforeEach(() => {
    const router = createMockRouter({
      pathname: '/auth/login',
    });
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <RouterContext.Provider value={router}>
        <LoginPage />
      </RouterContext.Provider>
    );
  });

  it('should render the login page', () => {
    expect(screen.getByText('Bienvenido a Kisaragi 👋🏻')).toBeInTheDocument();
  });
});
