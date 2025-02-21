
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchQuery } from '../store/ProductSlice'; 

function SearchComponent({isVisible}) {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const [searchTerm, setSearchTerm] = useState('');
  if (!isVisible) return null;

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    dispatch(setSearchQuery(searchTerm)); 
    navigate(`/search?query=${searchTerm}`); 
  };
  
  
  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleInputChange}
        style={{ marginTop: '30px', marginRight: '10px' }}
      />
      <input
        type="button"
        value="Search"
        onClick={handleSearchClick}
        style={{ marginTop: '30px' }}
      />
    </div>
  );
}

export default SearchComponent;
