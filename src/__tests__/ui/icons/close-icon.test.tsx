import { CloseIcon } from '@/ui/icons';
import { render } from '@testing-library/react';

describe('CloseIcon', () => {
  it('should render successfully', () => {
    const fill = '#EAEAFFDE';
    const { baseElement } = render(<CloseIcon fill={fill} />);
    expect(baseElement).toBeTruthy();
  });
});
