import { CartProvider, StoreProvider } from '@/stateManagement/context';
import { render, screen } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { MainLayout } from '../../layouts/MainLayout';
import { createMockRouter } from '../../__mocks__/utils/createMockRouter';

describe('MainLayout', () => {
  beforeEach(() => {
    const router = createMockRouter({
      pathname: '/',
    });

    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <RouterContext.Provider value={router}>
        <StoreProvider>
          <CartProvider>
            <MainLayout
              title="Kisaragi"
              pageDescription="Tienda de productos para pymes y emprendedores"
            >
              <div>Test</div>
            </MainLayout>
          </CartProvider>
        </StoreProvider>
      </RouterContext.Provider>
    );
  });

  it('should render successfully', () => {
    const element = screen.getAllByText(
      (content, element) => element?.textContent === 'Productos'
    );
    expect(element[0]).toBeInTheDocument();
  });
});
