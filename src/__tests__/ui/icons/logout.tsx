import { LogOut } from '@/ui/icons';
import { render } from '@testing-library/react';

describe('LogOut', () => {
  it('should render successfully', () => {
    const fill = '#EAEAFFDE';
    const { baseElement } = render(<LogOut fill={fill} />);
    expect(baseElement).toBeTruthy();
  });
});
