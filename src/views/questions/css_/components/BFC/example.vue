<template>
  <div class="example-container">
    <div class="parent1">
      <div class="child1">
        未使用BFC，发生越界<br>
        margin-top: 5px
      </div>
      margin-top: 5px
    </div>
    <div class="parent2">
      <div class="child21">
        未使用BFC，发生塌陷<br>
        float: right
      </div>
      <div class="child22">
        参考
      </div>
    </div>
    <div class="parent3">
      <div class="child3" style="float:right;height:200px">float:right</div>
      <div class="child3" style="margin:5px">margin:5px</div>
      使用BFC，未发生塌陷和margin越界
      <div class="child3">参考</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  .example-container{
    padding: 5px;
    .parent1{
      height: 100px;
      width: 300px;
      background: red;
      margin-top: 5px;
      .child1{
        height: 70px;
        width: 150px;
        margin-top: 5px;
        background: greenyellow;
      }
    }
    .parent2{
      background: red;
      padding: 5px;
      margin-top: 10px;
      width: 300px;
      .child21{
        height: 70px;
        width: 150px;
        background: greenyellow;
        float: right;
      }
      .child22{
        height: 50px;
        width: 50px;
        background: greenyellow;
        margin:2px
      }
    }
    .parent3{
      background: red;
      width: 300px;
      display: inline-block;
      margin-top: 5px;
      .child3{
        width: 70px;
        height: 70px;
        background: greenyellow;
      }
    }
  }
</style>
