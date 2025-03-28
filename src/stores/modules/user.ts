import {defineStore} from "pinia";
import {tokenStore, userStore} from "@/utils/LocalStore";
import {ref} from 'vue'
import type {Admin} from "@/typings/userInfo";

export const useUserStore = defineStore('user', () => {
  const tokens = ref<Admin.TokenInfo>(tokenStore.getValue() || {})
  const userInfo = ref<Admin.UserInfo>(userStore.getValue() || {})

  // 获取token
  function getTokens(data: Admin.TokenInfo) {
    tokens.value = data
    tokenStore.setValue(data)
  }

  function getUserInfo(data: Admin.UserInfo) {
    userInfo.value = data
    userStore.setValue(data)
  }

  function removeTokens() {
    tokens.value = {}
    tokenStore.removeValue()
  }

  function removeUserInfo() {
    userInfo.value = {}
    userStore.removeValue()
  }

  function removeInfo() {
    removeTokens()
    removeUserInfo()
  }

  return {
    tokens,
    userInfo,
    getTokens,
    getUserInfo,
    removeInfo
  }
})
