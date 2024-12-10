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

  // Убедитесь, что массив carModels загружен
  if (!product.carModels || product.carModels.length === 0) {
    console.log("Модели автомобилей не загружены");
    return <div>Загрузка моделей...</div>;
  }

  // Найти конкретную модель
  const bubu = product.carModels.find(model => model.id === currentProduct.carModelsId);
  const currentBrand = product.carBrands.find(brand=>brand.id === bubu.carBrandsId);
  console.log("Текущая модель:", bubu);
  console.log("Текущая brand:", currentBrand);
  return (
    <Card className='cartochka'sx={{ minWidth: 299, maxWidth:300, height:400 }}>
      <CardContent>

        <img src={bubu.img} alt='fd' style={{ width: '100%' }}/>
        <Typography variant="h8" component="div">
      {currentProduct ? currentProduct.name : "Товар не найден"}
      </Typography>
      
        <Typography variant="h8" component="div"><b>
        {currentBrand ? currentBrand.name : "Марка авто не найдена"}  {bubu ? bubu.name : "Модель не найдена"}
        </b>
        </Typography>
        <Typography variant="body2">
        {currentProduct ? currentProduct.cost+'$' : "Цена авто не найдена"} <Button size="small" >Buy</Button>
        </Typography>
      </CardContent>

    </Card>
  );
}
