import * as React from 'react';
import { useContext } from 'react';
import { useObserver } from 'mobx-react-lite';
import { Context } from '../../index';
import { Box } from '@mui/material';
import ProductCard from "../productCard/productCard";
import '../ProductList/ProductList.css';

export default function EngineList({ selectedBrand, engineTypeId }) {  // Получаем engineTypeId как пропс
  const { product } = useContext(Context);

  // Логирование данных для диагностики
  console.log("Selected Brand:", selectedBrand);
  console.log("Engine Type Id:", engineTypeId);

  // Фильтрация по бренду
  const filteredProducts = selectedBrand
    ? product.products.filter(prod => {
        if (!product.carModels || !prod.CarModelId) {
          return false;
        }
        const model = product.carModels.find(model => model.id === prod.CarModelId);
        return model && product.carBrands.some(brand => brand.id === model.CarBrandId && brand.name === selectedBrand);
      })
    : product.products;

  // Фильтрация по TypeOfProductId (ID типа продукта)
  const finalFilteredProducts = engineTypeId
    ? filteredProducts.filter(prod => prod.TypeOfProductId === engineTypeId)
    : filteredProducts;

  console.log("Final Filtered Products:", finalFilteredProducts);  // Логируем финальные отфильтрованные продукты

  return useObserver(() => (
    <Box className="productList"
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1em',
        justifyContent: 'center',
      }}
    >
      {Array.isArray(finalFilteredProducts) && finalFilteredProducts.length > 0 ? finalFilteredProducts.map(product => (
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
        <p>Нет доступных продуктов.</p>
      )}
    </Box>
  ));
}
