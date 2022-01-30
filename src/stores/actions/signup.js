import * as types from '../types'
import * as api from '../../api'
import * as utils from '../../utils'

export const userNameOnChange = (value) => ({
  type: types.USER_NAME_ON_CHANGE,
  payload: value,
})

export const emailOnChange = (value) => ({
  type: types.EMAIL_ON_CHANGE,
  payload: value,
})

export const emailError = (bool) => ({
  type: types.EMAIL_ERR,
  payload: bool,
})

export const userNameError = (bool) => ({
  type: types.USER_NAME_ERR,
  payload: bool,
})

export const signUpError = (bool) => ({
  type: types.SIGN_UP_ERR,
  payload: bool,
})

export const createUser = (userName, email) => (dispatch) => {
  const emailIsValid = utils.validateEmail(email)
  const userNameIsValid = utils.validateUserName(userName)

  if (!emailIsValid) {
    dispatch(emailError(true))
  }

  if (!userNameIsValid) {
    dispatch(userNameError(true))
  }

  if (emailIsValid && userNameIsValid) {
    dispatch(userNameError(false))
    dispatch(emailError(false))
    dispatch(signUpError(false))

    api
      .createUser(userName, email)
      .then((res) => {
        const { _id: userId } = res
        if (userId) {
          localStorage.setItem('userId', userId)
          dispatch(signUpError(false))
          window.location.reload()
        } else {
          dispatch(signUpError(true))
        }
      })
      .catch((err) => err && dispatch(signUpError(true)))
  }
}

export const getUserFromInvite = (id) => (dispatch) => {
  api
    .getUser(id)
    .then((res) => {
      dispatch({ type: types.GET_USER_BY_INVITE_URL, payload: res })
    })
    .catch((err) => console.log(err))
}
