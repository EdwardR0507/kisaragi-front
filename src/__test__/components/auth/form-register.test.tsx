import { FormRegister } from '@/components/auth/FormRegister';
import { render } from '@testing-library/react';

describe('FormLogin', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FormRegister />);
    expect(baseElement).toBeTruthy();
  });
});
