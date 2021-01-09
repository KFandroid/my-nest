<template>
  <div class="container">
    <div class="field-container">
      <label for="blog-title">*标题</label>
      <input v-model="blog.title" type="text" name="title" id="blog-title"/>
    </div>
    <div class="field-container">
    </div>
    <m-editor :textOwner="blog"></m-editor>
    <button @click="createBlog">提交博客</button>
  </div>
</template>

<script>
import MEditor from '@/components/MEditor'
import axios from 'axios'
export default {
  name: '',
  data() {
    return {
      blog: {
        title: '',
        text: '',
      }
    }
  },
  components: {
    MEditor
  },
  methods:{
    async createBlog() {
      let spaceReg = /\s*/
      if(spaceReg.test(this.blog.title) === true) {
        alert('标题不能为空！')
        return
      }
      this.blog.text = this.blog.text.replace('contenteditable="true"', '')
      const result = await axios.post('blog', this.blog)
      if(result.status === 201) {
        alert('创建博客成功！')
      } else {
        alert('创建博客失败！')
      }
    }
  }
}
</script>

<style scoped lang="less">
.field-container {
  margin-bottom: 30px;
}
#blog-title {
  width: 60%;
}
</style>
