<script setup lang="ts">
import appHead from '@/views/user_look/user_layout/appHead.vue'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-container class="header-and-main">
        <appHead />
        <el-main>
          <el-scrollbar>
            <RouterView />
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.header-and-main {
  flex-direction: column;
  height: 100vh;
}
.el-main {
  background-color: #f4f4f5;
}
</style>
