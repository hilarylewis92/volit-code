import * as types from './ActionTypes'
import axios from 'axios'

export function setProfile(res) {
  return {
    type: types.ADMIN_LOGIN,
    organization: res.organization[0],
    user: res.user
  }
}

export function setEvents(res) {
  return {
    type: types.CREATE_EVENT,
    res,
  }
}

export function setRoles(res) {
  return {
    type: types.CREATE_ROLE,
    res,
  }
}

export function adminLogin(profile, org_name) {
  return (dispatch) => {
    const name = profile.name
    const email = profile.email

    checkDbForUser(name, email, org_name, dispatch)
  }
}

function checkDbForUser(name, email, org_name, dispatch) {
  axios.get(`/api/user/${email}`)
  .then(res => {
    dispatch(setProfile(res.data))
  })
  .catch(err => {
    axios.post('/api/users', ({
      name,
      email,
      organization_name: org_name
    }))
    .then(res => {
      dispatch(setProfile(res.data))
    })
  })
}

export function createEvent(event, organization_id) {
  const name = event.name
  const description = event.description
  const date = event.date
  const address = event.address

  return (dispatch) => {
    axios.post(`/api/events/${organization_id}`, ({
      event_name: name,
      event_description: description,
      event_date: date,
      event_address: address,
    }))
    .then(res => {
      dispatch(setEvents(res.data))
    })
  }
}

export function getAllEvents(organization_id) {
  return (dispatch) => {
    axios.get(`/api/events/${organization_id}`)
    .then(res => {
      dispatch(setEvents(res.data))
    })
  }
}

export function createRole(role, event_id) {
  return (dispatch) => {
    axios.post(`/api/roles/${event_id}`, ({
      role_name: role
    }))
    .then(res => {
      dispatch(setRoles(res.data))
    })
  }
}
