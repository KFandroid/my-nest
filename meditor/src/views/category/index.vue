<template>
  <div class="container">
      <div class="field-container">
      <label for="category-name">类别名称</label>
      <input v-model="category.name" type="text" name="name" id="category-name"/>
      </div>
      <button @click="createCategory">创建类别</button>
      <div v-for="item in categories" :key="item.id">
        {{item.name}}
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: '',
  data() {
    return {
      category: {
        name: ''
      },
      categories: []
    }
  },
  components: {

  },
  mounted() {
    this.getAllCategories()
  },
  methods: {
     async createCategory() {
       const result = await axios.post('category', this.category)
       if(result.status === 201) {
         alert('创建类别成功！')
         this.getAllCategories()
       } else {
         alert('创建类别失败！')
       }
      },
      async getAllCategories() {
        const result = await axios.get('category')
        this.categories = result.data
      }
  }
}
</script>

<style scoped lang="less">

</style>
