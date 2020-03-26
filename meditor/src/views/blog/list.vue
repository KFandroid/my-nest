<template>
  <div class="container">
      <ul>
          <li @click="blogDetail(blog.id)"  v-for="blog in blogList" :key="blog.id">
              {{blog.title}}
          </li>
      </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: '',
  data() {
    return {
        blogList: []
    }
  },
  async mounted() {
      const res = await axios.get('blog')
      this.blogList = res.data
      console.log(this.blogList)
  },
  components: {

  },
  methods: {
      blogDetail(id) {
          this.$router.push({ path: `/blog/${id}`})
      }
  }
}
</script>

<style scoped lang="less">
    li:hover {
        color: blue;
        cursor: pointer;
        text-decoration: underline;
    }
</style>
