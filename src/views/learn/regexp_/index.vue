<template>
  <div class="regexp-container custom-scrollbar">
    <el-collapse v-model="activeName">
      <el-collapse-item name="1">
        <template slot="title">
          <div :class="{divider:activeName.includes('1')}" class="title">模式</div>
        </template>
        <div class="content">
          <template v-for="(value,key) in patterns">
            <div :key="key">
              <span class="key">{{ key }}：</span>
              <span>{{ value }}</span>
            </div>
          </template>
        </div>
      </el-collapse-item>
      <el-collapse-item name="2">
        <template slot="title">
          <div :class="{divider:activeName.includes('2')}" class="title">修饰符</div>
        </template>
        <div class="content">
          <template v-for="(value,key) in modifiers">
            <div :key="key">
              <span class="key">{{ key }}：</span>
              <span>{{ value }}</span>
            </div>
          </template>
        </div>
      </el-collapse-item>
      <el-collapse-item name="3">
        <template slot="title">
          <div :class="{divider:activeName.includes('3')}" class="title">方法</div>
        </template>
        <div class="content">
          <template v-for="(value,key) in methods">
            <div :key="key">
              <span class="key">{{ key }}：</span>
              <span>{{ value }}</span>
            </div>
          </template>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: ['1'],

      patterns: {
        '^': '匹配输入字符串的开始位置',
        '$': '匹配输入字符串的结束位置',
        '+': '匹配1次或多次',
        '*': '匹配0次或多次',
        '?': '匹配0次或1次',
        '{n}': '匹配n次',
        '{n,}': '至少匹配n次',
        '{n,m}': '至少匹配n次，至多匹配m次',
        'x|y': '匹配x或y次',
        '.': '匹配任意字符',
        '\\w': '匹配数字、字母、下划线，等价于[a-zA-Z0-9_]',
        '\\W': '匹配非单词字符',
        '\\d': '匹配数字',
        '\\D': '匹配非数字',
        '\\s': '匹配空白符',
        '\\S': '匹配非空白符',
        '\\b': '匹配单词边界',
        '\\B': '匹配非单词边界',
        '\\0': '匹配NULL字符',
        '\\f': '匹配换页符',
        '\\n': '匹配换行符',
        '\\r': '匹配回车符',
        '\\t': '匹配制表符',
        '\\v': '匹配垂直制表符'
      },
      modifiers: {
        'i': '不区分大小写',
        'g': '全局匹配',
        'm': '多行匹配'
      },
      methods: {
        'exec()': `RegExpObject.exec(string)，检索字符串中的正则表达式的匹配，有匹配返回该匹配(数组)，否则返回null；
                  与match方法类似，这个方法只会执行一次，加上修饰符 g 也只会执行一次，当再次调用的时候会从上次查询到的位置继续往后查。`,
        'test()': 'RegExpObject.test(string)，检测字符串是否匹配某个模式，匹配返回true，否则返回false',
        'toString()': '返回正则表达式的字符串值'
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .regexp-container{
    height: 100%;
    .title{
      font-size: 15px;
      padding-left: 5px;
      font-weight: 700;
      width: 100%;
    }
    .divider{
      border-bottom: 1px dashed #ddd;
    }
    .content{
      padding-left: 10px;
      padding-top: 10px;
      .key{
        font-weight: 700;
      }
    }
  }
</style>
