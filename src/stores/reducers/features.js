import * as types from "../types"

const initialState = {
  createRoomTogglePopup: false,
  toggleProfile: false,
  toggleRoomList: true,
  roomListIsLoading: true,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_ROOM_TOGGLE_POPUP:
      return { ...state, createRoomTogglePopup: action.payload }

    case types.SHOW_ROOM_LIST:
      return { ...state, toggleRoomList: action.payload }

    case types.SHOW_PROFILE:
      return { ...state, toggleProfile: action.payload }

    case types.ROOM_LIST_IS_LOADING:
      return { ...state, roomListIsLoading: action.payload }

    default:
      return state
  }
}

export default reducer