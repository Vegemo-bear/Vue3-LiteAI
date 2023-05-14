import axios, { type AxiosRequestHeaders } from 'axios'
import { useTokenStore } from '@/stores/mytoken'

const request = axios.create({})

request.interceptors.request.use((config) => {
  if (!config.headers) {
    config.headers = {} as AxiosRequestHeaders
  }
  const store = useTokenStore()
  config.headers.Authorization = store.token.access_token
  return config
})

export default request
