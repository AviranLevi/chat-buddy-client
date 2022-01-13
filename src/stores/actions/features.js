import * as types from '../types'

export const createRoomTogglePopup = (bool) => ({
  type: types.CREATE_ROOM_TOGGLE_POPUP,
  payload: bool,
})
