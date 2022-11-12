import { Cart } from '@/ui/Icons';
import { render } from '@testing-library/react';

describe('Cart', () => {
  it('should render successfully', () => {
    const fill = '#EAEAFFDE';
    const { baseElement } = render(<Cart fill={fill} />);
    expect(baseElement).toBeTruthy();
  });
});
