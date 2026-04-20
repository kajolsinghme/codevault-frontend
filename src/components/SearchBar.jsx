import React, { useEffect, useState } from 'react';

const SearchBar = ({ searchQuery, onSearch }) => {
  const [value, setValue] = useState(searchQuery);

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(value);
    }, 400); // debounce

    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div className="relative group">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-500">
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      <input
        type="text"
        placeholder="Search snippets..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full pl-11 pr-4 py-4 bg-white rounded-2xl shadow-sm ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-500 outline-none"
      />
    </div>
  );
};

export default SearchBar;