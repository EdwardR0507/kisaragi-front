import { StoreCard } from '@/views/home/components/index';

import { render } from '@testing-library/react';
import { store } from '../../../__mocks__/utils/createEntity';

describe('StoreCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StoreCard store={store} />);
    expect(baseElement).toBeTruthy();
  });
});
