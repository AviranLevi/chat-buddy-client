import * as types from '../types'

const initialState = {
  email: '',
  userName: '',
  errors: {
    email: false,
    signup: false,
    userName: false,
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

    case types.SIGN_UP_ERR:
      return { ...state, errors: { ...state.errors, signup: action.payload } }

    case types.GET_USER_BY_INVITE_URL:
      return { ...state, userName: action.payload.userName, email: action.payload.email }

    default:
      return state
  }
}

export default reducer
