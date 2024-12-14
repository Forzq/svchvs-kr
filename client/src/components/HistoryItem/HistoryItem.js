import React from 'react'; 
import { Box, Typography, Divider } from '@mui/material';
import { useContext } from 'react';
import { Context } from '../../index';
import './HistoryItem.css';

export default function HistoryItem({ currentHist }) {
  const { product } = useContext(Context);

  if (!product.carModels || product.carModels.length === 0) {
    return <div>Загрузка данных...</div>;
  }

  const currentProduct = product.products.find(pr => pr.id === currentHist.ProductId);
  const bubu = product.carModels.find(model => model.id === currentProduct?.CarModelId);
  const currentBrand = product.carBrands.find(brand => brand.id === bubu?.CarBrandId);

  if (!currentProduct || !bubu || !currentBrand) {
    return <div>Некорректные данные заказа</div>;
  }

  return (
    <Box className="history-item">
      <Typography variant="h6" className="history-item-title">
        {currentProduct.name}
      </Typography>
      <Typography variant="subtitle1" className="history-item-brand">
        {currentBrand.name} {bubu.name}
      </Typography>
      <Divider sx={{ my: 1 }} />
      <Box className="history-item-details">
        <Typography variant="body2">
          Улучшение крутящего момента: <b>{currentProduct.torqueGain}</b>
        </Typography>
        <Typography variant="body2">
          Увеличение л.с.: <b>{currentProduct.horsepowerGain}</b>
        </Typography>
      </Box>
      <Divider sx={{ my: 1 }} />
      <Typography variant="body2" className="history-item-cost">
        Цена: <b>{currentProduct.cost}$</b>
      </Typography>
    </Box>
  );
}
