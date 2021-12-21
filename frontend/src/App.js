import React from 'react';
import { Routes, Route} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import  CartScreen  from './screens/CartScreen';

const App =()=>{
  return (
    <>
    <Header/>
      <main className='py-2 main-body'>
        <Routes>
          <Route path='/' element={ <HomeScreen/> }/>
          <Route path={'/product/:id'} element={ <ProductScreen />} />
          <Route path= {`/cart/:id/*`} element={<CartScreen />} />
          <Route path= {`/cart/*`} element={<CartScreen />} />
        </Routes>
      </main>
      <Footer/>
    </>
  );
}

export default App;
