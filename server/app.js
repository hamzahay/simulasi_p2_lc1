const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.listen(port, () => {
  console.log('running on port : ', port)
})