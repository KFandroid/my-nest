<template>
  <div class="x-editor">
            <div class="menu">
                <button @click="firstLineIndent">首行缩进</button>
                <button @click="simpleCommand('indent')">段落缩进</button>
                <button @click="simpleCommand('bold')">加粗</button>
                <input type="text" placeholder="文本字体" @input="changeFontSize" :value="editWindowStyle.fontSize">
            </div>
            <div ref="editorWindow"  class="editor" contenteditable="true">
                
            </div>
        </div>
</template>

<script>
function hasAbc(str) {
    const testRegExp = /[a-z]+/
    return testRegExp.test(str)
}
export default {
  name: '',
  data() {
    return {
            type: 'text',
            message: 'Hello World!',
            editWindowStyle: {}
        }
  },
   mounted() {
        this.editWindowStyle = this.$refs.editorWindow.style
    },
    methods: {
        changeFontSize(e) {
            const value = e.target.value
           if(!hasAbc(value)) {
            this.editWindowStyle.fontSize = value + 'px'
           } else {
            this.editWindowStyle.fontSize = value
           }
           this.editWindowStyle.textIndent = 2 * parseInt(this.editWindowStyle.fontSize)
        },
        firstLineIndent () {
            if(this.editWindowStyle.fontSize === '') {
                this.editWindowStyle.textIndent = '24px'
            } else {
                this.editWindowStyle.textInden = 2 * parseInt(this.$refs.editorWindow.style.fontSize) + 'px'
            }
        },
        simpleCommand(command) {
            document.execCommand(command)
        },
    },
  components: {

  }
}
</script>

<style scoped lang="less">
.x-editor .editor {
        height: 600px;
        font-size: 12px;
    }
</style>
