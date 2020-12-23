<template>
  <div class="arraytpl-container">
    <title-bar title="数组" @on-click="handlePointClick"/>
    <div class="content">
      <p>
        <b>ES5之前版本数组方法：</b><br>
        <ul>
          <li><i><strong>不改变原数组：</strong></i></li>
          <li><strong>toString()：</strong>把数组转化为字符串</li>
          <li><strong>valueOf()：</strong>返回数组对象的原始值，arr.valueOf()===arr //true</li>
          <li><strong>concat(arr, n, obj)：</strong>连接两个或多个数组，参数可以是数组、对象、字符串、数字</li>
          <li><strong>join()：</strong>将数组用指定分隔符分隔成字符串</li>
          <li><strong>slice(start,end)：</strong>从数组截取指定数组，可传负数。注：1.如果传的是负值，计算时可将负值+数组长度变为正值来计算；2.可理解为从start位置开始截取end-start长度的数组</li>
          <li><i><strong>改变原数组：</strong></i></li>
          <li><strong>push()：</strong>向数组末尾添加一个或多个元素，返回数组长度</li>
          <li><strong>pop()：</strong>删除数组最后一位元素，返回最后一位元素</li>
          <li><strong>unshift()：</strong>向数组开头添加一个或多个元素，返回长度</li>
          <li><strong>shifit()：</strong>删除数组第一位元素，返回第一位元素</li>
          <li><strong>sort()：</strong>对数组元素排序</li>
          <li><strong>reverse()：</strong>颠倒数组元素顺序</li>
          <li><strong>splice(index, count, value)：</strong>删除并向数组添加新元素。index:起始位置，count:删除位数，value:插入元素</li>
        </ul>
      </p>
      <p>
        <b>ES5新增数组方法：</b><br>
        <ul>
          <li><i><strong>索引方法：</strong></i></li>
          <li><strong>indexOf(val,start)：</strong>从start开始返回第一个符合的元素索引</li>
          <li><strong>lastIndexOf(val,start)：</strong>从start开始从后往前返回第一个符合的元素索引</li>
          <li><i><strong>迭代方法：</strong></i></li>
          <li><strong>forEach()：</strong>对数组进行循环</li>
          <li><strong>map()：</strong>对数组每一项进行映射</li>
          <li><strong>filter()：</strong>过滤数组</li>
          <li><strong>some()：</strong>检验数组中的元素是否满足指定条件</li>
          <li><strong>every()：</strong>检验数组中每一项是否满足指定条件</li>
          <li><i><strong>归并方法：</strong></i></li>
          <li><strong>reduce()：</strong></li>
          <li><strong>reduceRight()：</strong></li>
          <li><i><strong>数组方法：</strong></i></li>
          <li><strong>isArray()：</strong>判断是否是数组</li>
        </ul>
      </p>
      <p>
        <b>ES6数组方法：</b><br>
        <ul>
          <li><strong>Array.of()：</strong>将参数中的所有值作为元素形成数组</li>
          <li><strong>Array.from(arrayLike, fn)：</strong>将类数组对象或可迭代对象转化为数组</li>
          <code-tpl :content="code.code0"/>
          <li><strong>copyWithin(index, start, end)：</strong>从index位置开始将值替换为start到end位置的值，替换后整体长度不变</li>
          <li><strong>fill(value, start, end)：</strong>将start到end位置的值替换为value，替换后整体长度不变</li>
          <li><strong>find()：</strong>查找数组中第一个符合条件的元素</li>
          <li><strong>findIndex()：</strong>查找数组中第一个符合条件的元素索引</li>
          <li><strong>flat()：</strong>嵌套数组转一维数组</li>
          <li><strong>flatMap()：</strong>先对数组每个元素进行处理，再对数组执行flat()方法</li>
          <code-tpl :content="code.code1"/>
          <li><strong>includes()：</strong>数组中是否包含指定值</li>
          <li><strong>entries()：</strong>遍历键值对</li>
          <li><strong>keys()：</strong>遍历键名</li>
          <li><strong>values()：</strong>遍历键值</li>
        </ul>
      </p>
    </div>
  </div>
</template>

<script>
import titleBar from '../titleBar'
import codeTpl from '_c/codeTpl'
import * as code from './code'
export default {
  components: {
    titleBar,
    codeTpl
  },
  props: {
    path: {
      type: String | Number,
      default: ''
    }
  },
  data() {
    return {
      code: code
    }
  },
  methods: {
    handlePointClick() {
      this.$emit('on-click', this.path)
    }
  }
}
</script>

<style>

</style>
