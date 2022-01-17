import { io } from 'socket.io-client'

let socket

export const initiateSocketConnection = () => {
  socket = io('ws://localhost:8900')
  console.log(`Connecting socket...`)
}

export const disconnectSocket = () => {
  console.log('Disconnecting socket...')
  if (socket) socket.disconnect()
}

export const subscribeToMessages = (user, room) => {
  if (socket) {
    socket.emit('join', (user, room))
  }
}
export const sendMessage = (data, user) => {
  if (socket) {
    socket.emit('roomMessage', data)
  }
}

export const sendQuestionToChatBot = (data) => {
  if (socket) {
    socket.emit('sendQuestion', data)
  }
}

export const recievedAnswerFromChatBot = (cb) => {
  if (socket) {
    socket.on('recievedChatBotMessage', (data) => cb(data))
  }
}

export const recivedMessages = (cb) => {
  if (socket) {
    socket.on('recivedMessages', (data) => cb(data))
  }
}
