<template>
  <div>
    <template v-for="item in list">
      <p :key="item.type">
        <b>{{ item.type }}：</b>{{ item.desc }}
        <ul v-if="item.tips" style="margin-left:50px">
          <ol v-for="(v,i) in item.tips" :key="'tip_'+i">{{ i+1 }}、{{ v }}</ol>
        </ul>
      </p>
    </template>
    <sticky-example/>
  </div>
</template>

<script>
import stickyExample from './stickyExample'
export default {
  components: {
    stickyExample
  },
  data() {
    return {
      list: [
        { type: 'static', desc: '默认。始终处于页面流给予的位置（忽略所有top、bottom、left、right）' },
        { type: 'relative', desc: '相对定位。相对于原来的位置定位' },
        { type: 'absolute', desc: '绝对定位。相对于最近不为static的父元素定位' },
        { type: 'fixed', desc: '固定定位。相对于浏览器窗口固定定位' },
        {
          type: 'sticky',
          desc: '粘性定位。在偏移范围时，该元素的位置并不受到定位影响（top、left等无效）；当元素的位置要移出偏移范围时，根据设置的top、left等属性成固定位置的效果',
          tips: [
            // '不脱离文档流',
            '当元素在容器内被滚动小于指定的偏移值时，元素在容器内固定在指定位置',
            '元素的偏移是相对于离他它最近且具有滚动框的元素，如果祖先都不可滚动，那么相对于viewport（用户网页的可视区域）来计算元素的偏移'
          ]
        }
      ]
    }
  }
}
</script>

<style>

</style>
