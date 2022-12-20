import { IStoreProduct } from './ProductModel';

export interface IStoreData {
  id: number;
  adminId: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  telephone: string;
  image: null;
  email: string;
  storeCategories: StoreCategory[];
}

export interface IStore {
  store_data: IStoreData;
  store_products: IStoreProduct[];
}

export interface StoreCategory {
  id: number;
  name: string;
}
