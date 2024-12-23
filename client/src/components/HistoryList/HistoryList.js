import * as React from 'react';
import { useContext } from 'react';
import { useObserver } from 'mobx-react-lite';
import { Context } from '../../index';
import { Box, Typography } from '@mui/material';
import '../ProductList/ProductList.css';
import HistoryItem from '../HistoryItem/HistoryItem';
import HeaderComp from '../HeaderComp/HeaderComp';
import { fetchHistories } from '../../http/productAPI';
import Footer from '../Footer/Footer';

export default function HistoryList() {  
  const { product } = useContext(Context);

  React.useEffect(() => {//main fetches
    fetchHistories().then(data => product.setHistories(data));
}, [product]);

  return useObserver(() => (
    <>
      {/* Заголовок вынесен отдельно */}
      
      <HeaderComp />
        <Box sx={{
          display: 'flex', 
          
          textAlign: 'center',
          alignItems: 'center',
          marginTop: '2%', // Добавляем отступ сверху
          flexDirection: 'column'
        }}>
        <Typography sx={{fontSize:48, fontWeight: 'bold'}}>
            History of orders
        </Typography>
      <Box className="productList"
        sx={{
          display: 'flex', 
          flexWrap: 'wrap',
          gap: '1em',
          justifyContent: 'center',
          marginTop: '3%', // Добавляем отступ сверху
        }}
      >

        {Array.isArray(product.HistoryOfOrders) ? product.HistoryOfOrders.map(hist => (
          <Box 
            key={hist.id} 
            sx={{
              flex: '1 1 calc(25% - 1em)',
              boxSizing: 'border-box',
              maxWidth: '25%',
            }}
          >
            <HistoryItem currentHist={hist} />
          </Box>
        )) : (
          <p>Нет доступных продуктов.</p>  // Отображение, если массив пуст или отсутствует
        )}
      </Box>
      </Box>
      <Footer/>
    </>
  ));
}
