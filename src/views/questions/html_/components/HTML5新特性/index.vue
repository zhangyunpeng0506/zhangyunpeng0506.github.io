<template>
  <div>
    <div class="wrap">
      <div class="a">a</div>
      <div class="b">b</div>
      <div class="c">c</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      use: '<!DOCTYPE html>声明必须位于HTML5文档中的第一行',
      overview1: [ // 新特性
        '用于绘画的canvas',
        '用于媒介回放的video和audio',
        '对于本地离线存储的更好支持',
        '新的特殊内容元素，比如article、footer、header、nav、section',
        '新的表单控件，比如calendar、date、time、email、url、search'
      ],
      overview2: [ // h5的改进
        '新元素',
        '新属性',
        '完全支持css3',
        'video和audio',
        '2d和3d绘图',
        '本地存储',
        '本地sql数据',
        'web应用'
      ],
      elements: [
        { name: '<canvars>', des: '定义图形，标签只是图形容器，必须是用脚本来绘制图形' },

        { name: '<audio>', des: '定义音频内容', tip: [
          '可以在<audio></audio>之间放置文本内容，这样老的浏览器就可以显示不支持该标签的信息'
        ] },
        { name: '<video>', des: '定义视频' },
        { name: '<source>', des: '定义多媒体资源<video>和<audio>' },
        { name: '<embed>', des: '定义嵌入内容，比如插件' },
        { name: '<track>', des: '为诸如<video>和<audio>元素之类的媒介规定外部文本轨道' },

        { name: '<datalist>', des: '定义选项列表' },
        // { name: '<keygen>', des: '规定表单的秘钥对生成器字段' }, //新的web标准中已废弃
        { name: '<output>', des: '定义不同输出类型' },

        { name: '<article>', des: '定义页面独立的内容区域' },
        { name: '<aside>', des: '定义页面的侧边栏内容' },
        { name: '<bdi>', des: '允许设置一段文本，使其脱离其父元素的文本方向设置' },
        { name: '<command>', des: '定义命令按钮，比如单选按钮、复选框或按钮' },
        { name: '<details>', des: '用于描述文档或文档某个部分的细节' },
        { name: '<dialog>', des: '定义对话框，比如提示框' },
        { name: '<summary>', des: '标签包含details元素的标题' },
        { name: '<figure>', des: '规定独立的流内容（图像、图表、照片、代码等）' },
        { name: '<figcaption>', des: '定义<figure>元素的标题' },
        { name: '<footer>', des: '定义section或document的页脚' },
        { name: '<header>', des: '定义文档的头部区域' },
        { name: '<mark>', des: '定义带有记号的文本' },
        { name: '<meter>', des: '定义度量衡。仅用于已知最大和最小值的度量' },
        { name: '<nav>', des: '定义导航链接的部分' },
        { name: '<progress>', des: '定义任何类型的任务进度' },
        { name: '<ruby>', des: '定义ruby注释（中文注音或字符）' },
        { name: '<rt>', des: '定义字符（中文注音或字符）的解释或发音' },
        { name: '<rp>', des: '在ruby注释中使用，定义不支持ruby元素的浏览器所显示的内容' },
        { name: '<section>', des: '定义文档中的节（区段）' },
        { name: '<time>', des: '定义日期或时间' },
        { name: '<wbr>', des: '规定在文本中的何处适合添加换行符' }
      ]
    }
  }
}
</script>

<style>
  .a, .b, .c {
    box-sizing: border-box;
    border: 1px solid;
  }
  .wrap {
    width: 250px;
  }
  .a {
    width: 100px;
    height: 100px;
    float: left;
    background: red;
  }
  .b {
    width: 100px;
    height: 50px;
    float: left;
    background: green
  }
  .c {
    width: 100px;
    height: 100px;
    display: inline-block;
    background: blue;
  }
</style>
