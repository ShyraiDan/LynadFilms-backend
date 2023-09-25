const express = require('express')

const PORT = process.env.PORT || 4444

const app = express()

app.get('/', (req, res) => {
  res.send('Hello 1')
})

app.get('/films', (req, res) => {
  res.send('Hello 1')
})

app.listen(PORT, (err) => {
  if (err) {
    return console.log(err)
  }
  console.log('Server Ok')
})
