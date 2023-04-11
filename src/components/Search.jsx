import React from 'react';
import './search.scss'

const Search = () => {
  return (
    <div className='search-hood'>
      <div className='search-hood-title'>
        <p>Check out a neighborhood</p>
      </div>
      <div className='search-input'>
        <input type='text' placeholder='Enter address, zip, city' />
        <button>Search</button>
      </div>
    </div>
  )
}

export default Search