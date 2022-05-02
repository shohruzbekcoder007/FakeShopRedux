import React from 'react'
import { Routes, Route } from "react-router-dom";
import WrapperProducts from './components/WrapperProducts'
import ProductListing from './components/ProductListing';
import ProductDetail from './components/ProductDetail';
import ProductComponent from './components/ProductComponent';

function App() {
  return (
    <Routes>
      <Route path="/" element={<WrapperProducts />}>
        <Route index element={<ProductListing />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="*" element={<h2>component not found</h2>} />
      </Route>
    </Routes>
  );
}

export default App;
