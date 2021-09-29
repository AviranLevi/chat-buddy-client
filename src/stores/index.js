import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { DEV } from '../config'

// reducers
import ExampleReducer from './reducers/exmaple'

const rootReducer = combineReducers({
  example: ExampleReducer,
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
