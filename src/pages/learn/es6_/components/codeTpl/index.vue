<template>
  <div
    :style="{'height':height+'px'}"
    class="codetpl-container">
    <codemirror
      ref="codemirror"
      v-model="code"
      :options="options"/>
  </div>
</template>

<script>
import { codemirror } from 'vue-codemirror'
import 'codemirror/theme/monokai.css'
import 'codemirror/keymap/sublime.js'
import 'codemirror/addon/hint/show-hint'
import 'codemirror/addon/hint/javascript-hint'
import 'codemirror/addon/hint/sql-hint'
import 'codemirror/addon/hint/html-hint'
import 'codemirror/addon/hint/xml-hint'
import 'codemirror/addon/hint/anyword-hint'
import 'codemirror/addon/hint/css-hint'

import 'codemirror/keymap/sublime.js'
import 'codemirror/keymap/emacs.js'
import 'codemirror/keymap/vim.js'

import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/vue/vue'
import 'codemirror/mode/css/css'

export default {
  components: {
    codemirror
  },
  props: {
    content: {
      type: String,
      default: ''
    },
    mode: {
      type: String,
      default: 'text/html'
    },
    readOnly: {
      type: Boolean,
      default: true
    },
    height: {
      type: String | Number,
      default: ''
    }
  },
  data() {
    return {
      code: this.content,
      options: {
        readOnly: this.readOnly,
        lineNumbers: true,
        indentUnit: 4,
        theme: 'monokai', // 主题
        keyMap: 'sublime', // 快捷键
        mode: this.mode,
        matchBrackets: true,
        smartIndent: false,
        foldGutter: true,
        flattenSpans: false,
        showIndent: true,
        gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
        varsIsReady: false
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .codetpl-container{
    /deep/.vue-codemirror{
      height: 100%;
      /deep/.CodeMirror{
        height: 100%;
        font-size: 16px;
        font-family: SourceCodeProRegular, Menlo, Monaco, consolas, monospace;
        /deep/.CodeMirror-cursors{
          display: none;
        }
        /deep/.CodeMirror-code{
          cursor: default;
        }
        /deep/.CodeMirror-vscrollbar,/deep/.CodeMirror-hscrollbar{
          &::-webkit-scrollbar {
            width: 5px;
            height: 5px;
          }
          &::-webkit-scrollbar-thumb{
            border-radius: 10px;
            -webkit-box-shadow: inset 0 0 5px rgba(228,231,237,0.5);;
            background: rgba(255, 255, 255, 0.2);
          }
          &::-webkit-scrollbar-track{
            -webkit-box-shadow: inset 0 0 5px rgba(228,231,237,0.5);
            border-radius: 10px;
            background: rgba(255, 255, 255,0);
          }
        }
      }
    }
  }
</style>
