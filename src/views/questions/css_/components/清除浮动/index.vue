<template>
  <div class="clear-container">
    <p>
      <b>概念：</b>{{ define }}
    </p>
    <p>
      <b>清除浮动（闭合浮动）常用方法：</b><br>
      <ul>
        <template v-for="(item, index) in methodsList">
          <ol :key="'method_'+index">{{ index+1 }}、{{ item }}</ol>
        </template>
      </ul>
    </p>
    <p>
      <b>clear: </b><span>该属性的指定段落的左侧或右侧不允许浮动的元素。这个属性是用来控制float属性在文档流的物理位置的</span><br>
      <span>
        当属性设置float（浮动）时，其所在的物理位置已经脱离了文档流了，但是大多数时候我们希望文档流能识别float（浮动），
        或者希望float（浮动）后面的元素不被float（浮动影响），这个时候就需要clear: both;来清除
      </span>
    </p>
    <example/>
  </div>
</template>

<script>
import example from './example'
export default {
  components: {
    example
  },
  data() {
    return {
      define: '浮动即元素设置了float，父元素未设置高度或宽度，而引起父元素的塌陷',
      methodsList: [
        '额外标签法（在浮动元素后，可以不是紧跟着加一个标签，给其设置clear:both）',
        '设置父元素属性，使其形成一个BFC（overflow设置除visible以外的属性，display:inline-block,inline-flex,flex,table-cell,table-caption）',
        '伪元素（设置父元素的伪元素样式），原理与额外标签类似'
      ]
    }
  }
}
</script>

<style>

</style>
