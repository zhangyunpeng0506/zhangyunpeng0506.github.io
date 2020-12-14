<template>
  <div class="content-container">
    <question0 v-if="question===questions[0]"/>
    <question1 v-if="question===questions[1]"/>
    <question2 v-if="question===questions[2]"/>
    <question3 v-if="question===questions[3]"/>
    <question4 v-if="question===questions[4]"/>
    <question5 v-if="question===questions[5]"/>
    <question6 v-if="question===questions[6]"/>
    <question7 v-if="question===questions[7]"/>
    <question8 v-if="question===questions[8]"/>
  </div>
</template>

<script>
import {
  question0,
  question1,
  question2,
  question3,
  question4,
  question5,
  question6,
  question7,
  question8
} from './components'
export default {
  components: {
    question0,
    question1,
    question2,
    question3,
    question4,
    question5,
    question6,
    question7,
    question8
  },
  props: {
    question: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      questions: this.$store.state.questions.browser
    }
  }
}
</script>

<style>

</style>
