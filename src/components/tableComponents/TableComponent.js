import React from 'react'
import { getItemsList } from '../selectors/items'
import './tableComponent.css'

const TableComponent = (props) => {
    const { ordersData} = props
    
    return(
        <div className="table-component" >
            <h2 className="table-heading">List of orders - {ordersData.length}</h2>
            {ordersData.length ? 
                <div className="table-container">
                    
                    <table className="table" >
                        <thead>
                            <tr>
                                <th>Order Id</th>
                                <th>Cust Id</th>
                                <th>Pin Code</th>
                                <th>Order Date</th>
                                <th>Items</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ordersData.map((ele, i) => {
                                return(
                                    <tr key={i}>
                                        
                                        <td>{ele.orderId}</td>
                                        <td>{ele.customerId}</td>
                                        <td>{ele.deliveryPincode}</td>
                                        <td>{ele.orderDate}</td>
                                        <td>
                                            {getItemsList(ele.items).map((ele, i) => {
                                                return(
                                                    <ul key={i}>
                                                        <li className="table-list">{ele}</li>
                                                    </ul>
                                                )
                                            })}
                                        </td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
                : <h4 className="table-noResults">No results found</h4> 
            }
        </div>
    )
}

export default TableComponent