import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import AppRouter from './components/AppRouter';
import { useObserver } from 'mobx-react-lite';
import { useContext, useEffect, useState } from 'react';
import { Context } from './index';
import { check } from './http/userAPI';

function App() {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

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
