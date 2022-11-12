import { Logo } from '@/ui/Logo';
import { render } from '@testing-library/react';

describe('Logo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Logo />);
    expect(baseElement).toBeTruthy();
  });
});
