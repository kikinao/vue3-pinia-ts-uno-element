<template>
  <div class="login flex flex-content-center flex-justify-center">
    <img class="login-bg" src="@/assets/login/bg_device@2x.png">
    <div class="login-main p-14">
      <span class="login-title font-600 inline-block relative text-7 z-1">欢迎登录</span>
      <el-form ref="ruleFormRef" class="my-form flex flex-col justify-between h-full mt11"
               :model="form"
               :rules="formRules">
        <el-form-item prop="name" class="my-form-item">
          <img src="@/assets/login/user.png" class="w6 h6">
          <el-input class="form-input" v-model="form.name" placeholder="请输入用户名"/>
        </el-form-item>
        <el-form-item prop="password" class="my-form-item mt9">
          <img src="@/assets/login/lock.png" class="w6 h6">
          <el-input class="form-input" v-model="form.password" placeholder="请输入密码"
                    show-password/>
        </el-form-item>
        <el-form-item>
          <el-button class="form-btn w-full h-14.5 mt10.5" type="primary"
                     @click="login(ruleFormRef)">登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import {reactive} from 'vue'
import {login as LoginApi} from '@/service/index.ts'
import {type FormRules, type FormInstance} from 'element-plus'
import {tokenStore} from "@/utils/LocalStore";
import router from "@/router";

interface FormType {
  name: string
  password: string
}

const ruleFormRef = ref<FormInstance>()
const form = reactive<FormType>({
  name: '',
  password: ''
})

const formRules: FormRules = {
  name: [
    {required: true, message: '请输入用户名', trigger: 'blur'}
  ],
  password: [
    {required: true, message: '请输入密码', trigger: 'blur'},
    {min: 6, message: '长度至少 6 位', trigger: 'blur'}
  ]
}

const login = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      try {
        const res = await LoginApi(form)
        tokenStore.setValue(res.data)
        ElMessage({
          message: '登录成功!',
          type: 'success'
        })
        await router.push('/')
      } catch (e) {
        console.log(e)
        ElMessage({
          message: e.msg,
          type: 'error'
        })
      }
    } else {
      console.log('error submit!', fields)
    }
  })
}
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
  width: 432px;
  //height: 524px;
  background: #FFFFFF;
  box-shadow: 0px 0px 12px 0px rgba(229, 229, 229, 0.6);
  border-radius: 12px 12px 12px 12px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);

  .login-title::after {
    content: '';
    z-index: -1;
    width: 116px;
    height: 6px;
    background: var(--color-primary);
    position: absolute;
    left: -2px;
    bottom: -3px;
  }
}

.my-form {

  .form-input {
    outline: none;

    &::placeholder {
      color: #A6B5C1;
    }

    // 去除边框
    :deep(.el-input__wrapper) {
      box-shadow: 0 0 0 0px var(--el-input-border-color, var(--el-border-color)) inset;
      cursor: default;

      .el-input__inner {
        cursor: default !important;
      }
    }
  }

  .my-form-item {
    border-bottom: 2px solid #D2DBE2;

    :deep(.el-form-item__content) {
      display: flex;
      flex-flow: row nowrap;
    }
  }

  .form-icon {
    width: 24px;
    height: 24px;
    color: #A8B5BF;
  }

  .form-btn:active {
    background: var(--color-click);
  }
}
</style>
