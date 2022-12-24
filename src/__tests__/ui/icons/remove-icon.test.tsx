import { RemoveIcon } from '@/ui/icons';
import { render } from '@testing-library/react';

describe('RemoveIcon', () => {
  it('should render successfully', () => {
    const fill = '#EAEAFFDE';
    const { baseElement } = render(<RemoveIcon fill={fill} />);
    expect(baseElement).toBeTruthy();
  });
});
