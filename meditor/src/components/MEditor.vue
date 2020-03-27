<template>
  <div class="x-editor">
            <div class="menu">
                <button @click="firstLineIndent">首行缩进</button>
                <button @click="simpleCommand('indent')">段落缩进</button>
                <button @click="simpleCommand('bold')">加粗</button>
                <div class="row">
        <label for="fileToUpload">选择要插入的图片</label><br>
        <input type="file" name="fileToUpload" id="fileToUpload" @change="fileSelected">
    </div>
    <div id="fileName"></div>
    <div id="fileSize"></div>
    <div id="fileType"></div>
    <div class="row">
        <input type="button" @click="uploadFile" value="确认插入此图片">
    </div>
    <div id="progressNumber"></div>
                <input type="text" placeholder="文本字体" @input="changeFontSize" :value="editWindowStyle.fontSize">
            </div>
            <div ref="editorWindowContainer">
                <div ref="editorWindow" @dblclick="dealDbClick" @input="changeText" class="editor" contenteditable="true">
                </div>
            </div>
            
        </div>
</template>

<script>
import axios from 'axios'
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
        fileSelected() {
            var file = document.getElementById('fileToUpload').files[0];
        if (file) {
        var fileSize = 0;
        if (file.size > 1024 * 1024)
            fileSize = (Math.round(file.size * 100 / (1024 * 1024)) / 100).toString() + 'MB';
        else
            fileSize = (Math.round(file.size * 100 / 1024) / 100).toString() + 'KB';
        document.getElementById('fileName').innerHTML = 'Name: ' + file.name;
        document.getElementById('fileSize').innerHTML = 'Size: ' + fileSize;
            document.getElementById('fileType').innerHTML = 'Type: ' + file.type;
            }
        },
        uploadFile() {
            var fd = new FormData();
    fd.append("image", document.getElementById('fileToUpload').files[0]);
    axios({
        method: 'post',
        url: 'blog/upload',
        data: fd,
        headers: {'Content-Type': 'multipart/form-data'}
    }).then((response) => {
        const url = `http://localhost:3000/${response.data.filename}`
        console.log(url)
        this.insertImgCommand(url) 
        console.log(response) 
        })

        },
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
        insertImgCommand(url) {
            this.$refs.editorWindow.innerHTML += `<img style="margin-left: 20%;" width="60%" src="${url}"/>`
            // document.execCommand('insertImage', false, url)
        },
        dealDbClick(e) {
            console.log('event is', e)
        }
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
        img {
            max-width: 60%;
        }
    }
</style>
