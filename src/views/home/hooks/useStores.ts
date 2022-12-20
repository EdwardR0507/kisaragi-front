import { IStoreData } from '@/interfaces';
import useSWR, { SWRConfiguration } from 'swr';

export const useStores = (config: SWRConfiguration = {}) => {
  const { data, error } = useSWR<IStoreData[]>('/stores', config);
  return {
    stores: data || [],
    isLoading: !error && !data,
    isError: error,
  };
};
