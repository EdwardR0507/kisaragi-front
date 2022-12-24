export const store = {
  id: 1,
  name: 'Store 1',
  image: null,
  storeCategories: [{ id: 1, name: 'Category 1' }],
  products: [{ id: 1, name: 'Product 1' }],
  adminId: 'admin',
  address: 'Address',
  latitude: 1.3,
  longitude: 1.2,
  telephone: '941458741',
  email: 'store@example.com',
};

export const storeProduct = {
  id: 1,
  productCategory: {
    id: 1,
    storeProductCategory: 'Category 1',
    name: 'Category 1',
  },
  name: 'Product 1',
  description: 'Description',
  unitPrice: 1.2,
  stock: 1,
  image: null,
};
