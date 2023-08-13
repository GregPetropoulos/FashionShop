// ======
// export const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : '';
// this will throw a cors error since we are using the proxy in package.json. If you want use this remove the proxy in the package.json
// ======

export const BASE_URL = ''; //if using proxy

export const PRODUCTS_URL = '/api/products';
export const USERS_URL = '/api/users';
export const ORDERS_URL = '/api/orders';
export const PAYPAL_URL = '/api/config/paypal';
export const UPLOAD_URL = '/api/upload';
