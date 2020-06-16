<template>
  <div>
    <left-menu>
      <ul>
        <li>HTML</li>
      </ul>
    </left-menu>
    <right-content></right-content>
  </div>
</template>

<script>

import leftMenu from '@/components/content/Menu'
import rightContent from '@/components/content/Content'

export default {
  components:{
    leftMenu,
    rightContent,
  }
}
</script>

<style>

</style>