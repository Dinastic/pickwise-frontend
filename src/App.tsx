import React from 'react';
import CategoryInput from './components/CategoryInput';
import ProductInput from './components/ProductInput';

const App: React.FC = () => {
  return (
    <>
      <div className="h-screen bg-gray-400 flex flex-col items-center justify-center p-4">
        <CategoryInput/>
        <div className="flex flex-wrap justify-center mt-4 gap-4 sm:flex-nowrap sm:gap-4">
          <ProductInput label="Product 1"/>
          <ProductInput label="Product 2"/>
        </div>
        <div className="flex justify-center w-full">
          <button
            className="block px-4 py-2 mt-20 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500
                 w-full sm:w-auto sm:px-6 sm:py-3 sm:text-lg md:px-8 md:py-4 md:text-xl">
            Pick Wise
          </button>
        </div>
      </div>

    </>
  );
};

export default App;
