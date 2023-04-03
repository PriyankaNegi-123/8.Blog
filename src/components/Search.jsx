import React from 'react'

const Search = ({value, handleSearchKey, clearSearch, formSubmit}) => {
  return (
    <div className='search'>
        <form onSubmit={formSubmit}>
            <input 
            type='text' 
            onChange={handleSearchKey}
            placeholder='Search By Category...' 
            value={value}/>
            {value && <span onClick={clearSearch}>X</span>}
            <button>Go</button>
        </form>
    </div>
  )
}

export default Search