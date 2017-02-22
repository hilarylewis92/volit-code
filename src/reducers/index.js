import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import profile from './profile'
import events from './events'


const rootReducer = combineReducers({
  routing,
  profile,
  events,
})

export default rootReducer
