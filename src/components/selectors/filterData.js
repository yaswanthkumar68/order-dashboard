// filter based on search

export const filterData = (data,details) => {
    const dateFormat = details.date.split('-').reverse().join('/')

    const result = data.filter((ele) => {
        if(details.date && !details.pinCode && !details.item){
            return ele.orderDate === dateFormat
        }
        else if(details.pinCode && !details.date && !details.item){
            return ele.deliveryPincode.includes(details.pinCode.trim())
        }
        else if(!details.date && !details.pinCode && details.item){
            return itemsList(ele.items, details.item)
        }
        else if(details.date && details.pinCode && !details.item){
            return ele.orderDate === dateFormat && ele.deliveryPincode.includes(details.pinCode.trim())
        }
        else if(details.pinCode && details.item && !details.date){
            return ele.deliveryPincode.includes(details.pinCode.trim()) && itemsList(ele.items, details.item)
        }
        else if(!details.pinCode && details.item && details.date){
            return ele.orderDate === dateFormat && itemsList(ele.items, details.item)
        }
        else if(details.pinCode && details.item && details.date){
            return ele.orderDate === dateFormat && itemsList(ele.items, details.item) && ele.deliveryPincode.includes(details.pinCode.trim())
        }
    })
    return result
}

// items search

const itemsList = (str, search) => {
    const itemsArray = str.split(';')
    const result = []
    itemsArray.forEach((ele) => {
        if(ele){
            const eachItem = ele.split(':')
            result.push(eachItem[0].toLowerCase())
        }
    })
    let status = false
    result.forEach((ele) => {
        if(ele.includes(search)){
            status = true
        }
    })
    return status    
}
