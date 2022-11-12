import { ImageContent } from '@/components/Auth';
import client from '@/public/client-login.svg';
import { render } from '@testing-library/react';

describe('ImageContent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImageContent image={client} />);
    expect(baseElement).toBeTruthy();
  });
});
