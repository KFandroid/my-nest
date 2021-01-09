<template>
  <div class="x-editor">
    <div class="menu">
      <button @click="firstLineIndent">首行缩进</button>
      <button @click="simpleCommand('indent')">段落缩进</button>
      <button @click="simpleCommand('bold')">加粗</button>
      <div class="row">
        <label for="fileToUpload">选择要插入的图片</label><br />
        <input
          type="file"
          name="fileToUpload"
          id="fileToUpload"
          @change="fileSelected"
        />
      </div>
      <div id="fileName"></div>
      <div id="fileSize"></div>
      <div id="fileType"></div>
      <div class="row">
        <input
          type="button"
          @click="uploadFile"
          :disabled="showLoadingFile"
          value="确认插入此图片"
        />
      </div>
      <div id="progressNumber"></div>
      <input
        type="text"
        placeholder="文本字体"
        @input="changeFontSize"
        :value="editWindowStyle.fontSize"
      />
    </div>
    <div ref="editorWindowContainer">
      <div
        ref="editorWindow"
        @dblclick="dealDbClick"
        @input="changeText"
        class="editor"
        contenteditable="true"
      ></div>
    </div>
    <!-- <ui-loading rows="5" v-show="showLoadingFile">正在加载中<ui-dot></ui-dot></ui-loading> -->
  </div>
</template>

<script>
import axios from 'axios';
import * as crypto from 'crypto';
function hasAbc(str) {
  const testRegExp = /[a-z]+/;
  return testRegExp.test(str);
}

export default {
  name: '',
  data() {
    return {
      md5: '',
      showLoadingFile: false,
      type: 'text',
      message: 'Hello World!',
      editWindowStyle: {},
    };
  },
  props: {
    textOwner: Object,
  },
  mounted() {
    this.editWindowStyle = this.$refs.editorWindow.style;
  },
  methods: {
    encodeImageFileAsURL(file) {
      var reader = new FileReader();
      reader.onloadend = () => {
        const md5 = crypto
          .createHash('md5')
          .update(reader.result)
          .digest('hex');
        console.log(md5);
        this.md5 = md5;
        this.showLoadingFile = false;
      };

      reader.readAsDataURL(file);
    },
    fileSelected() {
      var file = document.getElementById('fileToUpload').files[0];
      this.showLoadingFile = true;
      this.encodeImageFileAsURL(file);
      console.log(file);
      if (file) {
        var fileSize = 0;
        if (file.size > 1024 * 1024)
          fileSize =
            (Math.round((file.size * 100) / (1024 * 1024)) / 100).toString() +
            'MB';
        else
          fileSize =
            (Math.round((file.size * 100) / 1024) / 100).toString() + 'KB';
        document.getElementById('fileName').innerHTML = 'Name: ' + file.name;
        document.getElementById('fileSize').innerHTML = 'Size: ' + fileSize;
        document.getElementById('fileType').innerHTML = 'Type: ' + file.type;
      }
    },
    async uploadFile() {
      var fd = new FormData();
      let file = document.getElementById('fileToUpload').files[0];
      file.id = this.md5;
      let res = await axios.get(`upload/${file.id}`);
      let nameArr = file.name.split('.');
      let name =
        nameArr.slice(0, nameArr.length - 1).join('.') +
        this.md5 +
        '.' +
        nameArr[nameArr.length - 1];

      file.originalname = name;
      //   file.name = name
      console.log('file is', file);
      fd.append('image', file);
      fd.append('md5', this.md5);
      if (res.data === '') {
        axios
          .post(`upload/file`, {
            id: this.md5,
            name: name,
          })
          .then((res2) => {
            console.log(res2);
          });
        axios({
          method: 'post',
          url: `upload`,
          data: fd,
          headers: { 'Content-Type': 'multipart/form-data' },
        }).then((response) => {
          const url = `http://localhost:3000/${response.data.filename}`;
          // const url = `http://120.55.90.86:3000/${response.data.filename}`
          this.insertImgCommand(url);
        });
      } else {
        const url = `http://localhost:3000/${res.data.name}`;
        this.insertImgCommand(url);
      }
    },
    changeText() {
      this.textOwner.text = this.$refs.editorWindow.innerHTML;
    },
    changeFontSize(e) {
      const value = e.target.value;
      if (!hasAbc(value)) {
        this.editWindowStyle.fontSize = value + 'px';
      } else {
        this.editWindowStyle.fontSize = value;
      }
      this.editWindowStyle.textIndent =
        2 * parseInt(this.editWindowStyle.fontSize);
    },
    firstLineIndent() {
      if (this.editWindowStyle.fontSize === '') {
        this.editWindowStyle.textIndent = '24px';
      } else {
        this.editWindowStyle.textInden =
          2 * parseInt(this.$refs.editorWindow.style.fontSize) + 'px';
      }
    },
    simpleCommand(command) {
      document.execCommand(command);
    },
    insertImgCommand(url) {
      this.$refs.editorWindow.innerHTML += `<img style="margin-left: 20%;" width="60%" src="${url}"/>`;
      this.textOwner.text = this.$refs.editorWindow.innerHTML;
      // document.execCommand('insertImage', false, url)
    },
    dealDbClick(e) {
      let target = e.target;
      let nodeName = target.nodeName;
      let clientWidth = document.body.clientWidth;
      let clientHeight = document.body.clientHeight;
      let imgWidth = target.naturalWidth;
      let imgHeight = target.naturalHeight;
      let top = (clientHeight - imgHeight) / 2;
      let left = (clientWidth - imgWidth) / 2;
      switch (nodeName) {
        case 'IMG':
          document.body.innerHTML += `
                    <img style="position:absolute;top:${top}px;left:${left}px;" src="${target.src}"/>
                    `;
          break;
      }
    },
  },
  components: {},
  watch: {
    textOwner: function (val) {
      this.$refs.editorWindow.innerHTML = val.text;
    },
  },
};
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
