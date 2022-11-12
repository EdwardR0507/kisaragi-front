import { FormRegister } from '@/components/Auth/FormRegister';
import { render } from '@testing-library/react';

describe('FormLogin', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FormRegister />);
    expect(baseElement).toBeTruthy();
  });
});
