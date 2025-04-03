<template>
  <el-aside width="220px" class="my-asideMenu h-full relative">
    <div class="asideMenu-logo pl4 py3.5 flex items-center">
      <img class="asideMenu-logo-img w8 h8 mr2.5" src="@/assets/logo.svg">
      <span class="asideMenu-logo-text font500 text-xl">Vue3管理后台</span>
    </div>
    <div class="asideMenu-footer p3 flex justify-end absolute bottom-0 left-0 w-full box-border">
      <el-button :icon="isCollapse ? Expand : Fold" type="info" text bg class="w8 h8"
                 @click="globalStore.setMenuCollapse(!isCollapse)"/>
    </div>
  </el-aside>
</template>

<script setup lang="ts" name="my_aside">
import {useGlobalStore} from '@/stores/modules/global.ts'
import {Expand, Fold} from '@element-plus/icons-vue'

const globalStore = useGlobalStore()
const isCollapse = computed(() => globalStore.menuCollapse)
</script>

<style lang="scss" scoped>
.my-asideMenu {
  background: #FFFFFF;
}
</style>
