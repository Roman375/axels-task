import React from 'react'

import { Search } from '../styled/SearchBar'

const SearchBar = ({handleChange}) => {
  return (
    <Search>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={handleChange}
      />
    </Search>
  )
}

export default SearchBar
