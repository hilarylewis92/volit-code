import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import profile from './profile'
import events from './events'
import roles from './roles'

const rootReducer = combineReducers({
  routing,
  profile,
  events,
  roles,
})

export default rootReducer
