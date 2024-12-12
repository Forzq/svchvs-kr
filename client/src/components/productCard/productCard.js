import * as React from 'react'; 
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../productCard/productCard.css'
import { useContext } from 'react';
import { Context } from '../../index';

export default function ProductCard({ currentProduct }) {
  const { product } = useContext(Context);

  // Убедитесь, что данные загружены
  if (!product.carModels || product.carModels.length === 0) {
    console.log("Модели автомобилей не загружены");
    return <div>Загрузка моделей...</div>;
  }

  if (!currentProduct.CarModelId) {
    console.log("CarModelId отсутствует в текущем продукте:", currentProduct);
    return <div>Данные о модели автомобиля отсутствуют</div>;
  }

  // Найти конкретную модель
  const bubu = product.carModels.find(model => model.id === currentProduct.CarModelId);

  if (!bubu) {
    console.log("Модель не найдена для CarModelId:", currentProduct.CarModelId);
    return <div>Модель автомобиля не найдена</div>;
  }

  // Найти бренд
  const currentBrand = product.carBrands.find(brand => brand.id === bubu.CarBrandId);

  console.log("Текущая модель:", bubu);
  console.log("Текущий бренд:", currentBrand);

  return (
    <Card className='cartochka' sx={{ minWidth: 299, maxWidth: 300, height: 300 }}>
      <CardContent>
        <img src={process.env.REACT_APP_API_URL + bubu.img} alt='Фото автомобиля' style={{ width: '100%' }} />
        <Typography variant="h8" component="div">
          {currentProduct ? currentProduct.name : "Товар не найден"}
        </Typography>
        <Typography variant="h8" component="div"><b>
          {currentBrand ? currentBrand.name : "Марка авто не найдена"} {bubu ? bubu.name : "Модель не найдена"}
        </b></Typography>
        <Typography variant="body2">
          {currentProduct ? currentProduct.cost + '$' : "Цена авто не найдена"} 
          <Button size="small">Buy</Button>
        </Typography>
      </CardContent>
    </Card>
  );
}
