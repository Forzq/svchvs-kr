import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import AppRouter from './components/AppRouter';
import { useObserver } from 'mobx-react-lite';
import { useContext, useEffect, useState } from 'react';
import { Context } from './index';
import { check } from './http/userAPI';
import { fetchBrands, fetchModels, fetchProducts, fetchTypes } from './http/productAPI';
import { jwtDecode } from 'jwt-decode';

function App() {
  const {user} = useContext(Context)

  const {product} = useContext(Context);
  const [selectedBrand, setSelectedBrand] = useState('');  // Состояние для выбранного бренда

  useEffect(() => {//main fetches
      fetchTypes().then(data => product.setTypes(data));
      fetchBrands().then(data => product.setBrands(data));
      fetchModels().then(data => product.setModels(data));
      fetchProducts().then(data => product.setProducts(data));
  }, [product]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
        const decodedToken = jwtDecode(token);
        user.setUser({
            id: decodedToken.id,
            email: decodedToken.email,
            role: decodedToken.role,
        });
        user.setIsAuth(true);
    }
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
