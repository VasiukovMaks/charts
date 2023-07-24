import { INITIAL_VALUE_FOR_PRODUCTS_MAP } from './products-chart.constants';

const formatValue = (num) => (typeof num === 'number' ? num / 1000 : num);

const prepareDataForBar = (products, filterName) => {
  if (!products.length) {
    return [];
  }
  const preparedProducts = new Map(INITIAL_VALUE_FOR_PRODUCTS_MAP);
  for (let i = 0; i < products.length; i += 1) {
    const product = products[i];
    const key = product.date.split('/')[1];
    const oldProduct = preparedProducts.get(key);
    const factoryName = product.factory_id === 1 ? 'valueOne' : 'valueTwo';
    let value = oldProduct[factoryName];
    if (!filterName) {
      value += (product.product1 || 0) + (product.product2 || 0) + (product.product3 || 0);
    } else {
      value += (product[filterName] || 0);
    }
    preparedProducts.set(key, { ...oldProduct, [factoryName]: value });
  }
  return Array.from(preparedProducts.values()).map((el) => ({
    ...el,
    valueTwo: formatValue(el.valueTwo),
    valueOne: formatValue(el.valueOne),
  }));
};

export default prepareDataForBar;
