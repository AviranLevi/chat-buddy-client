import * as types from '../types'

const initialState = {
  createRoomTogglePopup: false,
  toggleProfile: false,
  toggleRoomList: true,
  roomListIsLoading: true,
  toggleRoomInfo: false,
  toogleRoomInfoAnimation: false,
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

    case types.TOGGLE_ROOM_INFO:
      return { ...state, toggleRoomInfo: action.payload }

    case types.TOGGLE_ROOM_INFO_ANIMATION:
      return { ...state, toogleRoomInfoAnimation: action.payload }

    default:
      return state
  }
}

export default reducer
