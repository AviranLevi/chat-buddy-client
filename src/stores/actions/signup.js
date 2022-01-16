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

export const createUser = (userName, email) => (dispatch) => {
  const emailIsValid = utils.validateEmail(email)
  const userNameIsValid = utils.validateUserName(userName)

  if (!emailIsValid) {
    emailError(true)
  }

  if (!userNameIsValid) {
    userNameError(true)
  }

  if (emailIsValid && userNameIsValid) {
    userNameError(false)
    emailError(false)

    api
      .createUser({ userName, email })
      .then((res) => {
        window.reload()
      })
      .catch((err) => console.log(err))
  }
}
