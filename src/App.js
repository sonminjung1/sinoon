import './App.css';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import ProductAll from './Component/ProductAll';
import FixNotice from './Component/FixNotice';
import ProductDetail from './Component/ProductDetail';
import Slider from './Component/Slider';
import Login from './Component/Login';
import NavBar from './Component/NavBar';
import { useEffect, useState } from 'react';
import PrivateRouter from './Component/PrivateRouter';
import EventPage from './Component/EventPage';

function App() {
  const [authenticate, setAuthenticate] = useState(false); // true = 로그인 / false = 로그인 상태가 안된 상태 
  useEffect(() => {
    console.log("로그인", authenticate);
  }, [authenticate]);
  return (
    <div>
      <FixNotice />
      <NavBar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path='/' element={<ProductAll />} />
        <Route path='/login' element={<Login setAuthenticate={setAuthenticate} />} />
        <Route path='/event' element={<EventPage />} />
        <Route path='/product/:id' element={<PrivateRouter authenticate={authenticate} />} />
      </Routes>
    </div>
  );
}

export default App;
