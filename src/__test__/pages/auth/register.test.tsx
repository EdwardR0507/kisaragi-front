import RegisterPage from '@/pages/auth/register';
import { render, screen } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { createMockRouter } from '../../utils/createMockRouter';

describe('RegisterPage', () => {
  it('should render the register page', () => {
    render(
      <RouterContext.Provider
        value={createMockRouter({
          pathname: '/auth/register',
        })}
      >
        <RegisterPage />
      </RouterContext.Provider>
    );
    expect(
      screen.getByText('La aventura comienza aquí 🚀')
    ).toBeInTheDocument();
  });
});
