import axios from 'axios'
import { serverURL } from '../config'

const api = axios.create({
  baseURL: `${serverURL}/room`,
})

export const createRoom = async (name, user) => {
  try {
    const { data } = await api.post('/', { name, user })
    return data
  } catch (error) {
    return error
  }
}

export const getRooms = async (userId) => {
  try {
    const { data } = await api.get(`/${userId}`)
    return data
  } catch (error) {
    return error
  }
}

export const getRoom = async (roomId) => {
  try {
    const { data } = await api.get(`/${roomId}`)
    return data
  } catch (error) {
    return error
  }
}

export const updateRoom = async (roomId, newData) => {
  try {
    const { data } = await api.put(`/${roomId}`, newData)
    return data
  } catch (error) {
    return error
  }
}

export const deleteRoom = async (roomId) => {
  try {
    const { data } = await api.delete(`/${roomId}`)
    return data
  } catch (error) {
    return error
  }
}
