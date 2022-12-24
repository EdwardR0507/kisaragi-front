import { AddIcon } from '@/ui/icons';
import { render } from '@testing-library/react';

describe('AddIcon', () => {
  it('should render successfully', () => {
    const fill = '#EAEAFFDE';
    const { baseElement } = render(<AddIcon fill={fill} />);
    expect(baseElement).toBeTruthy();
  });
});
