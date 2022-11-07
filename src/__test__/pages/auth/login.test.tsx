import LoginPage from '@/pages/auth/login';
import { render, screen } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { createMockRouter } from '../../utils/createMockRouter';

describe('LoginPage', () => {
  it('should render the login page', () => {
    render(
      <RouterContext.Provider
        value={createMockRouter({
          pathname: '/auth/login',
        })}
      >
        <LoginPage />
      </RouterContext.Provider>
    );
    expect(screen.getByText('Bienvenido a Kisaragi 👋🏻')).toBeInTheDocument();
  });
});
