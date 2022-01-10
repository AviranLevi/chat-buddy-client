import * as types from '../types'
import * as api from '../../api'

export const createUser = (userData) => (dispatch) => {}

export const getUser = () => (dispatch) => {
  const userId = localStorage.getItem('userId')
  api
    .getUser(userId)
    .then((res) => {
      const { userName } = res
      dispatch({ type: types.GET_USER, payload: { userName, id: userId } })
    })
    .catch((err) => console.log(err))
}
