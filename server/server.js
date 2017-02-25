const express = require('express')
const bodyParser = require('body-parser')

const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const db = require('knex')(configuration)

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const PORT = process.env.PORT || 3001

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
})

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

app.get('/api/user/:email', (req, res) => {
  const { email } = req.params
  const user = db('users').where('email', email).select()
    .then(user => {
      db('organizations').where('admin_id', user[0].id).select()
      .then(organization => {
        res.status(200).json({ user: user[0], organization })
      })
    })
  .catch(err => {
    console.log('catch')
    res.sendStatus(404)
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

app.get('/api/events/:organization_id', (req, res) => {
  const {organization_id} = req.params
  db('events').where('organization_id', organization_id).select()
  .then(events => {
    res.status(200).json(events)
  })
  .catch(error => {
    console.error('ERROR: in GET request for events')
  })
})

app.post('/api/events/:organization_id', (req, res) => {
  const { organization_id } = req.params
  const { event_name, event_date, event_description, event_address } = req.body
  const event = { organization_id, event_name, event_description, event_address , event_date}

  db('events').insert(event)
  .then(() => {
    db('events').where('organization_id', organization_id).select()
    .then(events => {
      res.status(200).json(events)
    })
    .catch(error => {
      console.error('ERROR: in POST for events')
    })
  })
})

app.get('/api/roles/:event_id', (req, res) => {
  const { event_id } = req.params

  db('roles').where('event_id', event_id).select()
  .then(roles => {
    res.status(200).json(roles)
  })
  .catch(error => {
    console.error('ERROR: in GET request for events')
  })
})

app.post('/api/roles/:event_id', (req, res) => {
  const { event_id } = req.params
  const { role_name } = req.body
  const role = { role_name, event_id }

  db('roles').insert(role)
  .then(() => {
    db('roles').where('event_id', event_id).select()
    .then(roles => {
      res.status(200).json(roles)
    })
    .catch(error => {
      console.error('ERROR: in POST for events')
    })
  })
})

app.listen(PORT, () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}`)
})
