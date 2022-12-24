import { Hamburger } from '@/ui/icons';
import { render } from '@testing-library/react';

describe('Hamburger', () => {
  it('should render successfully', () => {
    const fill = '#EAEAFFDE';
    const { baseElement } = render(<Hamburger fill={fill} />);
    expect(baseElement).toBeTruthy();
  });
});
