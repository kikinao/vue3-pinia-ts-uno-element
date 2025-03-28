<template>
  <div class="login flex flex-content-center flex-justify-center">
    <img class="login-bg" src="@/assets/login/bg_device@2x.png">
    <div class="login-main">

    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-image: url("@/assets/login/bg@2x.png");
  background-size: cover;
  position: relative;

  .login-bg {
    width: 100%;
    height: 100%;
  }
}

.login-main {
  width: 508px;
  height: 524px;
  background: #FFFFFF;
  box-shadow: 0px 0px 12px 0px rgba(229, 229, 229, 0.3);
  border-radius: 12px 12px 12px 12px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
}
</style>
