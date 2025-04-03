<template>
  <div class="my-main-box p5">
    <Breadcrumb/>
    <el-main class="my-main mt5">
      <RouterView v-slot="{Component, route}">
        <!-- 过渡动画 appear首次渲染过渡 -->
        <transition appear mode="out-in" name="fade">
          <keep-alive>
            <component :is="Component" :key="route.fullPath"/>
          </keep-alive>
        </transition>
      </RouterView>
    </el-main>
  </div>
</template>

<script setup lang="ts" name="my-main">
import Breadcrumb from "@/layout/component/Breadcrumb.vue";

</script>

<style lang="scss" scoped>
.my-main {
  background: #FFFFFF;
}
</style>
