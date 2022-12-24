import { Cart } from '@/ui/icons';
import { render } from '@testing-library/react';

describe('Cart', () => {
  it('should render successfully', () => {
    const fill = '#EAEAFFDE';
    const { baseElement } = render(<Cart fill={fill} />);
    expect(baseElement).toBeTruthy();
  });
});
