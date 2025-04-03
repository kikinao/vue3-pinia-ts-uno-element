<template>
  <el-container class="my_container w-screen h-screen overflow-hidden">
    <AsideMenu/>
    <div class="my-container-main flex flex-col w-full">
      <Header/>
      <Main/>
    </div>
  </el-container>
</template>

<script setup lang="ts" name="my-layout">
import Main from "@/layout/component/Main.vue";
import Header from "@/layout/component/Header.vue";
import AsideMenu from "@/layout/component/AsideMenu.vue";
</script>


<style lang="scss" scoped>
.my_container {
  background: var(--fill-disable);
}
</style>
