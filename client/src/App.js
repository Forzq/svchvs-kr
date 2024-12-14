import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import AppRouter from './components/AppRouter';
import { useObserver } from 'mobx-react-lite';
import { useContext, useEffect, useState } from 'react';
import { Context } from './index';
import { check } from './http/userAPI';
import { fetchBrands, fetchHistories, fetchModels, fetchProducts, fetchTypes } from './http/productAPI';

function App() {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  const {product} = useContext(Context);
  const [selectedBrand, setSelectedBrand] = useState('');  // Состояние для выбранного бренда

  useEffect(() => {//main fetches
      fetchTypes().then(data => product.setTypes(data));
      fetchBrands().then(data => product.setBrands(data));
      fetchModels().then(data => product.setModels(data));
      fetchProducts().then(data => product.setProducts(data));
      fetchHistories().then(data => product.setHistories(data));
  }, [product]);

  useEffect(() => {
        check().then(data => {
            user.setUser(true);
            user.setIsAuth(true);
        }).finally(() => setLoading(false));
}, []);


  return useObserver(() =>(
    <>
    <BrowserRouter>
          <AppRouter/>
     </BrowserRouter>
    </>
  ));
}

export default App;
