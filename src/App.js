import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import page
import Home from './page/Home';
import ProductDetails from './page/ProductDetails';
// import components
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductCategory from './page/ProductCategory';

// router
const App = () => {
  return <div className='overflow-hidden'>
    <Router future={{
      v7_relativeSplatPath: true,
      v7_startTransition: true
    }} >
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/product-category/:category' element={<ProductCategory />} />
      </Routes>
      <Sidebar />
      <Footer />
    </Router>
  </div>;
};

export default App;