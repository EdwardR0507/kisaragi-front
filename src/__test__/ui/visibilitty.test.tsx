import { Visibilitty } from '@/ui/icons';
import { render } from '@testing-library/react';

describe('Visibilitty', () => {
  it('should render successfully', () => {
    const fill = '#EAEAFFDE';
    const { baseElement } = render(<Visibilitty fill={fill} />);
    expect(baseElement).toBeTruthy();
  });
});
