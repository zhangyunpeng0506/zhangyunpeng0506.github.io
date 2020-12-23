<template>
  <div/>
</template>

<script>
export default {
  data() {
    return {
      list: {
        'npm install lodash': [
          '软件包会被安装到当前文件树中的node_modules子文件夹下',
          '在package.json文件的dependencies属性添加lodash'
        ],
        'npm install lodash --save-dev': [
          '软件包会被安装到当前文件树中的node_modules子文件夹下',
          '在package.json文件的devDependencies属性添加lodash'
        ],
        'npm install lodash --save': [
          '软件包会被安装到当前文件树中的node_modules子文件夹下',
          '在package.json文件的devDependencies属性添加lodash'
        ]
      }
    }
  }
}
</script>

<style>

</style>
