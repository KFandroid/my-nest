<template>
  <div class="container">
      <div role="header">
          <div role="menubar">
           <div role="slogan">技术只是手段，生活才是目的</div>
           <a>联系我</a>
          </div>
      </div>
      <div role="main">
          <blog-list/>
      </div>
  </div>
</template>

<script>
import BlogList from '../blog/list'
export default {
  name: '',
  data() {
    return {

    }
  },
  components: {
      BlogList
  }
}
</script>

<style scoped lang="less">
// variables
 @--bs-sm: 0 1px 2px rgba(0,0,0,0.05),0 1px 4px rgba(0,0,0,0.05),0 2px 8px rgba(0,0,0,0.05);

[role="header"] {
    width: 100%;
    height: 50px;
    line-height: 50px;
    position: fixed;
    box-shadow: @--bs-sm;
    display: flex;
    justify-content: center;
    [role="menubar"] {
        width: 100%;
        max-width: 1280px;
        margin: 0 20px;
        [role="slogan"] {
            
            float:left;
        }
        a {
            float: right;
        }
    }
}

[role="main"] {
    position: relative;
    top:60px;
}
</style>
