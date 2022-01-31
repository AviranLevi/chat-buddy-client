import * as types from '../types'
import * as api from '../../api'
import { getRoomsByUser } from './user'

export const roomNotFound = (bool) => ({
  type: types.ROOM_NOT_FOUND,
  payload: bool,
})

export const createRoom = (name, type, users) => (dispatch, getState) => {
  const { id, userName } = getState().user
  api
    .createRoom(name, type, users, id, userName)
    .then((res) => {
      dispatch(getRoomsByUser())
    })
    .catch((err) => console.log(err))
}

export const getRoomByUniqueName = (name) => (dispatch) => {
  api
    .getRoomByUniqueName(name)
    .then((res) => {
      if (res.error) {
        dispatch(roomNotFound(true))
      } else {
        console.log(res)
        dispatch(roomNotFound(false))
        const { _id } = res
        dispatch({ type: types.GET_ROOM, payload: { id: _id, ...res } })
      }
    })
    .catch((err) => console.log(err))
}

export const getRoomMessagesFromSocket = (messages) => ({
  type: types.GET_ROOM_MESSAGES,
  payload: messages,
})

export const inviteUserToRoom = (roomId, userId) => (dispatch) => {}

export const updateRoom = (roomId, newDate) => (dispatch) => {}

export const removeUserFromRoom = (roomId, userId) => (dispatch) => {}

export const deleteRoom = (roomId) => (dispatch) => {
  api
    .deleteRoom(roomId)
    .then((res) => {
      console.log({ res })
    })
    .catch((err) => console.log(err))
}
