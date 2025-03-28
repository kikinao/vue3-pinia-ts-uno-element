<template>
  <el-container class="my_container">
    <AsideMenu/>
    <Header/>
    <el-main>
      <div>
        <RouterView/>
      </div>
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import {RouterView} from 'vue-router'
import Header from "@/layout/component/Header.vue";
import AsideMenu from "@/layout/component/AsideMenu.vue";
</script>


<style lang="scss" scoped>
</style>
