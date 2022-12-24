import { CartProvider, StoreProvider } from '@/stateManagement/context';
import { ItemCounter } from '@/ui/ItemCounter';
import { render, screen } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { createMockRouter } from '../../__mocks__/utils/createMockRouter';

describe('ItemCounter', () => {
  beforeEach(() => {
    const router = createMockRouter({
      pathname: '/store/1/',
    });
    const updateQuantity = jest.fn();
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <RouterContext.Provider value={router}>
        <StoreProvider>
          <CartProvider>
            <ItemCounter
              currentQuantity={0}
              maxQuantity={10}
              updateQuantity={updateQuantity}
            />
          </CartProvider>
        </StoreProvider>
      </RouterContext.Provider>
    );
  });

  it('should render successfully', () => {
    const element = screen.getAllByText(
      (content, element) => element?.textContent === '0'
    );
    expect(element[0]).toBeInTheDocument();
  });
});
