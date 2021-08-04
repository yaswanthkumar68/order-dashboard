import React from 'react'
import './FormsStyles.css'

const SearchComponent = (props) => {
    const { formType, search, searchBy, handleSearch, hint } = props
    
    return(
        <>
            <input 
                className={`filter-data-${formType}`}
                type={formType} 
                name={searchBy}
                placeholder={hint} 
                value={search} 
                onChange={handleSearch}
            />
        </>
    )
}

export default SearchComponent