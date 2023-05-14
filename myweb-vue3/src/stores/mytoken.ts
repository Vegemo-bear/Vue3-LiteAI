import { ElMessage } from 'element-plus'
import { defineStore } from 'pinia'

interface Token {
  access_token: string
  token_type: string
  img_data: string
  username: string
  identity: string
}
export const useTokenStore = defineStore('mytoken', () => {
  const tokenJson = ref('')
  const token = computed<Token>(() => {
    if (JSON.stringify(tokenJson.value) == '{}') {
      tokenJson.value = ''
    }
    try {
      return JSON.parse(
        window.localStorage.getItem('TokenInfo') || JSON.stringify(tokenJson.value) || '{}'
      )
    } catch (err) {
      ElMessage.error('json字符串格式不对, 转化对象时失败...')
      window.localStorage.setItem('TokenInfo', '')
      throw err
    }
  })
  function saveToken(data: string) {
    tokenJson.value = data
    window.localStorage.setItem('TokenInfo', JSON.stringify(data))
  }
  return { token, saveToken }
})
