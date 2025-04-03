<template>
  <div class="my-header w-full h15">
    <el-header class="my-header flex justify-end">
      <div class="header-use-icons flex items-center gap6.5 mr6.5">
        <template v-for="(item,index) in iconList" :key="index">
          <el-tooltip
            class="box-item"
            :effect="item.effect"
            :content="item.content"
            :placement="item.placement"
          >
            <div
              class="svg-box w8 h8 bg-#F2F3F5 rounded-50% text-#666666 flex items-center justify-center">
              <SVGIcon :icon="item.icon" :size="item.iconSize" @click="item.fn"/>
            </div>
          </el-tooltip>
        </template>
      </div>
      <div class="user-avatar flex items-center">
        <el-avatar :size="32"
                   src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"/>
        <span class="avatar-name ml1.5 text-3.5">超级管理员</span>
      </div>
    </el-header>
  </div>
</template>

<script setup lang="ts" name="my_header">
import SVGIcon from '@/components/SVGIcon/index.vue'

const iconList = Object.freeze([
  {
    effect: 'dark',
    content: '返回主页',
    placement: 'top',
    icon: 'index',
    iconSize: '18px',
    fn: () => {
      console.log('返回主页')
    }
  },
  {
    effect: 'dark',
    content: '退出登录',
    placement: 'top',
    icon: 'logout',
    iconSize: '18px',
    fn: () => {
      console.log('退出登录')
    }
  }
])
</script>

<style lang="scss" scoped>
.my-header {
  background: #FFFFFF;
  border-bottom: 1px solid var(--border-secondary);
}
</style>
