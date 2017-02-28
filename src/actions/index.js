import * as types from './ActionTypes'
import { browserHistory } from 'react-router'
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
    const { name, email, picture } = profile

    checkDbForOrgAndUser(name, email, picture, org_name, dispatch)
  }
}

function checkDbForOrgAndUser(name, email, picture, org_name, dispatch) {
  axios.get(`/api/user/${email}/${org_name}`)
  .then(res => {
    if(res.data.user.email && res.data.organization.length) {
      dispatch(setProfile(res.data))
    } else {
        if(!res.data.organization.name) {
          addOrgToDb(res, org_name, dispatch)
        }
      }
  })
  .catch(err => {
    addUserAndOrgToDb(name, email, picture, org_name, dispatch)
    console.error('ERROR: ', err)
  })
}

function addUserAndOrgToDb(name, email, picture, org_name, dispatch) {
  axios.post('/api/users', ({
    name,
    email,
    picture,
    organization_name: org_name
  }))
  .then(res => {
    dispatch(setProfile(res.data))
  })
  .catch(err => {
    console.error('ERROR: ', err)
    alert('ERROR in signin process. Wrong email or organization name')
    browserHistory.push('/organization')
    localStorage.clear()
  })
}

function addOrgToDb(res, org_name, dispatch) {
  axios.post(`/api/organizations/${res.data.user.id}`, { org_name, user: res.data.user})
  .then(res => {
    dispatch(setProfile(res.data))
  })
  .catch(err => {
    console.error('ERROR: ', err)
    alert('ERROR in signin process. Wrong email or organization name')
    browserHistory.push('/organization')
    localStorage.clear()
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

export function editEvent(event, organization_id) {
  const name = event.name
  const description = event.description
  const date = event.date
  const address = event.address
  const id = event.id

  return (dispatch) => {
    axios.put(`/api/events/${organization_id}`, ({
      id: id,
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

export function deleteEvent(id, organization_id) {
  return (dispatch) => {
    axios.delete(`/api/events/${organization_id}/${id}`)
    .then(res => {
      dispatch(setEvents(res.data))
    })
  }
}

export function createRole(role, event_id) {
  const name = role.role
  const qty = role.qty

  return (dispatch) => {
    axios.post(`/api/roles/${event_id}`, ({
      role_name: name,
      role_qty: qty,
    }))
    .then(res => {
      dispatch(setRoles(res.data))
    })
  }
}

export function getAllRoles(event_id) {
  return (dispatch) => {
    axios.get(`/api/roles/${event_id}`)
    .then(res => {
      dispatch(setRoles(res.data))
    })
  }
}

export function addRoleQty(qty, id, event_id) {
  return (dispatch) => {
    axios.patch(`/api/roles/${event_id}/${id}`, {qty})
    .then(res => {
      dispatch(setRoles(res.data))
    })
  }
}

export function deleteRole(id, event_id) {
  return (dispatch) => {
    axios.delete(`/api/roles/${event_id}/${id}`)
    .then(res => {
      dispatch(setRoles(res.data))
    })
  }
}
