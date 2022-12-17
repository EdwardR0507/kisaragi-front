import useSWR, { SWRConfiguration } from 'swr';
import { IStoreData } from '../interfaces/index';

export const useStores = (config: SWRConfiguration = {}) => {
  const { data, error } = useSWR<IStoreData[]>(`/stores`, config);
  return {
    stores: data || [],
    isLoading: !error && !data,
    isError: error,
  };
};
