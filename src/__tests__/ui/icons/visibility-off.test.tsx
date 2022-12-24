import { VisibilityOff } from '@/ui/icons';
import { render } from '@testing-library/react';

describe('VisibilityOff', () => {
  it('should render successfully', () => {
    const fill = '#EAEAFFDE';
    const { baseElement } = render(<VisibilityOff fill={fill} />);
    expect(baseElement).toBeTruthy();
  });
});
