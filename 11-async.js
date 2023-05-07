const {writeFile, readFile} = require('fs')

readFile('./content/first.txt', 'utf-8', (err, result) => {
    if(err) {
        console.log(err)
        return
    }
    else {
        console.log(result)
        const second = readFile('./content/second.txt', 'utf-8', (err, result) => {
            if(err) {
                console.log(err)
                return           
            }
            console.log(result)
        })
        writeFile('./content/result-async.txt', 'This is the async text',
        (err, result) => console.log(result))
       
    }
})
