import * as React from 'react';
import { useContext } from 'react';
import { useObserver } from 'mobx-react-lite';
import { Context } from '../../index';
import { Box } from '@mui/material';
import ProductCard from "../productCard/productCard";
import '../ProductList/ProductList.css';

export default function ProductList({ selectedBrand }) {  // Получаем selectedBrand как пропс
  const { product } = useContext(Context);
  
  const filteredProducts = selectedBrand
  ? product.products.filter(prod => {
      // Проверяем, что carModels и CarModelId существуют
      if (!product.carModels || !prod.CarModelId) {
        return false; // Пропускаем продукт, если данные отсутствуют
      }
      const model = product.carModels.find(model => model.id === prod.CarModelId);
      return model && product.carBrands.some(brand => brand.id === model.CarBrandId && brand.name === selectedBrand);
    })
  : product.products; // Если бренд не выбран, возвращаем все продукты


  return useObserver(() => (
    <Box className="productList"
      sx={{
        display: 'flex', 
        flexWrap: 'wrap',
        gap: '1em',
        justifyContent: 'center',
      }}
    >
      {Array.isArray(filteredProducts) ? filteredProducts.map(product => (
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
        <p>Нет доступных продуктов.</p>  // Отображение, если массив пуст или отсутствует
      )}
    </Box>
  ));
}
