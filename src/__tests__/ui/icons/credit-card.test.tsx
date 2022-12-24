import { CreditCard } from '@/ui/icons';
import { render } from '@testing-library/react';

describe('CreditCard', () => {
  it('should render successfully', () => {
    const fill = '#EAEAFFDE';
    const { baseElement } = render(<CreditCard fill={fill} />);
    expect(baseElement).toBeTruthy();
  });
});
