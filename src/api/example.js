import axios from 'axios'

const api = axios.create({
  baseURL: '',
})

export const getExmaple = async () => {
  try {
    const { data } = await api.get('/')
    return data
  } catch (error) {
    return error
  }
}
