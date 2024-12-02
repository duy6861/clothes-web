import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsPlus, BsEyeFill } from 'react-icons/bs';
import { CartContext } from '../contexts/CartContext';

const Product = ({ product }) => {
  const { id, image, category, title, price } = product
  const { addToCart } = useContext(CartContext)
  return <div>
    <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
      <div className='w-full h-full flex justify-center items-center'>
        {/* img */}
        <div className='w-[200px] mx-auto flex justify-center items-center'>
          <img className='max-w-[160px] group-hover:scale-110 transition duration-200 ease-linear' src={image} alt='img'></img>
        </div>
      </div>
      {/* button */}
      <div className='absolute top-6 -right-11 group-hover:right-5 bg-red-500/40 p-2 flex flex-col items-center justify-center opacity-0 gap-y-2 group-hover:opacity-100 transition-all duration-300 ease-in'>
        <button onClick={() => addToCart(product, id)}>
          <div className='flex justify-center items-center w-12 h-12 text-white bg-red-500'>
            <BsPlus className='text-3xl' />
          </div>
        </button>
        <Link to={`/product/${id}`} className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl'> <BsEyeFill /> </Link>
      </div>
    </div>
    {/* category and title */}
    <div>

      <Link to={`/product-category/${category}`}><div className='text-sm capitalize text-gray-500 mb-1'>{category}</div></Link>
      <Link to={`/product/${id}`}>
        <h2 className='font-semibold'>{title}</h2>
      </Link>

      <h2 className='font-semibold'><span className='text-[14px]'>$</span> {price}</h2>
    </div>
  </div>
};

export default Product;