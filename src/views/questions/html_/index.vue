<template>
  <div class="html-container custom-scrollbar">
    <el-collapse v-model="activeName" accordion>
      <template v-for="(question, index) in questions">
        <el-collapse-item :key="'question_'+index" :name="index">
          <template slot="title">
            <div :class="{divider:activeName === index}" class="title">
              {{ question }}
            </div>
          </template>
          <div class="content">
            <content-main :question="question"/>
          </div>
        </el-collapse-item>
      </template>
    </el-collapse>
  </div>
</template>

<script>
import contentMain from './content'
export default {
  components: {
    contentMain
  },
  data() {
    return {
      questions: this.$store.state.questions.html,
      activeName: ''
    }
  }
}
</script>

<style lang="less" scoped>
  .html-container{
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
      .cmd{
        margin-right: 15px;
        font-weight: 700;
      }
    }
  }
</style>
