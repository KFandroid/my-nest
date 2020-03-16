function hasAbc(str) {
    const testRegExp = /[a-z]+/
    return testRegExp.test(str)
}


const app = new Vue({
    el: '#app',
    data() {
        return {
            type: 'text',
            message: 'Hello World!',
            editWindowStyle: {}
        }
    },
    mounted() {
        this.onEventListener()
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
        afterEnter (){
        },
        onEventListener() {
        }
    },
})