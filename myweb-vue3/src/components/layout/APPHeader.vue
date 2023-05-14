<script setup lang="ts">
import { isCollapse } from './isCollapse'
import { useTokenStore } from '@/stores/mytoken'
import { b64toBlob } from './Blob_convter'
import { logout } from '@/api/users'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useTokenStore()
const blob = b64toBlob(store.token.img_data)
const img_url = window.URL.createObjectURL(blob)

const handleLogout = async () => {
  await ElMessageBox.confirm('确认要退出吗？', '退出询问', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    type: 'warning'
  }).catch(() => {
    ElMessage.info('取消退出操作')
    return new Promise(() => {})
  })
  await logout().catch(() => {})
  ElMessage.success('用户成功退出!')
  useTokenStore().saveToken('')
  router.push({ name: 'login' })
}
</script>

<template>
  <el-header>
    <el-icon @click="isCollapse = !isCollapse">
      <IEpFold v-show="isCollapse" />
      <IEpExpand v-show="!isCollapse" />
    </el-icon>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }"></el-breadcrumb-item>
    </el-breadcrumb>
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar :size="32" :src="img_url" />
        <el-icon class="el-icon--right">
          <IEparrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>{{ store.token.username }}</el-dropdown-item>
          <el-dropdown-item divided @click="handleLogout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </el-header>
</template>

<style lang="scss" scoped>
.el-header {
  display: flex;
  align-items: center;
  background-color: #f4f4f5;
  .el-icon {
    margin-right: 17px;
  }
}
.el-dropdown {
  margin-left: auto;
  .el-dropdown-link {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
