import * as types from '../types'

const initialState = {
  userName: '',
  email: '',
  errors: {
    userName: false,
    email: false,
  },
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.USER_NAME_ON_CHANGE:
      return { ...state, userName: action.payload }

    case types.EMAIL_ON_CHANGE:
      return { ...state, email: action.payload }

    case types.USER_NAME_ERR:
      return { ...state, errors: { ...state.errors, userName: action.payload } }

    case types.EMAIL_ERR:
      return { ...state, errors: { ...state.errors, email: action.payload } }

    default:
      return state
  }
}

export default reducer
