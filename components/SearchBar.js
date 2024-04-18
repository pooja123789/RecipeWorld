// components/SearchBar.js

import React from 'react';

const SearchBar = ({ query, onQueryChange, onSearch }) => {
  return (
    <div>
      
      <input
        type="text"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        placeholder="Search recipes..."
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
