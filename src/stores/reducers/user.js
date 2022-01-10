import * as types from '../types'

const initialState = {
  id: '',
  userName: '',
  rooms: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USER:
      return { ...state, ...action.payload }

    case types.GET_ROOMS:
      return { ...state, rooms: action.payload }

    default:
      return state
  }
}

export default reducer
