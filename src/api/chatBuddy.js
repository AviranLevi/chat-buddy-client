import axios from 'axios'
import { serverURL } from '../config'

const api = axios.create({
  baseURL: serverURL,
})

export const getMessages = async () => {
  try {
    const { data } = await api.get('/message')
    return data
  } catch (error) {
    return error
  }
}
