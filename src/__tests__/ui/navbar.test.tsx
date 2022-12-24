import { CartProvider, StoreProvider } from '@/stateManagement/context';
import { Navbar } from '@/ui/Navbar';
import { render, screen } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { createMockRouter } from '../../__mocks__/utils/createMockRouter';

describe('Navbar', () => {
  beforeEach(() => {
    const router = createMockRouter({
      pathname: '/store/1/',
    });
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <RouterContext.Provider value={router}>
        <StoreProvider>
          <CartProvider>
            <Navbar />
          </CartProvider>
        </StoreProvider>
      </RouterContext.Provider>
    );
  });

  it('should render successfully', () => {
    const element = screen.getAllByText(
      (content, element) => element?.textContent === 'Kisaragi'
    );
    expect(element[0]).toBeInTheDocument();
  });
});
