<template>
  <div class="es6-container">
    <div class="list">
      <el-steps direction="vertical">
        <template v-for="(item,index) in list">
          <el-step :key="'step_'+index" :status="('point'+index)===curPoint?'process':'wait'">
            <div slot="title" class="list-item" @click="handleGoto('point'+index)">
              <a>{{ item }}</a>
            </div>
          </el-step>
        </template>
      </el-steps>
    </div>
    <div class="content custom-scrollbar" @scroll="onScroll">
      <variable-tpl ref="point0" path="point0" @on-click="handleGoto"/>
      <fn-tpl ref="point1" path="point1" @on-click="handleGoto"/>
      <deconstructTpl ref="point2" path="point2" @on-click="handleGoto"/>
      <array-tpl ref="point3" path="point3" @on-click="handleGoto"/>
      <data-structure-tpl ref="point4" path="point4" @on-click="handleGoto"/>
      <string-tpl ref="point5" path="point5" @on-click="handleGoto"/>
      <json-tpl ref="point6" path="point6" @on-click="handleGoto"/>
      <obj-tpl ref="point7" path="point7" @on-click="handleGoto"/>
      <promise-tpl ref="point8" path="point8" @on-click="handleGoto"/>
      <generator-tpl ref="point9" path="point9" @on-click="handleGoto"/>
      <await-tpl ref="point10" path="point10" @on-click="handleGoto"/>
      <module-tpl ref="point11" path="point11" @on-click="handleGoto"/>
    </div>
  </div>
</template>

<script>
import {
  variableTpl,
  fnTpl,
  deconstructTpl,
  arrayTpl,
  dataStructureTpl,
  stringTpl,
  jsonTpl,
  objTpl,
  promiseTpl,
  generatorTpl,
  awaitTpl,
  moduleTpl
} from './components/index'
export default {
  components: {
    variableTpl,
    fnTpl,
    deconstructTpl,
    arrayTpl,
    dataStructureTpl,
    stringTpl,
    jsonTpl,
    objTpl,
    promiseTpl,
    generatorTpl,
    awaitTpl,
    moduleTpl
  },
  data() {
    return {
      list: this.$store.state.learn.es6,
      pointTop: [],
      curPoint: 'point0'
    }
  },
  mounted() {
    this.list.forEach((item, i) => {
      this.pointTop.push(this.$refs['point' + i] ? this.$refs['point' + i].$el.offsetTop : 0)
    })
  },
  methods: {
    handleGoto(path) {
      this.curPoint = path
      if (document.querySelector('#' + path)) {
        document.querySelector('#' + path).scrollIntoView(true)
      }
    },
    onScroll() {
      const scrollTop = event.target.scrollTop + 103
      for (let i = 0; i < this.pointTop.length; i++) {
        if (i === this.pointTop.length - 1) {
          this.curPoint = 'point' + i
          break
        } else {
          if (scrollTop >= parseInt(this.pointTop[i]) && scrollTop < parseInt(this.pointTop[i + 1])) {
            this.curPoint = 'point' + i
            break
          }
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .es6-container{
    display: flex;
    flex-direction: row;
    height: 100%;
    /deep/a{
      cursor: pointer;
    }
    /deep/p{
      margin-bottom: 15px;
      font-size: 15px;
      font-family: 'Courier New', Courier, monospace;
    }
    /deep/b{
      color: #1c90f3;
    }
    .list{
      width: 10vw;
      height: 100%;
      border-right: 1px solid #ddd;
    }
    .content{
      height: 100%;
      padding-left: 10px;
      width: calc(~'100% - 10vw');
      overflow-y: auto;
    }
  }
</style>
