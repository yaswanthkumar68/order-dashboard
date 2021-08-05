import React, { useState } from 'react'
import InputFileComponent from '../formComponents/InputFileComponent'
import SearchComponent from '../formComponents/SearchComponent'
import SelectComponent from '../formComponents/SelectComponent'
import TableComponent from '../tableComponents/TableComponent'

import { csvParser } from '../selectors/csvParser'
import { filterData } from '../selectors/filterData'
import { sortData } from '../selectors/sortData'

import './DataParse.css'


const DataParse = (props) => {
    const [ data, setData ] = useState([])
    const [ search, setSearch ] = useState({date : '', pinCode:'', item:''})
    const [ sort, setSort ] = useState('')
    const [ status, setStatus ] = useState(false)

    const parsedData = JSON.parse(sessionStorage.getItem('fileData'))
    // console.log(parsedData, 'storage')

    //  handle csv file

    const handleFileChange = (e) => {
        const fileName = e.target.files[0]
        csvParser(fileName, function(result){
            sessionStorage.setItem('fileData', JSON.stringify(result))
            setData(result)
            setSearch({date:'', pinCode:'', item:''})
            setSort('')
            setStatus(true)
        })        
    }
   
    // reset
    const handleReset = () => {
        const details = {...search}
        setSearch({...details, date:'', pinCode:'', item:''})
        setSort('')
        setData(parsedData)
    }

    // search functionality

    const handleSearch = (e) => {
        const { name, value } = e.target
        const details = {...search}
        setSort('')

        if(name === 'date'){
            details.date = value
            setSearch(details)
        }
        else if(name === 'pinCode'){
            details.pinCode = value
            setSearch(details)
        }
        else if(name === 'item'){
            details.item = value
            setSearch(details)
        }
       
        
        const result = filterData(parsedData, details) 
        

        if(details.pinCode || details.date || details.item){
            setData(result)
        }
        else{
            setData(parsedData)
        }      
    }
    
    //sort functionality

    const handleSort = (e) => {
        const sortValue = e.target.value
        setSort(sortValue)

        const result = sortData(sortValue, [...data])
        

        if(sortValue === ''){
            setData(parsedData)
            setSearch({date:'', pinCode:'', item:''})
        }
        else{
            setData(result)
        }
    }

    return(
        <div>
            <div className="dataParse-file">
                <h2 className="dataParse-heading">Upload your orders CSV file here</h2>
                <InputFileComponent 
                    handleFileChange={handleFileChange} 
                />
            </div>
            {
                status ?
            <>
            <div className="dataParse-search">
                <SearchComponent 
                    formType="search"
                    searchBy="pinCode"
                    search={search.pinCode}
                    handleSearch={handleSearch}
                    hint="search by pincode"
                />
                <SearchComponent 
                    formType="search"
                    searchBy="item"
                    search={search.item}
                    handleSearch={handleSearch}
                    hint="search by item"
                />
                <SearchComponent 
                    formType="date"
                    searchBy="date"
                    search={search.date}
                    handleSearch={handleSearch}
                />

                <SelectComponent 
                    sort={sort}
                    handleSort={handleSort}
                />

                <button className="dataParser-reset" onClick={handleReset}>Reset</button>
            </div>
            
            
            <TableComponent 
                ordersData = {data} 
            />
            </> : null
            }
        </div>
    )
}
export default DataParse