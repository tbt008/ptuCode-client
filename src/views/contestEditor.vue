<template>
  <div class="manage-editor">
    <el-form ref="formRef" label-width="100px">
      <el-form-item label="比赛名称" prop="title">
        <el-input placeholder="请输入比赛名称" v-model="title"></el-input>
      </el-form-item>

      <el-form-item label="使用赛制">
        <el-radio-group v-model="status">
          <el-radio value="0" size="large">ACM赛制</el-radio>
          <el-radio value="1" size="large">OI赛制</el-radio>
          <el-radio value="2" size="large">IOI赛制</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="是否要密码">
        <el-radio-group v-model="radio1">
          <el-radio value="1" size="large">是</el-radio>
          <el-radio value="2" size="large">否</el-radio>
        </el-radio-group></el-form-item
      >
      <el-form-item label="是否要邀请"
        ><el-radio-group v-model="radio1">
          <el-radio value="1" size="large">是</el-radio>
          <el-radio value="2" size="large">否</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="比赛时间">
        <el-date-picker v-model="contestStart" type="datetime" placeholder="比赛开始时间" />至
        <el-date-picker v-model="ContestEnd" type="datetime" placeholder="比赛结束时间" />
      </el-form-item>

      <el-form-item label="比赛说明" prop="content">
        <mavon-editor style="height: 500px" ref="mavonEditorRef" v-model="content" :ishljs="true" />
      </el-form-item>

      <el-form-item>
        <el-button @click="primary" type="primary">发布</el-button>
        <el-button @click="cancel" type="cancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import request from '@/util/request'
import { useRouter } from 'vue-router'
import { shallowRef, onMounted } from 'vue'
const router = useRouter()
const type = ref(0)
const timeLimit = ref(1)
const memoryLimit = ref(1024)
const status = ref()
const score = ref()
const exampleList = ref([])
const tip = ref()
const editorType = ref('1')
const title = ref('')
const input = ref('')
const output = ref('')
const explain = ref('')
const mavonEditorRef = ref()

const delExample = (index: number) => {
  exampleList.value.splice(index, 1)
}
const addExample = () => {
  const obj = {
    input: input.value,
    output: output.value,
    explain: explain.value
  }
  exampleList.value.push(obj)
}

onMounted(() => {})
const answer = ref()
const content = ref()

function primary() {
  if (editorType.value == '1') {
    if (title.value == '') {
      alert('请输入标题')
      return
    }
    const data = new FormData()
    data.append('titleName', title.value)
    data.append('status', status.value)
    data.append('score', score.value)
    data.append('timeLimit', timeLimit.value)
    data.append('memoryLimit', memoryLimit.value)
    data.append('example', JSON.stringify(exampleList.value))
    data.append('tip', tip.value)
    data.append('content', content.value)
    data.append('answer', answer.value)

    if (router.currentRoute.value.query.id) {
      const id = router.currentRoute.value.query.id
      data.append('id', id)
      // 更新
      request.post('/question/update', data).then((res) => {
        ElMessage.success('更新成功！！！')
      })
    } else {
      request.post('/question/add', data).then((res) => {
        console.log(res)
        ElMessage.success('发布成功！！！')
      })
    }
  }
}
function cancel() {
  router.push({ path: '/manage' })
}
</script>

<style scoped>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.editor {
  width: 100%;
}
</style>

<style>
.example-item {
  background-color: rgb(154, 227, 202);
  min-width: 200px;
  border-radius: 15px;
  padding: 20px;
  margin: 10px;
}
.editorType {
  margin: 20px;
}
.ql-editor {
  height: 300px;
}
.manage-editor {
  background-color: aliceblue;
  margin: auto;
  width: 70%;
  border-radius: 15px;
  padding: 50px;
}
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
