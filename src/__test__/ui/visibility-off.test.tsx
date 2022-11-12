import { VisibilittyOff } from '@/ui/icons';
import { render } from '@testing-library/react';

describe('VisibilittyOff', () => {
  it('should render successfully', () => {
    const fill = '#EAEAFFDE';
    const { baseElement } = render(<VisibilittyOff fill={fill} />);
    expect(baseElement).toBeTruthy();
  });
});
