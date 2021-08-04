import React from 'react'
import './FormsStyles.css'
const InputFilecomponent = (props) => {
    const {handleFileChange} = props

    return(
        <div>
            <input
                type="file" 
                onChange={handleFileChange} 
                accept=".csv" 
                style={{width:"200px"}}
            />
        </div>
    )
}

export default InputFilecomponent