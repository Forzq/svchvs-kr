import logo from './logo.svg';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          {/* <Route path="/heroes" element={<Heroes/>} />
          <Route path="/items" element={<Items/>} />
          <Route path="/teams" element={<HomePage/>} />
          <Route path="/hero/:HeroId" element={<Hero/>} /> */}
        </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
