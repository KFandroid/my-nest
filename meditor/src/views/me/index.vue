<template>
  <div class="container">
      <div role="header">
          <div role="menubar">
           <div role="slogan">技术只是手段，生活才是目的</div>
          </div>
      </div>
      <div role="main">
          <blog-list style="    max-width: 740px;"/>
          <aside>
              <div class="right-side-bar">
                  <div class="title">关于我</div>
                  <img class="personal-photo" src="../../assets/superMan.jpg" alt="superman"/>
                  <span class="personal-introduce">一个爱生活的猛男</span>
              </div>
              <div class="right-side-bar">
                  <div class="title">最新更新</div>
                  <img src=""/>
              </div>
              <div class="right-side-bar">
                  <div class="title">最新想法</div>
                  <img src=""/>
              </div>
          </aside>
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
@import "../../styles/common.less";
// variables


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
            .md-font();
            float:left;
        }
        a {
            font-weight: @md-font-size;
            float: right;
        }
    }
}

[role="main"] {
    width: 100%;
    max-width: 1280px;
    margin:0 auto;
    position: relative;
    top:51px;
    display: flex;
    justify-content: space-between;
    aside {
        // background: @light-green;
        width: 100%;
        max-width: 480px;
        border-left: 1px solid @border-color;
        position: absolute;
        right: 0;
        height: 80vh;
    }
}
.right-side-bar {
    margin-left: 20px;
    margin-top: 20px;
    .title {
        font-style:italic;
        border-bottom: 1px solid @border-color;
        font-size: 18px;
        font-weight: 600;
        color: @light-green;
    }
}
.personal-photo {
    margin-top: 10px;
    max-width: 250px;
}
.personal-introduce {
    width: 30px;
    display: inline-block;
    margin-left: 20px;
    .md-font();
    font-style: italic;
    // height: 400px;
}
</style>
