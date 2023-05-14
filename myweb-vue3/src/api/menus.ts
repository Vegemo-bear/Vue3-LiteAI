import request from '@/utils/request'

type Common<T> = {
  code: string
  data: T
  mesg: string
  time: string
}
export type MenuItem = {
  identity: string
  username: string
  password: string
  access_token: string
}

export const getAll = () => {
  return request<Common<MenuItem[]>>({
    method: 'GET',
    url: '/users/getAll/'
  })
}

export const deleteMenu = (id: string) => {
  return request<Common<boolean>>({
    method: 'DELETE',
    url: `/users/delete/${id}`
  })
}
