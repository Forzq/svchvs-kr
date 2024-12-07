import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css';
import AppRouter from './components/AppRouter';

function App() {
  return (
    <>
    <BrowserRouter>
          <AppRouter/>
     </BrowserRouter>
    </>
  );
}

export default App;
