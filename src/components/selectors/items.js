// parse items into list

export const getItemsList = (items) => {
    const arr = items.split(';')
    const result = []
    arr.forEach((ele) => {
        if(ele){
            result.push(ele.replace(':', ' - '))
        }
    })
    return result
}
