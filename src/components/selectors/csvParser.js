// parse csv data 

export const csvParser = (file, getData) => {
    const fileParse = new FileReader()

    fileParse.onload = (e) => {
        const text = e.target.result
        const textSplit = text.split('\r\n')

        const dataArray = textSplit.map((ele) => {
            return ele.split(',')
        })
        const tableHeadings = dataArray.shift()
        const orderData = dataArray.map((ele) => {
            const eachData = {}
            for(let i = 0, j = 0; i < ele.length; i++, j++){
                eachData[tableHeadings[j]] = ele[i]
            }
            return eachData
        })
        getData(orderData)

    }
    fileParse.readAsText(file)
}

