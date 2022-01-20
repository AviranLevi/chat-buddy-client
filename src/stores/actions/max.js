import * as types from '../types'

export const pushToMaxChatMessages = (newMessage) => (dispatch, getState) => {
  const { messages } = getState().max
  const updatedMessage = [...messages, newMessage]

  dispatch({
    type: types.GET_MAX_CHAT_MESSAGES,
    payload: updatedMessage,
  })
}
