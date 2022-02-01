import * as types from '../types'

const initialState = {
  id: '',
  name: '',
  type: '',
  admin: '',
  users: [],
  messages: [],
  uniqueName: '',
  errors: {
    roomNotFound: false,
  },
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ROOM:
      return { ...state, ...action.payload }

    case types.GET_ROOM_MESSAGES:
      return { ...state, messages: action.payload }

    case types.ROOM_NOT_FOUND:
      return { ...state, errors: { ...state.errors, roomNotFound: action.payload } }

    default:
      return state
  }
}

export default reducer
