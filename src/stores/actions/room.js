import * as types from '../types'
import * as api from '../../api'

export const createRoom = (roomName) => (dispatch, getState) => {
  const { id } = getState().user
  api
    .createRoom(roomName, id)
    .then((res) => {
      console.log(res)
      //get rooms
    })
    .catch((err) => console.log(err))
}

export const getRoom = (roomId) => (dispatch) => {
  api
    .getRoom(roomId)
    .then((res) => {
      console.log(res)
      //   dispatch({ type: types.GET_ROOM, payload: res })
    })
    .catch((err) => console.log(err))
}

export const getRoomMessages = (roomId) => (dispatch) => {}

export const inviteUserToRoom = (roomId, userId) => (dispatch) => {}

export const updateRoom = (roomId, newDate) => (dispatch) => {}

export const removeUserFromRoom = (roomId, userId) => (dispatch) => {}

export const deleteRoom = (roomId) => (dispatch) => {
  api
    .deleteRoom(roomId)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => console.log(err))
}
