import * as types from '../types'
import * as api from '../../api'
import { roomListIsLoading } from './features'

export const getUser = () => (dispatch) => {
  const userId = localStorage.getItem('userId')
  api
    .getUser(userId)
    .then((res) => {
      dispatch({ type: types.GET_USER, payload: res })
    })
    .catch((err) => console.log(err))
}

export const getRoomsByUser = () => (dispatch, getState) => {
  const { id } = getState().user
  dispatch(roomListIsLoading(true))
  api
    .getRooms(id)
    .then((res) => {
      if (res) {
        dispatch({ type: types.GET_ROOMS, payload: res })
        dispatch(roomListIsLoading(false))
      }
    })
    .catch((err) => console.log(err))
}

export const updateUser = (id, userName, email) => (dispatch) => {
  api
    .updateUser(id, { userName, email })
    .then((res) => {
      localStorage.setItem('userId', id)
      window.location.reload()
    })
    .catch((err) => console.log(err))
}
