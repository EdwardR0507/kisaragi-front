import { StoreProvider } from '@/stateManagement/context';
import { ProductList } from '@/views/store/components/index';
import { render, screen } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { storeProduct } from '../../../__mocks__/utils/createEntity';
import { createMockRouter } from '../../../__mocks__/utils/createMockRouter';

describe('ProductList', () => {
  beforeEach(() => {
    const router = createMockRouter({
      pathname: '/store/1/',
    });
    const products = [storeProduct];
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <RouterContext.Provider value={router}>
        <StoreProvider>
          <ProductList products={products} />
        </StoreProvider>
      </RouterContext.Provider>
    );
  });

  it('should render successfully', () => {
    const element = screen.getByText(
      (content, element) => element?.textContent === 'Product 1'
    );
    expect(element).toBeInTheDocument();
  });
});
