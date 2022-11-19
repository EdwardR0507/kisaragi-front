import { FormLogin } from '@/views/auth/components';
import { render, screen } from '@testing-library/react';

describe('FormLogin', () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<FormLogin />);
  });

  it('should render successfully', () => {
    expect(screen.getByText(/Bienvenido a Kisaragi 👋🏻/i)).toBeInTheDocument();
  });

  it('should have the fields: email, contraseña', () => {
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/contraseña/i)).toBeInTheDocument();
  });

  it('should have the button: Iniciar sesión', () => {
    expect(
      screen.getByRole('button', { name: /iniciar sesión/i })
    ).toBeInTheDocument();
  });
});
