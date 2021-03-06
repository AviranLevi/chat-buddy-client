import * as types from '../types'

const initialState = {
  isMobile: false,
  toggleProfile: false,
  toggleRoomList: true,
  logoAnimation: true,
  roomSearchValue: '',
  roomSearchResults: [],
  toggleRoomInfo: false,
  roomListIsLoading: true,
  createRoomTogglePopup: false,
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

    case types.ROOM_SEARCH_ON_CHANGE:
      return { ...state, roomSearchValue: action.payload }

    case types.ROOM_SEARCH_RESULTS:
      return { ...state, roomSearchResults: action.payload }

    case types.IS_MOBILE:
      return { ...state, isMobile: action.payload }

    case types.LOGO_ANIMATION:
      return { ...state, logoAnimation: action.payload }

    default:
      return state
  }
}

export default reducer
