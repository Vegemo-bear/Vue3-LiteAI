import request from '@/utils/request'

type LoginInfo = {
  username: string
  code?: string
  password: string
}

type LoginResult = {
  success: boolean
  state: number
  message: string
  content: string
}

export const login = (loginInfo: LoginInfo) => {
  return request<LoginResult>({
    method: 'POST',
    url: '/users/login',
    data: `username=${loginInfo.username}&password=${loginInfo.password}`
  })
}

export const logout = () => {
  return request({
    method: 'POST',
    url: '/users/logout'
  })
}
