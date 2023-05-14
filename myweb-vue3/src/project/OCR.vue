<script setup lang="ts">
import type { UploadFile, UploadInstance, UploadProps } from 'element-plus'
import { b64toBlob } from '@/components/layout/Blob_convter'

const imageUrl = ref('')
const img_infer = ref('')
const rec_result = ref('')

const justSelect = (uploadFile: UploadFile) => {
  imageUrl.value = URL.createObjectURL(uploadFile.raw!)
}

const handleSuccess = (response: any) => {
  if (response.success) {
    const blob = b64toBlob(response.content.img_data)
    img_infer.value = window.URL.createObjectURL(blob)
    rec_result.value = response.content.rec_result
  } else {
    ElMessage.error(response.message)
  }
}
const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('Avatar picture size can not exceed 2MB!')
    return false
  }
  return true
}
const uploadRef = ref<UploadInstance>()

const submitUpload = () => {
  uploadRef.value!.submit()
}
</script>

<template>
  <el-card>
    <template #header>
      <h3>《通用OCR》算法部署平台</h3>
    </template>
    <el-row>
      <el-col :md="24">
        <div style="height: 100px"></div>
      </el-col>
      <el-col :md="6" :offset="1">
        <el-upload
          ref="uploadRef"
          class="avatar-uploader"
          action="/users/upload/"
          :show-file-list="false"
          :on-change="justSelect"
          :before-upload="beforeAvatarUpload"
          drag
          :data="{ data: 'ppocrv3' }"
          :auto-upload="false"
          :on-success="handleSuccess"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <el-icon v-else class="el-icon--upload" size="80"><IEpupload-filled /></el-icon>
        </el-upload>
        <el-button class="ml-3" type="success" @click="submitUpload"> 上传 </el-button>
      </el-col>
      <el-col :md="6" :offset="1">
        <div class="result-demo">
          <img v-if="img_infer" :src="img_infer" />
          <div v-else></div>
        </div>
      </el-col>
      <el-col :md="6" :offset="2">
        <div class="rec_res">
          <div>
            <p v-for="item of rec_result" :key="item">{{ item }}</p>
          </div>
        </div>
      </el-col>
      <el-col :md="24">
        <div style="height: 300px"></div>
      </el-col>
    </el-row>
  </el-card>
</template>

<style scoped>
.avatar-uploader .avatar {
  width: 350px;
  height: 350px;
  object-fit: contain;
}
.avatar-uploader img {
  justify-content: center;
  align-items: center;
}
</style>

<style lang="scss" scoped>
.avatar-uploader .el-upload {
  border: 3px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.el-icon--upload {
  font-size: 28px;
  color: #8c939d;
  height: 320px;
  text-align: center;
}

.result-demo {
  width: 410px;
  height: 434px;
  display: flex;
  border: 1px dashed var(--el-border-color);
  justify-content: center;
  align-items: center;
}
.result-demo img {
  width: 95%;
  height: 100%;
  display: block;
  object-fit: contain;
}
.rec_res {
  width: 410px;
  height: 434px;
  display: flex;
  border: 1px dashed var(--el-border-color);
  overflow-y: auto;
}
</style>
