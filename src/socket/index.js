import { io } from 'socket.io-client'

let socket

export const initiateSocketConnection = () => {
  socket = io('ws://localhost:8900')
}

export const disconnectSocket = () => {
  if (socket) socket.disconnect()
}

export const joinToChatBot = (user) => {
  if (socket) {
    socket.emit('joinChatBot', user)
  }
}

export const firstChatBotMessage = (cb) => {
  if (socket) {
    socket.on('joinChatBot', (data) => cb(data))
  }
}

export const sendMessage = (data) => {
  if (socket) {
    socket.emit('roomMessage', data)
  }
}

export const userIsTyping = (data) => {
  if (socket) {
    socket.emit('typing', data)
  }
}

export const sendMessageToChatBot = (data) => {
  if (socket) {
    socket.emit('sendMessageToChatBot', data)
  }
}

export const recieveAnswerFromChatBot = (cb) => {
  if (socket) {
    socket.on('recievedChatBotMessage', (data) => cb(data))
  }
}

export const recivedMessages = (cb) => {
  if (socket) {
    socket.on('recivedMessages', (data) => cb(data))
  }
}

export const recivedTyping = (cb) => {
  if (socket) {
    socket.on('recivedTyping', (data) => cb(data))
  }
}

export const userStopTyping = (data) => {
  if (socket) {
    socket.emit('stopTyping', data)
  }
}

export const recivedStopTyping = (cb) => {
  if (socket) {
    socket.on('recivedStopStyping', (data) => cb(data))
  }
}
