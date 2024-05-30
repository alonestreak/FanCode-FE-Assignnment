import React from 'react'; 
import { FaSearch } from "react-icons/fa";
import './searchBox.css'
type searchBoxType={
  query:string,
  setQuery: (query:string)=>void
}
const SearchBox = ({query, setQuery}:searchBoxType) => {
  return (
    <div className='flex'>
      <div className='input-wrapper'>
        <input type="text" className="search-input"  placeholder='Search Movies' value = {query}
        onChange={(e)=>setQuery(e.target.value)}
        />
        <FaSearch id="search-icon"/>
    </div>
    </div>
    
  )
}

export default SearchBox