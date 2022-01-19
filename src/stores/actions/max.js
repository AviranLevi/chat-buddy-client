import * as socket from '../../socket'
import * as types from '../types'

export const getMaxChatMessages = (newMessage) => (dispatch, getState) => {
  const { messages } = getState().max
  const updatedMessage = [...messages, newMessage]

  dispatch({
    type: types.GET_MAX_CHAT_MESSAGES,
    payload: updatedMessage,
  })
}
