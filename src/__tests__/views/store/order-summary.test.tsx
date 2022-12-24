import { CartProvider, StoreProvider } from '@/stateManagement/context';
import { OrderSummary } from '@/views/store/components/OrderSummary';
import { render } from '@testing-library/react';

describe('OrderSummary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <StoreProvider>
        <CartProvider>
          <OrderSummary />
        </CartProvider>
      </StoreProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
