import * as types from '../types'

const initialState = {
  id: '',
  users: [],
  name: '',
  uniqueName: '',
  admin: '',
  messages: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ROOM:
      return { ...state, ...action.payload }

    default:
      return state
  }
}

export default reducer
