import { Navbar } from '@/ui/Navbar';
import { render } from '@testing-library/react';

describe('Navbar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Navbar />);
    expect(baseElement).toBeTruthy();
  });
});
