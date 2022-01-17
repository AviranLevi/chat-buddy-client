import * as types from '../types'

export const createRoomTogglePopup = (bool) => ({
  type: types.CREATE_ROOM_TOGGLE_POPUP,
  payload: bool,
})

export const toggleProfile = (bool) => ({
  type: types.SHOW_PROFILE,
  payload: bool,
})

export const toggleRoomList = (bool) => ({
  type: types.SHOW_ROOM_LIST,
  payload: bool,
})
