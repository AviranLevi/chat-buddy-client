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

export const roomListIsLoading = (bool) => ({
  type: types.ROOM_LIST_IS_LOADING,
  payload: bool,
})

export const toggleRoomInfoAnimation = (bool) => ({
  type: types.TOGGLE_ROOM_INFO_ANIMATION,
  payload: bool,
})

export const toggleRoomInfo = (bool) => (dispatch) => {
  if (bool) {
    dispatch(toggleRoomInfoAnimation(bool))
    dispatch({
      type: types.TOGGLE_ROOM_INFO,
      payload: bool,
    })
  } else {
    dispatch(toggleRoomInfoAnimation(bool))
    setTimeout(() => {
      dispatch({
        type: types.TOGGLE_ROOM_INFO,
        payload: bool,
      })
    }, 1000)
  }
}

export const roomSearchOnChange = (value) => ({
  type: types.ROOM_SEARCH_ON_CHANGE,
  payload: value,
})

export const searchRoom = (value) => (dispatch, getState) => {
  const { rooms } = getState().user
  const searchValue = value.toLowerCase()
  const results = rooms.filter(({ name }) => name.toLowerCase().includes(searchValue))

  dispatch({
    type: types.ROOM_SEARCH_RESULTS,
    payload: results,
  })
}

export const mobileViewStatus = (bool) => ({
  type: types.IS_MOBILE,
  payload: bool,
})

export const toggleLogoAnimation = (bool) => ({
  type: types.LOGO_ANIMATION,
  payload: bool,
})
