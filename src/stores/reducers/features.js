import * as types from '../types'

const initialState = {
  createRoomTogglePopup: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_ROOM_TOGGLE_POPUP:
      return { ...state, createRoomTogglePopup: action.payload }

    default:
      return state
  }
}

export default reducer
