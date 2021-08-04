// sort the data

export const sortData = (sortValue, data) => {
    const result = data.sort((a, b) => {
        if(sortValue === 'By pincode ascending'){
            return Number(a.deliveryPincode) - Number(b.deliveryPincode)
        }
        else if(sortValue === 'By pincode descending'){
            return Number(b.deliveryPincode) - Number(a.deliveryPincode)
        }
        else if(sortValue === 'By order date ascending'){
            const dateA = Number(a.orderDate.split('/').reverse().join(''))
            const dateB = Number(b.orderDate.split('/').reverse().join(''))
            return dateA - dateB
        }
        else if(sortValue === 'By order date descending'){
            const dateA = Number(a.orderDate.split('/').reverse().join(''))
            const dateB = Number(b.orderDate.split('/').reverse().join(''))
            return dateB - dateA
        }
    })
    return result
}