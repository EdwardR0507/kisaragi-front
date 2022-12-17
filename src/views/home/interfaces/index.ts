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

export interface IStoreProduct {
  id: number;
  productCategory: ProductCategory;
  name: string;
  description: string;
  unitPrice: number;
  stock: number;
  image: null;
}

export interface ProductCategory {
  id: number;
  storeProductCategory: string;
  name: string;
}
