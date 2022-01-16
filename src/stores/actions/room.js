import * as types from '../types'
import * as api from '../../api'
import { getRoomsByUser } from './user'

export const createRoom = (name, type, users) => (dispatch, getState) => {
  const { id } = getState().user
  api
    .createRoom(name, type, users, id)
    .then((res) => {
      console.log(res)
      //get rooms
      dispatch(getRoomsByUser())
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

export const getRoomByUniqueName = (name) => (dispatch) => {
  api
    .getRoomByUniqueName(name)
    .then((res) => {
      dispatch({ type: types.GET_ROOM, payload: res })
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

export const roomNotFound = (bool) => ({
  type: types.ROOM_NOT_FOUND,
  payload: bool,
})
