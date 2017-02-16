const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const PORT = process.env.PORT || 3001

app.locals.organizations = {
  uid: 393093003,
  name: 'Tom Cruise Fundraiser',
  admin_id: 'nick@ilovetomcruise.com'
}

app.locals.users = {
  uid: 310200202,
  name: 'Nick C',
  email: 'nick@ilovetomcruise.com',
  phone: '555-555-5555',
  img: 'mypic.png',
  organization_id: '393093003'
}

app.locals.events = {
  uid: '',
  name: '',
  date: '', //date type?
  description: '',
  organization_id: ''
}

app.locals.roles = {
  role_name: '',
  user_id: '',
  event_id: ''
}

app.set('port', PORT)
app.locals.title = 'Volit'

app.get('/api/organizations', (req, res) => {
  res.status(200).json(app.locals.organizations)
})

app.post('/api/organizations', (req, res) => {
  const { name, admin_id } = req.body
  //send to database
})

app.get('/api/users', (req, res) => {
  res.status(200).json(app.locals.users)
})

app.get('/api/test', (req, res) => {
  res.send('Hello World')
})

app.listen(PORT, () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}`)
})
