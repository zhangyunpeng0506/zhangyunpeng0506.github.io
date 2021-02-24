<template>
  <div class="example-container">
    <div class="code-content">
      <div class="parent">
        <div class="child">
          额外标签法
        </div>
        <div style="width:40px;height:40px">参考</div>
        <div style="clear:both"/>
      </div>
      <code-tpl :content="code.code0"/>
    </div>

    <div class="code-content">
      <div class="parent" style="overflow:hidden">
        <div class="child">
          BFC
        </div>
      </div>
      <code-tpl :content="code.code1"/>
    </div>

    <div class="code-content">
      <div class="parent1">
        <div class="child1">
          伪元素
        </div>
        <div class="otherChild">
          参考
        </div>
      </div>
      <code-tpl :content="code.code2"/>
    </div>
  </div>
</template>

<script>
import codeTpl from '_c/codeTpl'
import * as code from './code'
export default {
  components: {
    codeTpl
  },
  data() {
    return {
      code: code
    }
  }
}
</script>

<style lang="less" scoped>
  .example-container{
    .code-content{
      margin-bottom: 20px;
    }
    .parent{
      background: red;
      margin-bottom: 5px;
      .child{
        float: left;
        width: 100px;
        height: 50px;
        background: greenyellow;
      }
    }
    .parent1{
      background: red;
      margin-bottom: 5px;
      .child1{
        float: right;
        width: 100px;
        height: 50px;
        background: greenyellow;
      }
      .otherChild{
        height: 40px;
        width: 40px;
        background: white;
      }
    }
    .parent1::after{
      content: '';
      display: table;
      clear: both;
    }
  }
</style>
