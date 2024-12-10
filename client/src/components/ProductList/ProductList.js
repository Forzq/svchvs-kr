import * as React from 'react';
import { useContext } from 'react';
import { useObserver } from 'mobx-react-lite';
import { Context } from '../../index';
import { Box } from '@mui/material';
import ProductCard from "../productCard";
import '../ProductList/ProductList.css'

export default function ProductList() {
  const { product } = useContext(Context);

  return useObserver(() => (
    <Box className="productList"
      sx={{
        display: 'flex', 
        flexWrap: 'wrap', // Позволяет переносить элементы на новую строку
        gap: '1em', // Задает расстояние между карточками
        justifyContent: 'center', // Центрирует карточки на строке
      }}
    >
      {product.products.map(product => (
        <Box 
          key={product.id} 
          sx={{
            flex: '1 1 calc(25% - 1em)', // Каждая карточка занимает 25% ширины (4 на строке)
            boxSizing: 'border-box', // Учитывает отступы и границы
            maxWidth: '25%', // Ограничивает ширину карточки
          }}
        >
          <ProductCard currentProduct={product} />
        </Box>
      ))}
    </Box>
  ));
}
