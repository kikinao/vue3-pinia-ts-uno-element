import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useSystemStore = defineStore('system', () => {
  const menuCollapse = ref<boolean>(false)

  function setMenuCollapse(data: boolean) {
    menuCollapse.value = data
  }

  return {
    menuCollapse,
    setMenuCollapse
  }
})
