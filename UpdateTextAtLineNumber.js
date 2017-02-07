const express = require('express')
const app = express()
const fs = require('fs')
const file = 'input.txt'
const bodyParser = require('body-parser')
app.use(bodyParser())
// app.use(bodyParser)

app.get('/read', function (req, res) {
  fs.readFile(file, function (error, data) {
    if (error) console.log(error)
    else {
      console.log(data.toString())
      res.send(`${data.toString()}`)
    }
  })
})

app.post('/write/:text', function (req, res) {
  fs.appendFile(file, `${JSON.stringify(req.params['text'])}<br>\n`, (err) => {
    if (err) throw err
    console.log('It\'s saved!')
    res.end('done')
  })
})

app.put('/update/:lineNumber', function (req, res) {
  fs.readFile('input.txt', 'utf8', function (err, data) {
    if (err) {
      return console.log(err)
    }
    let result
    result = data.split('\n')
    if (req.params.lineNumber < result.length) {
      result[req.params.lineNumber] = req.body.data + '<br>'
    }
    result = result.join('\n')
    fs.writeFile('input.txt', result, 'utf8', function (err) {
      if (err) return console.log(err)
      res.send('Done')
    })
  })
})

app.delete('/destroy/:linenumber', (req, res) => {
  const lineNumber = req.params.linenumber
  fs.readFile(file, 'utf8', (error, data) => {
    if (error) {
      return console.log(error)
    }
    let fileContent = data.split('\n')
    if (lineNumber < fileContent.length) {
      fileContent.splice(lineNumber, 1)
      fileContent = fileContent.join('\n')
      fs.writeFile('input.txt', fileContent, 'utf8', function (err) {
        if (err) return console.log(err)
        res.send('Done')
      })
    } else {
      return res.sendStatus(500)
    }
  })
})

app.listen(8100)
console.log('Listening on port 8100...')
