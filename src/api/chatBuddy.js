import axios from 'axios'
import { serverURL } from '../config'

const api = axios.create({
  baseURL: serverURL,
})

export const createUser = async (userName) => {
  try {
    const { data } = await api.post('/user', { userName })
    return data
  } catch (error) {
    return error
  }
}

export const getUser = async (userId) => {
  try {
    const { data } = await api.get(`/user/${userId}`)
    return data
  } catch (error) {
    return error
  }
}

export const getMessages = async () => {
  try {
    const { data } = await api.get('/message')
    return data
  } catch (error) {
    return error
  }
}
