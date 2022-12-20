import { StoreNavbar } from '@/ui/StoreNavbar';
import { render } from '@testing-library/react';

describe('StoreNavbar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StoreNavbar />);
    expect(baseElement).toBeTruthy();
  });
});
