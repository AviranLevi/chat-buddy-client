import * as types from '../types'

const initialState = {
  id: '',
  userName: '',
  email: '',
  rooms: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USER:
      return { ...state, id: action.payload._id, ...action.payload }

    case types.GET_ROOMS:
      return { ...state, rooms: action.payload }

    default:
      return state
  }
}

export default reducer
