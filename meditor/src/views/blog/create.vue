<template>
  <div class="container">
    <div class="field-container">
      <label for="blog-title">标题</label>
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
        text: ''
      }
    }
  },
  components: {
    MEditor
  },
  methods:{
    async createBlog() {
      const result = await axios.post('blog', this.blog)
      console.log(result)
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
