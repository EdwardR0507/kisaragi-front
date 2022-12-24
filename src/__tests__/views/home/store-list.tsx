import { StoreProvider } from '@/stateManagement/context';
import { StoreList } from '@/views/home/components/index';
import { render, screen } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { store } from '../../../__mocks__/utils/createEntity';
import { createMockRouter } from '../../../__mocks__/utils/createMockRouter';

describe('StoreList', () => {
  beforeEach(() => {
    const router = createMockRouter({
      pathname: '/store/1/',
    });
    const stores = [store];
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <RouterContext.Provider value={router}>
        <StoreProvider>
          <StoreList stores={stores} />
        </StoreProvider>
      </RouterContext.Provider>
    );
  });

  it('should render successfully', () => {
    const element = screen.getByText(
      (content, element) => element?.textContent === 'Store 1'
    );
    expect(element).toBeInTheDocument();
  });
});
