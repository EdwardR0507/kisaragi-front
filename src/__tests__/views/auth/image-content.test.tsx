import client from '@/public/client-login.svg';
import { ImageContent } from '@/views/auth/components';
import { render } from '@testing-library/react';

describe('ImageContent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImageContent image={client} />);
    expect(baseElement).toBeTruthy();
  });
});
