import React from 'react';
import { categories } from '../assets/assets';
import { useAppContext } from '../context/AppContext';

const Categories = () => {
  const { navigate } = useAppContext();

  return (
    <div className='mt-16 px-4 md:px-6 overflow-hidden'>
      <p className='text-2xl md:text-3xl text-blue-700 font-medium mb-4'>Categories</p>

      <div className='relative overflow-hidden'>
        <div className='flex w-max animate-scroll gap-6'>

          {/* Duplicated categories for infinite loop effect */}
          {[...categories, ...categories].map((category, index) => (
            <div
              key={index}
              className='min-w-[140px] group cursor-pointer py-6 px-4 rounded-lg flex flex-col justify-center items-center shadow-md transition-transform hover:scale-[1.03]'
              style={{ backgroundColor: category.bgColor }}
              onClick={() => {
                navigate(`/products/${category.path.toLowerCase()}`);
                scrollTo(0, 0);
              }}
            >
              <img
                src={category.image}
                alt={category.text}
                className='group-hover:scale-110 transition-transform duration-300 w-[70px] h-[70px] object-contain'
              />
              <p className='text-sm font-medium mt-3 text-center'>{category.text}</p>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Categories;
