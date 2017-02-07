const fs = require('fs')
var directory = process.argv[2]
let readFile = new Promise((resolve, reject) => {
  fs.readFile(directory, (error, data) => {
    if (error) throw error
    resolve(data)
  })
})

readFile.then(function (response) {
  console.log(response.toString())
})
.catch(function (error) {
  console.log(error)
})

