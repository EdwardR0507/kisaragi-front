import { render } from '@testing-library/react';
import { MainLayout } from '../../layouts';

describe('AuthLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MainLayout
        title="Kisaragi"
        pageDescription="Tienda de productos para pymes y emprendedores"
      >
        <div>Test</div>
      </MainLayout>
    );
    expect(baseElement).toBeTruthy();
  });
});
