import React, { useCallback, useEffect, useState } from 'react';

import './products-chart.css';
import prepareDataForBar from './products-chart.utils';
import Error from '../error/error.component';
import BarComponent from '../../components/bar/bar.component';
import getProducts from '../../app/app.service';
import SelectComponent from '../../components/select/select.component';
import { OPTIONS } from './products-chart.constants';

export default function ProductsChart() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('');
  const [error, setError] = useState();

  useEffect(() => {
    getProducts().then(setProducts).catch(setError);
  }, []);

  const onChange = useCallback((event) => {
    setFilter(event.target.value || '');
  }, []);

  return (
    <div className="container">
      {error && <Error message={error.message} />}
      {!error && products.length && (
        <>
          <h1>SPA приложение для демонстрации графиков по данным загруженным через API</h1>
          <div className="container_select">
            Фильтр по типу продукта:
            <SelectComponent options={OPTIONS} value={filter} onChange={onChange} />
          </div>
          <div className="container_bar">
            <BarComponent data={prepareDataForBar(products, filter)} />
          </div>
        </>
      )}
    </div>
  );
}
