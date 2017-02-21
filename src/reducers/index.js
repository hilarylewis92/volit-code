import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import profile from './profile'

const rootReducer = combineReducers({
  routing,
  profile
})

export default rootReducer
