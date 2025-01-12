import React from 'react';

const CategoryInput: React.FC = () => {
  return (
    <div className="flex flex-col items-start w-full max-w-md mx-auto">
      <label
        htmlFor="categories"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Select a category
      </label>
      <select
        name="Category"
        id="categories"
        className="w-full px-4 py-2 text-lg sm:text-xl md:text-2xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="" disabled selected>
          Select a category
        </option>
        <option value="technology">Technology</option>
      </select>
    </div>
  );
};

export default CategoryInput;
