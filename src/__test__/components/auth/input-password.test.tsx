import { InputPassword } from '@/components/auth/InputPassword';
import { fireEvent, render, screen } from '@testing-library/react';

describe('InputPassword', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InputPassword />);
    expect(baseElement).toBeTruthy();
  });

  it('should show or hide the password when the button is pressed', () => {
    render(<InputPassword />);
    const input = screen.getByLabelText('Contraseña');
    expect(input).toHaveAttribute('type', 'password');
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(input).toHaveAttribute('type', 'text');
    fireEvent.click(button);
    expect(input).toHaveAttribute('type', 'password');
  });
});
