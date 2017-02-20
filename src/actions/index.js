import * as types from './ActionTypes'
import axios from 'axios'

export function addItem(item) {
  return dispatch => {
    dispatch(addFlashMessage(`Successfully added "${item}"!`, 'notification'))
    dispatch(addItemSuccess(item))
  }
}

export function setProfile(res) {
  return {
    type: types.ADMIN_LOGIN,
    organization: res.organization[0],
    user: res.user
  }
}

export function addItemSuccess(item) {
  return { type: types.ITEM__CREATE, item }
}

export function addFlashMessage(text, messageType = 'error') {
  return { type: types.FLASH_MESSAGE__CREATE, text, messageType }
}

export function dismissFlashMessage(stamp) {
  return dispatch => {
    // NOTE: Without this timeout, a bug occurs that causes one
    // or more closely-timed flash messages to get skipped over.
    setTimeout(() => {
      dispatch(deleteFlashMessage(stamp))
    }, 500)
  }
}

export function deleteFlashMessage(timestamp) {
  return { type: types.FLASH_MESSAGE__DELETE, timestamp }
}

export function authorization() {

}

export function adminLogin(profile, org_name) {
  return dispatch => {
    const name = profile.name
    const email = profile.email
    checkDbForUser(email)
    // axios.post('/api/users', ({name: name, email: email, organization_name: org_name}))
    // .then(res => {
    //   console.log('response from db', res);
    //   dispatch(setProfile(res.data))
    // })
  }
}

function checkDbForUser(email) {
  axios.get(`/api/user/${email}`)
  .then(res => {
    console.log(res)
  })

}
