const express = require('express')
const bodyParser = require('body-parser')

const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile')[environment];
const db = require('knex')(configuration);

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
  db('organizations').select()
  .then(organizations => {
    res.status(200).json(organizations)
  })
  .catch(error => {
    console.error('ERROR: in GET request for organizations')
  })
})

app.get('/api/checkorg/:name', (req, res) => {
  const { name } = req.params
  db('organizations').where('name', name).select()
  .then((org) => {
    res.status(200).json(org)
  })
  .catch((err) => {
    console.error(err)
  })
});

app.post('/api/organizations', (req, res) => {
  // TODO: how do we get this id? Do we make post request to users for and save id?
  const { name, admin_id } = req.body
  const organization = { name, admin_id }
  db('organizations').insert(organization)
  .then(() => {
    db('organizations').select()
    .then(organizations => {
      res.status(200).json(organizations)
    })
    .catch(error => {
      console.error('ERROR: in POST for organizations')
    })
  })
})

app.get('/api/users', (req, res) => {
  db('users').select()
  .then(users => {
    res.status(200).json(users)
  })
  .catch(error => {
    console.error('ERROR: in GET request for users')
  })
})

app.post('/api/users', (req, res) => {
  const { name, email, phone_number, organization_name } = req.body
  const user = { name: name, email: email, phone_number: '555-555-5555' }
  const admin_id = db('users').returning('id').insert(user)
  .then(admin_id => {
    const aid = parseInt(admin_id, 10)
    const organization = { name: organization_name, admin_id: aid}
    db('organizations').returning(['id', 'name', 'admin_id']).insert(organization)
    .then(organization => {
      res.status(200).json({ organization, user })
    })
  })
})

app.listen(PORT, () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}`)
})
