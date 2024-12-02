import React from "react";
import { useContext } from 'react';

import { useParams } from 'react-router-dom';
import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';

const ProductCategory = () => {
  const { category } = useParams();
  const { products } = useContext(ProductContext)
  const filterProducts = products.filter(product => { return product.category === category })
  console.log(category)
  return <div>
    <section className='pt-32 pb-12 lg:py-28'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 max-w-sm mx-auto md:max-w-none md:mx-0'>
          {filterProducts.map(product => {
            return <Product product={product} key={product.id} />
          })}
        </div>
      </div>
    </section>
  </div>;
}
export default ProductCategory;