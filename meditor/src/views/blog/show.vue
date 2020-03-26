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
      this.blog = res.data
  }
}
</script>

<style scoped lang="less">

</style>
