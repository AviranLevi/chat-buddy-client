import * as types from '../types'
import * as api from '../../api'

export const getUser = () => (dispatch) => {
  const userId = localStorage.getItem('userId')
  api
    .getUser(userId)
    .then((res) => {
      dispatch({ type: types.GET_USER, payload: res })
    })
    .catch((err) => console.log(err))
}

export const getRooms = () => (dispatch, getState) => {
  const { id } = getState().user
  api
    .getRooms(id)
    .then((res) => {
      dispatch({ type: types.GET_ROOMS, payload: res })
    })
    .catch((err) => console.log(err))
}
