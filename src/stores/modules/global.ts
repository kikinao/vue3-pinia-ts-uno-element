import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useGlobalStore = defineStore('global', () => {
  const menuCollapse = ref<boolean>(false)

  function setMenuCollapse(data: boolean) {
    menuCollapse.value = data
  }

  return {
    menuCollapse,
    setMenuCollapse
  }
})
