import Error404Page from '@/pages/404';
import { render, screen } from '@testing-library/react';

describe('Error404Page', () => {
  it('should render the 404 page', () => {
    render(<Error404Page />);
    expect(screen.getByText('404')).toBeInTheDocument();
  });
});
