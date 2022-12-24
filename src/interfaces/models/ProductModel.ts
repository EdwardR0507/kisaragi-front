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
