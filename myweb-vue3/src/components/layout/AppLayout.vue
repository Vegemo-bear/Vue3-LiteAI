<script setup lang="ts">
import AppAside from './AppAside.vue'
import APPHeader from './APPHeader.vue'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <AppAside />
      <el-container class="header-and-main">
        <APPHeader />
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
  background-color: white;
}
</style>
