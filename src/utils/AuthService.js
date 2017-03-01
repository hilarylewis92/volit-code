import { EventEmitter } from 'events'
import { isTokenExpired } from './jwtHelper'
import Auth0Lock from 'auth0-lock'
import { browserHistory } from 'react-router'

export default class AuthService extends EventEmitter {
  constructor(clientId, domain) {
    super()

    this.lock = new Auth0Lock(clientId, domain, {
      auth: {
        redirectUrl: `${window.location.origin}/event-manager`,
        responseType: 'token'
      },
      theme: {
        logo: 'https://cdn.frontify.com/api/screen/thumbnail/MEcPbcFADZJFiJRgPMHrSwDoW4Kb6d4D2xVM9LIW3Af0U45-kUctGHqywlhJKuVIC0LBV9_C6k-Hw7Gjfgqo4Q/960',
        primaryColor: '#3C6A8C'
      }
    })

    this.lock.on('authenticated', this._doAuthentication.bind(this))
    this.login = this.login.bind(this)
  }

  _doAuthentication(authResult){
    this.setToken(authResult.idToken)
    this.lock.getProfile(authResult.idToken, (error, profile) => {
      if (error) {
        console.log('Error loading the Profile', error)
      } else {
        this.setProfile(profile)
        browserHistory.replace('/event-manager')
      }
    })
  }

  login() {
    this.lock.show({allowSignUp: window.location.pathname.split("/")[1] === "signup" ? true : false,
    allowLogin: window.location.pathname.split("/")[1] === "login" ? true : false})
  }

  logout() {
    localStorage.removeItem('id_token')
    localStorage.removeItem('profile')
    localStorage.removeItem('org_name')
  }

  loggedIn() {
    const token = this.getToken()
    return !!token && !isTokenExpired(token)
  }

  setProfile(profile) {
    localStorage.setItem('profile', JSON.stringify(profile))
    this.emit('profile_updated', profile)
  }

  getProfile() {
    const profile = localStorage.getItem('profile')
    return profile ? JSON.parse(localStorage.profile) : {}
  }

  setToken(idToken) {
    localStorage.setItem('id_token', idToken)
  }

  getToken() {
    return localStorage.getItem('id_token')
  }

  checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response
    } else {
      var error = new Error(response.statusText)
      error.response = response
      throw error
    }
  }
}
