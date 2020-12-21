<template>
  <div>
    <p>
      <b>定义：</b><span>{{ description }}</span>
    </p>
    <p>
      <b>特性：</b>
      <ul>
        <template v-for="(item,index) in character">
          <ol :key="'character_'+index">{{ index+1 }}、{{ item }}</ol>
        </template>
      </ul>
    </p>
    <p>
      <b>创建BFC：</b>
      <ul>
        <template v-for="(item,index) in createMethods">
          <ol :key="'method_'+index">{{ index+1 }}、{{ item }}</ol>
        </template>
      </ul>
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
      description: '块级格式化上下文，是web页面中盒模型布局的css渲染模式，指一个独立的渲染区域或者说是一个独立容器',
      character: [
        '内部的box会在垂直方向上从顶部开始一个接一个放置',
        '属于同一BFC的box的margin相互叠加（谁的margin值大，就是谁的margin，一正一负则是两者相加的结果）',
        '不会出现margin越界的问题（即子元素margin跑到父元素外）',
        '容器里面的子元素不会影响到外面的元素',
        '计算高度时，浮动子元素也参与计算（解决设置子元素为浮动后，父元素高度发生塌陷的问题）',
        '区域不会与float box重叠'
      ],
      createMethods: [
        'body',
        'float设置除none以外的值',
        'position设置absolute / fixed',
        'display设置table-cell / table-caption / inline-block / flex / inline-flex',
        'overflow设置除visible以外的值'
      ]
    }
  }
}
</script>

<style>

</style>
