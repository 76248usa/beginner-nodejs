const http = require('http')
const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('This is Elsabe homepage')
        res.end()
        return
    }else if (req.url === '/about'){
      res.write('This page tells you about us')
      res.end()
      return
    } else {
        res.end(`<div><h3>Oops wrong page</h3>
        <a href="/">Back home</a></div>`)
    }
})
server.listen(5000)
