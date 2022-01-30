import axios from 'axios'
import { serverURL } from '../config'

const api = axios.create({
  baseURL: `${serverURL}/user`,
})

export const createUser = async (userName, email) => {
  try {
    const { data } = await api.post('/', { userName, email })
    return data
  } catch (error) {
    return error
  }
}

export const getUser = async (userId) => {
  try {
    const { data } = await api.get(`/${userId}`)
    return data
  } catch (error) {
    return error
  }
}

export const updateUser = async (userId, newDetails) => {
  try {
    const { data } = await api.put(`/${userId}`, newDetails)
    return data
  } catch (error) {
    return error
  }
}
