const os = require('os')

const user = os.userInfo
//uptime info
console.log(os.type())
console.log(os.release())
console.log(os.totalmem())
console.log(os.freemem())