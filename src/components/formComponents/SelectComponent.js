import React from 'react'
import './FormsStyles.css'

const SelectComponent = (props) => {
    const { sort, handleSort } = props
    
    const sortOptions = [
        'By pincode ascending',
        'By pincode descending', 
        'By order date ascending', 
        'By order date descending' 
    ]

    return(
        <>
            <select className="sort-data" value={sort} onChange={handleSort}>
                <option value=''>sort by</option>
                {sortOptions.map((ele, i) => {
                    return(
                        <option key={i} value={ele}>
                            {ele}
                        </option>
                    )
                })}

            </select>
        </>
    )
}

export default SelectComponent