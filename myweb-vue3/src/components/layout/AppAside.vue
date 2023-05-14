<script setup lang="ts">
import { isCollapse } from './isCollapse'
</script>

<template>
  <el-aside>
    <el-scrollbar>
      <el-menu router :collapse="isCollapse" background-color="#545c64">
        <a href="/" class="logo">
          <img src="@/assets/logo.svg" />
          <h1>Element-plus</h1>
        </a>
        <el-menu-item index="/">
          <el-icon> <IEpMonitor /></el-icon><span> 工作台 </span>
        </el-menu-item>
        <el-menu-item index="/user_menu">
          <el-icon><IEpLock /></el-icon> <span> 用户管理 </span>
        </el-menu-item>
        <el-sub-menu index="1">
          <template #title>
            <el-icon style="color: white"> <IEpPromotion /> </el-icon>
            <span style="color: white"> 项目管理 </span>
          </template>
          <el-menu-item index="/ocr">
            <el-icon><IEpPear /></el-icon> <span> 通用OCR </span>
          </el-menu-item>
          <el-menu-item index="/lpdr">
            <el-icon><IEpGrape /></el-icon> <span> 车牌定位与识别 </span>
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<style lang="scss" scoped>
.el-aside {
  background-color: #545c64;
  height: 100vh;
  width: auto;
}
.el-menu {
  border-right: none;
  width: 200px;
  &.el-menu--collapse {
    width: 60px;
    & h1 {
      display: none;
    }
  }
  .el-menu-item {
    color: white;
  }
}
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  text-decoration: none;
  color: white;
  background-color: #545c64;
  img {
    width: 32px;
    height: 32px;
  }
}
</style>
