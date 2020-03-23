<template>
  <div class="x-editor">
            <div class="menu">
                <button @click="firstLineIndent">首行缩进</button>
                <button @click="simpleCommand('indent')">段落缩进</button>
                <button @click="simpleCommand('bold')">加粗</button>
                <input type="text" placeholder="文本字体" @input="changeFontSize" :value="editWindowStyle.fontSize">
            </div>
            <div ref="editorWindowContainer">
                <div ref="editorWindow" @input="changeText" class="editor" contenteditable="true">
                </div>
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
  props: {
      textOwner: Object,
  },
   mounted() {
        this.editWindowStyle = this.$refs.editorWindow.style
    },
    methods: {
        changeText() {
            this.textOwner.text = this.$refs.editorWindowContainer.innerHTML
            console.log(this.textOwner)
        },
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
        border: 1px solid blue;
        border-radius: 4px;
        height: 600px;
        font-size: 12px;
    }
</style>
