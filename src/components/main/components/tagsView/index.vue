<template>
  <div class="tagsview-container">
    <template v-for="tag in $store.state.app.tagList">
      <router-link
        ref="tag"
        :key="tag.name"
        :to="{ path: tag.path, query: tag.query, fullPath: tag.fullPath }"
        :class="{active:isActive(tag)}"
        tag="span"
        class="tags-view-item">
        {{ tag.meta.title }}
        <span
          v-if="!tag.meta.affix"
          class="tag-close"
          @click.stop="handleCloseTag(tag)">
          <i class="el-icon-close"/>
        </span>
      </router-link>
    </template>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations([
      'CLOSE_TAG',
      'SET_ACTIVE_TAG'
    ]),
    isActive(tag) {
      return tag.path === this.$store.state.app.activeTag.path
    },
    handleCloseTag(tag) {
      this.CLOSE_TAG(tag)
      if (tag.path === this.$store.state.app.activeTag.path) {
        const len = this.$store.state.app.tagList.length
        this.$router.push(this.$store.state.app.tagList[len - 1])
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .tagsview-container{
    height: 34px;
    border: 1px solid #ddd;
    display: flex;
    align-items: center;
    .tags-view-item{
      cursor: pointer;
      font-size: 12px;
      height: 26px;
      display: flex;
      align-items: center;
      padding: 0 8px;
      margin: 0 3px;
      border: 1px solid #d8dce5;
      color: #495060;
      background: rgba(238, 238, 238, 0.4);
    }
    .active{
      background: #367fa9;
      color: #fff;
    }
  }
  .tag-close{
    margin-left: 8px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    &>i{
      font-size: 12px;
    }
  }
  .tag-close:hover{
    background: #b4bccc;
    color: #fff;
  }
</style>
