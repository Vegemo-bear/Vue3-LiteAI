<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const HandleOCR = () => {
  router.push('/ocr_project')
}
const HandleLPDR = () => {
  router.push('/lpdr_project')
}
</script>

<template>
  <el-row>
    <el-col :md="4" :offset="1">
      <div class="container">
        <img src="@/assets/ocr.jpg" />
        <div class="content">
          <h5 class="proj">OCR</h5>
          <p class="desc">实现生活中图像文本的检测与识别</p>
          <el-button type="primary" @click="HandleOCR">
            <el-icon><IEpPromotion /></el-icon>
            <span>进入</span>
          </el-button>
        </div>
      </div>
    </el-col>
    <el-col :md="4" :offset="1">
      <div class="container">
        <img src="@/assets/lpdr.jpg" />
        <div class="content">
          <h5 class="proj">LPDR</h5>
          <p class="desc">实现交通中车牌文本的定位与识别</p>
          <el-button type="primary" @click="HandleLPDR">
            <el-icon><IEpPromotion /></el-icon>
            <span>进入</span>
          </el-button>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
.container {
  padding-top: 0px;
  width: 280px;
  height: 360px;
  display: flex;
  flex-direction: column;
  outline: 1px dashed #ccc;
  justify-content: center;
  align-items: center;
  border-top: 1px dashed #ccc;
}

img {
  width: 90%;
  height: 90%;
  padding-top: 5px;
}

.content {
  padding-left: 0px;
  padding-top: 10px;
  padding-bottom: 5px;
}

.proj {
  font-size: 20px;
  padding-bottom: 8px;
}
.desc {
  font-size: 15px;
  padding-bottom: 8px;
}
</style>
