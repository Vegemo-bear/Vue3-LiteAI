import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// 官方 pinia 的写法，这里拿来借鉴
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
