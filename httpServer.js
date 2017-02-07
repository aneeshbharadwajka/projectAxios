var http = require('http')
// console.log('hello')
const axios = require('axios')
const getGoogle = () => axios.get('http://google.com')
var server = http.createServer((req, res) => {
  getGoogle()
    .then((response) => {
      res.end(response.data)
    })
    .catch((error) => {
      res.end(error.data)
    })
})
server.listen(3000)


