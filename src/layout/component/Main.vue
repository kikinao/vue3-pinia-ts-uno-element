<template>
  <div class="my-main p5">
    <Breadcrumb/>
    <el-main>
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

<style scoped>

</style>
