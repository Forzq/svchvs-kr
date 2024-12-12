import * as React from 'react';
import { useContext } from 'react';
import { useObserver } from 'mobx-react-lite';
import { Context } from '../../index';
import { Box } from '@mui/material';
import ProductCard from "../productCard/productCard";
import '../ProductList/ProductList.css'

export default function ProductList() {
  const { product } = useContext(Context);
  console.log(product.products)
  return useObserver(() => (
    <Box className="productList"
      sx={{
        display: 'flex', 
        flexWrap: 'wrap',
        gap: '1em',
        justifyContent: 'center',
      }}
    >
      {Array.isArray(product.products) ? product.products.map(product => (
        <Box 
          key={product.id} 
          sx={{
            flex: '1 1 calc(25% - 1em)',
            boxSizing: 'border-box',
            maxWidth: '25%',
          }}
        >
          <ProductCard currentProduct={product} />
        </Box>
      )) : (
        <p>Нет доступных продуктов.</p> // Отображение, если массив пуст или отсутствует
      )}
    </Box>
  ));
}
