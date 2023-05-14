<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import { login } from '@/api/users'
import { useTokenStore } from '@/stores/mytoken'
import { useRouter } from 'vue-router'

const store = useTokenStore()
const router = useRouter()
const form = reactive({
  username: '',
  password: ''
})

const onSubmit = async () => {
  isLoading.value = true
  await formRef.value?.validate().catch((err: any) => {
    ElMessage.error('表单校验失败...')
    isLoading.value = false
    throw err
  })
  const data = await login(form).then((res) => {
    if (!res.data.success) {
      ElMessage.error('该用户名已经被注册！')
      isLoading.value = false
      throw new Error('该用户名已经被注册！')
    }
    return res.data
  })
  store.saveToken(data.content)

  isLoading.value = false

  ElMessage.success('登录成功!')

  if (store.token.identity == '超级管理员' && store.token.username == 'vegemo-bear') {
    router.push('/')
  } else {
    router.push('/user_look_index')
  }
}

const rules = reactive<FormRules>({
  username: [
    { required: true, message: '用户名不能为空', trigger: 'blur' },
    { min: 6, max: 12, message: '用户名长度需要6~12位', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '密码不能为空', trigger: 'blur' },
    { min: 6, max: 18, message: '密码长度需要6~18位', trigger: 'blur' }
  ]
})

const isLoading = ref(false)
const formRef = ref<FormInstance>()
</script>

<template>
  <div class="loginbody">
    <div class="logindata">
      <div class="logintext">
        <h2>Welcome</h2>
      </div>
      <div class="formdata">
        <el-form :model="form" :rules="rules" ref="formRef">
          <el-form-item prop="username">
            <el-input v-model="form.username" clearable placeholder="请输入账号"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="form.password"
              clearable
              placeholder="请输入密码"
              show-password
            ></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="butt">
        <el-button type="primary" @click="onSubmit" :loading="isLoading">登录</el-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loginbody {
  width: 100%;
  height: 100%;
  min-width: 1000px;
  background-image: url('../../assets/login-test02.jpg');
  background-size: 100% 100%;
  background-position: center center;
  overflow: auto;
  background-repeat: no-repeat;
  position: fixed;
  line-height: 100%;
  padding-top: 150px;
}

.logintext {
  margin-bottom: 20px;
  line-height: 50px;
  text-align: center;
  font-size: 30px;
  font-weight: bolder;
  color: white;
  text-shadow: 2px 2px 4px #000000;
}

.logindata {
  width: 400px;
  height: 300px;
  transform: translate(-50%);
  margin-left: 50%;
}

.butt {
  margin-top: 10px;
  text-align: center;
}

.shou {
  cursor: pointer;
  color: #606266;
}
</style>
