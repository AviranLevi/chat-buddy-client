import * as types from '../types'

const initialState = {
  user: {},
  messages: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_MAX_CHAT_MESSAGES:
      return { ...state, messages: action.payload }

    default:
      return state
  }
}

export default reducer
