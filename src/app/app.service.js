import { apiUrl, DEFAULT_API_ERROR_MESSAGE } from './app.constants';

const getProducts = async () => fetch(`${apiUrl}/products?date_ne=null`)
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error(DEFAULT_API_ERROR_MESSAGE);
  })
  .catch((err) => {
    throw new Error(err.message || DEFAULT_API_ERROR_MESSAGE);
  });

export default getProducts;
