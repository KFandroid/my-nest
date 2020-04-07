<template>
  <div class="container">
      <ul>
          <li  v-for="blog in blogList" :key="blog.id">
              <span @click="blogDetail(blog.id)"  class="title">{{blog.title}}</span>
              <div class="btn-container">
                  <a @click="deleteBlog(blog)">删除</a>
                  <a @click="editBlog(blog)">编辑</a>
              </div>
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
      this.getBlogList()
  },
  components: {

  },
  methods: {
      async getBlogList() {
        const res = await axios.get('blog')
        this.blogList = res.data
      },
      editBlog(blog) {
        this.$router.push({path: `/blog/edit/${blog.id}`})
      },
      deleteBlog(blog) {
          let result = window.confirm(`确认删除${blog.title}吗？`);
          if(result) {
            axios.delete(`blog/${blog.id}`)
            this.getBlogList()
          }
      },
      blogDetail(id) {
          this.$router.push({ path: `/blog/${id}`})
      }
  }
}
</script>

<style scoped lang="less">
    .title {
        width: 300px;
        display: inline-block;
        overflow: hidden;
    }
    .title:hover, .btn-container a:hover {
        color: blue;
        cursor: pointer;
        text-decoration: underline;
    }
    .btn-container {
        display: inline-block;
        margin-left: 200px;
    }
</style>
