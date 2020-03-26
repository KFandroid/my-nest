<template>
  <div class="container">
      <h1>{{blog.title}}</h1>
      <div class="content" v-html="blog.text"></div>
  </div>
</template>

<script>
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

  },
  async mounted() {
      const res = await axios.get(`/blog/${this.$route.params.blogId}`)
      
      console.log('res is', res)
      res.data.text.replace('contenteditable="true"', '')
      console.log(res.data.text)
      this.blog = res.data
      this.$nextTick(() => {
         const editorWind = document.getElementsByClassName("editor")[0]
         editorWind.contenteditable = false
         console.log(editorWind)
      })
      
  }
}
</script>

<style scoped lang="less">

</style>
