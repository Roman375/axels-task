import React, { FC } from 'react'

import { eventType } from './UsersList'
import { Search } from '../styled/SearchBar'

type Props = {
  handleChange: (event: eventType) => void
}

const SearchBar: FC<Props> = ({ handleChange }) => (
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

export default SearchBar
