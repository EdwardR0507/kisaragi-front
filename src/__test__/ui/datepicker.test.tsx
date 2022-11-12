import { DatePicker } from '@/ui/DatePicker';
import { render } from '@testing-library/react';

describe('DatePicker', () => {
  it('should render successfully', () => {
    const title = 'Fecha de naacimiento';
    const { baseElement } = render(<DatePicker title={title} />);
    expect(baseElement).toBeTruthy();
  });
});
