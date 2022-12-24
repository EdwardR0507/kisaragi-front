import { FormAddress } from '@/views/store/components/FormAddress';
import { render } from '@testing-library/react';

describe('FormAddress', () => {
  it('should render successfully', () => {
    const onSubmit = jest.fn();
    const { baseElement } = render(<FormAddress onSubmitAddress={onSubmit} />);
    expect(baseElement).toBeTruthy();
  });
});
