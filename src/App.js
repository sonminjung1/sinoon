import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom'
import ProductAll from './Component/ProductAll';
import ProductDetail from './Component/ProductDetail';
import Login from './Component/Login';
import NavBar from './Component/NavBar';
import { useEffect, useState } from 'react';
import PrivateRouter from './Component/PrivateRouter';

function App() {
  const [authenticate, setAuthenticate] = useState(false); // true = 로그인 / false = 로그인 상태가 안된 상태 
  useEffect(() => {
    console.log("로그인", authenticate);
  }, [authenticate]);
  return (
    <div>
      <NavBar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path='/' element={<ProductAll />} />
        <Route path='/login' element={<Login setAuthenticate={setAuthenticate} />} />
        <Route path='/product/:id' element={<PrivateRouter authenticate={authenticate} />} />
      </Routes>
    </div>
  );
}

export default App;
