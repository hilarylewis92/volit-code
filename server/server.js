const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const PORT = process.env.PORT || 3001

app.set('port', PORT)
app.locals.title = 'Volit'

app.get('/api/test', (req, res) => {
  res.send('Hello World')
})

app.listen(PORT, () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}`);
})
