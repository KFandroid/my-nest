<template>
  <div class="container">
      <div class="field-container">
      <label for="blog-title"></label>
      <input v-model="blog.title" type="text" name="title" id="blog-title"/>
      </div>
      <button @click="createCategory">创建类别</button>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {

    }
  },
  components: {

  },
  methods: {
      
  }
}
</script>

<style scoped lang="less">

</style>
