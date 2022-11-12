import { render } from '@testing-library/react';
import { AuthLayout } from '../../layouts';

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
