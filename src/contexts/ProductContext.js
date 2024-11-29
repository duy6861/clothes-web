import React from 'react';
import { useState, createContext, useEffect } from 'react';

export const ProductContext = createContext();
const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json() // for debugging purposes, remove this line when you're done with the implementation.  // Fetching the products from the API and storing them in the state.  // Replace 'https://fakestoreapi.com/products' with your actual API endpoint.  // This is just a mock API for demonstration purposes. In a real-world application, you'd use a proper API.  // You can also add error handling and pagination
      setProducts(data)
    }
    fetchProducts()
  }
    , [])
  return <ProductContext.Provider value={{ products }}>
    {children}
  </ProductContext.Provider>;
};

export default ProductProvider;