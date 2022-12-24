import { AuthLayout } from '@/layouts/index';
import { render } from '@testing-library/react';

describe('AuthLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <AuthLayout title="Kisaragi - Iniciar Sesión">
        <div>Test</div>
      </AuthLayout>
    );
    expect(baseElement).toBeTruthy();
  });
});
