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

export const subscribeToMessages = (cb) => {
  if (socket) {
    socket.on('received', (data) => {
      return cb(null, data)
    })
  }
}
export const sendMessage = (data, user) => {
  if (socket) {
    socket.emit('chatMessage', data)
  }
}
