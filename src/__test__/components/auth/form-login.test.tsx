import { FormLogin } from '@/components/auth/FormLogin';
import { render } from '@testing-library/react';

describe('FormLogin', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FormLogin />);
    expect(baseElement).toBeTruthy();
  });
});
