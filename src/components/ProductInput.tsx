import React from 'react';

type Props = {
  label?: string;
};

const ProductInput = ({label}: Props) => {
  return (
    <div className="flex items-center justify-center w-full max-w-sm mx-auto">
      <input
        type="text"
        placeholder={label}
        className="w-full px-4 py-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-xl md:text-2xl"
      />
    </div>
  );
};

export default ProductInput;