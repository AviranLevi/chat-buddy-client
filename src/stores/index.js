import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { DEV } from '../config'

// reducers
import MaxReducer from './reducers/max'
import UserReducer from './reducers/user'
import RoomReducer from './reducers/room'
import SignupReducer from './reducers/signup'
import FeaturesReducer from './reducers/features'

const rootReducer = combineReducers({
  max: MaxReducer,
  user: UserReducer,
  room: RoomReducer,
  signup: SignupReducer,
  features: FeaturesReducer,
})

let enhancer

if (DEV) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  enhancer = composeEnhancers(applyMiddleware(thunk))
} else {
  enhancer = applyMiddleware(thunk)
}

const store = createStore(rootReducer, enhancer)

export default store
