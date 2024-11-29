import React from 'react';
import WomanImg from '../img/woman_hero.png'
import { Link } from 'react-router-dom';
const Hero = () => {
  return <section className='h-[800px] bg-hero bg-no-repeat bg-center bg-cover py-24'>
    <div className='container mx-auto flex justify-around h-full'>
      {/* text */}
      <div className='flex flex-col'>
        {/* pretitle */}
        <div className='font-semibold flex items-center uppercase'>
          <div className=' w-10 h-[2px] bg-red-500 mr-3'>
          </div>
          New Trend
          <div className=' w-10 h-[2px] bg-red-500 ml-3'>
          </div>
        </div>
        {/* title */}
        <h1 className='uppercase text-[70px] leading-[1.1] font-light mb-4'>autumn sale stylish <br />
          <span className='font-semibold'>womens</span></h1>
        <Link to={'/'} className='self-start font-semibold border-b-2 border-primary'>Discover More</Link>
      </div>
      {/* image */}
      <div className='hidden lg:block'>
        <img src={WomanImg} alt='img' />
      </div>
    </div>
  </section>;
};

export default Hero;