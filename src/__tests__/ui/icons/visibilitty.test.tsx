import { Visibility } from '@/ui/icons';
import { render } from '@testing-library/react';

describe('Visibility', () => {
  it('should render successfully', () => {
    const fill = '#EAEAFFDE';
    const { baseElement } = render(<Visibility fill={fill} />);
    expect(baseElement).toBeTruthy();
  });
});
