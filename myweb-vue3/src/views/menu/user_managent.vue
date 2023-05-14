<script setup lang="ts">
import { useMenus } from '@/composables/useMenus'

const { allMenus, getAllMenus, handleDelete } = useMenus()
getAllMenus()
</script>

<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <h3>用户信息表</h3>
      </div>
    </template>
    <el-table :data="allMenus" border style="width: 100%">
      <el-table-column type="index" label="序号" align="center" width="60px" />
      <el-table-column prop="identity" label="身份" align="center" width="100px" />
      <el-table-column prop="username" label="账号" align="center" width="140px" />
      <el-table-column prop="password" label="密码" align="center" width="140px" />
      <el-table-column prop="token" label="令牌" align="center" />
      <el-table-column label="操作" align="center" width="100px" v-slot="scope">
        <el-button type="danger" @click="handleDelete(scope.row.id)">删除</el-button>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<style lang="scss" scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: auto;
}
</style>
